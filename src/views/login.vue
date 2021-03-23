<template>
    <div class="login">
        <input v-model="username" type="text" placeholder="username">
        <input v-model="password" type="text" placeholder="password">
        <button v-on:click="login">login in</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        components: {},
        data() {
        }

    }
</script>

<style scoped>

</style>