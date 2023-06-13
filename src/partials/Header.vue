<script>
    import { Icon } from '@iconify/vue'
    import Logo from '@/assets/logo.png'

    export default {
        name: 'main-header',
        data() {
            return {
                logged: false,
                Logo
            }
        },
        components: { Icon }
    }
</script>

<template>
    <header class="page-header">
        <div class="logo-container">
            <router-link to="/">
                <img :src="Logo" alt="Logo">
            </router-link>
        </div>
        <div class="login-container" v-if="!logged">
            <router-link to="/login">Login</router-link>
            <Icon id="login-icon" icon="ion:person" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;

    .login-container {
        @include mixins.flex($g: 5px);

        transition: transform 500ms;
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    #login-icon {
        color: white;
        font-size: 3.1vw;
        background: $default-blue;
        border-radius: 50%;
    }
    
    .page-header {
        @include mixins.flex($jc: space-between);
        
        position: fixed;
        width: 100%;
        height: 10vh;
        background: white;
        padding: 20px;
        top: 0;
        z-index: 3;
        margin-top: 0;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.235);

        a {
            font-size: 1.5vw;
        }
    }

    .logo-container a{
        @include mixins.flex();
        font-size: 1.8vw;

        &:visited {
            color: $default-blue;
        }

        img {
            height: 7vh;
            transition: transform 500ms;
            &:hover { transform: scale(1.1) }
        }
    }
</style>