<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="AddRestaurant">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>
export default {
    name: 'HeaderApp',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name: 'LoginPage'})
        }
    }
}
</script>

<style scoped>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: azure;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: bisque;
    color: #333;
}
</style>
