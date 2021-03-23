<template>
    <div class="login">
        <input v-model="username" type="text" placeholder="username">
        <input v-model="password" type="text" placeholder="password">
        <!--        <button v-on:click="login">login in</button>-->
        <button v-on:click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            login() {
                this.$axios.post('/jamie/login', {
                    username: this.username,
                    password: this.password
                }).then(successResponse => {
                    if (successResponse.data.status === '200') {
                        alert('login in success')
                    }else{
                        alert("login in failed")
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>