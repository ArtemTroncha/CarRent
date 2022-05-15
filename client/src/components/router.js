import  {createRouter,createWebHistory}  from 'vue-router'
import homePage from './homePage.vue'
import loginPage from './loginPage.vue'
import UserComponent from './UserComponent'
import addCar from './addCar'
import profile from './profile'
import CarInfo from './CarInfo'
import changeCar from './changeCar'
import test from './UI/MyCalendar.vue'

const routes= [
     {path :'/',component :loginPage},
     {path:'/registration',component:UserComponent},
     {path:'/home',component:homePage},
     {path:'/addCar',component:addCar},
     {path:'/profile',component:profile},
     {path:'/cars/:id',component:CarInfo},
     {path:'/cars/changing/:id',component:changeCar},
     {path:'/test',component:test}
]
const router= createRouter({
   routes,
   history :createWebHistory(process.env.BASE_URl)
})
export default router