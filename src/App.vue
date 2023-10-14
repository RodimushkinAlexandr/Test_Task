<script setup lang="ts">
import { provide, ref } from "vue";
import { UsersStore } from "@/store/AuthStore";
import { userKey } from "@/types/User";
import { desktopLayoutKey } from "@/types/desktopLayout";
import { onUnmounted } from "vue";

const userStore = UsersStore();
const user = ref(userStore.user);
provide(userKey, user);

let desktopLayout = ref<boolean>(false);
const onResize = () => {
  desktopLayout.value = window.innerWidth > 480;
};

window.addEventListener("resize", onResize);
onResize();
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

provide(desktopLayoutKey, desktopLayout);
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
