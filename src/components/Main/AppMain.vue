<script>
    import Jumbo from './Jumbo.vue';
    import Attività from './Attività.vue';
    import AppTestimonials from './AppTestimonials.vue';

    export default{
        name: "AppMain",
        components:{
            Jumbo,
            Attività,
            AppTestimonials
        },
        data(){

        },
        methods: {

        },
        mounted(){

        }
    };

</script>

<template>

    <main>
        <Jumbo/>
        <Attività/>
        <AppTestimonials/>
    </main>

</template>

<style lang="scss" scoped>
    *{
        font-family: "League Spartan", sans-serif;        
        color: white;
    }

    main{
        background: linear-gradient(180deg, #003049, #0073AF);  
    }
    

</style> 
