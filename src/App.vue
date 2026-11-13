<template>
  <div class="container">
    <menu-bar />
  </div>
</template>

<script setup lang="ts">
import MenuBar from "./components/menu-bar.vue"
</script>

<style lang="scss">
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>
