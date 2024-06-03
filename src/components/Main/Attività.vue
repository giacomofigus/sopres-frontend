<script>
    export default{
        name: "Attività",
        components:{
            
        },
        data(){
            return{
                isTitleVisible: false,
                isDescriptionVisible: false,
                isButtonVisible: false,
                isImgVisible: false,
                isImgVisible2: false,
                isImgVisible3: false
            }
        },
        methods: {
            handleIntersect(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.isTitleVisible = true;
                    setTimeout(() => {
                        this.isDescriptionVisible = true;
                    }, 300);
                    setTimeout(() => {
                        this.isButtonVisible = true;
                    }, 400);
                    setTimeout(() => {
                        this.isImgVisible = true;
                    }, 300);
                    setTimeout(() => {
                        this.isImgVisible2 = true;
                    }, 400);
                    setTimeout(() => {
                        this.isImgVisible3 = true;
                    }, 500);
                    observer.unobserve(entry.target); // Stop observing after first intersect
                }
            });
        }
        },
        mounted(){
            const options = {
            root: null, // relative to the viewport
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver(this.handleIntersect, options);
        observer.observe(this.$el);
        }
    };

</script>

<template>
    <section class="attività ">
        <div class="">
            <div class="title-container relative">
                <img class="img-1 rounded-full absolute animate-img "src="https://picsum.photos/100/100" alt="" :class="{ visible: isImgVisible }">
                <h2 class="animate-title" :class="{ visible: isTitleVisible }">HAI UN'<br> ATTIVITÀ?</h2>
            </div>

            <div class="paragraph-container ">


                <p class="relative animate-description" :class="{visible: isDescriptionVisible}">
                    Il nostro staff specializzato offre <span>servizi</span> completi nel campo del telematico, dalla <span>vendita</span> all'<span>assistenza</span>, con soluzioni personalizzate e supporto continuo. Forniamo e manuteniamo anche <span>bilance di precisione</span>, <span>sistemi gestionali</span> e macchine per ufficio, garantendo strumenti affidabili e all'avanguardia per ottimizzare la tua <span>attività</span>.

                </p>

                <img class="img-2 rounded-full absolute animate-img "src="https://picsum.photos/100/100" alt="" :class="{ visible: isImgVisible2 }">
                <img class="img-3 rounded-full absolute animate-img "src="https://picsum.photos/100/100" alt="" :class="{ visible: isImgVisible3 }">
            </div>

            <div class="animate-button" :class="{ visible: isButtonVisible }" >
                <a href="">
                    Scopri di piu
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    .attività{
        padding-block: 100px;
        
        // border: 1px solid red;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;

            h2{
                font-family: 'League Spartan', sans-serif;
                font-weight: 700;
                font-size: 70px;
                text-align: center;
                line-height: 1.1;
                z-index: 2;
            }


            // ANIMAZIONI
            .animate-title, .animate-description, .animate-button,.animate-img {
                opacity: 0;
                transform: translateY(10%);
                transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            }
            .visible {
                opacity: 1;
                transform: translateY(0);
            }
            /////////

            .paragraph-container{
                display: flex;
                justify-content: center;
                position: relative;
                width: 35%;

                p{
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                    font-size: 23px;
                    width: 100%;
                    padding-block: 70px;
                    position: relative;
                    z-index: 5;
                }

                .img-2{
                    right: -30px;
                    top: 0;
                }

                .img-3{
                    left: - 50px;
                    bottom: 0px;
                }

            } 

            span{
                font-weight: 900;
                font-size: 22px;
            }

            div{
                a{
                    font-size: 18px;
                    font-weight: 600;
                    font-family: 'Lato', sans-serif;
                    background-color: white;
                    padding: 10px;
                    padding-inline: 25px;
                    border-radius: 50px;
                    border: 2px solid #FF5E37;
                    color: #FF5E37;
                }
            }

            // POSIZIONI IMMAGINI
            .title-container img{
                z-index: 1;
                left: -30px;
                top: -45px;
            }

        }
    }

    @media screen and (max-width: 1000px) {
        .attività{
            padding-block: 150px;

        div{


            h2{

            }

            .paragraph-container{

                width: 70%;

                p{

                }

                .img-2{

                }

                .img-3{

                }

            } 

            span{

            }

            div{
                a{

                }
            }

            // POSIZIONI IMMAGINI
            .title-container img{

            }

        }
    }
    }
    
    // TABLET
    @media screen and (max-width: 768px) {
        .attività{
            
            // height: 100vh;
            div{
                
    
                h2{
                    font-size: 70px;
                }
    
                p{
                    width: 80%;
                    font-size: 28px
                }
    
                div{
                    a{
                        font-size: 24px;
                    }
                }
            }
        }
    }

    // TELEFONO
    @media screen and (max-width: 576px) {
        .attività{
            padding-block: 200px;
            overflow: hidden;

        div{


            h2{
                font-size: 55px;
            }

            .paragraph-container{

                width: 100%;
                padding-inline: 20px;

                p{

                }

                .img-2{

                }

                .img-3{

                }

            } 

            span{

            }

            div{
                a{
                    font-size: 18px;
                }
            }

            // POSIZIONI IMMAGINI
            .title-container img{

            }

        }
    }
    }
       
    

</style> 