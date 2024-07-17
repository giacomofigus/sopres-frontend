<template>
    <main>
        <div class="big-container flex h-full">
            <div class="map-container relative">
                <iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3090.4210220108052!2d9.101212002145797!3d39.23331330597534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e0!4m0!4m5!1s0x12e7341ffa62a6fd%3A0x5a9c86f9083243ce!2sVia+delle+Doline%2C+8%2C+09122+Cagliari!3m2!1d39.2333965!2d9.102239299999999!5e0!3m2!1sit!2sit!4v1428597999253" frameborder="0" class="w-full h-full"></iframe>
            </div>

            <div class="info-container flex flex-col gap-14 justify-center items-center">
                <form class="space-y-8 flex flex-col" @submit.prevent="sendMessage">
                    <h2 class="">Contattaci</h2>
                    <div class="flex name-section">
                        <div class="flex flex-col w-1/2 name me-5">
                            <label for="nome" class="mb-2">Nome <span>*</span></label>
                            <input type="text" id="nome" name="nome" class="border border-gray-300 p-2 " v-model="nome" >
                        </div>
                        <div class="flex flex-col w-1/2 surname">
                            <label for="cognome" class="mb-2">Cognome <span>*</span></label>
                            <input type="text" id="cognome" name="cognome" class="border border-gray-300 p-2 " v-model="cognome" >
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="mb-2">Email <span>*</span></label>
                        <input type="email" id="email" name="email" class="border border-gray-300 p-2 " v-model="email" > 
                    </div>
                    <div class="flex flex-col">
                        <label for="messaggio" class="mb-2">Messaggio <span>*</span></label>
                        <textarea id="messaggio" name="messaggio" class="border border-gray-300 p-2 h-32" v-model="messaggio" ></textarea>
                    </div>

                    <button type="submit" class="bg-blue-500 text-white p-2 mx-auto">Invia</button>

                    <div v-if="loading" class="loading-overlay">
                        <div class="spinner"></div>
                    </div>
                    <div v-if="successMessageVisible" class="success-message">
                        {{ successMessage }}
                    </div>
                    <div v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: "AppContattaci",
    data() {
        return {
            nome: '',
            cognome: '',
            email: '',
            messaggio: '',

            errors: {},
            loading: false,
            successMessage: '',
            errorMessage: '',
            successMessageVisible: false
        };
    },
    methods: {
        sendMessage() {
            if (!this.validateForm()) {
                return;
            }

            const data = {
                nome: this.nome,
                cognome: this.cognome,
                email: this.email,
                messaggio: this.messaggio
            };

            this.errors = {};
            this.loading = true;
            this.successMessageVisible = false;
            this.errorMessage = '';

            axios.post('https://lightsalmon-mandrill-381882.hostingersite.com/api/messages', data)
                .then(res => {
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
            if (!this.nome || !this.cognome || !this.email || !this.messaggio) {
                this.errorMessage = 'Compila tutti i campi obbligatori.';
                return false;
            }
            return true;
        }
    }
};
</script>

<style scoped>
main {
    height: calc(100vh - 80px);
    background: linear-gradient(180deg, #0073AF, #003049);

    .map-container {
        width: 50%;
        padding: 0px;

        iframe {
            border-radius: 0px;
        }
    }

    .info-container {
        width: 50%;
        background-color: rgba(217, 217, 217, 0.19);

        h2 {
            color: white;
            font-family: 'Lato', sans-serif;
            font-size: 65px;
            font-weight: 300;
        }

        form {
            width: 80%;

            label {
                font-size: 20px;
                font-family: 'Lato', sans-serif;
                color: white;

                span {
                    color: #E07132;
                }
            }

            input {
                height: 35px;
                border-radius: 10px;
            }

            textarea {
                border-radius: 10px;
                height: 100px;
            }

            button {
                width: auto;
                background-color: #E07132;
                border-radius: 40px;
                padding-inline: 30px;
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
}

@media screen and (max-width: 1024px) {
    main {
        .big-container {
            .map-container {
                padding: 0px;

                iframe {
                    border-radius: 0px;
                }
            }

            .info-container {
                form {
                    h2 { }

                    .name-section {
                        .name, .surname { }

                        .name { #nome { } }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    main {
        height: auto;
        .big-container {
            flex-direction: column;

            .map-container {
                width: 100%;
                padding: 0;

                iframe {
                    border-radius: 0;
                }
            }

            .info-container {
                width: 100%;
                padding-inline: 40px;

                form {
                    width: 100%;
                    padding-block: 10px;
                    padding-bottom: 30px;

                    h2 {
                        font-size: 55px;
                    }

                    .name-section {
                        margin: 0;
                        flex-direction: column;

                        .name, .surname {
                            width: 100%;
                        }

                        .name { #nome { margin-bottom: 25px; } }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 576px) {
    main {
        .big-container {
            flex-direction: column;

            .map-container {
                width: 100%;
                padding: 0;

                iframe {
                    border-radius: 0;
                }
            }

            .info-container {
                width: 100%;
                padding-inline: 20px;

                form {
                    padding-block: 20px;
                    padding-bottom: 30px;

                    h2 {
                        font-size: 50px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
