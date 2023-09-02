import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/tokens',
        component: () => import('../modules/pages/GenerarToken.vue')
    },
    {
      path: '/estudiantes',
      component: () => import('../modules/pages/Inscripcion.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router