<template>
  <div class="container mt-4"> 
    <div class="row ">
    <div class="col-sm-5 mx-auto">
     <form  @submit.prevent="Login">
    
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="on">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" autocomplete="on">
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
       email:'',
       password:'',
      error:'',
  }
},
methods:{
  async Login(){
    await UserService.login(this.email,this.password).then((res)=>
    {
      localStorage.setItem('token',res.data.token)
      UserService.decode(res.data.token)
      this.$router.push('/')
    })
      
  }
}
}

</script>