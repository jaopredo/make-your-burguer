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
    <header>
        <div>
            <router-link to="/">
                <img :src="Logo" alt="Logo">
                <h1>WE MAKE MOBILE APPS</h1>
            </router-link>
        </div>
        <div v-if="!logged">
            <router-link to="/login">Login</router-link>
            <Icon icon="ion:person" />
        </div>
    </header>
</template>