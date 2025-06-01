import { axiosInstance } from '@/boot/axios';

export function getUserInfo ({dispatch, commit}) {
    return new Promise((resolve, reject) => {
        // Action to fix sesion user information if window browser is refreshed.
        if ( !window.sessionStorage.getItem('sartolux_token') ) {
            dispatch('logout');
            commit('deleteUser');
            reject();
        } else {
            dispatch('sessionInfo')
                .then(() => { resolve() })
                .catch(() => { reject() });
        }
    });
}

export function sessionInfo ({dispatch, commit}) {
    return new Promise( (resolve, reject) => {
        axiosInstance.get('/user/' + window.sessionStorage.getItem('sartolux_hash'))
            .then(response => {
                commit('setUser', response.data.user);
                resolve();
            }).catch(error => {
                dispatch('logout');
                commit('deleteUser');
                reject();
        });
    });
}

export function setSession ({ commit }, session) {
    sessionStorage.setItem('auth_token', session.auth_token);

    axiosInstance.defaults.headers.common = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Token ' + sessionStorage.getItem('auth_token')
    };

    // Commit para actualizar el estado del usuario
    commit('setUser', {
        username: session.username,
        type: session.type,
        id: session.id
    });
}

export function setAuth() {
    axiosInstance.defaults.headers.common = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: sessionStorage.getItem('auth_token')
    };
}

export function logout () {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('pk');

    axiosInstance.defaults.headers.common = {
        Authorization: ''
    };
}

export function setUserType({ commit }, userType) {
    commit('setUserType', userType);
}

export function  setUserId({ commit }, userId) {
    commit('setUserId', userId);
}