<template>
<div class="container">
  <div class="row">
    <div class="col col_info">
      <img style="width:615px"  class="infoimg" src="https://ireland.apollo.olxcdn.com/v1/files/7j8tc4yuz68u-PL/image;s=1000x700">
    </div>
    <div class="col col_info" style="background-color: #fff; border-radius: 3%">
      <div class="row">
        <h1 class="car_name">{{post.brand}} {{post.model}}</h1>
      </div>
      <br>
      <br>
      <h3>Description</h3>
      <div class="row">
        <div class="col-6  col_info">
          <p class="mt-3">{{post.discription}}</p>
        </div>
      </div>

      <!-- <div class="row buttt">
        <div class="col">
          <a class="btn_1" @click="change">Edit</a>
          </div>
          <div class="col">
          <a class="btn_2" data-bs-toggle="modal" data-bs-target="#ModalLong">Set Time</a>
            </div>
      </div> -->
    </div>
  </div>
</div>
  <!-- <div class="container">
    
   <div class="row">
  <div class="col-6">
    <img  class=" mt-3 img-fluid" src="https://car-rent-storage.s3.amazonaws.com/1649895561413">
  
    <button class="btn btn-secondary" style="margin-left:30px" v-if='isOwner' @click="change"> Change 
      <svg xmlns="http://www.w3.org/2000/svg" style="margin-left:4px" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
  <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z"/>
  <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
</svg>
    </button>

       <button v-if='isOwner' type="submit" id='button' style="margin-left:8px" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ModalLong">set
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
</svg>
        </button>  

        
    </div>
  
  <div class="col-2 mt-4"  v-if="post.availability.length!=0">
    <div style="margin-left:30px;">from</div> 
    <ul v-for="date in post.availability" :key="date.start_date">
      <div v-if= "date.start_date != undefined">
    {{date.start_date.substring(0,10)}} 
    {{date.start_date.substring(11,16)}}
      </div>
    </ul>
    
  </div>
  <div class="col-2 mt-4" v-if="post.availability.length!=0">
    <div style="margin-left:30px;">to</div> 
    <ul v-for="date in post.availability" :key="date.end_date">
      <div v-if= "date.start_date != undefined">
    {{date.end_date.substring(0,10)}} 
    {{date.end_date.substring(11,16)}}
      </div>
    </ul>
    
  </div>
  <div class="col-4" v-else>
    <h3 style="margin-top:10px">No time to rent</h3>
  </div>
  
  </div>
  </div> -->

<div class="container">
<div class="row desk">
<!-- <div class="col-12 col-mb-3">
  <h2>Details:</h2> 
</div> -->
<div class="col opss col_info">
  <ul class="spis_opis">
    <li class="opis">Brand:{{post.brand}}</li>
    <li class="opis">Model:{{post.model}}</li>
    <li class="opis">Version:{{post.version}}</li>
    <li class="opis">Year:{{post.year}}</li>
    <li class="opis">Color:{{post.color}}</li>
    <li class="opis">Condition:{{post.condition}}</li>
    <li class="opis">Mileage:{{post.mileage}}</li>
    <li class="opis">Fiel type:{{post.fuel_type}}</li>
    <li class="opis">Consumption:{{post.fuel_consumption}}</li>
    <li class="opis">Seats:{{post.seat_count}}</li>
    <li class="opis">VIN:{{post.VIN}}</li>
  </ul>
  <br>
 
</div>
<div class="col col_info">
  
  <div class="col mt-4 col_info"  v-if="post.availability.length!=0">
    <div style="margin-left:30px;">from</div> 
    <ul v-for="date in post.availability" :key="date.start_date">
      <div v-if= "date.start_date != undefined">
    {{date.start_date.substring(0,10)}} 
    {{date.start_date.substring(11,16)}}
      </div>
    </ul>
    
  </div>
  <div class="col mt-4 col_info" v-if="post.availability.length!=0">
    <div style="margin-left:30px;">to</div> 
    <ul v-for="date in post.availability" :key="date.end_date">
      <div v-if= "date.start_date != undefined">
    {{date.end_date.substring(0,10)}} 
    {{date.end_date.substring(11,16)}}
      </div>
    </ul>
    
  </div>
  <div class="col col_info" v-else>
    <h3 style="margin-top:10px">No time to rent</h3>
  </div>
  <div class="row buttt">
        <div class="col col_info">
          <a class="btn_1" @click="change">Edit</a>
          </div>
          <div class="col col_info">
          <a class="btn_2" data-bs-toggle="modal" data-bs-target="#ModalLong">Set Time</a>
            </div>
      </div>
</div>
</div>
<!-- <div class="col-3">
  <ul class="listItems">
    <li> Brand </li>
    <li> Model </li>
    <li> Version </li>
    <li> Year </li>
    <li> Color </li>
    <li> Condition </li>
    <li> Mileage </li>
    <li> Fuel type </li>
    <li> Consumption </li>
    <li> Seats </li>
    <li> VIN </li>

  </ul>
</div>
<div class="col-2">
  <ul class="listValue">
    <li> {{post.brand}}</li>
    <li> {{post.model}}</li>
    <li> {{post.version}}</li>
    <li> {{post.year}}</li>
    <li> {{post.color}}</li>
    <li> {{post.condition}}</li>
    <li> {{post.mileage}}</li>
    <li> {{post.fuel_type}}</li>
    <li> {{post.fuel_consumption}}</li>
    <li> {{post.seat_count}}</li>
    <li> {{post.VIN}}</li>
    
  </ul>
</div>  -->




</div>
<div class="modal fade" id="ModalLong" tabindex="-1" role="dialog" aria-bs-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{post.brand}}</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6 col_info">
              <h3>from</h3>
          <input v-model="timeFrom" type="datetime-local">
            </div>
            <div class="col-6 col_info">
              <h3>to</h3>
          <input v-model="timeTo" type="datetime-local">
            </div>
            {{error}}
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="setTime" type="button" class="btn btn-primary" data-bs-dismiss="modal">Set time </button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import PostService from '../PostService'
import UserService from '../UserService'
  export default{
     name:'carInfo',
     data(){
       return{
         post:Object,
          timeTo:Date,
          timeFrom:Date,
          error:""

       }
     },
     computed:{
       isOwner:function(){
        const dec =UserService.decode(localStorage.getItem('token'))
        if(dec.id===this.post.createdBy_ID){
          return true
        }
        else{
          return false
        }
       }
     },
    created(){
      console.log(this.$route.params.id)
      PostService.GetById(this.$route.params.id)
      .then((res)=>{
        this.post=res[0];
        
         
      })
     
     
  },
  methods:{
    change(){
      this.$router.push('/cars/changing/'+this.$route.params.id)
    },
    setTime(){
      try{
      if(!this.timeFrom&&!this.timeTo){
        throw "time is not set "
      }
      if(this.timeFrom>this.timeTo){
        throw "bad time "
      }
      let data={
        startDate:this.timeFrom,
        endDate:this.timeTo
        }
      PostService.AddTime(this.$route.params.id,data)
      }
      catch(err){
        this.error=err
      }
    }
  }
  }
</script>
<style>
  ul {
  list-style-type: none;
}
li{
  margin-bottom: 5px;
}
.modalCenter{
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
  display:table;
}
.container{
  margin-top: 20px;
}

.car_name{
  text-align: center;
}
.buttt{
  text-align: center;
  margin-top: 100px;
}
.btn_1{
  display: inline-block;
    vertical-align: top;
    padding: 8px 30px;
    border: 2px solid #000;
    color: #fff;
    background-color: #000;
    text-decoration: none;
    font-weight: 700;
    transition: background 0.1s linear, color 0.1s linear;
}
.btn_1:hover{
  color: #000;
  background-color: #fff;
  cursor: pointer;
}
.btn_2{
  margin-left: 25px;
  display: inline-block;
  vertical-align: top;
  padding: 8px 30px;

  border: 2px solid #000;
  color: #000;
  background-color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.1s linear, color 0.1s linear;
}
.btn_2:hover{
  color: #fff;
  background-color: #000;
  cursor: pointer;
}
.desk{
  margin-top: 12px;
}
.spis_opis{
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 616px;
}
.col_info{
  margin-left: 6px;
  margin-right: 6px;
  background-color: #fff;
  border-radius: 3%;
}
.opis{
    display: flex;
    align-items: center;
    padding: 6px 16px;
    margin: 16px 8px 0 0;
    border-radius: 4px;
    border: solid 1px #406367;

}


.opss{
  background-color: #fff;
  border-radius: 3%;
  padding-bottom: 20px;
}
</style>