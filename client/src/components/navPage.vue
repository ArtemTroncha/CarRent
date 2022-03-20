<template>
  <nav  class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a id="nav" class="navbar-brand " href="">CarRent</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link " href="">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">register</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default{
    name:'navPage'
  }
</script>