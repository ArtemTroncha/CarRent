<template>
    <navPage/>
    <router-view></router-view>
  
   
 
    
</template>

<script>
import navPage from './components/navPage.vue'
export default {
  name: 'app',
  components: {
    navPage,
    
  }
}
</script>

<style>

</style>
