import HomePage from './components/HomePage.vue'
import signUp from './components/signUp.vue' 
import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
const routes=[
    {
       
        name: 'Home',
        component: HomePage,
        path: '/',
    },
    {
        
        name: 'signUp',
        component: signUp,
        path: '/signUp'
    },
    {
        
        name: 'LoginPage',
        component: LoginPage,
        path: '/LoginPage'
    },
    {
        
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/AddRestaurant'
    },
    {
        
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/UpdateRestaurant/:id'
    }
];
const router=createRouter({

        history:createWebHistory(),
        routes
    })
    
    export default router

