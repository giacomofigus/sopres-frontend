<script>
    export default{
        name: "AppFAQ-Contacts",
        components:{

        },
        data(){
            return{
                faqs: [
                    { question: 'Come funziona il servizio?', answer: 'Il servizio funziona in questo modo...' },
                    { question: 'Quanto costa il servizio?', answer: 'Il costo del servizio è...' },
                    { question: 'Come posso iscrivermi?', answer: 'Puoi iscriverti attraverso...' },
                    { question: 'Come posso contattarvi?', answer: 'Puoi contattarci via email a...' },
                ],
                activeIndex: null,
                contentHeight: [],
            }
        },
        methods: {
            toggle(index){
                this.activeIndex = this.activeIndex === index ? null : index;
            }
        },
        mounted(){

        }
    };
</script>

<template>
    <section class="flex relative">

        <!-- FAQ -->
        <div class="faq w-1/2 py-16  mt-12" >
            <h3 class="ps-10">FAQs</h3>
            <p class="ps-10">Hai delle domande? Qua troverai quelle che ci vengono fatte più frequentemente</p>

            <div class="accordion my-16 ps-10" >
                <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
                    <h5 class="px-5 border-t  flex items-center justify-between" @click="toggle(index)">
                        {{ faq.question }}
                        <fa :icon="'chevron-down'" class="fa":class="{ rotated: activeIndex === index}"></fa>
                    </h5>
                    <div v-if="activeIndex === index" class="px-5 pb-5">
                        <p>{{ faq.answer }}</p>
                    </div> 
                </div>
            </div>
            
        </div>

        <!-- FORM CONTATTI -->
        <div class="contacts w-1/2 px-10 flex flex-col justify-center py-12">
            <h3 class="mb-12">Contattaci per più informazioni</h3>
            <form action="" class="space-y-8 flex flex-col">
                <div class="flex  name-section">
                    <div class="flex flex-col w-1/2 name me-5">
                        <label for="nome" class="mb-2">Nome <span>*</span></label>
                        <input type="text" id="nome" name="nome" class="border border-gray-300 p-2 ">
                    </div>
                    <div class="flex flex-col w-1/2 surname">
                        <label for="cognome" class="mb-2">Cognome <span>*</span></label>
                        <input type="text" id="cognome" name="cognome" class="border border-gray-300 p-2 ">
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="mb-2">Email <span>*</span></label>
                    <input type="email" id="email" name="email" class="border border-gray-300 p-2 ">
                </div>
                <div class="flex flex-col">
                    <label for="messaggio" class="mb-2">Messaggio <span>*</span></label>
                    <textarea id="messaggio" name="messaggio" class="border border-gray-300 p-2 h-32"></textarea>
                </div>

                <button type="submit" class="bg-blue-500 text-white p-2 mx-auto">Invia</button>

            </form>
            <p class="mt-8"><span>*</span> sono i campi obbligatori</p>
        </div>

        <!-- <img src="../../img/Vector-up.png" alt="" class="w-full absolute"> -->
    </section>
    
   

    
</template>

<style lang="scss" scoped>
    section{
        height: 120vh;

        // SEZIONE FAQ
        .faq{
            h3{
                font-size: 60px;
                font-weight: 900;
                margin-bottom: 15px;
            }

            p{
                font-size: 24px;
                font-weight: 300;
                width: 60%;
            }

            .accordion{
                width: 60%;
                h5{
                    padding-block: 20px;
                    font-size:20px ;
                    font-weight: 700;
                    cursor: pointer;
                    
                    .fa {
                        transition: transform 0.3s ease;
                    }

                    .rotated {
                        transform: rotate(180deg);
                    }
                }

                p{
                    font-size: 20px;
                    font-weight: 300;
                }
            }
        }

        // SEZIONE CONTATTI
        .contacts{
            background-color: rgba(217, 217, 217, 0.19);
            
            h3{
                font-size: 60px;
                font-weight: 300;
                line-height: 1.3;
            }

            form{
                label{
                    font-size: 18px;

                    span{
                        color: #FF5E37;
                        font-weight: 700;
                    }
                }

                input, textarea{
                    color: black;
                }

                button{
                    background-color: #FF5E37;
                    border-radius: 20px;
                    border: 1px solid white;
                    padding-inline: 60px;
                    width: auto;
                }
            }

            p span{
                color: #FF5E37
            }
        }
    }

    @media screen and (max-width: 1024px){
        section{
        .faq{
            h3{
                font-size: 60px;
                font-weight: 900;
            }

            p{
                font-size: 24px;
                font-weight: 300;
                width: 100%;
                padding-right: 50px
            }

            .accordion{
                width: 80%;
                h5{
                    padding-block: 20px; 
                }
            }
        }


    }
    }

    @media screen and (max-width: 768px){
        section{
            flex-direction: column;
            align-items: center;
            height: auto;

            .faq{
                width: 90%;
                h3{
                    padding-inline: 0;
                    text-align: center;
                    margin-bottom: 30px
                }

                p{
                    padding-inline: 0;
                }

                .accordion{
                    width: 100%;
                    padding-inline: 0
                }
            }

            .contacts{
                width: 100%;
                padding-bottom: 50px;

                h3{
                    font-size: 55px;
                    padding-top: 30px;
                }
                
            }
        }
    }

    @media screen and (max-width: 576px){
        section{


            .faq{
                
                h3{

                }

                p{

                }

                .accordion{

                }
            }

            .contacts{
                padding-inline: 20px;
                

                h3{
                    font-size: 45px;
                    
                }

                form{
                    .name-section{
                        margin: 0;
                        flex-direction: column;

                        .name, .surname{
                            width: 100%;
                        }

                        .name{
                            #nome{
                                margin-bottom: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>