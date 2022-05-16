<template>
<div class="container mt-4 justify-content-center"> 
   <div class="row justify-content-center">
      <div class="col-5">
       <div class="input-group mb-1">
          <input type="text" class="form-control" placeholder="Find Car..." aria-label="Find Car..." aria-describedby="basic-addon2">
          <div class="input-group-append">
             <button @click="search" class="btn btn-outline-secondary" type="button">Search</button>
             </div>
         </div>

      </div>

      <div class="row justify-content-center">
      <div class="col-5">
         <a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
         Filter</a>
      </div>
      </div>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
    <form class="form-inline" role="form">
                        <div class="row">
                           <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-search">Brand:</label>
                            <select v-model="filterdata.filterBrand" class="form-control" id="pref-search">
                              <option v-for="brand in filterdata.autocomplete.Brands" :key='brand'>
                              {{ brand }}
                            </option>
                          </select>      
                           </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-search">Model:</label>
                            <select v-model="filterdata.filterModel" class="form-control" id="pref-search">
                              <option v-for="model in filterdata.autocomplete.Models" :key='model'>
                              {{ model.modelName }}
                            </option>
                          </select>    
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-search">Version:</label>
                            <input type="text" v-model="filterdata.filterVersion" class="form-control input-sm" id="pref-search">
                        </div>
                        </div>
                        </div>
                        <div class="row">
                           <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-perpage">Color:</label>
                            <select v-model="filterdata.filterColor" id="pref-perpage" class="form-control">
                                <option value="Red">Red</option>
                                <option value="Black">Black</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                                <option value="Purple">Purple</option>
                                <option value="Pink">Pink</option>
                                <option value="Brown">Brown</option>
                            </select>                                
                        </div>
                           </div>
                           <div class="col">
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-perpage">Condition:</label>
                            <select v-model="filterdata.filterCondition" id="pref-perpage" class="form-control">
                                <option value="Normal">Normal</option>
                                <option value="Bad">Bad</option>
                                <option selected="selected" value="Well">Well</option>
                            </select>                                
                        </div>
                           </div>
                           <div class="col"><!-- form group [search] -->
                        <div class="form-group">
                            <label class="filter-col" style="margin-right:0;" for="pref-orderby">Mileage:</label>
                                
                              <input v-model="filterdata.filterMileage" type="number"  min="1000" max="999999" step="500" class="form-control" >
                                                         
                        </div>
                        </div>
                        </div>
                        
                        <div class="form-group" style="width: 32%">
                            <label class="filter-col" style="margin-right:0;" for="pref-orderby">Year:</label>
                                
                              <input v-model="filterdata.filterYear" type="number"  min="1900" max="2099" step="1" class="form-control"  aria-label="Year">
                                                         
                        </div> 
                           <!-- form group [order by] --> 
                         
                        
                      
                    </form>
  </div>
</div>
   </div>
   </div>


   <showCar v-bind:posts="postdata.posts"/>
</template>
<script>
import showCar from './showCar';
import PostService from "../PostService";

export default{
   name:'homePage',
   components:{
      showCar
   },
   data(){
      return{
         name:'',
         surname:'',
         email:'',
         postdata:{
            posts:[]
         },
         filterdata:{
            autocomplete:{
               Brands:[],
               Models:[]
            },
            filterBrand:"",
            filterModel:"",
            filterColor:"",
            filterVersion:"",
            filterCondition:"",
            filterMileage:Number,
            filterYear:Number
         }
      }
   },
   async created(){
      //adding allcars
      await PostService.GetPosts()
   .then((res)=>{
     console.log(res)
     this.postdata.posts=res
   })
   .catch((err)=>{
     console.log(err)})
      //adding brands in filter
     await PostService.GetBrands("makes")
         .then((res)=>{
           this.filterdata.autocomplete.Brands=res;
         });
   },
   watch:{
      //set model after Brand
      'filterdata.filterBrand':  function(setBrand){
          if(setBrand!=""){
           PostService.GetModels(setBrand).then((res)=>{
           this.filterdata.autocomplete.Models=res;
         })
        }
      }},
      
   methods:{
   async search()
   {
      console.log(Number.isFinite(this.filterdata.filterMileage))
      if(!Number.isFinite(this.filterdata.filterYear)){
         this.filterdata.filterYear=null
      }
      if(!Number.isFinite(this.filterdata.filterMileage)){
         this.filterdata.filterMileage=null
      }
      PostService.SearchPosts(this.filterdata.filterBrand,
      this.filterdata.filterModel,this.filterdata.filterColor,
      this.filterdata.filterVersion,this.filterdata.filterCondition,
      this.filterdata.filterMileage,this.filterdata.filterYear
      ).then((res)=>{
         this.postdata.posts=res;
      })
   },
   addCar(){
      this.$router.push("/addCar")
   }


   }
}


</script>