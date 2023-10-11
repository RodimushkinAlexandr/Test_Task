<script setup lang="ts">
import inputUI from "@/components/UI_KIT/my-inputNumber.vue";
import subTitle from "@/components/UI_KIT/subTitle.vue";
import { computed } from "vue";

interface Props {
  modelValue: number;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Введите ID документа",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const searchDoc = computed({
  get() {
    return props.modelValue;
  },
  set(modelValue: number) {
    emit("update:modelValue", modelValue);
  },
});
</script>

<template>
  <div class="findDocs__main-search">
    <subTitle>Поиск документа</subTitle>
    <inputUI v-model="searchDoc" :placeholder="placeholder" />
  </div>
</template>

<style scoped lang="scss"></style>
