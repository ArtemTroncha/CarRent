import  {createRouter,createWebHistory}  from 'vue-router'
import homePage from './homePage.vue'
import loginPage from './loginPage.vue'
import UserComponent from './UserComponent'
import showCar from './showCar'
import addCar from './addCar'
import profile from './profile'
import ProductsCard from './ProductsCard'

const routes= [
     {path :'/',component :loginPage},
     {path:'/registration',component:UserComponent},
     {path:'/showCar',component:showCar},
     {path:'/home',component:homePage},
     {path:'/addCar',component:addCar},
     {path:'/profile',component:profile},
     { name: 'productsCard', path: '/products/:id', component: ProductsCard},

]
const router= createRouter({
   routes,
   history :createWebHistory(process.env.BASE_URl)
})
export default router