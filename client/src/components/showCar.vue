<template>
  
  <div class="container">
   <form >
      <div v-for="model in posts" :key="model._id">
        <PostModel v-bind:post="model"/>
      </div>
      
   </form >
  </div>
</template>
<script>
import PostModel from "./PostModel.vue"
export default {
  name:'showCar',
  components:{PostModel},
  props:{
      posts:[]
  },
  async created(){
   
   }
  
}



</script>
