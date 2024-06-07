<script>

    export default{
        name: "AppProdotti",
        components:{
            
        },
        data(){
            return{
                isDown: false,
                startX: 0,
                scrollLeft: 0,          
            };
        },
        methods: {
            mouseDown(e) {
                this.isDown = true;
                this.$refs.bottomMenu.classList.add('active');
                this.startX = e.pageX - this.$refs.bottomMenu.offsetLeft;
                this.scrollLeft = this.$refs.bottomMenu.scrollLeft;
            },
            mouseLeave() {
                this.isDown = false;
                this.$refs.bottomMenu.classList.remove('active');
            },
            mouseUp() {
                this.isDown = false;
                this.$refs.bottomMenu.classList.remove('active');
            },
            mouseMove(e) {
                if (!this.isDown) return;
                e.preventDefault();
                const x = e.pageX - this.$refs.bottomMenu.offsetLeft;
                const walk = (x - this.startX) * 1; // Velocità di scorrimento
                this.$refs.bottomMenu.scrollLeft = this.scrollLeft - walk;
            },
        },
        mounted(){

        }
    }

</script>

<template>
    
    <main>
        <div class="top-menu">
            <ul class="flex justify-center  gap-10 py-3">
                <li class="flex items-center gap-1">
                    <span>Punti cassa</span>
                    <fa icon="chevron-down"/>
                </li>
                <li class="flex items-center gap-1">
                    <span>Bilancie</span> 
                    <fa icon="chevron-down"/>
                </li>
                <li>
                    Accessori
                </li>
                <li>
                    Software
                </li>
            </ul>
        </div>
        <div class="hero-section">
            <div class="imgs-container">
                <img src="../img/cash-register-2.jpg" alt="">
            </div>
            <h2>I NOSTRI PRODOTTI</h2>
            <div class="elipse-container">
                <fa class="fa active" icon="circle"/>
                <fa class="fa" icon="circle"/>
                <fa class="fa" icon="circle"/>
            </div>
        </div>
        <div 
        class="bottom-menu"
        @mousedown="mouseDown"
        @mouseleave="mouseLeave"
        @mouseup="mouseUp"
        @mousemove="mouseMove"
        ref="bottomMenu"
        >
            <!-- Riga delle immagini e scritte -->
            <div class="row-objects flex w-full">

                <!-- Bilancie -->
                <div class="product flex flex-col justify-center items-center flex-1 ">
                    <figure>
                        <img class="resize-2" src="../img/bilancia.png" alt="">
                    </figure>
                    <h2>Bilancie</h2>
                </div>

                <!-- Registratore telematico -->
                <div class="product flex flex-col justify-center items-center  flex-1 ">
                    <figure class="">
                        <img class="resize" src="../img/registratore-telematico.png" alt="">
                    </figure>
                    <h2>Registratori telematici</h2>
                </div>

                <!-- Sistemi integrati -->
                <div class="product flex flex-col justify-center items-center  flex-1  ">
                    <figure>
                        <img class="" src="../img/sistemi-integrati.png" alt="">
                    </figure>
                    <h2>Sistemi Integrati</h2>
                </div>

                <!-- Accessori -->
                <div class="product flex flex-col justify-center items-center  flex-1">
                    <figure>
                        <img class="" src="../img/Accessori.png" alt="">
                    </figure>
                    <h2>Accessori</h2>
                </div>

                <!-- Software -->
                <div class="product flex flex-col justify-center items-center  flex-1">
                    <figure>
                        <img class="" src="../img/software.jpg" alt="">
                    </figure>
                    <h2>Software</h2>
                </div>
            </div>
            
        </div>
    </main>
    

</template>

<style lang="scss"scoped>
    .top-menu{
        background-color: #FF5E37;
        color: white;
    }

    .hero-section{
        position: relative;
        background-color: black;
        
        img{
           height: 450px;
           width: 100%;
           object-fit: cover;
           opacity: 0.7;
        }

        h2{
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            color: white;
            font-family: 'League Spartan', sans-serif;
            font-size: 65px;
            font-weight: 600;
        }

        .elipse-container{
            position: absolute;
            z-index: 3;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            .fa{
                color: white;
                font-size: 14px;
                margin-inline: 5px
            }

            .active{
                color: #FF5E37;
            }
        }
    }

    .bottom-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 100px;
        padding-block: 50px;

        figure{
            width: 70%;
            height: 70%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
            }

            .resize{
                width: 60%;
                height: 80%;
            }
        }

        h2{
            margin-top: 20px;
        }

        h2:hover{
            text-decoration: underline;
            cursor: pointer;
        }


    }

    @media screen and (max-width: 1024px){
        .hero-section{
            img{
                height: 400px;
            }

            h2{
                text-align: center;
            }

            .elipse-container{
                .fa{
                    font-size: 12px;
                }
            }
        }

        .bottom-menu{
            padding-inline: 10px;
            overflow-x: scroll;
            white-space: nowrap;
            scrollbar-width: none; 

            .row-objects{
                display: flex;
                gap: 20px;
            }

            .product{
                flex: 0 0 auto;
            }

            figure{
                width: 180px;
                height: 150px;
            }
        }

        .bottom-menu::-webkit-scrollbar {
            display: none; /* Chrome, Safari e Edge */
        }

        .bottom-menu.active {
            cursor: grabbing;
            cursor: -webkit-grabbing;
        }
    }

    @media screen and (max-width: 768px){
        .hero-section{
            img{
                height: 400px;
            }

            h2{
                text-align: center;
            }

            .elipse-container{
                .fa{
                    font-size: 12px;
                }
            }
        }
    }

    @media screen and (max-width: 576px){
        .top-menu{
            ul{
                flex-wrap: wrap;
                row-gap: 20px;
            }
        }
    }
</style>