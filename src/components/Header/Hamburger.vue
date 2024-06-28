<script>
export default {
    name: "Hamburger",
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        menuAction() {
            this.isActive = !this.isActive;

            if (this.isActive) {
                this.$nextTick(() => {
                    const items = this.$el.querySelectorAll('.sidebar ul li');
                    items.forEach((item, index) => {
                        item.style.transitionDelay = `${index * 0.2}s`;
                        item.classList.add('fade-in');
                    });
                });
            } else {
                const items = this.$el.querySelectorAll('.sidebar ul li');
                items.forEach(item => {
                    item.classList.remove('fade-in');
                    item.style.transitionDelay = '0s';  // Reset the transition delay
                });
            }
        }
    }
};
</script>

<template>
    <div>
        <div class="hamb" :class="{active: isActive}" @click="menuAction"> 
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="sidebar" :class="{open: isActive}">
            <ul>
                <li @click="menuAction">
                    <router-link to="/">Home</router-link>
                </li>
                <li @click="menuAction">
                    <router-link to="/chi-siamo">Chi siamo</router-link>
                </li>
                <li @click="menuAction">
                    <router-link to="/prodotti">Prodotti</router-link>
                </li>
                <li class="rounded-full " @click="menuAction">
                    <router-link to="/dove-siamo" class="border py-2 px-3 rounded-full btn">Contattaci</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hamb {
    position: fixed; /* Posiziona l'icona hamburger in modo fisso */
    top: 20px; /* Distanza dal bordo superiore */
    right: 20px; /* Distanza dal bordo destro */
    z-index: 1000; /* Assicura che l'icona hamburger sia sopra la sidebar */
    display: none;
    flex-direction: column;
    width: 60px;
    cursor: pointer;
    margin-right: 20px;
    // border: 1px solid red;
    border-radius: 80px;

    span {
        background-color: #E07132;
        border-radius: 10px;
        height: 7px;
        margin: 4px 0;
        transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
        width: 50%;
    }

    span:nth-of-type(2) {
        width: 100%;
    }

    span:nth-of-type(3) {
        width: 75%;
    }
}

.hamb.active span:nth-of-type(1) {
    width: 80%;
    transform: translateY(19px) rotate(45deg);
}

.hamb.active span:nth-of-type(2) {
    opacity: 0;
}

.hamb.active span:nth-of-type(3) {
    width: 80%;
    transform: translateY(-11px) rotate(-45deg);
}

.sidebar {
    position: fixed;
    top: -100%; /* Nascosto fuori dallo schermo nella parte superiore */
    left: 0; /* A sinistra */
    width: 100%; /* Larghezza completa */
    height: 100%;
    background-color: #333;
    color: #fff;
    transition: top 0.3s ease;
    padding: 20px;
    z-index: 500; /* Assicura che la sidebar sia sotto l'icona hamburger */
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
        margin-top: 20px;
    }

    li {
        margin-block: 50px;
        font-size: 25px;
        font-weight: 600;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;

        .btn {
            background-color: #E07132;
            color: white;
            border: 0;
        }
    }

    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
}

.sidebar.open {
    top: 0; /* Visibile quando aperto */
}

@media screen and (max-width: 768px) {
    .hamb {
        display: flex;
    }

    .sidebar {
        display: flex;
    }
}
</style>
