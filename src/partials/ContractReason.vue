<template>
    <article>
        <section id="imageContainerSection">
            <div>
                <h2>Why choose UX studio as your app design partner? </h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                <a href="#">LEARN MORE</a>
            </div>
            <img :src="ManNotebook" alt="Man with notebook">
        </section>
        <section>
            <img :src="Cellphone" alt="Cellphone">
            <div>
                <h2>Build your dream<br>website today</h2>
                <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. </p>
                <ul>
                    <li>Support via E-mail and Phone</li>
                    <li>Multi-Language Support</li>
                </ul>

                <a href="#">READ MORE</a>
            </div>
        </section>
        <section>
            <div>
                <Icon icon="mingcute:cellphone-line" color="white" />
                <div>
                    <h1>Let's Get Started</h1>
                    <p>Have a project or partnership in mind?</p>
                    <p>Contact us today for a free consultation.</p>
                </div>
                <a href="#">CONTACT US</a>
            </div>
        </section>
    </article>
</template>

<script>
    import { Icon } from '@iconify/vue'
    import ManNotebook from '@/assets/man-notebook.jpg'
    import Cellphone from '@/assets/cellphone.png'

    export default {
        name: 'contract-reason-article',
        components: { Icon },
        data() {
            return {
                ManNotebook,
                Cellphone
            }
        }
    }
</script>

<style>

</style>