import RouterView from '@/views/Index.vue';
import Index from '@/views/bocabulario/Index.vue';

export default {
    path: '/bocabulario',
    component: RouterView,
    children: [
        {
            path: '',
            component: Index,
            name: 'bocabularioIndex'
        },
    ]
}
