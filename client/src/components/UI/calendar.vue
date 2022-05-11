<template>
  
</template>

<script>
export default {
    data(){
        return{
            month: new Date().getMonth(),    
            year: new Date().getFullYear(), 
            dFirstMonth: '1',
            day:["Mn", "Tu","We","Th","Fr","Sa", "Su"],
            monthes:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            date: new Date(),
        }
        var dlast = new Date(this.year, this.month + 1, 0).getDate();
    },
    
}
</script>

<style>

</style>