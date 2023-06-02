<template>
    <li>
        <Icon icon="material-symbols:verified-rounded" color="#1847b8" />
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

<style scoped>

</style>