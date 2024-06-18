<script>
    import ListProducts from './ListProducts.vue';

    export default{
        name: "AppProdotti",
        components:{
            ListProducts
        },
        data(){
            return{
                // Carosello
                currentSlide: 0,
                images: [
                    { src: '../img/cash-register-1.jpg' },
                    { src: '../img/cash-register-2.jpg' },
                ],


                // Scroll con drag
                isDown: false,
                startX: 0,
                scrollLeft: 0,          
            };
        },
        methods: {
            // Carosello
            changeImage(index){
                this.currentSlide = index;
            },  


            // Scroll on drag
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
        <!-- TOP NAV -->
        <div class="top-menu">
            <ul class="menu flex justify-center  gap-10 py-3">
                <li class="menu-item">
                    <div>
                        <span>Punti cassa</span>
                        <fa class="fa" icon="chevron-down"/>
                    </div>

                    <ul class="dropdown">
                        <li>Registratori telematici</li>
                        <li>POS</li>
                        <li>Soluzioni Integrate</li>
                    </ul>

                </li>
                <li class="menu-item">
                    <div>
                        <span>Bilancie</span> 
                        <fa icon="chevron-down"/>
                    </div>

                    <ul class="dropdown">
                        <li>Italiana Macchi</li>
                        <li>Omega</li>
                    </ul>

                </li>
                <li class="menu-item">
                    Accessori
                </li>
                <li class="menu-item">
                    Software
                </li>
            </ul>
        </div>

        <!-- HERO -->
        <div class="hero-section">
            <div class="imgs-container">
                <img class="" src="../../img/cash-register-1.jpg" alt="">

            </div>
            <h2>I NOSTRI PRODOTTI</h2>
            <div class="elipse-container">
                <!-- <fa class="fa active" icon="circle"/>
                <fa class="fa" icon="circle"/>
                <fa class="fa" icon="circle"/> -->
            </div>
        </div>

        <!-- BOTTOM MENU -->
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
                        <img class="resize-2" src="../../img/bilancia.png" alt="">
                    </figure>
                    <h2>Bilancie</h2>
                </div>

                <!-- Registratore telematico -->
                <div class="product flex flex-col justify-center items-center  flex-1 ">
                    <figure class="">
                        <img class="resize" src="../../img/registratore-telematico.png" alt="">
                    </figure>
                    <h2>Registratori telematici</h2>
                </div>

                <!-- Sistemi integrati -->
                <div class="product flex flex-col justify-center items-center  flex-1  ">
                    <figure>
                        <img class="" src="../../img/sistemi-integrati.png" alt="">
                    </figure>
                    <h2>Sistemi Integrati</h2>
                </div>

                <!-- Accessori -->
                <div class="product flex flex-col justify-center items-center  flex-1">
                    <figure>
                        <img class="" src="../../img/Accessori.png" alt="">
                    </figure>
                    <h2>Accessori</h2>
                </div>

                <!-- Software -->
                <div class="product flex flex-col justify-center items-center  flex-1">
                    <figure>
                        <img class="" src="../../img/software.jpg" alt="">
                    </figure>
                    <h2>Software</h2>
                </div>
            </div>
            
        </div>
        
        <!-- LISTA PRODOTTI -->
         <ListProducts/>
    </main>
    

</template>

<style lang="scss"scoped>
    main{
        background-color: #F5F5F7;
    }

    .top-menu{
        background-color: #FF5E37;
        color: white;

        .menu{
            list-style: none;
            
            li{
                position: relative;
                cursor: pointer;

                .dropdown{
                    display: none;
                    position: absolute;
                    background-color: white;
                    min-width: 180px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 5;
                    color: black;

                    li{
                        padding: 10px;
                        border-radius: 10px;
                    }
                    li:hover{
                        background-color: #e0e0e0;
                    }
                }
            }


            li:hover .dropdown {
                display: block;
            }


        }
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