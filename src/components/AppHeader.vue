<script>


export default {
    name: "AppHeader",
    data() {

    }
};
</script>

<template>
    <header class=" px-3 flex items-center justify-between">
        <nav>
            <div class="container-logo">
                <router-link class="flex items-center" to="/">
                    <img id="logo" src="../img/logo.png" alt="logo">
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
                    <li class="rounded-full ">
                        <router-link to="/dove-siamo" class="border py-2 px-3 rounded-full btn">Contattaci</router-link>
                    </li>
                </ul>
            </div>
            <!-- Barre menu telefono -->
            <div id="menu-mob" class="flex md:hidden">
                <fa class="hamb" icon="bars" />
            </div>

        </nav>

    </header>
</template>


<style lang="scss" scoped>


    header{
        background-color: white;
        height: 80px;
        z-index: 100;
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
    
    .hamb{
        width: 30px;
        height: 30px;
        color: #E07132;
    }

    li{
        color: #E07132;
    }
    

    @media only screen and (max-width: 768px) {
        #logo{
            width: 130px;
        }

        #menu-mob{
            padding-inline: 20px;
        }
    }
</style>