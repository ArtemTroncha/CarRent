import axios from "axios";
import jwt_decode from "jwt-decode"
const url='http://localhost:3000/api/users'
class UserService{
    static GetUser(id){
        return new Promise ((resolve,reject) =>{
            axios.get(url+'/'+id)
            .then((res) =>{
               resolve(res.data[0])
            })
            .catch((err)=> {
                reject(err)
            })
        }
    )}
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
    static register(name,surname,email,password){
        return axios.post(url+'/registration',{name,surname,email,password})
        .then((res)=>{
            return res
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

