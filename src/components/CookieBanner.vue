<script>
export default {
  name: "CookieBanner",
  props: ['acceptCookies'],
  methods: {
    accept() {
      this.$emit('accept');
    }
  }
};
</script>

<template>
  <div class="overlay">
    <div class="cookie-banner">
        <p>
            <h4>Questo sito web utilizza cookies</h4>
            Noi e terze parti selezionate raccogliamo informazioni personali come specificato nella <router-link to="/privacy-&-policy">privacy  policy</router-link>  e utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di funzionalità, esperienza, misurazione e marketing (con annunci personalizzati) come specificato nella <router-link to="/privacy-&-policy">cookie policy</router-link>.
    
            Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze. Il rifiuto del consenso può rendere non disponibili le relative funzioni.
    
            Usa il pulsante “Accetta” per acconsentire. Usa il pulsante “Rifiuta” per continuare senza accettare.
        </p>

        <div class="flex justify-between">
            <button class="scopri">Scopri di più e personalizza</button>
            <div>

                <button class="accetta me-2" @click="accept">Accetta</button>
                <button class="accetta">Rifiuta</button>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Sfondo semi-trasparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cookie-banner {
  background: #f5f5f5;
  color: black;
  padding: 20px;
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  width: 40%;

  p{
    margin-bottom: 30px;
  }

  h4{
    font-weight: 900;
    margin-bottom: 20px
  }

  a{
    color: #0073af;
  }

  a:hover{
    text-decoration: underline;
  }
}

.cookie-banner button {
  margin-top: 10px;
  padding: 8px 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

.cookie-banner .accetta{
    background: #FF5E37;
    color: white;
}

.cookie-banner .scopri{
    border:1px solid #FF5E37;
    color: #FF5E37;
}

.cookie-banner .scopri:hover{
    transition: 0.2s;
    background-color: #FF5E37;
    color: white;
}


</style>
