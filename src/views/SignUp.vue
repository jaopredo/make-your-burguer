<template>
    <div id="login-form-container">
        <div class="general-wrapper">
            <router-link id="back-icon" to="/">
                <Icon id="back-icon-icon" icon="raphael:arrowleft"/>
                <span class="go-back-text">BACK</span>
            </router-link>
            <div id="login-form-wrapper">
                <h1>Sign Up</h1>
                <form id="login-form" method="POST" @submit="submit">
                    <div class="input-container">
                        <label for="email">Email: </label>
                        <div class="input-wrapper">
                            <Icon class="input-icon" icon="bi:person-fill"/>
                            <input v-model="form.email" type="email" name="email" id="email">
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="password">Password: </label>
                        <div class="input-wrapper passw-wrapper">
                            <Icon class="input-icon" icon="uil:padlock"/>
                            <input @click="passwordFocus" v-model="form.password" :type="passwType" name="password" id="password">
                            <button
                                type="button"
                                id="icon-button"
                                @click="eyeClick"
                            ><Icon id="eye" :icon="eyeState"/></button>
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="confPassw">Confirm Password: </label>
                        <div class="input-wrapper passw-wrapper">
                            <Icon class="input-icon" icon="uil:padlock"/>
                            <input @click="passwordFocus" v-model="form.confPassw" :type="confPasswType" name="confPassw" id="confPassw">
                            <button
                                type="button"
                                id="icon-button"
                                @click="confEyeClick"
                            ><Icon id="eye" :icon="confEyeState"/></button>
                        </div>
                    </div>
                    <button id="send-button">SEND</button>
                </form>
                <div id="singup-wrapper">
                    <p>Already have an account?</p>
                    <router-link to="login">LOGIN</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Icon } from '@iconify/vue';

    export default {
        name: 'singup-page',
        components: { Icon },
        methods: {
            submit(e) {
                e.preventDefault()
                
                const { password, confPassw } = this.form
                if (password !== confPassw) {
                    const inputWrappers = document.getElementsByClassName('passw-wrapper')

                    for (let element of inputWrappers) {
                        element.classList.add('error')
                    }
                    
                    return
                }
            },
            eyeClick() {
                const open = 'mdi:eye'
                const closed = 'basil:eye-closed-solid'

                this.eyeState = this.eyeState==open?closed:open
                this.passwType = this.eyeState==open?'text':'password'
            },
            confEyeClick() {
                const open = 'mdi:eye'
                const closed = 'basil:eye-closed-solid'

                this.confEyeState = this.confEyeState==open?closed:open
                this.confPasswType = this.confEyeState==open?'text':'password'
            },
            passwordFocus() {
                const inputWrappers = document.getElementsByClassName('passw-wrapper')

                for (let element of inputWrappers) {
                    element.classList.remove('error')
                }
            }
        },
        data() {
            return {
                eyeState: 'mdi:eye',
                confEyeState: 'mdi:eye',
                confPasswType: 'password',
                passwType: 'password',

                form: {
                    email: '',
                    password: '',
                    confPassw: ''
                }
            }
        }
}
</script>

<style lang="scss" scoped>
    @import "../scss/login/login-signup.scss";
</style>