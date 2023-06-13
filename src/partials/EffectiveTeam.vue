<template>
    <article id="effective-team-article">
        <div id="all-container">
            <section id="effctive-team-section-wrapper">
                <h1>Effective Teams</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a class="blue-link" href="#">LEARN MORE</a>
            </section>
            <div id="effective-team-image"/>
        </div>
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

    #all-container {
        position: relative;
        width: 80vw;
        max-width: 1200px;
        height: 45vw;
        max-height: 700px;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    #effective-team-article {
        @include mixins.flex();
        background-color: $default-gray;
        position: relative;
        height: 90vw;
    }

    #effective-team-image {
        width: 80%;
        max-width: 900px;
        height: 600px;
        border-radius: 30px;

        position: absolute;
        right: 0;
        top: 0;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);

        background-image: url("../assets/team.jpg");
        background-repeat: no-repeat;
        background-size: 130%;
        background-position: 20% 20%;

        z-index: 1;
        transform-style: preserve-3d;

        &::before {
            content: "";
            display: block;
            background-color: $default-blue;
            width: 800px;
            height: 600px;
            border-radius: 30px;

            position: absolute;
            bottom: -20px;
            right: -20px;

            transform: translateZ(-1px);
        }
    }

    #effctive-team-section-wrapper {
        @include mixins.flex($d: column, $g: 10px, $ai: flex-start);

        background-color: white;
        border-radius: 30px;
        padding: 30px;
        max-width: 40vw;
        z-index: 2;

        position: absolute;
        bottom: 0;
        // left: 50%;
        // top: 50%;
        // transform: translate(-60%, 50%);

        h1 {
            font-size: 3.6vw;
            font-weight: 200;
        }
        p {
            margin-bottom: 30px;
            font-size: 1.3vw;
        }
    }
</style>