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
                            <input type="email" name="email" id="email">
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="password">Password: </label>
                        <div class="input-wrapper">
                            <Icon class="input-icon" icon="uil:padlock"/>
                            <input :type="passwType" name="password" id="password">
                            <button id="icon-button" @click="eyeClick"><Icon id="eye" :icon="eyeState"/></button>
                        </div>
                        <a href="#">Forget Password?</a>
                    </div>
                    <button id="send-button">SEND</button>
                </form>
                <div id="singup-wrapper">
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
                passwType: 'password'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/cores.scss" as *;
    @use "../scss/mixins.scss";
    @use "sass:color";

    $main-color: rgb(100, 100, 247);

    #login-form-container {
        @include mixins.flex();
        // background-image: url("../assets/notebook-background.jpg");
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-size: 100%;
        background: $main-color;
        min-height: 100vh;

        // &::after {
        //     content: "";
        //     width: 100vw;
        //     height: 100vh;
        //     display: block;
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     background: rgba(255, 255, 255, 0.042);
        //     backdrop-filter: blur(10px);
        //     z-index: 0;
        // }
    }
    #login-form-wrapper {
        @include mixins.flex($d: column);
        z-index: 1;
        background: white;

        height: 70vh;
        width: 400px;
        padding: 30px;
        border-radius: 30px;

        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.281);

        position: relative;
    }

    .general-wrapper {
        @include mixins.flex($d: column, $ai: flex-start);
        position: relative;
    }

    @keyframes show {
        from {
            position: absolute;
            left: 20px;
        }
        to {
            left: 60px;
            opacity: 1;
        }
    }

    #back-icon {
        @include mixins.flex();
        color: rgb(255, 255, 255);
        height: fit-content;
        position: relative;
        
        #back-icon-icon {
            font-size: 30pt;
            background: $main-color;
            z-index: 1;
        }
        .go-back-text {
            position: absolute;
            opacity: 0;
            z-index: 0;
        }

        &:hover .go-back-text {
            animation: show 500ms linear 0s 1 normal;
            animation-fill-mode: forwards;
        }
    }

    .input-container {
        @include mixins.flex($d: column);
        width: 100%;

        label {
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            align-self: flex-start;
        }
        a {
            align-self: flex-end;
            font-weight: bold;
            display: block;
            text-align: right;
        }
    }

    #login-form {
        @include mixins.flex($d: column, $g: 10px);
    }

    $input-size: 15pt;
    $input-width: 200px;
    .input-wrapper {
        @include mixins.flex($jc: flex-start);
        color: #9d9d9d;
        border-bottom: 2px solid #9d9d9d;
        width: 100%;

        input {
            font-size: $input-size;
            padding: 10px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            width: $input-width;
        }
    }
    .input-icon {
        font-size: $input-size + 5pt;
    }

    #icon-button {
        background-color: transparent;
        font-size: 20pt;

        &:hover {
            cursor: pointer;
        }
    }

    $button-color-adjust: -30;
    #send-button {
        width: 100%;
        background-color: $main-color;
        color: white;
        padding: 10px;
        border-radius: 20px;
        font-size: 12pt;
        margin: 20px 0;

        &:hover {
            cursor: pointer;
            background-color: color.adjust($main-color, $red: $button-color-adjust, $green: $button-color-adjust, $blue: $button-color-adjust);
        }
    }

    #singup-wrapper {
        @include mixins.flex($d: column);

        a {
            transition: transform 500ms;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
</style>