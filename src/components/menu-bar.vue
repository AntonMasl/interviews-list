<template>
  <div class="menu-bar">
    <menubar :model="menuItems">
      <template #start>
        <div class="menu-bar-auth">
          <user-icon />
          <span class="menu-bar-auth-text">Авторизация</span>
        </div>
      </template>
      <template #item="{ item, props }">
        <router-link :to="{ name: item.route }" v-bind="props.action">
          <component :is="item.icon" />
          <span v-bind="props.label">{{ item.label }}</span>
        </router-link>
      </template>
      <template #end>
        <prime-button severity="secondary" @click="signOut">
          <sign-out-icon />
          <span>Выход</span>
        </prime-button>
      </template>
    </menubar>
  </div>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar"
import PrimeButton from "primevue/button"
import { type Component, computed, ref } from "vue"
import PlusCircleIcon from "@primeicons/vue/plus-circle"
import ListIcon from "@primeicons/vue/list"
import ChartPieIcon from "@primeicons/vue/chart-pie"
import { RouteName } from "../router/route-names.ts"
import { useRoute } from "vue-router"
import SignOutIcon from "@primeicons/vue/sign-out"
import UserIcon from "@primeicons/vue/user"

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
    icon: PlusCircleIcon,
    route: RouteName.Home,
  },
  {
    label: "Список собеседований",
    icon: ListIcon,
    route: RouteName.Interviews,
  },
  {
    label: "Статистика",
    icon: ChartPieIcon,
    route: RouteName.Statistic,
  },
])

const menuItems = computed<MenuBarItem[]>(() =>
  baseMenuItems.value.map((menuItem) => ({
    ...menuItem,
    class: route.name === menuItem.route ? "menu-bar-item-active" : undefined,
  })),
)

function signOut() {
  console.log("signOut")
}
</script>

<style lang="scss" scoped>
.menu-bar {
  --p-menubar-item-label-font-size: 1.2rem;
  --p-menubar-item-icon-size: 1.2rem;
  --p-icon-size: 1.2rem;
  --p-button-font-size: 1.2rem;

  font-size: 1.2rem;
  margin-bottom: 24px;

  .menu-bar-auth {
    display: flex;
    align-items: center;

    &-text {
      margin-left: 8px;
    }
  }

  :deep(.p-menubar-item) {
    &.menu-bar-item-active {
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
}
</style>
