<template>
    <article id="effective-team-article">
        <section id="effctive-team-section-wrapper">
            <h1>Effective Teams</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a class="blue-link" href="#">LEARN MORE</a>
        </section>
        <div id="effective-team-image"/>
    </article>
</template>

<script>
    export default {
        name: 'effective-team-article',
    }
</script>

<style lang="scss" scoped>
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;

    #effective-team-article {
        background-color: $default-gray;
        height: 150vh;
        position: relative;
    }

    #effective-team-image {
        width: 900px;
        height: 600px;
        border-radius: 30px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        background-image: url("../assets/team.jpg");
        background-repeat: no-repeat;
        background-size: 110%;

        z-index: 1;
        transform-style: preserve-3d;

        &::before {
            content: "";
            display: block;
            background-color: $default-blue;
            width: 1000px;
            height: 600px;
            border-radius: 30px;

            position: absolute;
            bottom: -50px;

            transform: translateZ(-1px);
        }
    }

    #effctive-team-section-wrapper {
        @include mixins.flex($d: column, $g: 10px, $ai: flex-start);

        background-color: white;
        border-radius: 30px;
        padding: 30px;
        width: 40%;
        z-index: 2;

        position: absolute;
        left: 100px;
        bottom: 300px;

        h1 {
            font-size: 36pt;
            font-weight: 200;
        }
        p {
            margin-bottom: 30px;
            font-size: 12pt;
        }
    }
</style>