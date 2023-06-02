<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<script>
    /* PARTIALS */
    import Header from './partials/Header.vue'
    
    export default {
        name: 'App',
        components: { Header }
    }
</script>

<style>
    #app {
        padding: 0;
        margin: 0;
        border: none;
        box-sizing: border-box;
    }
</style>
