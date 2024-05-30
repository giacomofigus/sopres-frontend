<script>
    export default{
        name: "AppFooter",
        components:{
            
        }
    };
</script>

<template>
    
    <footer class="flex justify-center relative">
        <!-- <img src="../img/Vector-up.png" alt="" class="w-full  ">  -->
        <div class="flex gap-20">
            <ul>
                <li class="title mb-2 text-bold">ABOUT US</li>
                <li class="mb-1 font-light">FAQs</li>
                <li class="mb-1 font-light">Contattaci</li>
                <li class="mb-1 font-light">Home</li>
            </ul>
            <ul>
                <li class="title mb-2 text-bold">PRODOTTI</li>
                <li class="mb-1 font-light">Registratori di cassa</li>
                <li class="mb-1 font-light">Bilancie</li>
                <li class="mb-1 font-light">Custom</li>
                <li class="mb-1 font-light">Epson</li>
                <li class="mb-1 font-light">RCH</li>
            </ul>
            <ul>
                <li class="title mb-2 text-bold">CONTATTI</li>
                <li class="mb-1 font-light">Tel: +39 3893457290</li>
                <li class="mb-1 font-light">P.IVA: 01293630925 </li>
                <li class="mb-1 font-light">Sede legale: Via, Doline, 8</li>
                <li class="mb-1 font-light">Città: Cagliari (CA)</li>
                <li class="mb-1 font-light">Email: mailprova@sopres.it</li>
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

    @media screen and (max-width: 576px){

    }

</style>