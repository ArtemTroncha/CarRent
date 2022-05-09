import { createStore } from "vuex";
export default createStore({
    state:{
        
    },
    getters:{
    },
    mutations:{
        Login(state){
            state.isLog=true;
        },
        Logout(state){
            state.isLog=false;
        }
    },

})