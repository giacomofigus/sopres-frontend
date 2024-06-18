<script>
  import axios from 'axios';
  import Product from './Product.vue';
  import ShowSingleProduct from './ShowSingleProduct.vue'; // Importa il componente modale
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    name: "ListProducts",
    components: {
      Product,
      ShowSingleProduct, // Registra il componente modale
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        products: [],
        categories: [],
        categorizedProducts: [],
        swiperRefs: {},
        selectedProduct: null,
        modalVisible: false,
        error: null
      };
    },
    methods: {
      onSwiper(category, swiperInstance) {
        this.swiperRefs[category] = swiperInstance;
      },
      prevSlide(category) {
        if (this.swiperRefs[category]) {
          this.swiperRefs[category].slidePrev();
        }
      },
      nextSlide(category) {
        if (this.swiperRefs[category]) {
          this.swiperRefs[category].slideNext();
        }
      },
      openModal(product) {
        this.selectedProduct = product;
        this.modalVisible = true;
      }
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/products')
        .then(response => {
          this.products = response.data.products;
  
          // Trova e salva le categorie uniche dai prodotti
          this.categories = this.products.reduce((uniqueCategories, product) => {
            if (!uniqueCategories.includes(product.categoria)) {
              uniqueCategories.push(product.categoria);
            }
            return uniqueCategories;
          }, []);
  
          // Raggruppa i prodotti per categoria
          this.categorizedProducts = this.categories.reduce((categorized, category) => {
            const categoryProducts = this.products.filter(product => product.categoria === category);
            categorized[category] = categoryProducts;
            return categorized;
          }, {});
  
          console.log(this.categorizedProducts);
        })
        .catch(error => {
          this.error = error.message;
        });
    }
  };
  </script>

<template>
    <section>
        <h3>
            Tutta la lista.
            <span class="test">Scegli quello che fa per te.</span>
        </h3>
        <div class="container-all">
            <div v-for="(categoryProducts, category) in categorizedProducts" :key="category" class="products-row mb-2 relative">
                <h4>{{ category }}</h4>
                <Swiper
                :spaceBetween="20"
                :breakpoints="{
                    480: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: {  slidesPerView: 4 }
                }"
                class="mySwiper"
                :id="`swiper-${category}`"
                ref="swiper"
                @swiper="onSwiper(category, $event)"
                >
                    <SwiperSlide v-for="product in categoryProducts" :key="product.id" @click="openModal(product)">
                        <Product :product="product" class="product" />
                    </SwiperSlide>
                    <div class="arrows left" @click="prevSlide(category)">
                        <fa class="fa" icon="chevron-left"/>
                    </div>
                    <div class="arrows right" @click="nextSlide(category)">
                        <fa class="fa" icon="chevron-right"/>
                    </div>
                </Swiper>

            </div>
        </div>
        <ShowSingleProduct :product="selectedProduct" :visible="modalVisible" @close="modalVisible = false" />
    </section>
  </template>
  
  
  
  <style lang="scss" scoped>
  section {
    padding-block: 50px;
  
    h3 {
      font-size: 35px;
      font-family: 'League Spartan', sans-serif;
      color: #f7562e;
      font-weight: 500;
      margin-bottom: 30px;
      padding-left: 80px;
  
      span {
        color: #f88a6e;
        font-family: 'League Spartan', sans-serif;
      }
    }
  
    .products-row {
      width: 100%;
  
      h4 {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.671);
        padding-left: 80px;
      }
  
      .mySwiper {
        // border: 1px solid green;
        margin-bottom: 100px;
        padding-left: 80px;
        padding-right: 80px;
        cursor: grab;
  
        .swiper-slide {
          display: flex;
          padding-block: 20px;
          overflow: hidden;
  
          .product {
            flex: 1;
          }
        }
      }
    }
  
    .arrows {
      color: #545455;
      background-color: #E8E8EB;
      padding-inline: 20px;
      padding-block: 10px;
      border-radius: 50px;
      font-size: 25px;

      position: absolute;
    }

    .left{
        z-index: 10;    
        top: 50%;
        left: 2.8%;
        transform: translate(-50%, -50%);
    }

    .right{
        z-index: 10;    
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
    }
  }
  
  @media screen and (max-width: 1024px) {
    section {
      // padding-inline: 20px;

      h3 {
        padding-left: 30px;
      }

      .products-row {
  
        h4 {
          padding-left: 30px;
        }

        .mySwiper {
          padding-left: 0;
          padding-right: 0;
          padding-inline: 30px;
         
        }
      }

      .left{
        z-index: 10;    
        top: 50%;
        left: 4%;
        transform: translate(-50%, -50%);
      }

      .right{
        z-index: 10;    
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media screen and (max-width: 640px){
    section {
      // padding-inline: 20px;

      h3 {
        padding-left: 10px;
      }

      .products-row {
  
        h4 {
          padding-left: 10px;
        }

        .mySwiper {
          padding-left: 10px;
          padding-right: 40px;
          
          
        }
      }

      .arrows{
        display: none;
      }

      .left{
        z-index: 10;    
        top: 50%;
        left: 10%;
        transform: translate(-50%, -50%);
      }

      .right{
        z-index: 10;    
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
  