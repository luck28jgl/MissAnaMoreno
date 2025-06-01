import { axiosInstance } from '@/boot/axios';

export default {
    getabecedario (data) {
        if (data) {
            return axiosInstance.get('/core/abcedario/', {
                params: data
            });
        }  else {
            return axiosInstance.get('/core/abcedario/');
        }
    },
    crearBoc (data) {
        return axiosInstance.post('/core/abcedario/', data);
    },
    UpdateBoc (data) {
        return axiosInstance.put(`/core/abcedario/${data.id}/`, data);
    },
    deletecatego(data) {
        return axiosInstance.delete(`/core/abcedario/${data.id}/`);
    }
};