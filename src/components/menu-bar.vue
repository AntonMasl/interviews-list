<template>
  <div class="menu-bar">
    <menubar :model="menuItems">
      <template #item="{ item, props }">
        <router-link :to="{ name: item.route }" v-bind="props.action">
          <component :is="item.icon" v-bind="props.icon" />
          <span v-bind="props.label">{{ item.label }}</span>
        </router-link>
      </template>
    </menubar>
  </div>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar"
import { type Component, computed, ref } from "vue"
import PlusCircle from "@primeicons/vue/plus-circle"
import List from "@primeicons/vue/list"
import ChartPie from "@primeicons/vue/chart-pie"
import { RouteName } from "../router/route-names.ts"
import { useRoute } from "vue-router"

interface MenuBarItem {
  label: string
  icon: Component
  route: RouteName
  class?: string
}

const route = useRoute()

const baseMenuItems = ref<MenuBarItem[]>([
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

const menuItems = computed<MenuBarItem[]>(() =>
  baseMenuItems.value.map((menuItem) => ({
    ...menuItem,
    class: route.name === menuItem.route ? "menu-bar-item-active" : undefined,
  })),
)
</script>

<style lang="scss" scoped>
.menu-bar {
  --p-menubar-item-label-font-size: 1.5rem;
  --p-menubar-item-icon-size: 1.5rem;

  :deep(.p-menubar-item.menu-bar-item-active) {
    // выбранный пункт
    & > .p-menubar-item-content {
      color: var(--p-highlight-color);
      background: var(--p-highlight-background);
    }

    & > .p-menubar-item-content .p-menubar-item-icon {
      color: var(--p-highlight-color);
    }

    & > .p-menubar-item-content:hover {
      color: var(--p-highlight-focus-color);
      background: var(--p-highlight-focus-background);
    }

    & > .p-menubar-item-content:hover .p-menubar-item-icon {
      color: var(--p-highlight-focus-color);
    }
  }
}
</style>
