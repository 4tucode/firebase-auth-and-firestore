<template>
  <section>
    <h1>Estas en el perfil {{ user.email }}</h1>
    <button @click="logout">Cerrar sesion</button>
  </section>
</template>

<script>
import { auth } from "@/db/firebase"
import { signOut } from 'firebase/auth'
export default {
    name:'PerfilView',
    data(){
        return{
            user: {
                user: null
            }
        }
    },
    methods:{
        async logout(){
            await signOut(auth)
            this.$router.push('/')
        }
    },
    mounted(){
        this.user = auth.currentUser
    }

}
</script>

<style>

</style>