<template>
<div class="container mt-4"> 
   <div class="row justify-content-center">
      <div class="col-5">
       <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
     <button type="submit" class="btn btn-dark"></button>

</div>
      </div>
   </div>
</div>

   <showCar/>
</template>
<script>
import showCar from './showCar'
export default{
   name:'homePage',
   components:{
      showCar
   },
   data(){
      return{
         name:'',
         surname:'',
         email:''
      }
   },
   methods:{
   async created(){
      
     },
   addCar(){
      this.$router.push("/addCar")
   }
   }
}


</script>