<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/effect-cards';
    import { EffectCards } from 'swiper/modules';
    
    import CardTestimonial from './CardTestimonial.vue';


    export default{
        name: "AppTestimonials",
        components:{
            CardTestimonial,
            Swiper,
            SwiperSlide
        },
        data(){
            return{
                testimonials: [
                    {
                        id: 1,
                        name: "MARCO ROSSI",
                        company: "zenith.com",
                        feedbackTitle: "Azienda con ottimo servizio!",
                        feedback: "Quest'azienda ha veramente colpito sulla gestione del mio ristorante. Assistenti gentilissimi e professionali. Li richiamerei sicuramente in caso di problemi!",
                        imgSrc: "https://picsum.photos/100/100"
                    },
                    {
                        id: 2,
                        name: "GIULIA BIANCHI",
                        company: "example.com",
                        feedbackTitle: "Azienda con ottimo servizio!",
                        feedback: "Quest'azienda ha veramente colpito sulla gestione del mio ristorante. Assimerei sicuramente in caso di problemi!",
                        imgSrc: "https://picsum.photos/100/100"
                    },
                    {
                        id: 3,
                        name: "FRANCO VERDI",
                        company: "example.com",
                        feedbackTitle: "Azienda con ottimo servizio!",
                        feedback: "Quest'azienda ha veramente colpito sulla gestione del mio ristorantichiamerei sicuramente in caso di problemi!",
                        imgSrc: "https://picsum.photos/100/100"
                    }
        
                ],
                transitioning: false,
                animationClass: '',
                isMobile: window.innerWidth <= 576
            }
        },
        methods: {
            prevTestimonial(){
                const first = this.testimonials.shift();
                this.testimonials.push(first);
            },
            nextTestimonial(){
                const last = this.testimonials.pop();
                this.testimonials.unshift(last);
            },
            handleResize(){
                this.isMobile = window.innerWidth <= 576;
            }
        },
        mounted(){
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    };

</script>

<template>
    <div class="">
        <div class="container-testimonial ">
            <div class="title-containers ">
                <h2>I NOSTRI CLIENTI:</h2>

                <div class="testimonials flex relative">
                    <CardTestimonial 
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    :testimonial="testimonial"
                    class="test"
                    />
                </div>

                <div class="flex mt-12 gap-5">
                    <fa class="fa" icon="chevron-left" @click="prevTestimonial" />
                    <fa class="fa" icon="chevron-right" @click="nextTestimonial" />
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    
    div{
        .container-testimonial{
            display: flex;
            justify-content: center;

            margin: 0;
            
            padding-bottom: 50px;
            background-color: #003049;

            // CONTENITORE CONTAINER-CARD E TITOLO
            .title-containers{
                display: flex;
                flex-direction: column;
                align-items: center;

                width: 80%;

                h2{
                    font-family: 'League Spartan', sans-serif;
                    font-size: 70px;
                    font-weight: 800;
                    margin-bottom: 70px;
                    padding-left: 60px;
                    width: 100%;
                    
                }

                .fa{
                    border: 2px solid white;
                    padding: 10px;
                    padding-inline: 14px;
                    border-radius: 100%;
                }

                .fa:hover{
                    transition: 0.2s;
                    background-color: #FF5E37;
                    cursor: pointer;
                }

                // CONTENITORE CARD
                .testimonials{
                    transition: transform 0.5s ease-in-out;
                    // SELEZIONA SOLAMENTE LA PRIAM E TERZA CARD PER POTERLE RENDERE SOTTO LA 2
                    
                    .test:nth-child(1){
                        margin-right: -100px;
                        margin-left: 60px;
                    }

                    .test:nth-child(3){
                        margin-left: -80px;
                        margin-right: 60px;
                    }

                    .test:nth-child(1), 
                    .test:nth-child(3)
                    {
                        
                        margin-top: 50px;
                    }
    
                    // SECONDA CARTA SOPRA LE ALTRE
                    .test:nth-child(2) {
                        z-index: 1;
                        margin-bottom: 50px;
                        filter: drop-shadow(0 0 0.75rem black);
                    }
                }
            }
        }
    }


    @media screen and (max-width: 1200px) {
        div{
            .container-testimonial{
                
                
                .title-containers{
                    width: 95%;
                }
            }
        }
    }

    // LAPTOP
    @media screen and (max-width: 1024px) {
        div{
            .container-testimonial{
                padding-inline: 20px;

                .title-containers{
                    width: 100%;

                    .testimonials{
                        
                        // .test:nth-child(1), 
                        // .test:nth-child(3)
                        // {

                        //     z-index: 1;
                        //     margin-top: 50px;
                        // }

                        // .test:nth-child(2) {

                        //     z-index: 1;
                        //     margin-bottom: 50px;
                        // }

                    }
                }


            }
        }
    }

    // TABLET
    @media screen and (max-width: 768px) {
        div{
            .container-testimonial{
                padding-inline: 20px;
                .title-containers{
                    
                    h2{
                       padding-left: 0;
                    }

                    .testimonials{
                        width: 100%;

                        .test:nth-child(1){
                            margin-left: 0;
                            margin-right: -100px;
                        }

                        .test:nth-child(3){
                            margin-right: 0;
                            margin-left: -100px;
                        }

                        .test:nth-child(1), 
                        .test:nth-child(3)
                        {
                            margin-top: 40px;
                        }
    
                        // SECONDA CARTA SOPRA LE ALTRE
                        .test:nth-child(2) {
                            z-index: 1;
                            margin-bottom: 40px;
                        }
                    }
                }
            }

        }
    }

    // TELEFONO
    @media screen and (max-width: 576px) {
        div{


            .container-testimonial{
                padding-inline: 20px;
                padding-block: 120px;
                .title-containers{
                    h2{
                        font-size: 42px;
                        margin-bottom: 20px;
                        text-align: center;
                    }

                    .testimonials{
                        flex-direction: column;
                        width: 100%;

                        .test:nth-child(1){
                            margin-right: 0;
                           
                        }

                        .test:nth-child(3){
                            margin-left: 0;
                        }

                        .test:nth-child(1), 
                        .test:nth-child(3)
                        {
                            display: none;
                            margin-top: 0;
                        }
    
                        // SECONDA CARTA SOPRA LE ALTRE
                        .test:nth-child(2) {
                            z-index: 1;
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }





</style>