<template>
        <div>
            <h1>Товар номер {{ productId }}</h1>
        </div>
    </template>
    
    <script>
        export default {
            computed: {
                productId () {
                    return +this.$route.params.id;
                }
            }
        }
</script>