<script>
  import axios from 'axios';
  import Product from './Product.vue';
  import ShowSingleProduct from './ShowSingleProduct.vue'; 
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';

  export default {
    name: "ListProducts",
    components: {
      Product,
      ShowSingleProduct, 
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
        document.body.style.overflow = 'hidden';
      },
      closeModal(){
        this.modalVisible = false;
        document.body.style.overflow = '';
      }
    },
    mounted() {
      axios.get('http://lightsalmon-mandrill-381882.hostingersite.com/api/products')
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
      <!-- TITOLO CON ANIMAZIONE -->
      <div class="animation">
        <span class="first">Tutta la lista.</span>
        <span class="slide">
          <span class="second">Scegli quello che fa per te.</span>
        </span>
      </div>

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
                        <Product :product="product" class="product bottom-up-animation" />
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
        <transition name="modal">
          <ShowSingleProduct :product="selectedProduct" :visible="modalVisible" @close="closeModal" />
        </transition>
    </section>
</template>
  
  
  
<style lang="scss" scoped>

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}

  section {
    padding-block: 150px;
    
    .animation{
      animation: fadeIn 1s forwards;
      opacity: 0;
      transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
      .first{
        display: inline-block;
        animation: firstspan 1s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);
        z-index: 1;
        position: relative;

        font-size: 35px;
        font-family: 'League Spartan', sans-serif;
        color: #f7562e;
        font-weight: 500;
        margin-bottom: 30px;
        padding-left: 80px;
      }

      .slide{
        display: inline-flex;
        overflow: hidden;
        
        .second{
          z-index: -1;
          display: inline-block;
          animation: secondspan 1s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);

          color: #6d6d6d;
          font-family: 'League Spartan', sans-serif;
          font-weight: 400;
          font-size: 35px;
          padding-left: 5px;
        }
      }
    }  
  
    .container-all{
      // border: 1px solid red;
      .products-row {
        // border: 1px solid green;
        margin-bottom: 80px;
        width: 100%;
    
        h4 {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.671);
          padding-left: 90px;
        }
    
        .mySwiper {
          // border: 1px solid blue;
          padding-left: 90px;
          padding-right: 90px;
          cursor: grab;
    
          .swiper-slide {
            display: flex;
            padding-block: 20px;
            overflow: hidden;
            // border: 1px solid red;
            

            .product {
              flex: 1;
              opacity: 1;
              transition: opacity 0.5s ease;
            }
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
        left: 2.2%;
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

      .animation{
        .first{
          padding-left: 30px;
        }
      } 

      .container-all{

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
      padding-block: 80px;
      

      .animation{

      .first{
        font-size: 32px;
        padding-left: 10px;
        margin-bottom: -5px; 
      }

      .slide{
 
        
        .second{
          font-size: 32px;
          
          padding-left: 10px;
        }
      }
    }  

      .container-all{
        margin-top: 50px;
        .products-row {
    
          h4 {
            padding-left: 10px;
          }
  
          .mySwiper {
            padding-left: 10px;
            padding-right: 40px;
            
            
          }
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




  // ANIMAZIONI //
  // Titolo
  @keyframes fadeIn{
    0%{
      opacity: 0;
      transform: scale(1);
    }
    50%{
      opacity: 1;
      transform: scale(1);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes firstspan{
    0%{
      transform: translateX(50%);
    }
    60%{
      transform: translateX(50%);
    }
    100%{
      transform: translateX(0%);
    }
  }

  @keyframes secondspan{
    0%{
      transform: translateX(-100%);
    }
    60%{
      transform: translateX(-100%);
    }
    100%{
      transform: translateX(0%);
    }
  }



  // Cards
  @keyframes bottomUp{
    0%{
      transform: translateY(50px);
    }
    50%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(0);
    }
  }

  .bottom-up-animation{
    animation: bottomUp 1.5s forwards;
    
  }
</style>
  