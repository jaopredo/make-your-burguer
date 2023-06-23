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
    @use "../scss/responsividade.scss" as resp;

    .footer-card {
        @include resp.cellphone {
            width: 100%;
            height: fit-content;
        }
        @include mixins.flex($d: column, $g: 20px);
        width: 100%;
        text-align: center;
        background: white;
        padding: 30px;
        border-radius: 30px;
        color: black;

        height: 230px;

        h2 {
            @include resp.cellphone {
                font-size: 11pt;
            }
            font-weight: 100;
            font-size: 1.9vw;
        }
        p {
            @include resp.cellphone {
                font-size: 9pt;
            }
            font-size: .9vw;
        }
    }

    .footer-card-icon {
        @include resp.cellphone { font-size: 40pt; }
        font-size: 5vw;
    }
</style>