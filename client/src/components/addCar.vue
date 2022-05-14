<template>
<form @submit.prevent="GetBrands">
 
  <div class="container mt-4"> 
    <div class="row ">
    <div class="col-sm-8 mx-auto">
  <div class="row">
    <div class="col mb-2">
    <label for="brand"  class="form-label">Brand</label>
      <select v-model="Brand" class="form-control" id="brand">
        <option v-for="brand in autocomplete.Brands" :key='brand'>
        {{ brand }}
      </option>
    </select>
    </div>
    <div class="col ">
      <label for="model" class="form-label">Model</label>
      <select v-model="Model" class="form-control" id="model">
        <option v-for="model in autocomplete.Models" :key='model'>
        {{ model.modelName }}
      </option>
    </select>
    </div>
  </div>
  <div class="row">
    <div class="col mb-2">
        <label for="version" class="form-label">Version</label>
      <input v-model="Version" id="version" type="text" class="form-control" placeholder="Version" aria-label="Version">
    </div>
    <div class="col ">
      <label for="year" class="form-label">Year</label>
      <input v-model="Year" id="year" type="number"  min="1900" max="2099" step="1" class="form-control" placeholder="Year" aria-label="Year">
    </div>
    <div class="col ">
    <label for="color" class="form-label">Color</label>
      <input v-model="Color" id="color" type="text" class="form-control" placeholder="Color" aria-label="Color">
    </div>
    <div class="col ">
      <label for="vin" class="form-label">VIN</label>
      <input v-model="VIN" id="vin" type="text" class="form-control" placeholder="VIN - number" aria-label="VIN - number">
    </div>
  </div>
  <div class="row">
  <div class="col mb-4">
    <label for="Condition" class="form-label">Condition</label>
    <input v-model="Condition" id="Condition" type="text" class="form-control" placeholder="Condition" aria-label="Condition">
  </div>
  <div class="col">
    <label for="Mileage" class="form-label">Mileage</label>
    <input v-model="Mileage" type="number" step="1000" class="form-control" placeholder="Mileage" aria-label="Mileage">
  </div>
  <div class="col">
    <label for="FuelCons" class="form-label">Fuel consumption</label>
    <input v-model="FuelCons" type="number" step="100" class="form-control" placeholder="Fuel consumption" aria-label="Fuel consumption">
  </div>
  </div>
  <div class="row">
  <div class="col">
        <label for="seats" class="form-label">Seats</label>
    <input v-model="seats" id="seats" type="number" max=8 class="form-control" placeholder="Count of Seats" aria-label="Count of Seats">
  </div>
  
  
    <div class="col mb-4">
          <label for="inputState"  class="form-label">Fuel type</label>
      <select v-model="FuelType" id="inputState" class="form-select">
          <option>Petrol</option>
          <option>Diesel</option>
          <option>LPG</option>
        </select>
    </div>
  </div>
  <div class="row">
    <div class="col mb-4">
        <label for="exampleFormControlTextarea6" class="form-label">Write some words about your car </label>
      <textarea  v-model="description" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write description..."></textarea>
    </div></div>
    <div class="col mb-5">
      
      <label class="form-label" for="customFile">Add Photo</label>
      <input type="file" class="form-control" id="customFile" />
    
  </div>
  
  <div class="row">
    <div class="col mb-5">
      <button @click="AddCar" type="button" class="btn  btn-dark">Add Car</button>
    </div>
  </div>
    </div>
    </div>
  </div>

  </form>
 </template>
 <script>
   import UserService from "../UserService"
   import PostService from "../PostService"
   export default{
     data(){
       return{
        Brand:"",
        Model:"",
        Version:"",
        Year:Number,
        Color:"",
        VIN:"",
        Condition:"",
        Mileage:Number,
        FuelCons:Number,
        seats:Number,
        FuelType:"",
        description:"",
        time:Date,
        autocomplete:{
          Brands:[],
          Models:[]
        }
       }
     },
     methods:{
       async AddCar(){
         const CreatorID=await UserService.decode(localStorage.getItem('token')).id
         const title = this.Brand+" "+this.Model+" "+this.Year
         await PostService.AddPost(CreatorID,title,this.description
         ,this.Brand,this.Model,this.Version,this.Year,this.Color
         ,this.VIN,this.Condition,this.Mileage,this.FuelType,this.FuelCons,this.seats)
         .then((res)=>{
           console.log(res);
           this.$router.push('/profile')
         })
       }},

      async created(){
         await PostService.GetBrands("makes")
         .then((res)=>{
           this.autocomplete.Brands=res;
         });
       },
       watch:{
        Brand(setBrand){
          if(setBrand!=""){
           PostService.GetModels(setBrand).then((res)=>{
           this.autocomplete.Models=res;
         });
        }}}
      }
 </script>