<template>
    <li id="advantage-card">
        <Icon class="advantage-card-icon" icon="material-symbols:verified-rounded" color="#1847b8" />
        <div>
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
        </div>
    </li>
</template>

<script>
    import { Icon } from '@iconify/vue';
    export default {
        name: 'advantage-card',
        components: { Icon },
        props: [ 'title', 'text' ]
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    #advantage-card {
        @include mixins.flex($g: 20px);

        background: white;
        padding: 30px;
        border-radius: 20px;
        text-align: justify;

        h2 {
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 20px;
        }
    }

    .advantage-card-icon {
        font-size: 70pt;
        align-self: flex-start;
    }
</style>