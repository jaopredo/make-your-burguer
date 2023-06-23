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
    @use "../scss/responsividade.scss" as resp;
    @use "../scss/cores.scss" as *;

    #all-container {
        @include resp.cellphone {
            @include mixins.flex();

            position: static;
            left: auto;
            top: auto;
            // background: red;

            width: 100vw;

            transform: none;
        }

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
        @include resp.cellphone {
            height: 140vh;
            position: static;
            // background: yellow
        }
        @include mixins.flex();
        background-color: $default-gray;
        position: relative;
        height: 90vw;
    }

    #effctive-team-section-wrapper {
        @include resp.cellphone {
            position: relative;
            bottom: auto;
            transform-style: preserve-3d;
            height: 250px;
            width: 80vw;
            max-width: none;

            &::before {
                content: "";

                width: 80vw;
                height: 250px;
                display: block;

                position: absolute;
                background: $default-blue;
                border-radius: 30px;

                right: -10px;
                bottom: -10px;

                transform: translateZ(-1px);
            }
        }
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
            @include resp.cellphone {
                font-size: 22pt;
            }
            font-size: 3.6vw;
            font-weight: 200;
        }
        p {
            @include resp.cellphone {
                font-size: 10pt;
            }
            margin-bottom: 30px;
            font-size: 1.3vw;
        }
    }

    #effective-team-image {
        @include resp.tablet {
            width: 80%;
            height: 390px;

            right: auto;
            left: 50%;
            top: 0;
            transform: translate(-50%);

            background-size: auto 120%;
        }
        @include resp.cellphone {
            display: none;
        }

        width: 80%;
        max-width: 900px;
        height: 600px;
        border-radius: 30px;

        position: absolute;
        right: 0;
        top: 0;

        background-image: url("../assets/team.jpg");
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 20% 20%;

        z-index: 1;
        transform-style: preserve-3d;

        &::before {
            @include resp.tablet {
                height: 390px;
            }
            content: "";
            display: block;
            background-color: $default-blue;
            width: 80%;
            height: 600px;
            border-radius: 30px;

            position: absolute;
            bottom: -20px;
            right: -20px;

            transform: translateZ(-1px);
        }
    }
</style>