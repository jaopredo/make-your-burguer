<template>
    <footer id="footer">
        <section id="footer-cards-section-wrapper">
            <ul id="footer-card-list">
                <FooterCard v-for="card in cardsInfos" v-bind:key="card.id" v-bind="card" />
            </ul>
        </section>
        <section id="footer-section-wrapper">
            <div id="footer-text-section-wrapper">
                <h1>Get In Touch</h1>
                <p><strong>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</strong></p>
                <p>Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
                <ul>
                    <li><Icon icon="ri:facebook-fill" /></li>
                    <li><Icon icon="mdi:twitter" /></li>
                    <li><Icon icon="mdi:instagram" /></li>
                    <li><Icon icon="ri:linkedin-fill" /></li>
                </ul>
            </div>
            <div id="footer-form-section-wrapper">
                <form id="footer-form" @submit="submit">
                    <div id="inputs-container">
                        <div class="input-container"><label for="email">Email</label><input placeholder="Entry a valid email address" type="email" name="email" id="email"></div>
                        <div class="input-container"><label for="name">Name</label><input placeholder="Enter your name" type="text" name="name" id="name"></div>
                        <div class="input-container"><label for="message">Message</label><textarea placeholder="Enter a message" name="message" id="message" cols="30" rows="10"></textarea></div>
                    </div>
                    <button>SUBMIT</button> 
                </form>
            </div>
        </section>
    </footer>
</template>

<script>
    import FooterCard from '@/components/FooterCard.vue'
    import { Icon } from '@iconify/vue'

    export default {
        name: 'page-footer',
        components: { FooterCard, Icon },
        data() {
            return {
                cardsInfos: [
                    {
                        id: 1,
                        title: 'OUR MAIN OFFICE',
                        text: 'SoHo 94 Broadway St New York, NY 1001',
                        icon: 'icon-park-solid:local'
                    },
                    {
                        id: 2,
                        title: 'PHONE NUMBER',
                        text: '234-9876-5400',
                        icon: 'ic:round-phone'
                    },
                    {
                        id: 3,
                        title: 'FAX',
                        text: '1-234-567-8900',
                        icon: 'ic:round-phone'
                    },
                    {
                        id: 4,
                        title: 'EMAIL',
                        text: 'test@domine.com',
                        icon: 'ic:baseline-email'
                    },
                ]
            }
        },
        methods: {
            submit(e) {
                e.preventDefault()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;
    @use "../scss/responsividade.scss" as resp;
    @use "sass:color";

    footer#footer {
        @include resp.cellphone { flex-direction: column; height: fit-content; padding: 10px; }
        @include mixins.flex();
        color: white;
        height: 100vh;
        background: $default-blue;
        position: relative;
        padding: 30px;
    }

    /* PRIMEIRA SECTION */
    #footer-cards-section-wrapper {
        @include resp.cellphone {
            transform: none;
            left: auto;
            position: static;
            width: 100%;
            transform: translateY(-10%);
        }
        width: 90%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #footer-card-list {
        @include resp.cellphone {
            flex-direction: column;
        }
        @include mixins.flex($g: 30px);
    }

    #footer-section-wrapper {
        @include resp.cellphone {
            flex-direction: column;
            margin-top: -40px;
        }
        @include mixins.flex($g: 20px);
        width: 90%;
        height: 55%;
        margin-top: 100px;
    }

    /* SEGUNDA SECTION */
    #footer-text-section-wrapper {
        @include resp.cellphone {
            text-align: left;
            width: 100%;
        }
        @include mixins.flex($d: column, $g: 15px, $ai: flex-start, $jc: space-between);
        height: 100%;
        width: 70%;
        h1 {
            @include resp.cellphone {
                font-size: 28pt;
            }
            font-size: 4vw;
            font-weight: 100;
        }
        p {
            @include resp.cellphone {
                font-size: 9.5pt;
            }
            line-height: 170%;
            font-size: 1.4vw;
        }
        ul {
            @include resp.cellphone {
                font-size: 20pt;
            }
            @include mixins.flex($g: 20px);
            font-size: 3vw;
        }
    }

    /* TERCEIRA SECTION */
    #footer-form-section-wrapper{
        @include resp.cellphone {
            flex-basis: 100%;
        }
        flex-basis: 50%;
    }

    $color-adjust: -30;
    #footer-form {
        @include mixins.flex($d: column, $g: 10px);
        width: 100%;

        button {
            @include resp.cellphone {
                font-size: 9pt;
            }
            padding: 15px;
            width: 100%;
            font-size: 1.5vw;

            &:hover {
                background-color: color.adjust(#F0F0F0, $red: $color-adjust, $green: $color-adjust, $blue: $color-adjust);
                cursor: pointer;
            }
        }
    }
    #inputs-container {
        @include resp.cellphone { flex-direction: column; }
        @include mixins.flex($ai: flex-start, $g: 20px);
        flex-wrap: wrap;
    }
    .input-container {
        @include resp.cellphone {
            flex-basis: none;
            flex-grow: 0;
            width: 100%;
        }
        @include mixins.flex($d: column, $ai: flex-start);
        flex-basis: 45%;
        flex-grow: 1;

        label {
            @include resp.cellphone { font-size: 11pt; }
            font-weight: bold;
            font-size: 1.3vw;
        }

        input, textarea {
            @include resp.cellphone { font-size: 11pt; }
            width: 100%;
            padding: 10px;
            color: white;
            border-bottom: 3px solid white;
            background-color: $default-blue;
            resize: none;
            font-size: 1.3vw;
            
            &::placeholder {
                color: #869FDA;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }
</style>