import Login from '../pages/Login.vue';
// import Store from '@/store';
import MainLayout from '../layouts/MainLayout.vue';
import { axiosInstance } from '@/boot/axios';
import PrincipalPage from '../views/Index.vue';
import Bocabulario from './Bocabulario';
import Tareas from './Tareas';
import staff from './staff';
import abcedario from './abcedario';
import Store from '@/store'; 
// import administradores from './administradores';
// import categoassets from './categoassets';
// import Clientes from './Clientes.js';
// import assetsvue from './assetsvue';
// import typelight from './typelight';
// import light from './light';
// import proyectos from './proyectos.js';
// import usuarios from './Usuarios.js'
// import suscriptions from './Suscriptions.js';
// import PriceCredit from './PriceCredit.js';

const routes = [
    {
        path: '/ingresar',
        name: 'LoginPath',
        component: Login,
        meta: { title: 'Ingresar'},
        beforeEnter: (to, from, next) => {
            if (sessionStorage.getItem('auth_token')) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/',
        component: MainLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                meta: { title: 'Inicio'},
                component: PrincipalPage,
            },
            {...Bocabulario},
            {...Tareas},
            {...staff},
            {...abcedario},

        ],
        beforeEnter: (to, from, next) => {
            if (to.meta.requiresAuth && !sessionStorage.getItem('auth_token')) {
                next({
                    name: 'LoginPath'
                })
            } else {
                const tipoUsuario = Store.state.user.type;
                if (sessionStorage.getItem('auth_token')) {
                    axiosInstance.defaults.headers.common = {
                        Accept: 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        Authorization: 'Token ' + sessionStorage.getItem('auth_token')
                    };
                }
                // Determinar la redirección en un solo lugar
                if (to.path === '/') {
                    if (tipoUsuario === 2) {
                        next('/bocabulario');
                    } else {
                        next(); // Permitir la navegación
                    }
                } else {
                    next(); // Permitir la navegación para otras rutas
                }
            }
        }
    }
];

export default routes