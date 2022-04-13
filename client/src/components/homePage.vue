<template>
<div class="container mt-4 justify-content-center"> 
   <div class="row justify-content-center">
      <div class="col-5">
       <div class="input-group mb-1">
          <input type="text" class="form-control" placeholder="Find Car..." aria-label="Find Car..." aria-describedby="basic-addon2">
          <div class="input-group-append">
             <button class="btn btn-outline-secondary" type="button">Search</button>
             </div>
         </div>

      </div>

      <div class="row justify-content-center">
      <div class="col-5">
         <a class="btn btn-outline-secondary btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
         Filter</a>
      </div>
      </div>
  <div class="collapse" id="collapseExample">
  <div class="card card-body ">
    <form class="form-inline" role="form">
                        <div class="row">
                           <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-search">Brand:</label>
                            <input type="text" class="form-control input-sm" id="pref-search">
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-search">Version:</label>
                            <input type="text" class="form-control input-sm" id="pref-search">
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-search">Model:</label>
                            <input type="text" class="form-control input-sm" id="pref-search">
                        </div>
                        </div>
                        </div>
                        <div class="row">
                           <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-perpage">Color:</label>
                            <select id="pref-perpage" class="form-control">
                                <option value="Red">Red</option>
                                <option value="Black">Black</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                                <option value="Purple">Purple</option>
                                <option value="Pink">Pink</option>
                                <option value="Brown">Brown</option>
                                <option selected="selected" value="White">White</option>
                            </select>                                
                        </div>
                           </div>
                           <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-perpage">Condition:</label>
                            <select id="pref-perpage" class="form-control">
                                <option value="Normal">Normal</option>
                                <option value="Bad">Bad</option>
                                <option selected="selected" value="Well">Well</option>
                            </select>                                
                        </div>
                           </div>
                           <div class="col"><!-- form group [search] -->
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-orderby">Mileage:</label>
                                
                              <input v-model="Mileage" type="number"  min="1000" max="999999" step="500" class="form-control" >
                                                         
                        </div>
                        </div>
                        </div>
                        
                        <div class="form-group" style="width: 32%">
                            <label class="filter-col" style="margin-right:0;" for="pref-orderby">Year:</label>
                                
                              <input v-model="Year" type="number"  min="1900" max="2099" step="1" class="form-control"  aria-label="Year">
                                                         
                        </div> 
                           <!-- form group [order by] --> 
                         
                        <div class="form-group">    
                            <div class="checkbox" style="margin-left:10px; margin-right:10px;">
                                <label><input type="checkbox"> Remember parameters</label>
                            </div>
                            <button type="submit" class="btn btn-dark filter-col">
                                <span class="glyphicon glyphicon-record"></span> Save Settings
                            </button>  
                        </div>
                      
                    </form>
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