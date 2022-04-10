import axios from "axios";
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