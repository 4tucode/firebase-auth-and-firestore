<template>
  <section>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="Correo electrónico" v-model="email" required>
        <input type="password" placeholder="Contraseña" v-model="password" required>
        <button type="submit">Iniciar sesión</button>
        <p>No tienes cuenta <router-link to="/">Regístrate</router-link></p>
    </form>
  </section>
</template>

<script>
import { auth } from '@/db/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
export default {
    name: 'LoginView',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                this.$router.push('/perfil')
            } catch (error) {
                alert('Error al iniciar sesión')
            }
        }
    }
}
</script>

<style>

</style>