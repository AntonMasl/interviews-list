<template>
  <div class="menu-bar">
    <menubar :model="menuItems">
      <template #item="{ item, props }">
        <router-link :to="{ name: item.route }" v-bind="props.action">
          <component :is="item.icon" />
          <span>{{ item.label }}</span>
        </router-link>
      </template>
    </menubar>
  </div>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar"
import { type Component, ref } from "vue"
import PlusCircle from "@primeicons/vue/plus-circle"
import List from "@primeicons/vue/list"
import ChartPie from "@primeicons/vue/chart-pie"
import { RouteName } from "../router/route-names.ts"

interface MenuBarItem {
  label: string
  icon: Component
  route: RouteName
}

const menuItems = ref<MenuBarItem[]>([
  {
    label: "Добавить",
    icon: PlusCircle,
    route: RouteName.Home,
  },
  {
    label: "Список собеседований",
    icon: List,
    route: RouteName.Interviews,
  },
  {
    label: "Статистика",
    icon: ChartPie,
    route: RouteName.Statistic,
  },
])
</script>

<style lang="scss" scoped>
.menu-bar {
  --p-menubar-item-label-font-size: 1.2rem;
  --p-menubar-item-icon-size: 1.2rem;
}
</style>
