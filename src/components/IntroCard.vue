<template>
    <li>
        <Icon :icon="src"/>
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

<style scoped>

</style>