<script>
    export default{
        name: "Jumbo",
        components:{
            
        },
        data(){
            return{
                isTitleVisible: false,
                isDescriptionVisible: false,
                isButtonVisible: false
            }
        },
        methods: {

        },
        mounted(){
            setTimeout(() => {
                this.isTitleVisible = true;
            }, 500); 

            setTimeout(() => {
                this.isDescriptionVisible = true;
            }, 600);

            setTimeout(() => {
                this.isButtonVisible = true;
            }, 700);
            
            setTimeout(() => {
                const photos = document.querySelectorAll('.photo');
                photos.forEach(photo => {
                    photo.classList.add('visible');
                });
            });
        }
    };

</script>

<template>
        <section class="jumbo">
            <div class="hero-section w-full py-2 ">
                <div class="hero-body">
                    <!-- <div class="animate-container"> -->
                        <h1 class="animate-title" :class="{ visible: isTitleVisible }">AL SERVIZIO DELLA TUA IMPRESA</h1>
                    <!-- </div> -->
                    
                    <!-- <div class="animate-container"> -->
                        <p class="animate-description" :class="{ visible: isDescriptionVisible }">
                            Servizi specializzati in <span>registratori di cassa</span>, <span>bilance</span> e <span>software gestionali</span>, con un focus particolare sull'assistenza. 
                        </p>
                    <!-- </div> -->
                    
                    <div class="animate-button" :class="{visible: isButtonVisible}">

                        <router-link to="/prodotti" class="border py-2 px-3 rounded-full btn me-10 acquista">ACQUISTA</router-link>

                        <router-link to="/contattaci" class="border py-2 px-3 rounded-full btn contattaci">CONTATTACI</router-link>
                    </div>
                </div>
                <div class="hero-photos">
                    <div class="photo-container flex ps-12 ">
                        <img src="../../img/cash-register-3.webp" class="photo" alt="registratore-di-cassa" loading="lazy">
                        <img src="../../img/cash-register-2.webp" class="photo big-photo" alt="registratore-di-cassa-touch" loading="lazy">
                        <img src="../../img/software-gestionale-1.webp" class="photo " alt="cloud-e-reti" loading="lazy">
                    </div>
                    <div class="photo-container flex pe-12">
                        <img src="../../img/RCH.jpg" class="photo" alt="prodotti-rch" loading="lazy">
                        <img src="../../img/cash-register-3.webp" class="photo" alt="registratore-di-cassa" loading="lazy">
                        <img src="../../img/assistenza_1.jpg" class="photo" alt="assistenza-telefonica" loading="lazy">
                    </div>
                    <div class="photo-container flex ps-8">
                        <img src="../../img/helping-1.webp" class="photo" alt="assistenza-da-computer" loading="lazy">
                        <img src="../../img/assistenza2.webp" class="photo" alt="cassetti-automatici" loading="lazy">
                        <img src="../../img/cash-register-1.jpg" class="photo" alt="sistema-di-pagamento" loading="lazy">
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
    *{
        font-family: "League Spartan", sans-serif;        
        color: white;
    }
    
    .jumbo{ 
        // border: 1px solid lime;
        height: calc(100vh - 80px);
        overflow: hidden;
        display: flex;
        align-items: center;
        
        .hero-section{
            width: 100%;
            padding-left: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

    // DESCRIZIONE TITOLO PARAGRAFO BOTTONI
    .hero-body{
        min-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 20px;

        h1{
            font-size: 4vw;
            font-weight: 900;
            line-height: 1.1;
            margin-top: 20px
        }

        p{
            width: 60%;
            padding-right: 20px;
            padding-block: 20px;
        }

        p, span{
            font-size: 28px;
            font-weight: 300;
            font-family: 'Lato', sans-serif;
        }

        span{
            font-weight: 900;
            font-size: 26px;
        }

        
        a{
            font-size: 18px;
            font-weight: 600;
            font-family: 'Lato', sans-serif;
            background-color: #FF5E37;
            padding: 10px;
            padding-inline: 25px;
            border-radius: 50px;
            border: 2px solid white;
        }

        .contattaci{
            background-color: white;
            border: 2px solid #FF5E37;
            color: #FF5E37;
        }
    }
    
    // FOTO COLLEZIONE
    .hero-photos{
        display: flex;
        flex-direction: column;
        gap: 30px;
        
        width: 70vw;
        max-width: 1200px;

        .photo-container{
            width: 100%;
            flex: 1;
            gap: 30px;
            
            
            .photo{
                flex: 1;
                object-fit: cover;
                background-color: lightgrey;
                min-width: 200px;
                height: 180px;
                width: 100%;
                border-radius: 30px;
                opacity: 0; 
                animation: slideFromRight 1s ease forwards;
            }

            @keyframes slideFromRight {
                from {
                    transform: translateX(100%);
                }
                to {
                    transform: translateX(0);
                }
            }

            .photo.visible {
                 opacity: 1;
            }   
        }
    }


    // ANIMATIONS
    .animate-title, .animate-description, .animate-button {
        opacity: 0;
        transform: translateY(10%);
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    /*****  RESPONSIVE SCREEN  ******/
    @media screen and (max-width: 1300px) {
        .jumbo .hero-section{
            padding-left: 10px;
        }

        .hero-body h1 {
            font-size: 65px;
        }

        .photo{
            height: 150px;
        }
    }

    // 1000 PIXEL
    @media screen and (max-width: 1024px) {
        .hero-body h1 {
            font-size: 60px;
        }
        .hero-body p {
            width: 100%;
        }
    }

    // TABLET   
    @media screen and (max-width: 768px) {
        .jumbo{
            height: auto;
            overflow-x: hidden;
            overflow-y: auto;
            align-items: start;
            padding-block: 50px;

            .hero-section{
                flex-direction: column;
                text-align: center;
                padding-left: 0px;
                // border: 1px solid red;
            }
        }

        .hero-body{
            margin-top: 40px;
            min-width: 0px;
            display: flex;
            align-items: center;
            padding-block: 10px;
            padding-left: 0;
            margin-bottom: 40px;

            h1{
                font-size: 60px;
                width: 80%;
            }

            p{
                width: 100%;
                padding-inline: 50px;
                padding-block: 50px;
                font-size: 28px;
            }

            div{
                a{
                    font-size: 25px;
                    padding-inline: 25px
                }
            }


        }

        .hero-photos{
            width: 100%;
            margin-top: 50px;
            gap: 20px;
            padding-inline: 40px;
            // border: 1px solid lime;
            
            .photo-container{
                
                gap: 20px;
                
                .photo{
                    flex: 1 ;
                    min-width: 0;
                    max-width: 100%; 
                    height: auto;
                }
            }
        }
    }

    // PHONE
    @media screen and (max-width: 576px) {

        .hero-body{

            h1{
                font-size: 50px;
                width: 100%;
                padding-inline: 20px
            }

            p{
                width: 100%;
                padding-inline: 15px;
                padding-block: 50px;
                font-size: 23px;
            }
            div{
                a{
                    font-size: 17px;
                    padding-inline: 20px
                }
            }

        }

        .hero-photos{
            margin-top: 10px;
            gap: 10px;
            padding-inline: 10px;

            .photo-container{
                display: flex;
                justify-content: space-between;
                gap: 5px;

                .photo{
                    flex: 1 ;
                    min-width: 80px;
                    max-width: 100%; 
                    height: auto;
                    border-radius: 15px;
                }
            }
        }
    }
</style> 
