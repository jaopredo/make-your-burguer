<template>
    <article>
        <section>
            <h1>Mobile App<br>Development</h1>
        </section>
        <section>
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

<style scoped>

</style>