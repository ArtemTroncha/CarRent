import  {createApp}  from 'vue'
import app from './App.vue'
import router from './components/router.js'
import store from '@/components/store'
createApp(app).use(router).use(store).mount('#app')

