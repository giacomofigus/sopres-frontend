<script>
    export default{
        name: "AppMain",
        components:{
            
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
        <section class="jumbo">
            <div class="hero-section w-full py-2 ">
                <div class="hero-body">
                    <h1>AL SERVIZIO DELLA TUA IMPRESA</h1>
                    <p>
                        Servizi specializzati in registratori di cassa, bilance e software gestionali, con un focus particolare sull'assistenza. 
                    </p>
                    <div>
                        <a href="">CONTATTACI</a>
                    </div>
                </div>
                <div class="hero-photos">
                    <div class="photo-container first-line flex ps-12 relative">
                        <img src="../../img/test.jpg" class="photo lg:hidden">
                        <img src="../../img/test.jpg" class="photo big-photo">
                        <img src="../../img/test-2.jpg" class="photo ">
                    </div>
                    <div class="photo-container flex pe-12">
                        <img src="../../img/test.jpg" class="photo">
                        <img src="../../img/test-2.jpg" class="photo">
                        <img src="../../img/test.jpg" class="photo">
                    </div>
                    <div class="photo-container flex ps-8">
                        <img src="../../img/test-2.jpg" class="photo">
                        <img src="../../img/test.jpg" class="photo">
                        <img src="../../img/test-2.jpg" class="photo">
                    </div>
                </div>
            </div>
        </section>
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
    
    .jumbo{
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
        }

        p{
            width: 60%;
            padding-right: 20px;
        }

        p, span{
            font-size: 28px;
            font-weight: 300;
            font-family: 'Lato', sans-serif;
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
            gap: 20px;

            .photo{
                flex: 1;
                background-color: lightgrey;
                min-width: 200px;
                height: 180px;
                width: 100%;
                border: 1px solid #0073AF;
                border-radius: 30px;
                
            }

            .big-photo{
                flex: 2;
            }
        }
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
    @media screen and (max-width: 1000px) {
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
            overflow: auto;
            align-items: start;

            .hero-section{
                flex-direction: column;
                text-align: center;
                padding-left: 0px;
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
                width: 100%;
            }

            p{
                width: 100%;
                padding-inline: 50px;
                padding-block: 50px;
                font-size: 23px;
            }

            div{
                a{
                    font-size: 20px;
                    padding-inline: 25px
                }
            }


        }

        .hero-photos{
            width: 100%;
            margin-top: 50px;
            gap: 20px;
            padding-inline: 40px;
            flex-direction: column;
            
            .photo-container{
                display: flex;
                justify-content: space-between;
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
