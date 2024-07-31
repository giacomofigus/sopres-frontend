<script>
    import Jumbo from './Jumbo.vue';
    import Attività from './Attività.vue';
    import AppTestimonials from './AppTestimonials.vue';
    import AppCustomers from './AppCustomers.vue';
    import AppFAQContacts from './AppFAQ-Contacts.vue';
    import CookieBanner from '../CookieBanner.vue';
    

    export default {
  name: "AppMain",
  components: {
    Jumbo,
    Attività,
    AppTestimonials,
    AppCustomers,
    AppFAQContacts,
    CookieBanner
  },
  data() {
    return {
      showCookieBanner: true
    };
  },
  methods: {
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    eraseCookie(name) {
      document.cookie = name + '=; Max-Age=-99999999;';
    },
    acceptCookies() {
      this.setCookie('acceptedCookies', 'true', 365);
      this.showCookieBanner = false;
    },
    checkCookies() {
      if (this.getCookie('acceptedCookies')) {
        this.showCookieBanner = false;
      }
    }
  },
  mounted() {
    this.checkCookies();
  }
};

</script>

<template>

    <main>

        <!-- INSERITI IN UN DIV PER POTER FERMARE IL COLORE GRADIENTE -->
        <div class="container-1">
            <Jumbo/>
            <Attività/>
            <img src="../../img/Vector-up.png" alt="" class="w-full ">
        </div>
            
        <div class="container-2">
            <AppTestimonials/>
            <img src="../../img/Vector-up.png" alt="" class="w-full block down">
            <AppCustomers/>
            <AppFAQContacts/>

        </div>

        

        <CookieBanner v-if="showCookieBanner" @accept="acceptCookies" />
    </main>

    

</template>

<style lang="scss" scoped>
    *{
        font-family: "League Spartan", sans-serif;        
        color: white;
    }

    main .container-1{
        background: linear-gradient(180deg, #003049, #0073AF);  
    }

    main .container-2{
        background: linear-gradient(180deg,#0073AF,  #003049 );  
        .down{
            display: block;
            margin-top: -10px ;

            transform: scale(-1, -1);
        }
    }
    

</style> 
