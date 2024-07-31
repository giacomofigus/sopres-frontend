<script>
    import axios from 'axios';

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

                nome: '',
                cognome: '',
                email: '',
                messaggio: '',
                termini: '',

                errors: {},
                loading: false,
                successMessage: '',
                errorMessage: '',
                successMessageVisible: false
            }
        },
        methods: {
            toggle(index){
                this.activeIndex = this.activeIndex === index ? null : index;
            },
            sendMessage() {
                if (!this.validateForm()) {
                    return;
                }

                const data = {
                    nome: this.nome,
                    cognome: this.cognome,
                    email: this.email,
                    messaggio: this.messaggio,
                    termini: this.termini
                };

                this.errors = {};
                this.loading = true;
                this.successMessageVisible = false;
                this.errorMessage = '';

                axios.post('https://api.provaditest.shop/api/messages', data).then(res => {
                    if (res.data.success) {
                        this.successMessage = 'Messaggio inviato con successo!';
                        this.successMessageVisible = true;

                        setTimeout(() => {
                            this.successMessageVisible = false;
                        }, 3000);

                        this.nome = '';
                        this.cognome = '';
                        this.email = '';
                        this.messaggio = '';
                        this.termini = '';
                    } else {
                        this.errorMessage = 'Si è verificato un errore durante l\'invio del messaggio.';
                    }
                })
                .catch(error => {
                    this.errorMessage = 'Si è verificato un errore durante l\'invio del messaggio.';
                    if (error.response && error.response.data) {
                        this.errors = error.response.data.errors;
                    } else {
                        this.errors.general = "Si è verificato un errore. Riprova più tardi.";
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
            },
            validateForm() {
                if (!this.nome || !this.cognome || !this.email || !this.messaggio || !this.termini) {
                    this.errorMessage = 'Compila tutti i campi obbligatori.';
                    return false;
                }
                return true;
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
            <form  class="space-y-8 flex flex-col" @submit.prevent="sendMessage">
                <div class="flex  name-section">
                    <div class="flex flex-col w-1/2 name me-5">
                        <label for="nome" class="mb-2">Nome <span>*</span></label>
                        <input type="text" id="nome" name="nome" class="border border-gray-300 p-2 " v-model="nome">
                    </div>
                    <div class="flex flex-col w-1/2 surname">
                        <label for="cognome" class="mb-2">Cognome <span>*</span></label>
                        <input type="text" id="cognome" name="cognome" class="border border-gray-300 p-2 " v-model="cognome">
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="mb-2">Email <span>*</span></label>
                    <input type="email" id="email" name="email" class="border border-gray-300 p-2 " v-model="email">
                </div>
                <div class="flex flex-col">
                    <label for="messaggio" class="mb-2">Messaggio <span>*</span></label>
                    <textarea id="messaggio" name="messaggio" class="border border-gray-300 p-2 h-32" v-model="messaggio"></textarea>
                </div>

                <div class="flex items-center">

                    <input type="checkbox" name="termini" id="termini" v-model="termini">
                    <label for="termini" class="termini ms-2">Accetto i 
                        <a href="https://www.termsfeed.com/live/65735f6b-caba-4c1c-97ad-a80f4fdc654f" class="termini text-blue-600 dark:text-blue-500 hover:underline">Termini e condizioni 
                            <span>*</span>
                        </a>
                    </label>
                </div>

                <button type="submit" class="bg-blue-500 text-white p-2 mx-auto">Invia</button>

            </form>
            <p class="mt-8"><span>*</span> sono i campi obbligatori</p>

            <div v-if="loading" class="loading-overlay">
                <div class="spinner"></div>
            </div>
            <div v-if="successMessageVisible" class="success-message">
                    {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </div>
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

            .loading-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;

                .spinner {
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top: 4px solid #fff;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            }

            .success-message {
                margin-top: 20px;
                padding: 10px;
                background-color: #DAF1D6;
                color: white;
                border-radius: 5px;
                border: 2px solid #69C19B;
                text-align: center;
                color: #69C19B;
                font-weight: 600;
            }

            .error-message {
                margin-top: 20px;
                padding: 10px;
                background-color: #F8D7DA;
                color: white;
                border-radius: 5px;
                border: 2px solid #F5C6CB;
                text-align: center;
                color: #721C24;
                font-weight: 600;
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