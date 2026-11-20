import { createApp } from "vue"
import "normalize.css"
import "./assets/styles/index.scss"
import "primeflex/primeflex.css"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import Aura from "@primeuix/themes/aura"
import router from "./router"

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
})
app.mount("#app")
