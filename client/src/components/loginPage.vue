<template>
  <div class="container mt-4"> 
    <div class="row  ">
    <div class="col-sm-5 mx-auto">
     <form  @submit.prevent="Login">
    
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address </label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="on">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" autocomplete="on">
    </div>
    <div class="mb-3">
    <button @click = "Login" type="submit" class="btn btn-dark">Log in</button>
    </div>
    <h5>Don't have an account yet? <router-link to="/registration">registration</router-link></h5>
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
    Login(){
      UserService.login(this.email,this.password).then((res)=>
    {
      localStorage.setItem('token',res.data.token) 
      this.$store.commit('Login')  
      this.$router.push('/home')
    })}
        
  }
}

</script>