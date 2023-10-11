<script lang="ts" setup>
interface Props {
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "#0D6EFD",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  color: v-bind(color);
  border-color: v-bind(color);
  border-radius: 8px;
  padding: 7px 28px;
  border: 1px solid;
}
</style>
