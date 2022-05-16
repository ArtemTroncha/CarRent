import axios from 'axios';
const url='http://localhost:3000/api/posts'
const url_img='http://localhost:3000/api/images'
class PostService{
    static PostImg(files){
        
        let formData =new FormData();
        files.forEach(file => {
            formData.append('image',file)
        }); 
        return axios.post(url_img,formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*',
            }})
        .then((res)=>{             
            return res
         }).catch((err) => {
             return err            
         })
    }

    static GetPosts(){
        return new Promise ((resolve,reject) =>{
            axios.get(url)
            .then((res) =>{
               resolve(res.data)
            })
            .catch((err)=> {
                reject(err)
            })
        }
    )}
    static SearchPosts(Brand,Model,Color,Version,Condition,Mileage,Year){
        let search_url=url+"/search?"
        if(Brand!=""){
            search_url+="brand="+Brand+"&"
        }
        if(Model!=""){
            search_url+="model="+Model+"&"
        }
        if(Color!=""){
            search_url+="color="+Color+"&"
        }
        if(Version!=""){
            search_url+="version="+Version+"&"
        }
        if(Condition!=""){
            search_url+="condition="+Condition+"&"
        }
        if(Mileage){
            search_url+="mileage="+Mileage+"&"
        }
        if(Year){
            search_url+="year="+Year+"&"
        }
        return new Promise ((resolve,reject) =>{
            axios.get(search_url)
            .then((res) =>{
               resolve(res.data)
            })
            .catch((err)=> {
                reject(err)
            })
        })   
    }
    static GetModels(brand){
        const options = {
            method: 'GET',
            url: 'https://cis-automotive.p.rapidapi.com/getModels',
            params: {brandName: brand},
            headers: {
              'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com',
              'X-RapidAPI-Key': 'e52539f9f1mshb201b27bb7f65a1p1ba9d6jsn09b0e4776a46'
            }
          };
          return new Promise ((resolve,reject) =>{
            axios.request(options).then(function (response) {
                resolve(response.data.data);
            }).catch(function (error) {
                reject(error);
            });
            })
    }
    static GetBrands(){
        const options = {
            method: 'GET',
            url: 'https://cis-automotive.p.rapidapi.com/getBrands',
            headers: {
              'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com',
              'X-RapidAPI-Key': 'e52539f9f1mshb201b27bb7f65a1p1ba9d6jsn09b0e4776a46'
            }
          };
          return new Promise ((resolve,reject) =>{
          axios.request(options).then(function (response) {
              resolve(response.data.data);
          }).catch(function (error) {
              reject(error);
          });
          })
    }
    static GetUserPost(id){
        return new Promise ((resolve,reject) =>{
            axios.get(url+'/creator/'+id)
            .then((res) =>{
               resolve(res.data)
            })
            .catch((err)=> {
                reject(err)
            })
        }
        )}
    static GetById(id){
        return new Promise ((resolve,reject) =>{
            axios.get(url+'/'+id)
            .then((res) =>{
               resolve(res.data)
            })
            .catch((err)=> {
                reject(err)
            })
        }
        )
    }
    static UpdatePost(id,title,discription,
        brand,model,version,year,color,VIN,condition,mileage,
        fuel_type, fuel_consumption,seat_count,){
        return axios.put(url+'/'+id,{
            title,discription,
            brand,model,version,year,color,VIN,condition,mileage,
            fuel_type, fuel_consumption,seat_count,
        })
    }
    
    static AddPost(createdBy_ID,title,discription,
        brand,model,version,year,color,VIN,condition,mileage,
        fuel_type, fuel_consumption,seat_count,images){
        return axios.post(url,{
            createdBy_ID,title,discription,
            brand,model,version,year,color,VIN,condition,mileage,
            fuel_type, fuel_consumption,seat_count,images
        }).then((res)=>{
               
            return res
         }).catch((err) => {
             return err            
         })
    }
     

}
export default PostService;