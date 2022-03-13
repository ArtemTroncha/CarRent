<template>
<div class="conteiner mt-5 ">
  <div class="row justify-content-md-center">
    <div class="col-sm-4">
    <form>
    <div v-show="step===1" class="step">

          <div class="mb-3 ">
            <label for="inputName" class="form-label">Name</label>
            <input v-model='name' type="text" class="form-control" id="inputName" >  
          </div>
          <div class="mb-3 ">
            <label for="inputSurname" class="form-label">Surname</label>
            <input v-model='surname' type="text" class="form-control" id="inputSurname" >  
          </div>
          <div class="mb-3 ">
            <label for="inputEmail" class="form-label">Email</label>
            <input v-model='email' type="email" class="form-control" id="inputEmail" >  
          </div>
        <button @click="nextStep" type="button" class="btn btn-dark col-sm-6">Next Step</button>
      </div>
      <div v-show="step===2" class="step">

        <div class="mb-3 ">
          <label for="inputPasswd" class="form-label ">Password</label>
          <input v-model='password'  type="password" class="form-control" id="inputPasswd" >  
        </div> 
        <div class="mb-3 ">
          <label for="passwdConfirm" class="form-label">Password confirm</label>
          <input type="password" class="form-control" id="passwdConfirm" >  
        </div> 
      
      <button  @click="backStep" id="turnback" type="button" class="btn btn-light mr-2 ">Back</button> 
      <button @click="nextStep" type="button" class="btn btn-dark col-sm-6">Next Step</button>
    </div>
    <div v-show="step===3" class="step">
      <h1 class="text-center mt-5">Registered</h1>
    </div>
    </form>
 </div>
 </div>
</div>

</template>

<script>

export default {
  data(){
    return {
      step:1,
      formreg : {
        name:'',
        surname:'',
        email:'',
        password:''
      }
    }
  },
    methods: {
      nextStep(){
        if(this.step<3){
        this.step++}
      },
      backStep(){
        if(this.step>1){
        this.step--}
      }
    }

  }
</script>
<style>
  #turnback{
    margin-right: 15px;
  }
</style>