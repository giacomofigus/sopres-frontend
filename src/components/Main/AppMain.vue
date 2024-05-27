<script>
    import Jumbo from './Jumbo.vue';
    import Attività from './Attività.vue';

    export default{
        name: "AppMain",
        components:{
            Jumbo,
            Attività
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
