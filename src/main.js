import { createApp } from 'vue'
import { router } from './router'

import 'swiper/swiper-bundle.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import './assets/style.css'
import './styles/general.scss';

library.add(fas);

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')
