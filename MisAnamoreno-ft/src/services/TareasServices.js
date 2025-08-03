import { axiosInstance } from '@/boot/axios';

export default {
    // Get tasks (for students - assigned tasks)
    getTareasAsignadas (data) {
        if (data) {
            return axiosInstance.get('/core/tareas-asignadas/', {
                params: data
            });
        } else {
            return axiosInstance.get('/core/tareas-asignadas/');
        }
    },
    
    // Get all tasks (for teachers - task management)
    getTareas (data) {
        if (data) {
            return axiosInstance.get('/core/tareas/', {
                params: data
            });
        } else {
            return axiosInstance.get('/core/tareas/');
        }
    },
    
    // Create task (teachers only)
    crearTarea (data) {
        return axiosInstance.post('/core/tareas/', data);
    },
    
    // Update task (teachers only)
    updateTarea (data) {
        const id = data.get('id');
        if (!id) {
            throw new Error('El ID no está definido en los datos enviados.');
        }
        return axiosInstance.patch(`/core/tareas/${id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    
    // Delete task (teachers only)
    deleteTarea(data) {
        return axiosInstance.delete(`/core/tareas/${data.id}/`);
    },
    
    // Assign task to groups/grades (teachers only)
    asignarTarea(data) {
        return axiosInstance.post('/core/asignar-tarea/', data);
    },
    
    // Get available groups and grades
    getGruposGrados() {
        return axiosInstance.get('/core/grupos-grados/');
    },
    
    // Mark task as completed (students only)
    completarTarea(data) {
        return axiosInstance.patch(`/core/tareas-asignadas/${data.id}/`, {
            completada: true,
            fecha_completada: new Date().toISOString()
        });
    }
};