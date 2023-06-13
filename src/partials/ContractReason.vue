<template>
    <article>
        <section id="image-container-section">
            <div id="image-container-section-wrapper">
                <div>
                    <h2>Why choose UX studio as your app design partner? </h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                    <a href="#">LEARN MORE</a>
                </div>
                <img id="notebook-man" :src="ManNotebook" alt="Man with notebook">
            </div>
        </section>
        <section id="informations-container-section">
            <div class="section-wrapper">
                <div id="cellphone"/>
                <div class="div-text">
                    <h1>Build your dream<br>website today</h1>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. </p>
                    <ul>
                        <li><Icon class="list-icon" icon="maki:arrow" color="#f98949" />Support via E-mail and Phone</li>
                        <li><Icon class="list-icon" icon="maki:arrow" color="#f98949" />Multi-Language Support</li>
                    </ul>
                    <a href="#" class="blue-link">READ MORE</a>
                </div>
            </div>
        </section>
        <section id="get-started-container-section">
            <div id="wrapper">
                <Icon id="cellphone-icon" icon="mingcute:cellphone-line" color="white" />
                <div>
                    <h1>Let's Get Started</h1>
                    <p>Have a project or partnership in mind?</p>
                    <p>Contact us today for a free consultation.</p>
                </div>
                <a href="#" class="blue-link">CONTACT US</a>
            </div>
        </section>
    </article>
</template>

<script>
    import { Icon } from '@iconify/vue'
    import ManNotebook from '@/assets/man-notebook.jpg'

    export default {
        name: 'contract-reason-article',
        components: { Icon },
        data() {
            return {
                ManNotebook,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/cores.scss" as *;
    @use "../scss/mixins.scss";
    @use "sass:math";

    /* FIRST SECTION */
    #image-container-section-wrapper {
        position: relative;

        background: $default-blue;
        border-radius: 30px;
        padding: 30px;

        margin-top: 130px;

        width: 60%;
        height: 100%;
        max-height: 800px;

        div {
            color: white;
            width: 50%;
            height: 100%;

            position: absolute;

            left: 5%;
            top: 10%;

            h2 {
                font-size: 2.2vw;
                letter-spacing: 2%;
                width: 70%;
            }

            p {
                font-size: 1.4vw;;
                margin-top: 20px;
                width: 70%;
                line-height: 130%;
            }

            a {
                display: block;
                text-align: center;
                margin-top: 30px;
                color: white;
                border: 1px solid white;
                width: 40%;
                letter-spacing: 4px;
                font-weight: bold;
                font-size: .9vw;

                &:hover {
                    background: white;
                    color: black;
                }
            }
        }
    }

    #image-container-section {
        @include mixins.flex();
        
        width: 100%;
        height: 80vh; 
    }   

    #notebook-man {
        position: absolute;
        width: 30vw;
        border-radius: 20px;
        right: -50px;
        bottom: -50px;
    }

    /* SECOND SECTION */
    #informations-container-section {
        @include mixins.flex();
        margin-top: 150px;
        height: 100vh;
    }

    .section-wrapper {
        @include mixins.flex($g: 50px);
        position: relative;
        margin-left: 120px;
    }

    .div-text { 
        width:  50%;
        h1 {
            font-size: 4vw;
            font-weight: 100;
        }
        p {
            width: 70%;
            margin-top: 30px;
            font-size: 1.3vw;
        }

        ul {
            margin: 20px 0px;
            font-size: 1.6vw;
        }
    }
    
    $cellphone-before-size: 15vw;
    #cellphone {
        display: block;
        width: $cellphone-before-size * 1.5;
        height: $cellphone-before-size * 1.5;
        background: $default-blue;
        border-radius: 50%;
        position: relative;

        &::after {
            content: "";
            display: block;
            position: absolute;

            width: 20vw;
            height: 37vw;
            z-index: 1;

            background-image: url("../assets/cellphone.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;

            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%)
        }
    }

    /* THIRD SECTION */
    #get-started-container-section {
        @include mixins.flex();
        background-color: $default-gray;
        height: 30vh;
        margin-top: 100px;
    }

    #cellphone-icon {
        background: $default-blue;
        font-size: 4vw;
        border-radius: 50%;
    }

    #wrapper {
        @include mixins.flex($jc: flex-start, $g: 30px);
        position: relative;
        background: white;
        width: 80%;
        height: 80%;
        padding: 3vw;

        font-size: 1.35vw;

        div h1 {
            font-size: 3.9vw;
            font-weight: 100;
        }

        a {
            position: absolute;
            right: 4vw;
        }
    }
</style>