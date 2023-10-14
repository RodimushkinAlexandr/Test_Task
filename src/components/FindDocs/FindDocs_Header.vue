<script setup lang="ts">
import User, { userKey } from "@/types/User";
import { inject } from "vue";

const user = inject<User>(userKey);
</script>

<template>
  <header class="findDocs__header">
    <p class="findDocs__header_item title">MyApp</p>
    <p class="findDocs__header_item username">{{ user?.name }}</p>
  </header>
</template>

<style scoped lang="scss">
.findDocs__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  .title {
    font-size: 32px;
    font-weight: 700;
  }

  .username {
    font-size: 16px;
    text-transform: capitalize;
  }
}
</style>
