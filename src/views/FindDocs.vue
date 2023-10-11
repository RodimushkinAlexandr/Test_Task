<script setup lang="ts">
import { ref } from "vue";
import FindDocs_Header from "@/components/FindDocs/FindDocs_Header.vue";
import FindDocs_Main from "@/components/FindDocs/FindDocs_Main.vue";
import { UsersStore } from "@/store/AuthStore";
import { onUnmounted } from "vue";

const usersStore = UsersStore();

let desktopLayout = ref<boolean>(false);

const onResize = () => {
  desktopLayout.value = window.innerWidth > 480;
};

window.addEventListener("resize", onResize);
onResize();
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <div class="findDocs">
    <FindDocs_Header :username="usersStore.user.name" />
    <FindDocs_Main :desktopLayout="desktopLayout" />
  </div>
</template>

<style lang="scss">
.findDocs {
  min-height: 75vh;
}
</style>
