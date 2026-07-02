import { createApp } from 'vue'

import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

/* optional italic styles */
import '@fontsource/roboto/100-italic.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth.js'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import router from './router'
import App from './App.vue'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createPinia());

  const auth = useAuthStore();

  auth.attempt().finally(() => {
    
  });

app.use(router)

app.use(vuetify)

app.mount('#app')



