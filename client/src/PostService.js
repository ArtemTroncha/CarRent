import axios from 'axios';
const url='http://localhost:3000/api/posts'
class PostService{
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
    static AddPost(createdBy_ID,title,discription,available_from,
        brand,model,version,year,color,VIN,condition,mileage,
        fuel_type, fuel_consumption,seat_count){
        return axios.post(url,{
            createdBy_ID,title,discription,available_from,
            brand,model,version,year,color,VIN,condition,mileage,
            fuel_type, fuel_consumption,seat_count
        }).then((res)=>{
               
            return res
         }).catch((err) => {
             return err            
         })
    }
     

}
export default PostService;