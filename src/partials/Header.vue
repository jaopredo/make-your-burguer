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
            <router-link to="/login"><span class="text">Login</span> <Icon id="login-icon" icon="ion:person" /></router-link>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;
    @use "../scss/responsividade.scss" as resp;

    .login-container {
        @include mixins.flex($g: 5px);

        transition: transform 500ms;
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
        a {
            @include mixins.flex($g: 15px);
        }
    }

    #login-icon {
        @include resp.cellphone {
            font-size: 30pt;
        }
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
    }

    .text {
        @include resp.cellphone { display: none; }
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