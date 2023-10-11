<script setup lang="ts">
interface Props {
  username?: string;
}

const props = withDefaults(defineProps<Props>(), {
  username: "username",
});
</script>

<template>
  <header class="findDocs__header">
    <p class="findDocs__header_item title">MyApp</p>
    <p class="findDocs__header_item username">{{ username }}</p>
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
