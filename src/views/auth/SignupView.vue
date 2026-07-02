<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { ref, reactive } from 'vue';


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
    <!-- <div v-if="auth.isAuthenticated" >
        <p> Hello {{ auth.currentUser.name }}</p>
    </div> -->
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
                    submit
                </v-btn>
                </v-responsive>
            </form>
            </div>
        </div>
</template>



<style>
.formbox {
  max-width: 650px;
  background: #f1f7fe;
  overflow: hidden;
  border-radius: 10px;
  color: #010101;
  margin-left: 35%;
  margin-top: 10%;
}
.form {
   margin: 50px;
   margin-bottom: 20px;
}
h1 {
    text-align: center;
}

</style>