import RouterView from '@/views/Index.vue';
import Index from '@/views/tareas-maestro/Index.vue';

export default {
    path: '/tareas-maestro',
    component: RouterView,
    children: [
        {
            path: '',
            component: Index,
            name: 'tareasMaestroIndex'
        },
    ]
}