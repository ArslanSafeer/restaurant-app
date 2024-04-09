<template>
<img class="logo" src="../assets/resto-logo.jpg">
<h1>Sign Up</h1>
<div class="ContactUs">

    <form action="" style="max-width:500px;margin:auto">
        <label for=""><b>Name</b></label><br>
        <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input class="input-field" type="text" required="required" name="name" placeholder="Your name.." v-model="name">
        </div>
        <label for=""><b>Email</b></label><br>
        <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input class="input-field" type="text " required="required" name="email" placeholder="Email.." v-model="email">
        </div>
        <label for=""><b>Password</b></label><br>
        <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input class="input-field" type="password" required="required" name="password" placeholder="password.." v-model="password">
        </div>
        <button type="button" v-on:click="signUp" class="btn btn-success">Sign Up</button>
        <p>
            <router-link to="/LoginPage">Login</router-link>
        </p>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signUp',
    data() {

        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            console.log("signUp", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.log(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({
                    name: 'Home'
                })
            }

        }

    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>

<style scoped>
.logo {
    width: 100px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    padding:0px;
    margin:0px;
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
