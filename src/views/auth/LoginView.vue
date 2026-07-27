<script setup>
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vuetify/lib/composables/router.mjs';
import Header from '../../components/layout/Header.vue';

const auth = useAuthStore();
const router = useRouter();

const form = reactive({
    email: '',
    password: '',
});

const loading = ref(false);

const formEnter = async () => {
    loading.value = true;

    const error = await auth.login(form);

    if (error) {
        loading.value = false;

        loginError.value = error;
    } else {
        router.push({ name: 'Dashboard' });
    }
}

</script>

<template>
    <Header />
    <div v-if="loginError" class="p-4 bg-white rounded-md shadow-md text-red-700 mb-4">
        <p>{{ loginError }}</p>
    </div>
    <div class="formbox">
        <div class="form">
            <h1>Login here</h1>
            <form @submit.prevent="formEnter">
                <v-responsive class="mx-auto" max-width="600">
                    <v-text-field type="email" v-model="form.email" placeholder="Email"></v-text-field>
                </v-responsive>
                <v-responsive class="mx-auto" max-width="600">
                    <v-text-field type="password" v-model="form.password" placeholder="Password"></v-text-field>
                </v-responsive>
                <v-responsive class="mx-auto" max-width="600" height="50">
                    <v-btn class="me-4" color="primary" type="submit">
                        Log in
                    </v-btn>
                </v-responsive>
            </form>
        </div>
        <div>
            <RouterLink to="/register"> Create an Account </RouterLink>
        </div>
    </div>

</template>