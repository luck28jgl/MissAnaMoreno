import RouterView from '@/views/Index.vue';
import Index from '@/views/abcedario/Index.vue';

export default {
    path: '/abcedario',
    component: RouterView,
    children: [
        {
            path: '',
            component: Index,
            name: 'abcedarioIndex'
        },
    ]
}
