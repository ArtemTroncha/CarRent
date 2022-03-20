<template>
  <div class="container mt-4"> 
    <div class="row ">
    <div class="col-sm-5 mx-auto">
     <form>
    
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button @click = "Login" type="submit" class="btn btn-dark">Log in</button>
  </form>
</div>
</div>
</div>
</template>

<script>
import UserService from '../UserService'
export default {
  name: 'loginPage',
  data () {
    return{
      formreg:{
       email:'',
       password:''
      },
      error:''
  }
},
  async Login(){
    try{
      UserService.login(this.email,this.password)}
     catch(err){
       this.error=err.message
     }
  }
}

</script>