<script>
    export default{
        name: "AppFooter",
    };
</script>

<template>
    
    <footer class="flex justify-center relative">
        <!-- <img src="../img/Vector-up.png" alt="" class="w-full  ">  -->
        <div class="flex gap-20">
            <ul>
                <li class="title mb-2 text-bold">ABOUT US</li>
                <li class="mb-1 font-light">FAQs</li>
                <li class="mb-1 font-light">
                    <router-link to="/contattaci">Contattaci</router-link>
                </li>
                <li class="mb-1 font-light">
                    <router-link to="/chi-siamo">Chi siamo</router-link>
                </li>
                <li class="mb-1 font-light">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="mb-1 font-light">
                    <router-link to="/privacy-&-policy">Privacy Policy</router-link>
                </li>
                <li class="mb-1 font-light">Cookie Policy</li>
            </ul>
            <ul>
                <li class="title mb-2 text-bold">
                    <router-link to="/prodotti">PRODOTTI</router-link>
                </li>
                <li class="mb-1 font-light">Registratori di cassa</li>
                <li class="mb-1 font-light">Bilancie</li>
                <li class="mb-1 font-light">Custom</li>
                <li class="mb-1 font-light">Epson</li>
                <li class="mb-1 font-light">RCH</li>
                <li class="mb-1 font-light">Ditronetwork</li>
            </ul>
            <ul>
                <li class="title mb-2 text-bold">CONTATTI</li>
                <li class="mb-1 font-light">Tel: +39 3893457290</li>
                <li class="mb-1 font-light">P.IVA: 01293630925 </li>
                <li class="mb-1 font-light">Sede legale: Via, Doline, 8</li>
                <li class="mb-1 font-light">Città: Cagliari (CA)</li>
                <li class="mb-1 font-light">Email Supporto tecnico: sopres.tecnico@gmail.com</li>
                <li class="mb-1 font-light">Email Amministrazione: sopres.amministrazione@gmail.com</li>
                <li>

                </li>
            </ul>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
    footer{
        background-color: #003049;
        padding-block: 70px;
        color: white;
        
        div{
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>