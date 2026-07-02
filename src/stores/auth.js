import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import axios from 'axios';


export const useAuthStore = defineStore('auth', () => {
    const user = ref({});

    const authenticated = ref(false);
    const isAuthResolved = ref(false);

    const isAuthenticated = computed(() => authenticated.value);
    const currentUser = computed(() => user.value);
    const setAuthenticated = (value) => {
        authenticated.value = value;
    }

    const setUser = (userData) => {
        user.value = userData;
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie');

        try {
            await axios.post('/api/login',credentials);
            await attempt();

            return null;
        } catch (error) {
            console.error('Log in Failed', error);

            return error;
        }
    }
    const signup = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie');
            
            try {
                await axios.post('/api/signup',credentials);
                await attempt();

                return null;
            } 
            catch (error) {
                console.log('Failed to Signup',error);

                return error;
            }
    }
    const logout = async (credentials) => {
        try {
            await axios.post('/logout');

            setUser({});
            setAuthenticated(false);
            return null;
        } catch(error) {
            console.error("Logout failed",error);

            return "Logout Failed";
        }
    }
    const attempt = async (credentials) => {
        try {
            const res = await axios.get('/api/user'); 
            console.log(res);

            setUser(res.data);
            setAuthenticated(true);
        } catch (error) {
            console.log('error');
            
            setUser({});
            setAuthenticated(false);
        } finally {
            isAuthResolved.value = true;
        }
    }

    return {
        currentUser,
        isAuthenticated,
        isAuthResolved,
        signup,
        login,
        logout,
        attempt,
    }
});