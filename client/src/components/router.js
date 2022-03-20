import  {createRouter,createWebHistory}  from 'vue-router'
import homePage from './homePage.vue'
import loginPage from './loginPage.vue'
import UserComponent from './UserComponent'
const routes= [
    {path :'/',component :homePage},
     {path :'/login',component :loginPage},
     {path:'/registration',component:UserComponent}

]
const router= createRouter({
   routes,
   history :createWebHistory(process.env.BASE_URl)
})
export default router