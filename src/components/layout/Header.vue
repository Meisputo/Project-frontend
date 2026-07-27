<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const auth = useAuthStore();
const router = useRouter();

const logout = async () => {
    const logoutError = await auth.logout();

    if (!logoutError) {
        router.push({ name: 'Dashboard' });
    }
}
</script>

<template>
    <div>
        <v-app-bar class="container">
            <v-app-bar-title color="black"> Gen Trading</v-app-bar-title>
            <div class="text-overlay">
                <RouterLink to="/"><v-btn class="btn"> Home </v-btn></RouterLink>
                <RouterLink v-if="!auth.isAuthenticated" to="/login"><v-btn class="btn">Log in</v-btn></RouterLink>
                <router-link v-if="!auth.isAuthenticated" to="/register"><v-btn class="btn">Sign
                        up</v-btn></router-link>
                <v-btn v-if="auth.isAuthenticated" @click="logout">
                    Logout
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<style>
.container {
    background-color: #ffffff;
    font-size: x-large;
    color: black;
}

.text-overlay {
    position: relative;
    z-index: 2;
    color: #ffffff;
}

.nav {
    margin-left: 5%;
    margin-top: 3%;
    height: auto;
}

h1 {
    font-size: 70px;
    font-family: 'Courier New', Courier, monospace;
}

a {
    margin-right: 10px;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
}

.btn {
    font-size: large;
    margin: 5px;
    border-radius: 5px;
    color: black;
    text-decoration: bold;
}

button:hover {
    color: blue;
}
</style>