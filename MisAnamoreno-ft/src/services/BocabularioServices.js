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
    crearBoc (data) {
        return axiosInstance.post('/core/bocabulario/', data);
    },
    UpdateBoc (data) {
        const id = data.get('id'); // Extraer el ID del FormData
        if (!id) {
            throw new Error('El ID no está definido en los datos enviados.');
        }
        return axiosInstance.patch(`/core/bocabulario/${id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    deleteboc(data) {
        return axiosInstance.delete(`/core/bocabulario/${data.id}/`);
    }
    
};