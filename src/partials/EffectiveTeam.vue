<template>
    <article>
        <section>
            <h1>Effective Teams</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">LEARN MORE</a>
        </section>
        <img :src="Team" alt="team image">
    </article>
</template>

<script>
    import Team from '@/assets/team.jpg'

    export default {
        name: 'effective-team-article',
        data() {
            return {
                Team
            }
        }
    }
</script>

<style>

</style>