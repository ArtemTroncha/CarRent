<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
      </ul>
      <button  type="button" class="btn btn-outline-dark"><router-link id="addCar" to="/addCar">Add Car</router-link></button>
      <div class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           </a>
           <ul style=" left: -115px" class="dropdown-menu" >
             <li><router-link class ='routerlink' to="/home">Home</router-link></li>
             <li><router-link class ='routerlink' to="/profile">Your profile</router-link></li>
             <li><hr class="dropdown-divider"></li>
             <li><a class="dropdown-item" href="#">Log Out</a></li>
           </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<style>
 .routerlink{
  display: block;
  color:black;
  margin-left:16px;
  text-decoration: none
}
#addCar{
  display: block;
  color:black;
  text-decoration: none
}
</style>
<script>
  export default{
    name:'navPage',
    
    }

</script>