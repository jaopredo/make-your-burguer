<template>
    <article>
        <section id="image-container-section">
            <div>
                <h2>Why choose UX studio as your app design partner? </h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                <a href="#">LEARN MORE</a>
            </div>
            <img id="notebook-man" :src="ManNotebook" alt="Man with notebook">
        </section>
        <section id="informations-container-section">
            <div class="section-wrapper">
                <img id="cellphone" :src="Cellphone" alt="Cellphone">
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
    import Cellphone from '@/assets/cellphone.png'

    export default {
        name: 'contract-reason-article',
        components: { Icon },
        data() {
            return {
                ManNotebook,
                Cellphone
            }
        }
    }
</script>

<style lang="scss">
    @use "../scss/cores.scss" as *;
    @use "../scss/mixins.scss";

    .blue-link {
        display: block;
        color: white;
        background: $default-blue;
        width: fit-content;
        text-align: center;
        font-family: 'Open Sans';
        font-size: 9pt;
        font-weight: bolder;
        letter-spacing: 4px;

        &:hover {
            background: #292929;
        }
    }

    /* FIRST SECTION */
    #image-container-section {
        width: 60%;
        margin-left: 150px;
        position: relative;
        margin-top: 30px;
        color: white;
        background: $default-blue;
        border-radius: 20px;
        padding: 30px;
        height: 510px;

        div {
            position: absolute;
            top: 80px;
            left: 80px;
            width: 65%;

            h2 {
                font-size: 20pt;
                letter-spacing: 2px;
                width: 70%;
            }

            p {
                font-size: 14pt;
                margin-top: 20px;
                width: 70%;
                line-height: 30px;
            }

            a {
                display: block;
                text-align: center;
                margin-top: 30px;
                color: white;
                border: 1px solid white;
                width: 200px;
                letter-spacing: 4px;
                font-weight: bold;
                font-size: 9pt;

                &:hover {
                    background: white;
                    color: black;
                }
            }
        }
    }

    #notebook-man {
        position: absolute;
        width: 550px;
        border-radius: 20px;
        right: -30%;
        bottom: -80px;
    }

    /* SECOND SECTION */
    #informations-container-section {
        @include mixins.flex();
        margin-top: 150px;
    }

    .section-wrapper {
        @include mixins.flex($g: 50px);
        position: relative;
        margin-left: 120px;
    }

    .div-text {
        width:  50%;
        h1 {
            font-size: 40pt;
            font-weight: 100;
        }
        p {
            width: 70%;
            margin-top: 30px;
            font-size: 12pt;
        }

        ul {
            margin: 20px 0px;
            font-size: 16pt;
        }

        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 300px;
            height: 300px;
            background: $default-blue;
            border-radius: 50%;
            position: absolute;
            z-index: 0;

            left: 130px;
            bottom: 100px;
        }
    }
    
    #cellphone {
        display: block;
        width: 300px;
        z-index: 1;
    }

    /* THIRD SECTION */
    #get-started-container-section {
        @include mixins.flex();
        background-color: $default-gray;
        height: 250px;
        margin-top: 100px;
    }

    #cellphone-icon {
        background: $default-blue;
        font-size: 40pt;
        border-radius: 50%;
    }

    #wrapper {
        @include mixins.flex($jc: flex-start, $g: 30px);
        position: relative;
        background: white;
        width: 80%;
        padding: 30px;

        font-size: 18pt;

        div h1 {
            font-size: 39pt;
            font-weight: 100;
        }

        a {
            position: absolute;
            right: 40px;
        }
    }
</style>