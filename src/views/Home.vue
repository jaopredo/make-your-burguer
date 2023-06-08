<template>
    <Header/>
    <main>
        <Introduction/>
        <Advantages/>
        <ContractReason/>
        <AboutUs/>
        <Comments/>
        <EffectiveTeam/>
    </main>
    <Footer/>
</template>

<script>
    import Header from '@/partials/Header.vue'

    import Introduction from '../partials/Introduction.vue'
    import Advantages from '../partials/Advantages.vue'
    import ContractReason from '../partials/ContractReason.vue'
    import AboutUs from '../partials/AboutUs.vue'
    import Comments from '../partials/Comments.vue'
    import EffectiveTeam from '../partials/EffectiveTeam.vue'

    import Footer from '../partials/Footer.vue'

    export default {
        name: 'home-view',

        components: {
            Header,
            
            Introduction,
            Advantages,
            ContractReason,
            AboutUs,
            Comments,
            EffectiveTeam,

            Footer
        }
    }
</script>