<script setup lang="ts">
import SubTitle from "@/components/UI_KIT/subTitle.vue";
import myButton from "@/components/UI_KIT/my-button.vue";
import Doc from "@/types/Doc";
import { ref, watchEffect } from "vue";

const props = defineProps<{
  doc: Doc;
}>();

const disabled = ref<boolean>(false);

watchEffect(() => {
  if (props.doc.image === null) {
    disabled.value = true;
  } else {
    disabled.value = false;
  }
});

const emit = defineEmits<{
  (e: "deleteDoc", value: Doc): void;
  (e: "downloadDoc", value: Doc): void;
}>();

const downloadDoc = () => {
  emit("downloadDoc", props.doc);
};
const deleteDoc = () => {
  emit("deleteDoc", props.doc);
};
</script>

<template>
  <div class="findDocs_find">
    <div class="findDocs_find-content">
      <section class="findDocs_find-section img">
        <img v-if="doc.image" :src="doc.image" class="findDocs_find-img" />
        <img
          v-else
          src="../../../assets/img/noPhoto.svg"
          class="findDocs_find-img"
        />
      </section>
      <section class="findDocs_find-section text">
        <div class="findDocs_find-title">
          <SubTitle>{{ doc.name }}</SubTitle>
          <div class="findDocs_find-buttons">
            <myButton @click="downloadDoc">Скачать</myButton>
            <myButton :color="'#DC3545'" :disabled="disabled" @click="deleteDoc"
              >Удалить</myButton
            >
          </div>
        </div>
        <div class="findDocs_find-subtitle">
          <SubTitle>Описание:</SubTitle>
          <p>{{ doc.description }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.findDocs_find {
  padding: 30px;
  border-left: 1px solid #e0e0e0;
  min-height: 100%;
  position: relative;

  &-content {
    display: flex;
    justify-content: space-between;
    gap: 61px;
  }

  &-section {
    &.img {
      flex: 1 1 auto;
      min-width: 424px;
    }

    &.text {
      flex: 1 1 auto;
    }
  }

  &-title {
    margin-bottom: 47px;
  }

  &-img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }

  &-buttons {
    display: flex;
    gap: 17px;
  }

  &-subtitle {
    color: #6c757d;
  }
}

@media (max-width: 1280px) {
  .findDocs_find {
    &-content {
      gap: 20px;
    }

    &-section {
      &.img {
        min-width: 300px;
      }
    }
  }
}

@media (max-width: 980px) {
  .findDocs_find {
    &-content {
      flex-direction: column;
    }

    &-section {
      &.img {
        min-width: 300px;
      }
    }
  }
}

@media (max-width: 780px) {
  .findDocs_find {
    padding: 10px;

    &-section {
      &.img {
        min-width: 0px;
      }
    }

    &-buttons {
      flex-direction: column;
      gap: 10px;
    }
  }
}

@media (max-width: 540px) {
  .findDocs_find {
    border-left: 0px solid #e0e0e0;
  }
}
</style>
