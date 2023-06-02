<template>
    <footer>
        <section>
            <ul>
                <FooterCard v-for="card in cardsInfos" v-bind:key="card.id" v-bind="card" />
            </ul>
        </section>
        <section>
            <h1>Get In Touch</h1>
            <p><strong>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</strong></p>
            <p>Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
        </section>
        <section>
            <form>
                <label for="email">Email</label><input type="email" name="email" id="email">
                <label for="name">Name</label><input type="text" name="name" id="name">
                <label for="message">Message</label><textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button>SUBMIT</button>
            </form>
        </section>
    </footer>
</template>

<script>
    import FooterCard from '@/components/FooterCard.vue'

    export default {
        name: 'page-footer',
        components: { FooterCard },
        data() {
            return {
                cardsInfos: [
                    {
                        id: 1,
                        title: 'OUR MAIN OFFICE',
                        text: 'SoHo 94 Broadway St New York, NY 1001',
                        icon: 'icon-park-solid:local'
                    },
                    {
                        id: 2,
                        title: 'PHONE NUMBER',
                        text: '234-9876-5400',
                        icon: 'ic:round-phone'
                    },
                    {
                        id: 3,
                        title: 'FAX',
                        text: '1-234-567-8900',
                        icon: 'ic:round-phone'
                    },
                    {
                        id: 4,
                        title: 'EMAIL',
                        text: 'test@domine.com',
                        icon: 'ic:baseline-email'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>