import RouterView from '@/views/Index.vue';
import Index from '@/views/staff/Index.vue';

export default {
    path: '/staff',
    component: RouterView,
    children: [
        {
            path: '',
            component: Index,
            name: 'staffIndex'
        },
    ]
}
