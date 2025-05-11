import axios from 'axios'
import cryptoJs from 'crypto-js';

const URL_API = process.env.NODE_ENV === 'production'
    ? 'https://missmoreno-bk.onrender.com'
    : 'http://127.0.0.1:8000';  // URL de tu backend en desarrollo

const ENCRYPT_CHANNEL = false;
const axiosInstance = axios.create({
    baseURL: URL_API + '/api/v1',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
    }
})

export default async ({ app, router }) => {
    window.CryptoJS = cryptoJs;
    const hash = window.CryptoJS.MD5('hsBI69O90juKhpPx').toString();

    axiosInstance.interceptors.request.use(function (request) {
        if (request && request.data && ENCRYPT_CHANNEL === true) {
            let dataApp = JSON.stringify(request.data);
            dataApp = window.CryptoJS.AES.encrypt(dataApp, hash).toString();

            request.data = {
                encrypt: dataApp
            };
        }
        if (request && request.params && ENCRYPT_CHANNEL === true) {
            let paramsApp = JSON.stringify(request.params);
            paramsApp = window.CryptoJS.AES.encrypt(paramsApp, hash).toString();

            request.params = {
                encryptParams: paramsApp
            };
        }
        return request;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(function (response) {
        if (response && response.data && ENCRYPT_CHANNEL === true) {
            if (!response.config &&
                !response.config.responseType &&
                response.config.responseType !== 'blob') {
                const bytes = window.CryptoJS.AES.decrypt(response.data.toString(), hash);
                response.data = JSON.parse(bytes.toString(window.CryptoJS.enc.Utf8));
            }
        }
        return response;
    }, function (error) {
        const originalRequest = error.config;

        if (error.response && error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            router.push('/').then(e => console.log(e));
        } else if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            delete axiosInstance.defaults.headers.common.Authorization;
            window.sessionStorage.removeItem('auth_token');
            axiosInstance.defaults.headers.common = {
                Authorization: ''
            };
            router.push('/ingresar').then(e => console.log(e));
        } else {
            return Promise.reject(error);
        }
    });

    if (window.sessionStorage.getItem('auth_token')) {
        axiosInstance.defaults.headers.common.Authorization =
            'Token ' + window.sessionStorage.getItem('auth_token');
    }

    app.config.globalProperties.$axios = axiosInstance
}

export { axiosInstance, URL_API }

