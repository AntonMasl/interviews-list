<template>
  <div class="menu-bar">
    <menubar :model="menuItems" />
  </div>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar"
import { type Component, ref } from "vue"
import PlusCircle from "@primeicons/vue/plus-circle"
import List from "@primeicons/vue/list"
import ChartPie from "@primeicons/vue/chart-pie"

interface MenuItem {
  label: string
  icon: Component
  path: string
}

const menuItems = ref<MenuItem[]>([
  {
    label: "Добавить",
    icon: PlusCircle,
    path: "/",
  },
  {
    label: "Список собеседований",
    icon: List,
    path: "/list",
  },
  {
    label: "Статистика",
    icon: ChartPie,
    path: "/statistic",
  },
])
</script>

<style lang="scss" scoped>
.menu-bar {
  --p-menubar-item-label-font-size: 1.2rem;
  --p-menubar-item-icon-size: 1.2rem;
}
</style>
