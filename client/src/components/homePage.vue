<template>
    <h1>hello</h1>
</template>
<script>
import axios from 'axios'
export default{
    async created(){
         await axios.get('http://localhost:3000/api/users',{
        headers:{
            Authorization:'Bearer'+localStorage.getItem('token')
        }}
        )
    }
}


</script>