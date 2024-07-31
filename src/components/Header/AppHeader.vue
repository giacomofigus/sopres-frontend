<script>
import Hamburger from './Hamburger.vue';


export default {
    name: "AppHeader",
    components:{
        Hamburger
    },
    data() {
        return{
            isActive: false
        }
    },
    methods:{
        menuAction(){
            this.isActive = !this.isActive
        }
    }
};
</script>

<template>
    <header class=" px-3 flex items-center justify-between">
        <nav>
            <div class="container-logo">
                <router-link class="flex items-center" to="/">
                    <img id="logo" src="../../img/logo.png" alt="logo-sopres">
                    <!-- <span class="">Sopres</span> -->
                </router-link>
            </div>
        </nav>
        <nav>
            <div class="hidden md:flex pe-10 menu-pc">
                <ul class="flex gap-8 ">
                    <!-- Menu pc -->
                    <li class="">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/chi-siamo">Chi siamo</router-link>
                    </li>
                    <li class="">
                        <router-link to="/prodotti">Prodotti</router-link>
                    </li>
                    <li class="">
                        <router-link to="/privacy-&-policy">Privacy Policy</router-link>
                    </li>
                    <li class="rounded-full ">
                        <router-link to="/contattaci" class="border py-2 px-3 rounded-full btn">Contattaci</router-link>
                    </li>
                </ul>
            </div>
            <Hamburger/>
        </nav>

    </header>
</template>


<style lang="scss" scoped>


    header{
        background-color: white;
        height: 80px;
        
    }

    #logo{
        width: 150px;
    }

    li{
        font-size: 18px;
        font-weight: 700;

        .btn{
            background-color: #E07132;
            color: white;
            border: 0;
        }
    }


    .container-logo{
        padding-inline: 8px;
    }

   

    .sidebar{
        position: fixed;
        top: 0;
        right: -250px;
        width: 250px;
        height: 100%;
        background-color: #333;
        color: white;
        transition: left 0.3s ease;
        padding: 20px;
        background-color: #E07132;
        z-index: 1;
    }

    .sidebar.open {
        right: 0;
    }

    li{
        color: #E07132;
    }
    

    @media only screen and (max-width: 768px) {
        header{
            position: fixed;
            right: 0;
            left: 0;
            z-index: 100;
        }

        #logo{
            width: 130px;
            position: fixed;
            z-index: 100;
        }

    }

</style>