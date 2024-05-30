<script>
    export default{
        name: "CardTestimonial",
        props:{
            testimonial:{
                type: Object,
                required: true
            }
        },
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
    <div class="card flex flex-col">
        <!-- PARTE SUPERIORE DELLA CARTA -->
        <div id="top-card" class="flex items-center mb-6">
            <div class="me-5">
                <img src="https://picsum.photos/100/100" class="photo big-photo rounded-full ">
            </div>
            <div>
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.company }}</p>
            </div>
        </div>

        <!-- PARTE INFERIORE DELLA CARTA -->
        <div id="bottom-card">
            <h4>{{ testimonial.feedbackTitle }}</h4>
            <p>
                {{ testimonial.feedback }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    *{
        font-family: 'Lato', sans-serif;
    }

    .card{
        background-color: #F0F0F0;
        border: 2px solid black;
        border-radius: 50px;

        gap: 30px;

        padding-inline: 40px;
        padding-block: 60px;

        width: 100%;
        
        #top-card{
            h4{
                color: #3b3b3b;
                font-weight: 900;
                font-size: 1.5em;
            }

            p{
                font-size: 1em; 
                color: #8E8E8E;
            }
        }

        #bottom-card{
            h4{
                color: #3b3b3b;
                font-weight: 900;
                font-size: 1.5em ;
                margin-bottom: 10px;
            }

            p{
                color: #575757;
                font-size: 1.2em; 
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .card{
            padding-inline: 20px;
            #top-card{
                img{
                    width: 70px;
                }

                h4{
                    font-size: 21px ;
                }

                p{
                    font-size: 16px ;
                }
            }

            #bottom-card{
                h4{
                    font-size: 21px ;
                }

                p{
                    font-size: 16px ;
                }
            }
        }
    }

    @media screen and (max-width: 576px) {

    }
</style>
