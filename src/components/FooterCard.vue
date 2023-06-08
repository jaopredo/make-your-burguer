<template>
    <li class="footer-card">
        <Icon class="footer-card-icon" :icon="icon" color="#1847b8" />
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </li>
</template>

<script>
    import { Icon } from '@iconify/vue'
    export default {
        name: 'footer-card',
        props: [ 'icon', 'text', 'title' ],
        components: { Icon }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;

    .footer-card {
        @include mixins.flex($d: column, $g: 20px);
        width: 100%;
        text-align: center;
        background: white;
        padding: 30px;
        border-radius: 30px;
        color: black;

        height: 230px;

        h1 {
            font-weight: 100;
        }
    }

    .footer-card-icon {
        font-size: 50pt;
    }
</style>