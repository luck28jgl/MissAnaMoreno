import RouterView from '@/views/Index.vue';
import Index from '@/views/tareas/Index.vue';

export default {
    path: '/tareas',
    component: RouterView,
    children: [
        {
            path: '',
            component: Index,
            name: 'tareasIndex'
        },
    ]
}
