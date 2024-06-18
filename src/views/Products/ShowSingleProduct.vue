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
      <div class="modal-content relative flex">
        <span class="close absolute top-0" @click="close">&times;</span>
        
        <!-- Contenitore di sinistra -->
        <div class="left-container">
          <img :src="`${store.apiBase}${product.img}`" alt="">
        </div>

        <!-- Contenitore di destra -->
        <div class="right-container">
          <h3>{{ product.nome }}</h3>
          <p>{{ product.descrizione }}</p>
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
  
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    height: 60%;
    border-radius: 20px;
  }

  .left-container, .right-container{
    border: 1px solid red;
    width: 50%;
  }

  .left-container{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 60%;
      
    }
  }

  .right-container{
    h3{
      font-size: 25px;
      font-weight: 600;
      color: #1d1d1f;
    }
  }
  


  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    right: 10px;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
  