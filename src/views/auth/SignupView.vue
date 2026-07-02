<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { ref, reactive } from 'vue';
import Header from '../../components/layout/Header.vue';


    const auth = useAuthStore();
    const router = useRouter(); 

    const form = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const loading = ref(false);

    const formEnter = async () => {
        loading.value = true;

        const error = await auth.signup(form);

        if (error) {
            loading.value = false;
            console.log("Error: ", error);
        } else {
            router.push({name: 'Dashboard'});
            loading.value = false;
            console.log("Succes!");
        }
    }

</script>

<template>
    <Header/>
        <div class="formbox">
            <div class="form" >
                <h1>Sign up here</h1>
            <form @submit.prevent="formEnter">
                <v-responsive
                class="mx-auto"
                max-width="600"

                >
                    <v-text-field
                    v-model="form.name"
                    placeholder="Name"
                    ></v-text-field>
                </v-responsive>
                <v-responsive
                class="mx-auto"
                max-width="600"
                >
                    <v-text-field
                    type="email"
                    v-model="form.email"
                    placeholder="Email"
                    ></v-text-field>
                </v-responsive>
                <v-responsive
                class="mx-auto"
                max-width="600"
                >
                    <v-text-field
                    type="password"
                    v-model="form.password"
                    placeholder="Password"
                    ></v-text-field>
                </v-responsive>
                <v-responsive
                class="mx-auto"
                max-width="600"
                >
                    <v-text-field
                    type="password"
                    v-model="form.password_confirmation"
                    placeholder="Confirm Password"
                    ></v-text-field>
                </v-responsive>  
                <v-responsive
                class="mx-auto"
                max-width="600"
                height="50"
                >
                <v-btn
                class="me-4"
                color="primary"
                type="submit"
                >
                    Signup
                </v-btn>
                </v-responsive>
            </form>
            </div>
            <div>
                <RouterLink to="/login"> Log in </RouterLink>
            </div>
        </div>
</template>



<style>
.formbox {
  max-width: 650px;
  background: #f1f7fe;
  border-radius: 10px;
  color: #010101;
  margin-left: 35%;
  margin-top: 10%;
}
.form {
   margin-bottom: 20px;
}
h1 {
    text-align: center;
}

</style>