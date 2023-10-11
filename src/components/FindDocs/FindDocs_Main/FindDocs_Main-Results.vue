<script setup lang="ts">
import Doc from "@/types/Doc";
import errorSearch from "@/components/UI_KIT/errorSearch.vue";
import subTitle from "@/components/UI_KIT/subTitle.vue";

const props = defineProps<{
  docs: Doc[];
}>();

const emit = defineEmits<{
  (e: "doc", value: Doc): void;
}>();
</script>

<template>
  <transition-group
    v-if="docs.length"
    tag="ul"
    class="findDocs__main-result findDocs__result"
    name="list"
  >
    <li
      v-for="doc in docs"
      :key="doc?.id"
      @click="emit('doc', doc)"
      class="findDocs__result-item"
    >
      <img :src="doc.image" alt="alt" class="findDocs__result-img" />
      <div class="findDocs__result-content">
        <subTitle>{{ doc.name }}</subTitle>
        <p class="findDocs__result-text">12 MB</p>
      </div>
    </li>
  </transition-group>
  <errorSearch v-else />
</template>

<style lang="scss">
.findDocs__result {
  &-item {
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 10px 0px #0000001a;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }

  &-img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  &-content {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .findDocs__result {
    &-item {
      border: 1px solid #e0e0e0;
      box-shadow: 0px 0px 10px 0px #0000001a;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-10px);
  position: absolute;
}
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
