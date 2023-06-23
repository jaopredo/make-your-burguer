<template>
    <article id="introduction-article">
        <section id="introduction-text-section">
            <h1>Mobile App<br>Development</h1>
        </section>
        <section id="introduction-cards-section">
            <ul>
                <IntroCard v-for="card in cards" v-bind:key="card.key" v-bind="card"/>
            </ul>
        </section>
    </article>
</template>

<script>
    import IntroCard from '@/components/IntroCard.vue'

    export default {
        name: 'introduction-article',
        data() {
            return {
                cards: [  // Contém o nome do ícone e o texto que vai aparecer
                    {
                        key: 1,
                        src: 'mdi:strategy',
                        text: 'STRATEGY'
                    },
                    {
                        key: 2,
                        src: 'iconamoon:pen-fill',
                        text: 'UX DESIGN'
                    },
                    {
                        key: 3,
                        src: 'ph:desktop-bold',
                        text: 'DEVELOPMENT'
                    },
                    {
                        key: 4,
                        src: 'mdi:bug',
                        text: 'TESTING'
                    }
                ]
            }
        },
        components: { IntroCard }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/responsividade.scss" as resp;

    #introduction-article {
        @include resp.tablet {
            @include mixins.default-grid(2, 1);
            gap: 20px;
            height: 130vh;
            padding: 30px;
        }

        @include resp.cellphone {
            background-size: 1100px 600px;
            background-position: 50% 50%;
            padding: 10px;
            margin-top: 10vh;
        }

        background-image: url("../assets/notebook-background.jpg");
        background-repeat: no-repeat;
        background-size: 130% 110vh;
        background-attachment: fixed;

        min-height: 120vh;

        position: relative;
    }

    #introduction-text-section {
        @include resp.tablet {
            position: relative;
            left: auto;
            bottom: auto
        }

        h1 {
            @include resp.tablet {
                font-size: 10vw;
                position: absolute;
                bottom: 0;
            }
            @include resp.cellphone {
                font-size: 25pt;
            }
            font-size: 7vw;
            line-height: 120%;
            text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.418);
        }
        color: white;

        position: absolute;
        bottom: 130px;
        left: 80px;
    }

    #introduction-cards-section {
        @include resp.tablet {
            position: relative;
            right: auto;
            bottom: auto;
            width: 70%;
        }
        @include resp.cellphone {
            width: 100%;
            position: static;
        }
        position: absolute;
        right: 140px;
        bottom: 80px;
        width: 35%;

        ul {
            @include resp.cellphone {
                @include mixins.flex($d: column, $g: 10px);
                width: 100%;
            }
            @include mixins.default-grid(2, 2, 30px);
        }
    }
</style>