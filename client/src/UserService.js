import axios from "axios";
const url='http://localhost:3000/api/users'
class UserService{
    //get posts
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data=res.data;
                resolve(data.body)
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    static register(email,password){
        return axios.post(url+'/registration',{email,password})     
    }
    static login(Email,Password){
            return this.axios.post(url+"/login",
                {Email,Password}
            )
    }
}

export default UserService

