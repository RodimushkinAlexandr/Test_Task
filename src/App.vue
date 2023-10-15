<script setup lang="ts">
import { provide, ref } from "vue";
import { UsersStore } from "@/store/AuthStore";
import { userKey } from "@/types/User";

const userStore = UsersStore();
const user = ref(userStore.user);
provide(userKey, user);
</script>

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
@/utils/useDesktopLayout
