<template>
    <div id="login-form-container">
        <div class="general-wrapper">
            <router-link id="back-icon" to="/">
                <Icon id="back-icon-icon" icon="raphael:arrowleft"/>
                <span class="go-back-text">BACK</span>
            </router-link>
            <div id="login-form-wrapper">
                <h1>Login</h1>
                <form id="login-form" @submit="submit">
                    <div class="input-container">
                        <label for="email">Email: </label>
                        <div class="input-wrapper">
                            <Icon class="input-icon" icon="bi:person-fill"/>
                            <input v-model="form.email" type="email" name="email" id="email">
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="password">Password: </label>
                        <div class="input-wrapper">
                            <Icon class="input-icon" icon="uil:padlock"/>
                            <input v-model="form.password" :type="passwType" name="password" id="password">
                            <button id="icon-button" type="button" @click="eyeClick"><Icon id="eye" :icon="eyeState"/></button>
                        </div>
                        <a href="#">Forget Password?</a>
                    </div>
                    <button id="send-button">SEND</button>
                </form>
                <div id="signup-wrapper">
                    <p>New here?</p>
                    <router-link to="signup">CREATE ACCOUNT</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Icon } from '@iconify/vue';

    export default {
        name: 'login-view',
        components: { Icon },
        methods: {
            submit(e) {
                e.preventDefault()

                console.log(this.form)
            },
            eyeClick() {
                const open = 'mdi:eye'
                const closed = 'basil:eye-closed-solid'

                this.eyeState = this.eyeState==open?closed:open
                this.passwType = this.eyeState==open?'text':'password'
            }
        },
        data() {
            return {
                eyeState: 'mdi:eye',
                passwType: 'password',

                form: {
                    email: '',
                    password: '',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/login/login-signup.scss";
</style>