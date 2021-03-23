<template>
    <div class="destination">
        <div class="home">
            <div v-for="destination in destinations"
                 :key="destination.name">
                <router-link :to="{name:'DestinationDetails',params:{id:destination.id}}">
                    <h2>{{destination.name}}</h2>
                </router-link>
                <figure>
                    <router-link
                            :to="{name:'DestinationDetails',params: {id:destination.id,description:destination.description}}">
                        <img :src="require(`@/assets/${destination.image}`)"
                             :alt="destination.name">
                    </router-link>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import store from "../store";

    export default {
        name: "Home",
        components: {},
        data() {
            return {destinations: store.destinations}
        }
    };
</script>
<style scoped>
    .home {
        max-width: 1200px;
        margin: 0 auto;
    }

    img {
        max-width: 200px;
    }

    .destination {
        display: flex;
        justify-content: space-between;
    }

</style>
