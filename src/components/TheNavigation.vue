<template>
    <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/brazil">Brazil</router-link>
        <router-link to="/hawaii">Hawaii</router-link>
        <router-link to="/jamaica">jamaica</router-link>
        <router-link to="/panama">panama</router-link>
        <router-link to="/login">login</router-link>
    </nav>
</template>

<script>
    export default {
        name: "TheNavigation"
    }
</script>

<style scoped>
    #nav{
        align-items: center;
    }

</style>