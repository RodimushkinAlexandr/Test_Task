<script setup lang="ts">
import Doc from "@/types/Doc";
import errorSearch from "@/components/UI_KIT/errorSearch.vue";
import subTitle from "@/components/UI_KIT/subTitle.vue";

const props = defineProps<{
  doc: Doc | null;
}>();

const emit = defineEmits<{
  (e: "doc", value: Doc): void;
}>();
</script>

<template>
  <div
    v-if="doc !== null"
    @click="emit('doc', doc)"
    class="findDocs__main-result findDocs__result"
  >
    <div class="findDocs__result-item">
      <img :src="doc.image" alt="alt" class="findDocs__result-img" />
      <div class="findDocs__result-content">
        <subTitle>{{ doc.name }}</subTitle>
        <p class="findDocs__result-text">12 MB</p>
      </div>
    </div>
  </div>
  <errorSearch v-else />
</template>

<style lang="scss"></style>
