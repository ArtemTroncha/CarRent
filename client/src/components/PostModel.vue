<template>
<div class="container">
<div class="row">
<div class="col">
<div class="card mt-3 w-50 ">
<img class="card-img-left"  id='card' src="../assets/car.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{post.brand}} {{post.model}} , {{post.year}} year</h5>
    <p class="card-text">mileage {{post.mileage}}</p>
  <button @click="toCar" type="submit" id='button' class="btn btn-dark"  >see more</button>
     
  </div>
  
  
</div>
</div>
</div>
</div>

</template>
<script>
export default{
  name:'PostModel',
  props:{
      post:Object
    },
    methods:{
      toCar(){
        this.$router.push('/cars/'+this.post._id)
      }
    }
    
    }

  



</script>
<style>
.modalCenter{
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
  display:table;
}
img{
    width:150px;
    height:120px
}
.card{
  margin:0 auto;
  float:none
}
.card-img-left {
        position: absolute;
        height: auto;
        max-height: 100%;
        width: auto;
        max-width: 40%;
    }

    .card-img-left ~ .card-body {
        margin-left: 40%;
    }
  #button{
    margin-left: 200px;
  }
</style>