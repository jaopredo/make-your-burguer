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
    @use "../scss/responsividade.scss" as resp;
    @use "../scss/mixins.scss";
    @use "sass:math";

    /* FIRST SECTION */
    #image-container-section-wrapper {
        @include resp.tablet {
            width: 80%;
            max-height: 450px;
        }
        position: relative;

        background: $default-blue;
        border-radius: 30px;
        padding: 30px;

        margin-top: 130px;

        width: 60%;
        height: 100%;
        max-height: 800px;

        div {
            @include resp.tablet {
                width: 100%;
            }
            @include resp.cellphone {
                position: static;
            }
            color: white;
            width: 50%;
            height: 100%;

            position: absolute;

            left: 5%;
            top: 10%;

            h2 {
                @include resp.tablet {
                    font-size: 3.5vw;
                    width: 65%;
                }
                @include resp.cellphone {
                    font-size: 16.5pt;
                    width: 100%;
                }
                font-size: 2.2vw;
                letter-spacing: 2%;
                width: 70%;
            }

            p {
                @include resp.cellphone {
                    width: 100%;
                    font-size: 12pt;
                }
                font-size: 1.4vw;;
                margin-top: 20px;
                width: 70%;
                line-height: 130%;
            }

            a {
                @include resp.tablet {
                    width: 150px;
                }
                @include resp.cellphone {
                    font-size: 10pt;
                    width: 200px;
                    border-radius: 40px;
                    padding: 10px;
                }
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
        @include resp.tablet {
            height: 130vh;
        }
        @include mixins.flex();
        
        width: 100%;
        height: 80vh; 
    }   

    #notebook-man {
        @include resp.tablet {
            width: 40vw;
            left: 0;
            right: auto;
            bottom: 0;
            transform: translate(50%, 70%);
        }
        @include resp.cellphone {
            width: 60vw;
            height: auto;
            transform: translate(15%, 80%);
        }

        position: absolute;
        width: 30vw;
        border-radius: 20px;
        right: -50px;
        bottom: -50px;
    }

    /* SECOND SECTION */
    #informations-container-section {
        @include resp.tablet {
            padding-top: 100px;
        }
        @include resp.cellphone {
            height: 180vh;
            width: 100vw;
        }
        @include mixins.flex();
        margin-top: 150px;
        height: 100vh;
    }

    .section-wrapper {
        @include resp.cellphone {
            flex-direction: column;
            gap: 100px;
            margin: auto;
        }

        @include mixins.flex($g: 50px);
        position: relative;
        margin-left: 120px;
    }

    .div-text { 
        width:  50%;
        h1 {
            @include resp.cellphone {
                font-size: 17pt;
            }
            font-size: 4vw;
            font-weight: 100;
        }
        p {
            @include resp.cellphone {
                font-size: 7.5pt;
            }
            width: 70%;
            margin-top: 30px;
            font-size: 1.3vw;
        }

        ul {
            @include resp.cellphone {
                font-size: 8pt;
            }
            margin: 20px 0px;
            font-size: 1.6vw;
        }
    }
    
    $cellphone-before-size: 15vw;
    #cellphone {
        @include resp.cellphone {
            width: 50vw;
            height: 50vw;
        }
        display: block;
        width: $cellphone-before-size * 1.5;
        height: $cellphone-before-size * 1.5;
        background: $default-blue;
        border-radius: 50%;
        position: relative;

        &::after {
            @include resp.cellphone {
                width: 100%;
                height: 170%;
            }
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
        @include resp.cellphone {
            min-height: 500px;
            max-height: 600px;
        }
        @include mixins.flex();
        background-color: $default-gray;
        height: 30vh;
    }

    #cellphone-icon {
        @include resp.cellphone {
            font-size: 50pt;
        }
        background: $default-blue;
        font-size: 4vw;
        border-radius: 50%;
    }

    #wrapper {
        @include resp.cellphone {
            justify-content: center;
            flex-direction: column;
            font-size: 9pt;
            text-align: center;
        }
        @include mixins.flex($jc: flex-start, $g: 30px);
        position: relative;
        background: white;
        width: 80%;
        height: 80%;
        padding: 3vw;

        font-size: 1.35vw;

        div h1 {
            @include resp.cellphone { font-size: 28pt; }
            font-size: 3.9vw;
            font-weight: 100;
        }

        a {
            @include resp.cellphone {
                position: static;
                font-size: 11pt;
                padding: 20px;
                border-radius: 40px;
            }
            position: absolute;
            right: 4vw;
        }
    }
</style>