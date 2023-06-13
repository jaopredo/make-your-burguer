<template>
    <li class="intro-card">
        <Icon class="intro-card-icon" :icon="src"/>
        <p>{{ text }}</p>
    </li>
</template>

<script>
    import { Icon } from '@iconify/vue'

    export default {
        name: 'intro-card',
        props: [ 'src', 'text' ],
        components: { Icon }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

    .intro-card {
        @include mixins.flex($d: column);

        background: white;
        height: 25vh;
        border-radius: 20px;
        font-size: 1.9vw;
        padding: 20px;

        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.56);

        p {
            font-family: 'Oswald';
        }
    }

    .intro-card-icon {
        font-size: 6vw;
        color: $default-blue;
        background: $default-gray;
        border-radius: 50%;
        padding: 20px;
    }
</style>