<template>
<div class="container">
<div class="row">
<div class="col">
<div @click="toCar" class="card mt-3 w-75">
<img class="card-img-left"  id='card' src="../assets/car.jpg" alt="Card image cap">
  <div class="card-body posst">
    <h5 class="card-title">{{post.brand}} {{post.model}} , {{post.year}} year</h5>
    <!-- <p class="card-text">mileage {{post.mileage}}</p> -->
    <h6 class="card-title">3000 PLN</h6>
  </div>
  <div class="card-body">
    <p class="card-text micro">mileage {{post.mileage}}</p>
    <p class="card-text micro"> </p>
  </div>
  <!-- <button @click="toCar" type="submit" id='button' class="btn btn-dark"  >see more</button> -->
     
  
  
  
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
.micro{
  font-size: 13px;
  color: #00000085;
}
/* img{
    width:150px;
    height:120px;
} */
.card{
  margin:0 auto;
  padding: 5px;
  float:none;
  border:0px;
  height: 140px;
  transition: 0.3s;
  
}
.card:hover{
  cursor: pointer;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5) ;
}
.card-img-left {
        position: absolute;
        height: auto;
        max-height: 93%;
        width: auto;
        max-width: 40%;
    }

    .card-img-left ~ .card-body {
        margin-left: 26%;
    }
  #button{
    margin-left: 200px;
  }
.posst{
  display: flex;
  justify-content: space-between;
}
  </style>