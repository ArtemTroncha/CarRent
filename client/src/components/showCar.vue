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

import PostService from "../PostService";
import PostModel from "./PostModel.vue"
export default {
  name:'showCar',
  components:{PostModel},
  data(){
    return{
      posts:[]
      }
    },
  async created(){
   await PostService.GetPosts()
   .then((res)=>{
     console.log(res)
     this.posts=res
   })
   .catch((err)=>{
     console.log(err)})
   }
  
}



</script>
