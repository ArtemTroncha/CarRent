<template>
    <div class="row justify-content-md-center">
        <div  class="col-3 mt-4">
            <h2>{{name}} {{surname}}</h2>
            <h4 class="text-muted">{{email}}</h4>
            <hr/>
        </div>
    </div>
    <div class="row justify-content-md-center" >
        <div class="col-8">
            <h2>Cars added by you:</h2>
        </div>
    </div>
    <div v-for="model in posts" :key="model._id">
        <PostModel v-bind:post="model"/>
    </div>
        
    
</template>
<script>
import UserService from '../UserService'
import PostService from '../PostService'
import PostModel from './PostModel'

export default{
    name:'profilePage',
    components:{
        PostModel
    },
    data(){
        return {
            name:'',
            surname:'',
            email:'',
            posts:[]
        }
    },
    async created(){
      const dec =UserService.decode(localStorage.getItem('token'))
      await UserService.GetUser(dec.id)
      .then((res)=>
      {
         
         this.name =res.name
         this.surname=res.surname
         this.email=res.email
      }
      )
      await PostService.GetUserPost(dec.id).then((res)=>{
          this.posts=res
      })
   }
}
</script>
<style>
.link{
    text-decoration: none;
}
</style>