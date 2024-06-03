<script>
    export default{
        name: "AppCustomers",
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
    <div class="container  flex">
        <div class="image-container">
            <img src="../../img/cagliari-pin.png" alt="Descrizione dell'immagine">
        </div>
        <div class="text-container">
            <h1>Più di <span>1000</span> clienti in tutta la sardegna</h1>
            <p>Questo è un paragrafo di esempio. Qui puoi inserire il testo che desideri visualizzare sotto il titolo.</p>
        </div>
    </div>

    <div class="sponsor-band flex">
        <img src="../../img/Zenith-logo.png" alt="">
        <img src="../../img/Trony-Logo.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    padding: 20px;
    padding-block: 150px;
    margin: 0 auto;

    .image-container {
        flex: 1;
        display: flex;
        justify-content: center;
        padding-right: 20px;

        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
    }

    .text-container {
        flex: 1;
        h1 {
            font-family: 'League Spartan', sans-serif;
            text-transform: uppercase;
            margin: 0;
            
            padding-bottom: 40px;
            line-height: 1.1;
            font-size: 60px;
            color: white;
            width: 70%;
            font-weight: 900;
        }

        span{
            font-family: 'League Spartan', sans-serif;
            color: #FF5E37;
        }

        p {
            margin: 0;
            font-size: 24px;
            color: white;
            font-weight: 400;
        }
    }
}

.sponsor-band{
    margin-top: 50px;
    padding-block: 10px;
    background-color: rgba(0, 48, 73, 0.54);
    gap: 50px;

    img{
        width: 80px;
        
    }
}

@media screen and (max-width: 1024px){
    .container {


    .image-container {


        img {

        }
    }

    .text-container {

        h1 {
            width: 100%;
        }

        p {
            margin: 0;
            font-size: 24px;
            color: white;
        }
    }
}
}

@media screen and (max-width: 768px){
    .container {
        width: 100%;
       

    .image-container {


        img {

        }
    }

    .text-container {

        h1 {
            font-size: 45px;
            width: 100%;
        }

        p {
            margin: 0;
            font-size: 22px;
            color: white;
        }
    }
}
}

@media screen and (max-width: 576px){
    .container {
        width: 100%;
        flex-direction: column;

        .image-container {


            img {

            }
        }

        .text-container {

            h1 {
                font-size: 50px;
                text-align: center;
                width: 100%;
                margin-bottom: 20px;
                margin-top: 30px;
            }

            p {
                margin: 0;
                font-size: 22px;
                color: white;
                text-align: center;
            }
        }
    }
}
</style>