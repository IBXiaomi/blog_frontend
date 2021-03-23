<template>
    <section class="destination">
        <p>{{destination.description}}</p>
        <div class="destination-details">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
        </div>
    </section>
</template>

<script>
    import store from "../store";

    export default {
        name: "DestinationsDetails",
        data() {
            return {
                destinationId: this.$route.params.id
            }
        },
        computed: {
            destination() {
                return store.destinations.find(
                    destination => destination.id === this.destinationId
                )
            }
        }
    }
</script>

<style scoped>
    img {
        max-width: 600px;
        height: auto;
        width: 100%;
        max-height: 400px;
    }

    .destination-details {
        display: flex;
        justify-content: space-evenly;
    }

    p {
        margin: 0 40px;
        font-size: 20px;
        text-align: left;
    }
</style>