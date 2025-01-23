import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/db/firebase'
const routes = [
  {
    path: '/',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/PerfilView.vue'),
    meta: {requiredAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiredAuth)
  if (requiresAuth){
    const unsubscribe = auth.onAuthStateChanged( (user) => {
      if (user){
        next() // el usuario está autenticado, permite la navegación
      }else{
        next({name: 'login'}) // lleva al login
      }
      unsubscribe()
    })
  }else{
    next() // si la ruta no requiere autenticacion, permite la navegacion
  }
})
export default router
