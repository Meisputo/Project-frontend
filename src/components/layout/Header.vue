<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

    const auth = useAuthStore();

    const logout = async () => {
        const logoutError = await auth.logout();

        if(!logoutError) {
            router.push({name: 'Dashboard'});
        }
    }
</script>

<template>

    <div class="container">
            <div class="text-overlay">
                
                <nav class="nav" >
                    <router-link to="/">Home</router-link>
                </nav>
                    <RouterLink v-if="!auth.isAuthenticated" to="/login"><v-btn color="primary">Log in</v-btn></RouterLink>
                    <RouterLink v-if="!auth.isAuthenticated" to="/register"><v-btn color="error">Sign up</v-btn></RouterLink>
                    <v-btn v-if="auth.isAuthenticated" @click="logout"> 
                        Logout
                    </v-btn>
                    <h1>GEN TRADING</h1>
            </div>
            
        </div>

</template>

<style>
.container {
    position: relative;
    width: 100%;
    height: 1000px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/Brands.png');
    filter: blur(3px);
    background-size: cover;
    background-position: center;
    transform: scale(1.1); 
    z-index: 1;
}

.text-overlay {
    position: relative;
    z-index: 2;
    color: #ffffff;
    font-family: sans-serif;
    text-align: center;
}
.nav{
    margin-left: 5%;
    margin-top: 3%;
}
h1{
    font-size: 70px;
    font-family: 'Courier New', Courier, monospace;
}
a{
    color: rgb(9, 95, 121);
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
}
button{
    font-size: large;
    margin: 5px;
    border: none;
    border-radius: 5px;
}
button:hover{
    color: black;
}

</style>