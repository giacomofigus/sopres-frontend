<script>
    export default{
        name: "AppChisiamo",
        components:{},
        data(){
            return {};
        },
        methods: {},
        mounted(){}
    };
</script>

<template>
    <main>
        <!-- HERO CHI SIAMO -->
        <section class="hero">
            <div class="left-hero">
                <h1>
                    Ti aiutiamo a ottimizzare la gestione aziendale
                </h1>
                <p>
                    Rendiamo l'elettronica uno strumento accessibile e potente per la 
                    <span>gestione aziendale</span> alleviando al contempo il peso delle gestioni fiscali e <span>burocratiche</span>.
                </p>
                <div>
                    <router-link to="/dove-siamo" class="border py-2 px-3 rounded-full btn">Contattaci</router-link>
                </div>
            </div>
            <div class="right-hero">
                <img src="../img/chi-siamo-imgs.png" alt="">
            </div>
        </section>

        <!-- WHY US -->
        <section class="why-us">
            <div class="container-why">
                <h2>Perché noi?</h2>
                <div class="row first-row">
                    <p>
                        <div>
                            <fa class="icon" icon="sack-dollar"></fa>
                        </div>
                        Siamo consapevoli del <span class="text-bold">cambiamento</span>  che l'elettronica ha portato dal 1980. Oggi sebbene essenziale, rimane fuori dalla portata di molte aziende a causa dei <span class="text-bold">costi</span>.
                    </p>
                    <div class="img">
                        <img src="../img/obsoleto.jpg" alt="">
                    </div>
                </div>

                <div class="row second-row">
                    <div class="img">
                        <img src="../img/successo.jpg" alt="">
                    </div>
                    <p>
                        <div>
                            <fa class="icon" icon="rocket"></fa>
                        </div>
                        Siamo qui per eliminare questi <span class="text-bold">ostacoli</span> e permettere alle imprese di <span class="text-bold">beneficiare </span>pienamente delle potenzialità dell'elettronica
                    </p>
                </div>
            </div>
        </section>


        <!-- TEAM -->
        <section class="team">
            <div class="container-team">
                <h2>Il nostro Team!</h2>
                <p>
                    Team di 6 <span>tecnici specializzati</span> per ogni sistema, autorizzati e competenti nell'intervenire su ognuno dei prodotti.
                </p>
            </div>
            <div class="square">
                <img src="../img/team.jpeg" alt="">
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #f5f5f5;

    // HERO
    .hero {
        min-height: calc(100vh - 80px);
        display: flex;
        justify-content: center;
        // gap: 50px;
        padding-inline: 50px;

        .left-hero, .right-hero {
            // border: 1px solid red;
            // width: 50%;
        }

        .right-hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            width: 60%;

            img {
                width: 80%;
                object-fit: cover;
                aspect-ratio: 16/9;
                max-width: 100%; 
                height: auto; 
            }
        }

        .left-hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 50px;
            width: 40%;

            h1 {
                font-size: 65px;
                font-family: 'League Spartan', sans-serif;
                line-height: 1.0;
                color: #FF5E37;
                font-weight: 600;
            }

            p {
                font-size: 25px;
                font-weight: 300;

                span {
                    font-weight: 600;
                
                }
            }

            a {
                border: 1px solid #FF5E37;
                background-color: white;
                color: #FF5E37;
                font-size: 25px;
            }
        }
    }


    // WHY US
    .why-us{
        background-color: #003049;
        color: white;
        // border: 1px solid red;
        display: flex;
        justify-content: center;
        padding-block: 50px;

        .container-why{
            // border: 1px solid green;
            width: 60%;
            
            h2{
                font-family: 'League Spartan', sans-serif;
                text-align: center;
                font-size: 60px;
                font-weight: 600;
                margin-bottom: 50px;
            }

            .icon{
                display: none;
            }

            .row{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;

                // border: 1px solid purple;
                padding: 5px;

                p{
                    width: 50%;
                    font-size: 20px;
                    font-weight: 300;
                    // border: 1px solid yellow;
                }

                .img{
                    
                    // border: 1px solid yellow;
                    display: flex;
                    align-items: center;

                    img{
                        width: 50%;
                        width: 400px;
                        height: 200px;
                        object-fit: cover;
                    }
                }
            }

            .first-row{
                margin-bottom: 20px;

                .img{
                    display: flex;
                    justify-content: end;
                    align-items: center;
                }
            }

            .second-row{

                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;
                margin-top: 90px;
                p{

                }
            }
        }
    }


    // TEAM
    .team{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, #f5f5f5 88%, #003049 88%);
        padding-block: 50px;
        // border: 1px solid red;
        
        .container-team{
            // border: 1px solid green;
            width: 50%;
            padding-block: 40px;
            text-align: center;
            margin-bottom: 100px;

            h2{
                font-family: 'League Spartan', sans-serif;
                font-size: 60px;
                font-weight: 600;
                color: #FF5E37;
            }

            p{
                margin-top: 20px;
                font-size: 25px;
                font-weight: 400;

                span{
                    font-weight: 900;
                }
            }
        }

        .square{
            background-color: #D9D9D9;
            width: 80%;
            // height: 500px;
            border-radius: 18px;
            filter:drop-shadow(0px 0px 16px #000000af);

            img{
                width: 100%;
                height: 500px;
                border-radius: 18px;
                object-fit: cover;
            }
        }
    }


    // MEDIA //

    @media screen and (max-width: 1220px) {
        .why-us{
            .container-why{
                width: 75%;
            }
        }


        .team{
            .container-team{
                width: 70%;
            }
        }
    }

    // LAPTOP
    @media screen and (max-width: 1024px) {
        // HERO
        .hero {
            flex-direction: column;
            padding-inline: 50px;
            padding-block: 50px; 
            gap: 50px; 

            .left-hero, .right-hero {
                width: 100%; 
                margin-bottom: 20px; 
            }

            .left-hero{
                text-align: center;
            }

            .right-hero {
                align-items: center;
                img {
                    width: 90%; 
                    height: auto; 
                }
            }
        }

        // WHY US 
        .why-us{
            .container-why{
                width: 90%;

                .row{
                    .img{
                        img{
                            height: 180px;
                            width: 350px;
                        }
                    }
                }
            }
        }
    }


    // TABLET
    @media screen and (max-width: 768px){

        // HERO
        .hero {
            padding-inline: 10px;

            .left-hero, .right-hero {

            }

            .left-hero{
                h1{
                    font-size: 55px;
                }

                p{
                    font-size: 24px;
                    
                    span{
                        font-size: 24px;
                    }
                }
            }

            .right-hero {
                img {

                }
            }
        }


        //WHY US
        .why-us{
            .container-why{
                width: 100%;

                .row{
                    .img{
                        img{
                            height: 150px;
                            width: 300px;
                        }
                    }
                }
            }
        }



        .team{
            .container-team{
                width: 100%;
            }
        }
    }

    // TELEFONO
    @media screen and (max-width: 654px){
        //WHY US
        .why-us{
            padding-block: 60px;
            .container-why{
                

                .row{
                    flex-direction: column;
                    p{
                    //    flex-direction: column;
                       display: block;
                       
                       width: 80%; 
                       text-align: center;
                    }

                    .icon{
                        display: inline-block;
                        font-size: 30px;
                        color: #FF5E37;
                        margin-bottom: 30px;
                    }

                    .img{
                        display: none;
                        img{
                            width: auto;
                            height: auto;
                            display: none
                        }
                    }
                }
            }
        }
    }

    // TELEFONO
    @media screen and (max-width: 576px){
        .hero {


            .left-hero, .right-hero {

            }

            .left-hero{
                h1{
                    font-size: 50px;
                }

                p{
                    font-size: 23px;
                    
                    span{
                        font-size: 23px;
                    }
                }
            }

            .right-hero {
                img {

                }
            }
        }
    }
}
</style>
