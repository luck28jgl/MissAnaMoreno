import { axiosInstance } from '@/boot/axios';

export default {
    getabecedario (data) {
        if (data) {
            return axiosInstance.get('/core/bocabulario/', {
                params: data
            });
        }  else {
            return axiosInstance.get('/core/bocabulario/');
        }
    },
    crearasset (data) {
        return axiosInstance.post('/core/asset/', data);
    },
    updateCatego (data) {
        return axiosInstance.put(`/core/asset/${data.id}/`, data);
    },
    deletecatego(data) {
        return axiosInstance.delete(`/core/asset/${data.id}/`);
    }
};