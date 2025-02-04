<template>
  <router-view/>
</template>

<script>
import {auth} from "@/db/firebase"
export default{
  // para mantener al usuario autenticado en el perfil
  // para que no vaya a la ruta de login ni register
  mounted(){
    auth.onAuthStateChanged( (user) => {
      if(user){
        this.$router.push({name: "perfil"})
      }else{
        this.$router.push({name: "login"})
      }    
    })
  }
}
</script>