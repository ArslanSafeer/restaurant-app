<template>
<HeaderApp />
<h1>Welcome {{name}}</h1>
<table border="1px" class="table">
    <tr>
        <td><b>Sno</b></td>
        <td><b>Hotal Name</b></td>
        <td><b>Hotal Address</b></td>
        <td><b>Contact</b></td>
        <td><b>Action</b></td>

    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td>
            <router-link :to="'/UpdateRestaurant/'+item.id">Update</router-link>
            <button v-on:click="deleterestaurant(item.id)">Delete</button>
        </td>

    </tr>
</table>
</template>

<script>
import axios from 'axios'
import HeaderApp from './HeaderApp.vue'

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    components: {
        HeaderApp
    },
    methods: {
        async deleterestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurant/' + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({
                    name: 'signUp'
                })
            }
            let result = await axios.get('http://localhost:3000/restaurant');
            console.log(result)
            this.restaurants = result.data
        }

    },
    mounted() {
        this.loadData()
    }
}
</script>

<style scoped>
td {
    width: 160px;
    height: 40px;
    text-align: center;
}

.center {
    margin-left: auto;
    margin-right: auto;
}
</style>
