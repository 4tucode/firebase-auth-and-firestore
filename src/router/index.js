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
  // Busca de todas las rutas de mi aplicacion, la que requiere autenticacion
  const requiresAuth = to.matched.some((record) => record.meta.requiredAuth)

  // Controla el evento de si el estado del usuario cambia (autenticado/no autenticado)
  const unsubscribe = auth.onAuthStateChanged( (user) =>{
    if (requiresAuth && !user){
      next({name: 'login'})
    }else if (requiresAuth && user && !user.emailVerified){
      next(false) 
    }else{
      next()
    }
    unsubscribe()
  })
})
export default router
