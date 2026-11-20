<template>
  <div class="auth-view">
    <form
      class="surface-card p-4 shadow-2 border-round w-full lg:w-6 ml-auto mr-auto"
    >
      <div class="text-center mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Приветствую!</div>
        <span class="text-600 font-medium line-height-3">
          {{ subtitleText }}
        </span>
        <a
          class="font-bold no-underline ml-2 text-green-700 cursor-pointer"
          @click="isNewAccount = !isNewAccount"
        >
          {{ accountLinkText }}
        </a>
      </div>
      <div class="email">
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <input-text
          id="email"
          class="w-full mb-3"
          v-model="email"
          type="email"
          placeholder="name@example.com"
          required
          aria-required="true"
        />
      </div>
      <div class="password">
        <label for="password" class="block text-900 font-medium mb-2"
          >Пароль</label
        >
        <input-password id="password" class="w-full mb-3" v-model="password" />
      </div>
      <prime-button class="w-full text-lg" type="submit">
        <user-icon class="text-lg" />
        <span>{{ authBtnText }}</span>
      </prime-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext"
import InputPassword from "primevue/inputpassword"
import PrimeButton from "primevue/button"
import UserIcon from "@primeicons/vue/user"
import { computed, ref } from "vue"

const email = ref("")
const password = ref("")
const isNewAccount = ref(true)
const subtitleText = computed(() => {
  return isNewAccount.value ? "Создайте прям сейчас" : "Войдите в него"
})
const accountLinkText = computed(() => {
  return isNewAccount.value ? "Аккаунта еще нет?" : "Уже есть аккаунт?"
})
const authBtnText = computed(() => {
  return isNewAccount.value ? "Регистрация" : "Вход"
})
</script>
