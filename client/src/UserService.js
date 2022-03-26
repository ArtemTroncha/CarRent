import axios from "axios";
import jwt_decode from "jwt-decode"
const url='http://localhost:3000/api/users'
class UserService{
    static GetUser(id){
            axios.get(url+'/:id',{id}).then((res) =>{
                return (res.data.body)
            })
            .catch((err)=> {
                return (err);
            })
            
        }
    //get posts
    static decode(token){
        var decoded = jwt_decode(token);
        return decoded;
    }
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) =>{
                resolve(res.data.body)
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    static register(email,password){
        return axios.post(url+'/registration',{email,password})
        .then((res)=>{
            console.log(res.data);
        }).catch((err) => {
            console.log(err.data)
        })
    }
    static login(email,password){
            return axios.post(url+"/login",
                {email,password}
            ).then((res)=>{
               
               return res
            }).catch((err) => {
                return err                
            })
    }
    
}

export default UserService

