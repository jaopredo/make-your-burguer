<template>
    <li class="comment-card">
        <div class="comment-card-text-container">
            <Icon class="quote-icon" icon="entypo:quote" color="white" />
            <p>{{ text }}</p>
        </div>
        <div class="comment-card-user-container">
            <div :id="`photo-${id}`" class="user-photo"></div>
            {{ name }}
        </div>
    </li>
</template>

<script>
    import { Icon } from '@iconify/vue';
    export default {
        name: 'comment-component',
        props: [ 'name', 'text', 'photo', 'id' ],
        components: { Icon },
        mounted() {
            const userPhoto = document.getElementById(`photo-${this.id}`)
            userPhoto.style.backgroundImage = `url('${this.photo}')`
        }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/responsividade.scss" as resp;
    @use "../scss/cores.scss" as *;

    .quote-icon {
        @include resp.cellphone {
            font-size: 34pt;
        }
        font-size: 4vw;
        margin-bottom: 30px;
    }

    .comment-card {
        @include mixins.flex($d: column, $g: 20px);
    }

    $user-photo-size: 5vw;
    $user-photo-size-phone: 60px;
    .user-photo {
        @include resp.cellphone {
            width: $user-photo-size-phone;
            height: $user-photo-size-phone;
        }
        width: $user-photo-size;
        height: $user-photo-size;
        border-radius: 50%;
        border: 5px solid $default-blue;

        background-size: 100%;
    }

    .comment-card-user-container {
        @include resp.cellphone {
            font-size: 12pt;
        }
        @include mixins.flex($jc: flex-start, $g: 20px);
        align-self: flex-start;
        font-size: 1.4vw;
    }

    .comment-card-text-container {
        @include resp.cellphone {
            font-size: 9pt;
        }
        background: $default-blue;
        border-radius: 30px;
        padding: 30px;
        color: white;
        font-size: 1.3vw;
        line-height: 130%;
    }
</style>