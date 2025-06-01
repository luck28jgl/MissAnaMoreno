import { axiosInstance } from '@/boot/axios';

export default {
    getusuarios (data) {
        if (data) {
            return axiosInstance.get('/core/usuarios/', {
                params: data
            });
        }  else {
            return axiosInstance.get('/core/usuarios/');
        }
    },
    crearBoc (data) {
        return axiosInstance.post('/core/usuarios/', data);
    },
    UpdateBoc (data) {
        const id = data.get('id'); // Extraer el ID del FormData
        if (!id) {
            throw new Error('El ID no está definido en los datos enviados.');
        }
        return axiosInstance.patch(`/core/usuarios/${id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    deleteboc(data) {
        return axiosInstance.delete(`/core/usuarios/${data.id}/`);
    }
    
};