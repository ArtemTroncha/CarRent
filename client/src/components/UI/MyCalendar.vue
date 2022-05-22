<template>
    <Datepicker class="calendar" v-model="date" inline autoApply range readonly></Datepicker>
</template>

<script>

    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { ref, onMounted } from 'vue';
    
    export default {
        components: { Datepicker },
         setup() {
        const date = ref();

        
        onMounted(() => {
            const startDate = new Date(new Date().setDate(1));
            const endDate = new Date(new Date().setDate(19));
            date.value = [startDate, endDate];
        })
        
        return {
            date,
        }
    }
    }
   
</script>
<style scoped>
 
</style>