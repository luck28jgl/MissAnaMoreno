import { axiosInstance } from '@/boot/axios';

export default {
    login (data) {
        return axiosInstance.post('/token/login/', data);
    },

    getDataUser () {
        return axiosInstance.get('/users/me/');
    },

    getUType (data) {
        return axiosInstance.post('/core/obtener-tipo-usuario/', data);
    },
    getUserSubType (data) {
        return axiosInstance.post('/core/obtener-subtipo-usuario/', data);
    },

    logut () {
        return axiosInstance.post('/token/logout/', sessionStorage.getItem('auth_token'));
    },
    verifyEmail (data) {
        return axiosInstance.post('/core/passwordCode/verificacion-usuario/', data)
    },
    verifyCode (data) {
        return axiosInstance.post('/core/passwordCode/verify-code/', data)
    },
    updatePasswor (data) {
        return axiosInstance.post('/core/passwordCode/update-pass/', data)
    },
    createAccount (data) {
        return axiosInstance.post('/core/usuarios/create-account/', data)
    },
    getCreds (data) {
        return axiosInstance.post('/core/usuarios/getCreditosEmpr/', data)
    },
    getPrice (data) {
        return axiosInstance.post('/core/usuarios/getCreditosPrice/', data)
    },
    getMetodosPago (data) {
        return axiosInstance.post('/core/usuarios/getMetodosPago/', data)
    }
};
