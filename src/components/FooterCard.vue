<template>
    <li>
        <Icon :icon="icon" color="#1847b8" />
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

<style>

</style>