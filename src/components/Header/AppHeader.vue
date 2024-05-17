<script>


export default {
    name: "AppHeader",
    data() {
        return {
            
        }
    }
};
</script>

<template>
    <header class="border border-sky-500 py-2">
        <nav class="flex items-center justify-between">
            <div class="container-logo">
                <router-link to="/">
                    <img id="logo" src="../../img/logo.png" alt="logo">
                </router-link>
            </div>
            <div class="hidden md:flex pe-5 menu-pc">
                <ul class="flex gap-8 font-semibold">
                    <!-- Menu pc -->
                    <li class="text-lg">
                        <router-link to="/prodotti">Prodotti</router-link>
                    </li>
                    <li class="text-lg">
                        <router-link to="/chi-siamo">Chi Siamo</router-link>
                    </li>
                    <li class="text-lg">
                        <router-link to="/contatti">Contatti</router-link>
                    </li>
                    <li class="text-lg">
                        <router-link to="/dove-siamo">Dove trovarci</router-link>
                    </li>
                </ul>
            </div>
            <!-- Barre menu telefono -->
            <div id="menu-mob" class="flex md:hidden">
                <img class="hamb" src="../../img/bars-solid.svg" alt="menu">
            </div>
        </nav>
    </header>
</template>


<style lang ="scss" scoped>
    #logo{
        width: 150px;
    }

    .container-logo{
        padding-inline: 8px;
    }
    
    .hamb{
        width: 30px;
        height: 30px;
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