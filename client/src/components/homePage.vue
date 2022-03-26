<template>
   <p>hello</p> 
</template>
<script>
import UserService from '../UserService'
export default{
   name:'homePage',
   async created(){
      const dec =UserService.decode(localStorage.getItem('token'))
      console.log(dec.id)
       const user =UserService.GetUser(dec.id)
      console.log(user)
   }
}


</script>