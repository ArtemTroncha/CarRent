<template>
<form>
 
  <div class="container mt-4"> 
    <div class="row ">
    <div class="col-sm-8 mx-auto">
  <div class="row">
    <div class="col mb-2">
       <label class="form-label" for="customFile">Brand</label>
      <input v-model="Brand" type="text" class="form-control" placeholder="Brand" aria-label="Brand">
    </div>
    <div class="col ">
       <label class="form-label" for="customFile">Model</label>
      <input v-model="Model" type="text" class="form-control" placeholder="Model" aria-label="Model">
    </div>
  </div>
  <div class="row">
    <div class="col mb-2">
       <label class="form-label" for="customFile">Version</label>
      <input v-model="Version" type="text" class="form-control" placeholder="Version" aria-label="Version">
    </div>
    <div class="col ">
       <label class="form-label" for="customFile">Year</label>
      <input v-model="Year" type="number"  min="1900" max="2099" step="1" class="form-control" placeholder="Year" aria-label="Year">
    </div>
    <div class="col ">
       <label class="form-label" for="customFile">Color</label>
      <input v-model="Color" type="text" class="form-control" placeholder="Color" aria-label="Color">
    </div>
    <div class="col ">
       <label class="form-label" for="customFile">VIN</label>
      <input v-model="VIN" type="text" class="form-control" placeholder="VIN - number" aria-label="VIN - number">
    </div>
  </div>
  <div class="row">
  <div class="col mb-4">
     <label class="form-label" for="customFile">Condition</label>
    <input v-model="Condition" type="text" class="form-control" placeholder="Condition" aria-label="Condition">
  </div>
  <div class="col">
     <label class="form-label" for="customFile">Mileage</label>
    <input v-model="Mileage" type="number" step="1000" class="form-control" placeholder="Mileage" aria-label="Mileage">
  </div>
  <div class="col">
     <label class="form-label" for="customFile">FuelCons</label>
    <input v-model="FuelCons" type="number" step="100" class="form-control" placeholder="Fuel consumption" aria-label="Fuel consumption">
  </div>
  <div class="col">
     <label class="form-label" for="customFile">Seats</label>
    <input v-model="seats" type="number" max=8 class="form-control" placeholder="Count of Seats" aria-label="Count of Seats">
  </div>
  </div>
  <div class="row">
    <div class="col mb-4">
       <label class="form-label" for="customFile">Fuel Type</label>
      <select v-model="FuelType" id="inputState" class="form-select">
          <option selected>Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>LPG</option>
        </select>
    </div>
    <div class="col mb-4">
       <label class="form-label" for="customFile">Time</label>
      <input v-model="time" type="date"   class="form-control" >
    </div>
  </div>
  <div class="row">
    <div class="col mb-4">
       <label class="form-label" for="customFile">Description</label>
      <textarea v-model="description" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write description..."></textarea>
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
        time:Date

       }
     },
     methods:{
       async AddCar(){
         const CreatorID=await UserService.decode(localStorage.getItem('token')).id
         const title = this.Brand+" "+this.Model+" "+this.Year
         await PostService.AddPost(CreatorID,title,this.description,
         this.time,this.Brand,this.Model,this.Version,this.Year,this.Color
         ,this.VIN,this.Condition,this.Mileage,this.FuelType,this.FuelCons,this.seats)
         .then((res)=>{
           console.log(res);
         })
       }
     }
   }
 </script>