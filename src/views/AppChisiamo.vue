<script>
    export default{
        name: "AppChisiamo",
        components:{},
        data(){
            return {
                values: [
                    {
                        name: "Affidabilità",
                        description: "Prodotti sicuri e duraturi grazie alla nostra esperienza nel settore.",
                        icon: "shield"
                    },
                    {
                        name: "Professionalità",
                        description: "Soluzioni personalizzate e supporto continuo per garantire il corretto funzionamento.",
                        icon: "briefcase"
                    },
                    {
                        name: "Passione",
                        description: "Mossi dalla passione per migliorare le operazioni aziendali con soluzioni avanzate e servizio clienti eccezionale.",
                        icon: "heart"
                    },
                    {
                        name: "Attenzione al cliente",
                        description: "Assistenza clienti rapida e dedicata alle necessità dei nostri clienti.",
                        icon: "headset"
                    },
                    {
                        name: "Qualità",
                        description: "Impegno per standard elevati di prestazioni e affidabilità in ogni prodotto e servizio.",
                        icon: "check-circle"
                    }
                ]
            };
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
            <div class="why-us-container">
                <div class="why-us-img">
                    <img src="../img/illustrazione.png" alt="">
                </div>
                <div class="why-us-text">
                    <h4>Perchè noi?</h4>
                    <p>Siamo consapevoli del <span class="text-bold">cambiamento</span> che l'elettronica ha portato dal 1980. Oggi sebbene essenziale, rimane fuori dalla portata di molte aziende a causa dei <span class="text-bold">costi</span>.</p>
    
                    <h4 class="mt-16">Come risolviamo?</h4>
                    <p>Siamo qui per eliminare questi <span class="text-bold">ostacoli</span> e permettere alle imprese di beneficiare pienamente delle potenzialità dell'<span class="text-bold">elettronica</span></p>
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

        <!-- Valori -->
        <section class="values">
            <h2>I nostri valori</h2>
            <p class="subtitle">Diamo valore alle persone, relazioni e il tempo</p>

            <div class="container-values">
                <div v-for="value in values" class="value">
                    <h4>{{ value.name }}</h4>
                    <p>{{ value.description }}</p>
                    <fa :icon="value.icon" class="icon"></fa>
                </div>
            </div>
        </section>
        
        <!-- STORIA -->
        <section class="story">
            <div class="container-story">
                <div class="story-image">
                    <img src="../img/story.png" alt="">
                </div>
                <div class="story-text">
                    <h2>La nostra storia</h2>
                    <p>La <span class="text-bold">SO.PR.ES. S.R.L.</span> nasce ufficialmente nel 1980, nell'attuale sede di <span class="text-bold">Cagliari</span>, raccogliendo le esperienze pluridecennali e le competenze di tecnici e imprenditori, decisi a scommettere sulle potenzialità del mercato elettronico.</p>
                </div>
            </div>
            <div class="banner ">
                <div class="left-button">
                    <h5>Che aspetti?</h5>
                </div>
                <div class="button">
                    <router-link to="/dove-siamo" class="">Contattaci</router-link>
                </div>
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

        padding-block: 50px;

        .why-us-container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
            flex-direction: row-reverse;
            // border: 1px solid purple;
            width: 70%;
            margin: 0 auto;
        }

        h4{
            font-size: 50px;
            font-weight: 600;
            font-family: 'League Spartan', sans-serif;
        }
        
        p{
            font-size: 22px;
            font-weight: 300;
        }

        .why-us-img, .why-us-text{
            flex: 1 1 50%;
            // border: 1px solid green;
        }

        .why-us-img{
            display: flex;
            justify-content: end;
            align-items: center;
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


    // VALUES
    .values{
        background-color: #003049;
        color: white;
        padding-top: 100px;
        padding-bottom: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        

        // border: 1px solid red;

        h2{
            font-family: 'League Spartan', sans-serif;
            text-align: center;
            font-size: 60px;
            font-weight: 600;
            line-height: 1;
        }

        .subtitle{
            font-family: 'League Spartan', sans-serif;
            text-align: center;
            font-size: 23px;
            color: #B3B3B3;
            font-weight: 300;
        }

        .container-values{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 50px;
            width: 65%;
            margin-top: 50px;

            // border: 1px solid green;

            .value {
                flex: 1 1 calc(33.333% - 50px); /* 3 per riga */
                max-width: calc(33.333% - 50px);
                // border: 1px solid red; 
                box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                border-radius: 18px;
                position: relative;
                padding: 20px;
                
                

                .icon{
                    position: absolute;
                    bottom: 0;
                    height: 100%;
                    right: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%);

                    opacity: 0.05;
                }

                h4{
                    font-weight: 600;
                    font-size: 25px;
                    font-family: 'League Spartan', sans-serif;
                }

                p{
                    font-size: 20px;
                    font-weight: 300;
                }
            }

            .container-values .value:nth-child(4),
            .container-values .value:nth-child(5) {
                flex: 1 1 calc(50% - 30px); /* 2 per riga */
                max-width: calc(50% - 30px);
            }
        }
        
    }


    //STORIA
    .story{
        padding-block: 150px;
        // border: 1px solid red;
        position: relative;

        .container-story{
            display: flex;
            margin: 0 auto;
            width: 90%;
            // border: 1px solid green;

            .story-image, .story-text{
                flex: 1 1 50%;
                // border: 1px solid purple;
            }

            .story-image{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .story-text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-inline: 50px;
                
                gap: 10px;

                h2{
                    font-size: 65px;
                    font-family: 'League Spartan', sans-serif;
                    color: #FF5E37;
                    font-weight: 600;
                }

                p{
                    font-size: 22px;
                
                }
            }
        }

        .banner{
            position: absolute;
            right: 20px;
            bottom: 20px;

            padding-block: 10px;
            background-color: #FF5E37;
            width: 40%;
            border-radius: 50px;

            display: flex;
            justify-content: space-between;

            div{
                text-align: center;
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-weight: 600;
            }

            .left-button{
                h5{
                    color: white;
                }
            }

            .button{
                background-color: white;
                margin-right: 10px;
                border-radius: 30px;
                padding-block: 15px;

                a{
                    color: #FF5E37;
                }

                a:hover{
                    text-decoration: underline;
                }
            }
        }
    }



    /*******  MEDIA ********/

    // LAPTOP 1220px
    @media screen and (max-width: 1220px) {
        .why-us{
            .why-us-container{
                width: 90%;
            }

        }


        .team{
            .container-team{
                width: 70%;
            }
        }


        .values{
            .container-values{
                width: 90%;
            }
        }

        .story{
            .container-story{
                width: 100%;
                padding-inline: 20px;
                .story-text{
                    padding-inline: 20px;
                    h2{
                        font-size: 55px;
                        line-height: 1;
                    }
                }
            }
        }
    }

    // LAPTOP 1024px
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
            .why-us-container{
                width: 90%;
            }

        }


        // VALUES
        .values{
            .container-values{
                // width: 85%;
            }
        }


        // STORY
        .story{
            padding-block: 180px;
            .banner{
                width: 50%;
                
            }
        }
    }


    // TABLET 768px
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
            padding: 0;
            
            .why-us-container{
                width: 100%;
                padding-inline: 20px;
                flex-direction: column;
                
            }

        }

        // TEAM
        .team{
            .container-team{
                width: 100%;
            }
        }

        // VALUES
        .values{
            
            .container-values{
                
                width: 100%;
                .value {
                    flex: 1 1 calc(50% - 50px); /* 2 per riga su schermi più piccoli */
                    max-width: calc(50% - 50px);
                }
            }
        }

        // STORY
        .story{
            padding-block: 120px;
            .container-story{
                flex-direction: column-reverse;
                gap: 60px;
                margin-bottom: 50px;

                .story-text{
                    h2{
                        margin-bottom: 20px;
                    }
                }
            }

            .banner{
                right: 50%;
                left: 50%;
                transform: translate(-50%);
                width: 70%;
            }
        }
    }

    // TELEFONO 654px
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

    // TELEFONO 576px
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

        .values{
            h2{
                line-height: 1;
                margin-bottom: 15px;
                font-size: 55px;
            }

            h2, .subtitle{
                padding-inline: 10px;
            }
            .container-values{
                .value {
                    flex: 1 1 100%; /* 1 per riga su schermi molto piccoli */
                    max-width: 80%;
                }
            }
        }

        .story{
            
            .container-story{
                text-align: center;
                padding-inline: 10px;
                .story-text{
                    h2{
                       
                    }
                }
            }

            .banner{
                width: 90%;
            }
        }
    }
}
</style>
