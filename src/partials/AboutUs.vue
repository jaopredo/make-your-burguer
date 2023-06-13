<template>
    <article id="about-us-article">
        <div id="wrapper">
            <div class="u-shape-dashed">
            <svg class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-db78"><path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
        C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
        l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
        c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
        M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
        C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
        C80.2,0,80.1,0,80,0z"></path></svg>
            </div>
            <div class="u-shape"></div>
            <section id="about-us-section-container">
                <h1>About Us</h1>
                <p>Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Massa enim nec dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus suspendisse faucibus interdum</p>
                <a href="#" class="blue-link">LEARN MORE</a>
            </section>
            <div id="woman-business"></div>
            <img id="building" :src="Building" alt="Building">
        </div>
    </article>
</template>

<script>
    import Building from '@/assets/building.jpg'

    export default {
        name: 'about-us-article',
        data() {
            return {
                Building
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "../scss/mixins.scss";
    @use "../scss/cores.scss" as *;


    $circles-size: 200px;
    .u-shape {
        background-color: $default-blue;
        width: $circles-size;
        height: $circles-size;
        border-radius: 50%;

        position: absolute;
        right: 0;
        top: 0;

        transform: translate(50%, -40%);
    }

    .u-shape-dashed {
        fill: $default-blue;

        width: $circles-size;
        height: $circles-size;
        position: absolute;
        top: 0;
        left: 0
    }


    #about-us-article {
        @include mixins.flex();
        height: 130vh;
    }

    #wrapper {
        // @include mixins.flex();
        position: relative;
        // background: red;

        max-width: 1300px;
        width: 80vw;
        max-height: 800px;
        height: 45vw;
    }

    #about-us-section-container {
        @include mixins.flex($d: column, $ai: flex-start, $g: 30px);

        position: absolute;
        right: 0;

        width: 19vw;
        max-width: 500px;

        height: 100%;
        background: $default-gray;
        padding: 80px;
        border-radius: 30px;

        z-index: 1;

        h1 {
            font-size: 3vw;
            font-weight: 100;
        }

        p {
            text-align: justify;
            font-size: 1.1vw;
            line-height: 130%;
        }
    }

    #woman-business {
        z-index: 2;

        position: absolute;
        right: 0;
        transform: translate(-70%, 10%);

        min-width: 420px;
        width: 50%;
        height: 100%;

        border-radius: 30px;

        background-image: url("../assets/woman-business.jpg");
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position-x: 50%;
    }

    #building {
        width: 27%;
        border-radius: 30px;

        transform: translateY(50%);

        position: absolute;
        bottom: 0;
        z-index: 1;
    }
</style>