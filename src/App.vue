<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="container">
      <router-view v-slot="{ Component, route }">
        <transition name="routerComponent" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.routerComponent-enter-from,
.routerComponent-leave-to {
  opacity: 0;
}

.routerComponent-enter-active,
.routerComponent-leave-active {
  transition: opacity 0.7s ease-out;
}
</style>
