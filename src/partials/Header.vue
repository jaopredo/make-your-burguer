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
        font-size: 30pt;
        background: $default-blue;
        border-radius: 50%;
    }
    
    .page-header {
        @include mixins.flex($jc: space-between);
        
        position: fixed;
        width: 100%;
        height: 80px;
        background: white;
        padding: 20px;
        top: 0;
        z-index: 2;
    }

    .logo-container a{
        @include mixins.flex();

        h1 {
            font-size: 18pt;
        }

        &:visited {
            color: $default-blue;
        }

        img {
            width: 50px;
            transition: transform 500ms;
            &:hover { transform: scale(1.1) }
        }
    }
</style>