<template>
    <article>
        <section>
            <h1>About Us</h1>
            <p>Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Massa enim nec dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus suspendisse faucibus interdum</p>
            <a href="#">LEARN MORE</a>
        </section>
        <img :src="WomanBusiness" alt="Woman">
        <img :src="Building" alt="Building">
    </article>
</template>

<script>
    import WomanBusiness from '@/assets/woman-business.jpg'
    import Building from '@/assets/building.jpg'

    export default {
        name: 'about-us-article',
        data() {
            return {
                WomanBusiness,
                Building
            }
        }
    }
</script>

<style>

</style>