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
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #f5f5f5;

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

    @media screen and (max-width: 1024px) {
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
    }

    @media screen and (max-width: 768px){
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
    }

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
