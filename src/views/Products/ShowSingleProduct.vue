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
      <span class="close absolute" @click="close">
        <fa class="fa" icon="xmark"/>
      </span>
      <div class="modal-content">
        <!-- Contenitore di sinistra -->
        <div class="left-container ">
          <h4 class="marca">{{ product.marca }}</h4>
          <img :src="`${store.apiBase}${product.img}`" alt="">
        </div>
        <!-- Contenitore di destra -->
        <div class="right-container">
          <h3>{{ product.nome }}</h3>
          <div class="flex items-center justify-between">
            <h4>{{ product.categoria }}</h4>
            <span class="contact-button">
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

  // PHONE START
  .modal {
    display: flex;
    align-items: center;
    justify-content: end;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000d9;
    // border: 1px solid red;

    .modal-container{
      // border: 1px solid blue;
      height: 100%;
      display: flex;
      align-items: end;
      
      .close{
        top: 20px;
        right: 10px;
        background-color:#E8E8EB;
        color:  #545455;
        font-size: 28px;
        padding-inline: 10px;
        border-radius: 40px;
      }

      .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        
        background-color: white;
        // border: 2px solid green;
        height: 90%;
        border-radius: 20px 20px 0 0;
        overflow-y: auto;
        padding-block: 20px;

        .left-container, .right-container{
          padding-inline: 20px;
          text-align: center;
        }

        .left-container{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;

          .marca{
            font-size: 18px;
            background-color: #E8E8EB;
            padding: 10px;
            border-radius: 30px;
          }

          img{
            max-width: 250px;
            margin-top: 20px;
          }
        }

        .right-container{
          h3{
            font-size: 28px;
            font-weight: 600;
          }

          .contact-button{
            background-color: #F7562E;
            padding: 7px;
            border-radius: 20px;
          }

          h4{
           color: #545455;
           font-weight: bold;
          }

          p{
            font-size: 20px;
          }

          .link{
            color: rgb(76, 196, 243);
          }

          .link:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }

  // TABLET
  @media screen and (min-width: 768px) {
    .modal{
      justify-content: center;
      .modal-container{
        // position: relative;
        width: 95%;
        height: 80%;
        align-items: center;

        .modal-content{
          border-radius: 20px 20px 20px 20px;
          flex-direction: row;
          align-items: center;

          .left-container, .right-container{
            // border: 1px solid red;
            
          }

          .left-container{
            width: 40%;
          }

          .right-container{
            text-align: left;
            width: 60%;
            padding-right: 40px;
          }
        }
      }
    }
  }


  @media screen and (min-width: 1024px) {
    .modal{
      .modal-container{
        width: 70%;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .modal{
      .modal-container{
        width: 60%;
      }
    }
  }



</style>



  