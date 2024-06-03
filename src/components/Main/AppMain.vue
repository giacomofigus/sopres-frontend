<script>
    import Jumbo from './Jumbo.vue';
    import Attività from './Attività.vue';
    import AppTestimonials from './AppTestimonials.vue';
    import AppCustomers from './AppCustomers.vue';
    import AppFAQContacts from './AppFAQ-Contacts.vue';
    

    export default{
        name: "AppMain",
        components:{
            Jumbo,
            Attività,
            AppTestimonials,
            AppCustomers,
            AppFAQContacts
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

        <!-- INSERITI IN UN DIV PER POTER FERMARE IL COLORE GRADIENTE -->
        <div class="container-1">
            <Jumbo/>
            <Attività/>
            <img src="../../img/Vector-up.png" alt="" class="w-full ">
        </div>
            
        <div class="container-2">
            <AppTestimonials/>
            <img src="../../img/Vector-up.png" alt="" class="w-full block down">
            <AppCustomers/>
            <AppFAQContacts/>

        </div>

        

        
    </main>

</template>

<style lang="scss" scoped>
    *{
        font-family: "League Spartan", sans-serif;        
        color: white;
    }

    main .container-1{
        background: linear-gradient(180deg, #003049, #0073AF);  
    }

    main .container-2{
        background: linear-gradient(180deg,#0073AF,  #003049 );  
        .down{
            display: block;
            margin-top: -10px ;

            transform: scale(-1, -1);
        }
    }
    

</style> 
