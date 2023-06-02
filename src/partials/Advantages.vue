<template>
    <article>
        <h1>We create super-awsome designs</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <ul class="advantagesList">
            <AdvCard v-for='advantage in advantagesList' v-bind:key="advantage.key" v-bind="advantage" />
        </ul>
    </article>
</template>

<script>
    import AdvCard from '@/components/AdvCard.vue';
    export default {
        name: 'advantages-article',
        components: { AdvCard },
        data() {
            return {
                advantagesList: [
                    {
                        key: 1,
                        title: 'Amazing Design',
                        text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
                    },
                    {
                        key: 2,
                        title: 'Copywriting',
                        text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
                    },
                    {
                        key: 3,
                        title: 'Development',
                        text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
                    },
                    {
                        key: 4,
                        title: '24/7 Support',
                        text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>