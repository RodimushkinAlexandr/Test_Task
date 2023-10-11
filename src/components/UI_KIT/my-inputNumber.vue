<script lang="ts" setup>
interface Props {
  modelValue: number;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Введите",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();
</script>

<template>
  <input
    class="input"
    :value="modelValue === 0 ? '' : modelValue"
    :placeholder="placeholder"
    type="number"
    @input="
      $emit(
        'update:modelValue',
        Number(($event.target as HTMLInputElement).value)
      )
    "
  />
</template>

<style lang="css" scoped>
.input {
  font-size: 14px;
  padding: 16px 24px 16px 24px;
  border: 1.5px solid #e9ecef;
  border-radius: 8px;
  width: 100%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
