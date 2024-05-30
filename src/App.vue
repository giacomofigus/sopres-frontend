<script>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';

    export default{
        components:{
            AppHeader,
            AppFooter
        },
        data(){

        },
        methods: {

        },
        mounted(){

        }
    };

</script>

<template>
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
</template>

<style lang="scss" scoped>


    

</style>
