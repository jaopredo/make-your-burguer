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

    #introduction-article {
        background-image: url("../assets/notebook-background.jpg");
        background-repeat: no-repeat;
        background-size: 100%;

        min-height: 120vh;
        margin-top: 80px;

        position: relative;
    }

    #introduction-text-section {
        h1 {
            font-size: 7vw;
            line-height: 120px;
        }
        color: white;

        position: absolute;
        bottom: 130px;
        left: 80px;
    }

    #introduction-cards-section {
        position: absolute;
        right: 140px;
        bottom: 80px;
        width: 35%;

        ul {
            @include mixins.default-grid(2, 2, 30px);
        }
    }
</style>