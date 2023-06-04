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

<style lang="scss">
    @use './scss/cores.scss' as *;
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

    
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        border: none;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif
    }

    a {
        text-decoration: none;
        color: $default-blue;
    }

    ul {
        list-style: none;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
    }

    h1, h2, h3 {
        font-family: 'Oswald';
    }
</style>
