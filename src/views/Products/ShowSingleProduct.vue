<script>
import { store } from '../../store';
export default {
  name: 'ShowSingleProduct',
  props: {
    product: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return{
      store
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<template>
    <div v-if="visible" class="modal">
      <div class="modal-container">
        <span class="close absolute" @click="close">&times;</span>
        <div class="modal-content relative flex">
          
          
          <!-- Contenitore di sinistra -->
          <div class="left-container">
            <h4>{{ product.marca }}</h4>
            <img :src="`${store.apiBase}${product.img}`" alt="">
          </div>
  
          <!-- Contenitore di destra -->
          <div class="right-container">
            <h3>{{ product.nome }}</h3>
            <div class="flex items-center justify-between">
              <h4>{{ product.categoria }}</h4>
              <span class="contact-button" >
                <router-link to="/dove-siamo" class="text-white" @click="close">
                  Contattaci
                </router-link>
              </span>
            </div>
            <p class="my-8">{{ product.descrizione }}</p>
            <a :href="product.link" class="link">Scopri di più su {{ product.nome }}</a>
          </div>
  
  
  
          
        </div>

      </div>
    </div>
</template>
  

  
<style lang="scss" scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: #000000d9;
    
  }
  
  .modal-container {
    position: relative;
    margin: auto;
    padding-top: 50px;
    width: 60%;
    height: 70%;
    padding-block: 10px;
  }

  .modal-content{
    background-color: #fefefe;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    border: 1px solid red;
    
    
  }

  .left-container, .right-container{
    // border: 1px solid red;
    width: 50%;
  }

  .left-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    h4{
      background-color: #E8E8ED;
      font-weight: 600;
      padding: 8px 24px;
      border-radius: 80px;
    }

    img{
      width: 60%;
      object-fit: cover;
      
    }
  }

  .right-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 5%;
    
    h3{
      font-size: 32px;
      font-weight: 600;
      letter-spacing: .004em;
      color: #1d1d1f;
      font-family: 'Lato', sans-serif;
    }

    h4{
      font-size: 17px;
      font-weight: 400;
      color: #575757;
      letter-spacing: -.016em;
    }

    .contact-button{
      background-color: #f7562e;
      color: white;
      padding-inline: 10px;
      padding-block: 5px;
      border-radius: 20px;
      cursor: pointer
    }

    .link{
      color: rgb(17, 153, 231);
    }

    .link:hover{
      text-decoration: underline;
    }
  }
  


  .close {
    color: #424243;
    float: right;
    font-size: 26px;
    font-weight: bold;
    right: 0px;
    top: -50px;
    background-color: #ECECF0;
    padding-inline: 12px;
    border-radius: 100%;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  // SCHERMO GRANDE
  @media screen and (max-width: 1254px){
    .modal-container {
      margin: auto;
      padding: 20px;
      // border: 1px solid red;
      width: 80%;
      height: 70%;
      border-radius: 20px;
    }

    .modal-content {
      border: 1px solid #888;
    }

    .close {

      right: 20px;
      top: -70px;

    }
  }

  //LAPTOP
  @media screen and (max-width: 1024px){
    .modal-container {
      margin: auto;
      padding: 20px;
      // border: 1px solid red;
      width: 95%;
      height: 75%;
      border-radius: 20px;
    }

    .modal-content {
      border: 1px solid #888;
    }

    .close {

      right: 20px;
      top: -70px;

    }
  }

  //TABLET
  @media screen and (max-width: 768px){
    .modal-container {
      margin: auto;
      padding: 20px;
      // border: 1px solid red;
      width: 100%;
      height: 75%;
      border-radius: 20px;
    }

    .modal-content {
      border: 1px solid #888;
    }

    .right-container{
      padding-inline: 0;
      padding-right: 20px;
    }

    .close {

      right: 20px;
      top: -70px;

    }
  }

  //TELEFONO
  @media screen and (max-width: 576px){
    .modal-container {
      margin: auto;
      padding: 0px;
      padding-top: 90px;
      border: 1px solid green;
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }

    .modal-content {
      border: 1px solid red;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 20px;

      border-radius: 0;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      
      width: 100%;
      height: 100%;
    }

    .left-container, .right-container{
    // border: 1px solid red;
    width: 80%;
  }

  .left-container{
    margin-bottom: 30px;
    h4{
      font-size: 18px;
    }

    img{
      width: 60%;
      object-fit: cover;
      
    }
  }

  .right-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 5%;
    
    h3{
      font-size: 32px;
      font-weight: 600;
      letter-spacing: .004em;
      color: #1d1d1f;
      font-family: 'Lato', sans-serif;
    }

    h4{
      font-size: 18px;
      font-weight: 400;
      color: #575757;
      letter-spacing: -.016em;
    }

    p{
      font-size: 19px;
    }

    .contact-button{
      background-color: #f7562e;
      color: white;
      padding-inline: 10px;
      padding-block: 5px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 17px;
    }

    .link{
      color: rgb(17, 153, 231);
    }

    .link:hover{
      text-decoration: underline;
    }
  }

    .right-container{
      padding-inline: 0;
      // padding-right: 20px;
    }

    .close {

      right: 0px;
      top: 25px;

    }
  }
</style>
  