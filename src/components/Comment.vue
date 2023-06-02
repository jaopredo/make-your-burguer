<template>
    <li>
        <div>
            <Icon icon="entypo:quote" color="white" />
            <p>{{ text }}</p>
        </div>
        <div>
            <img :src="photo" :alt="`${name}-perfil-photo`">
            {{ name }}
        </div>
    </li>
</template>

<script>
    import { Icon } from '@iconify/vue';
    export default {
        name: 'comment-component',
        props: [ 'name', 'text', 'photo' ],
        components: { Icon }
    }
</script>

<style>

</style>