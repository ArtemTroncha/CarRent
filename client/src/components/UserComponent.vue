<template>
  <div class="container">
    <p class="error" v-if="error">{{error}}</p>
  <div class="post-conteiner">
  <div class="post"
  v-for='(post,index) in posts'
  v-bind:item = "post"
  v-bind:index="index"
  v-bind:key="post._id"
  ><p class="text">{{ post.text }}</p>
  </div>
  </div>
  </div>
</template>

<script>
import UserService from '../UserService'
export default {
  name: 'UserComponent',
  data () {
    return{
      posts:[],
      error:'',
      text:''
  }
},
  async created() {
    try{
    this.posts=await UserService.getpost();}
    catch(err){
      this.error=err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
