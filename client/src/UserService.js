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
        return axios.post("http://localhost:3000/api/users/registration",{email,password})     
    }
    static login(email,password){
            return this.axios.post(url+"/login",{
            email,password}
            )
    }
}

export default UserService

