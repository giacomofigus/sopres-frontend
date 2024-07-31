<script>
    import { store } from '../../store';
    

    export default{
        name: "Product",
        props:{
            product: {
                type: Object,
                required: true
            }
        },
        components:{
            
        },
        data(){
            return{
                store
            }
        },
        methods: {
            handleImageError(event) {

            }
        },
        mounted(){

            if(this.product.img === null){
                
                 this.product.img = 'image-not-available.png'
                 console.log( this.product.img); 
            }
            
            
        }
    }
</script>

<template>
    <div class="card">
        <span>Categoria: {{ product.categoria }}</span>
        <div class="top-card">
            <h1>{{ product.nome }}</h1>
        </div>
        <div class="center-card my-8">
            <img :src="`${store.apiBase}${product.img}`" @error="handleImageError" :alt="`${product.nome}`">
        </div>
        <div class="bottom-card">
            <p>{{ product.marca }}</p>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        padding-inline: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        
        
        padding-block: 20px;
        background-color: white;
        border-radius: 18px;
        box-shadow: 2px 4px 12px #00000014;
        transition: all .3s cubic-bezier(0,0,.5,1);
        height: 400px;

        span{
            background-color: #F7562E;
            color: white;
            font-weight: 600;
            font-size: 16px;
            position: absolute;
            right: 0;
            top: 0;
            border-top-right-radius: 18px;
            border-bottom-left-radius: 18px;
            padding-inline: 8px;
            padding-block: 2px;
            white-space: nowrap;  
            overflow: hidden; 
            text-overflow: ellipsis;  
            max-width: 100%; 
        }

        .center-card{
            display: flex;
            justify-content: center;
            // flex: 1;
            // border: 1px solid red;

            img{
                object-fit: cover;
                width: 200px;
                height: 200px;
            }
        }

        .top-card{
            h1{
                color: #1d1d1f;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: .010em;
                line-height: 1.1428571429;
                padding-top: 20px;

            }
        }

        .bottom-card{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                color: #4495ff;
                
            }

            p:hover{
                text-decoration: underline;
            }
        }
    }
    
    .card:hover{
        box-shadow: 2px 4px 20px #00000029;
        transform: scale3d(1.01, 1.01, 1.01);
        cursor: pointer;
    }
</style>