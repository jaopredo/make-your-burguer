<template>
    <article id="comments-article">
        <h1>How We Help People</h1>
        <p>With serious savings, a seamless online application, and unique community benefits, our members have a lot to say about our loans!</p>
        <ul id="comments-list-container">
            <Comment v-for="comment in commentsList" v-bind:key="comment.id" v-bind="comment" />
        </ul>
    </article>
</template>

<script>
    import Comment from '@/components/Comment.vue'

    export default {
        name: 'comments-article',
        components: { Comment },
        data() {
            return {
                commentsList: [
                    {
                        id: 1,
                        name: 'May Smith',
                        text: 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.',
                        photo: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/52d82c5900df5c6e8686dcd1/44d5d282-18f7-4295-9493-b2865af9bf3d.jpg'
                    },
                    {
                        id: 2,
                        name: 'Bob Perry',
                        text: 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.',
                        photo: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d6c11a21917b552d9ffb48bc/44720b5f-d674-4089-b6ec-12c44ea13947.jpg'
                    },
                    {
                        id: 3,
                        name: 'Marry Hudson',
                        text: 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.',
                        photo: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/63e47b4c0f7858f381525540/dgrt-min.jpg'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;

    #comments-article {
        @include mixins.flex($d: column);

        background-color: $default-gray;
        padding: 40px;
        margin-top: 100px;

        h1 {
            font-size: 5vw;
            font-weight: 100;
        }

        p {
            width: 70%;
            font-size: 1.6vw;
            text-align: center;
        }
    }

    #comments-list-container {
        @include mixins.flex($g: 20px);
        margin-top: 30px;
        width: 85%;
    }
</style>