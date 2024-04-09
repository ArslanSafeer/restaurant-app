<template>
<HeaderApp />
<h1>Hello User Welcome to the Update Restaurant page</h1>
<div class="login">

    <form action="" style="max-width:500px;margin:auto">
        <label for=""><b>Name</b></label><br>
        <div class="input-container">
            <input class="input-field" type="text" required="required" name="name" placeholder="name.." v-model="restaurant.name">
        </div>
        <label for=""><b>Address</b></label><br>
        <div class="input-container">
            <input class="input-field" type="text" required="required" name="address" placeholder="address.." v-model="restaurant.address">
        </div>
        <label for=""><b>Contact</b></label><br>
        <div class="input-container">
            <input class="input-field" type="text" required="required" name="contact" placeholder="contact.." v-model="restaurant.contact">
        </div>
        <button type="button" v-on:click="updaterestaurant" class="btn btn-success">Update Restaurant</button>
    </form>
</div>
</template>

<script>
import HeaderApp from './HeaderApp.vue'
import axios from 'axios'
export default {
    name: 'UpdateRestaurant',
    components: {
        HeaderApp
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async updaterestaurant() {
               const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status==200){
                this.$router.push({name:'Home'});
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'signUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurant/"+ this.$route.params.id);
        this.restaurant = result.data
    }
}
</script>

<style scoped>
body {
    font-family: Arial, Helvetica, sans-serif;
}

* {
    box-sizing: border-box;
}

.input-container {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 15px;
}

.icon {
    padding: 10px;
    background: #41b75a;
    color: white;
    min-width: 50px;
    text-align: center;
}

.input-field {
    width: 100%;
    padding: 10px;
    outline: none;
    height: 57px;
}

.input-field:focus {
    border: 2px solid green;
}

/* Set a style for the submit button */
.btn {
    background-color: #41b75a;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    width: 152px;
    opacity: 0.9;
}

.btn:hover {
    opacity: 1;
}
</style>
