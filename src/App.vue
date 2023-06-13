<template>
    <router-view/>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @use './scss/cores.scss' as *;
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    
    #app {
        min-height: 100vh;
    }

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

        padding: 1vw 2vw;
        border-radius: 3vw;
        font-family: 'Open Sans';
    }
    .blue-link {
        display: block;
        color: white;
        background: $default-blue;
        width: fit-content;
        text-align: center;
        font-family: 'Open Sans';
        font-size: .9vw;
        font-weight: bolder;
        letter-spacing: 4%;

        &:hover {
            background: #292929;
        }
    }

    ul {
        list-style: none;
    }

    h1, h2, h3 {
        font-family: 'Oswald';
    }
</style>
