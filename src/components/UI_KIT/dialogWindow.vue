<script setup lang="ts">
const emit = defineEmits<{
  (e: "updateFalse", value: boolean): void;
}>();

const hideDialog = () => {
  emit("updateFalse", false);
};
</script>

<template>
  <transition name="dialog">
    <div class="dialog" @click="hideDialog">
      <div @click.stop class="dialog__list">
        <slot></slot>
        <img
          @click="hideDialog"
          src="../../assets/img/close.svg"
          class="top_close"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 64px;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 100;
  display: flex;
  padding: 0px 10px;

  &__list {
    margin: auto;
    background-color: #fdfdfd;
    border-radius: 15px;
    min-height: 70px;
    min-width: 300px;
    padding-top: 28px;
    position: relative;

    .top_close {
      position: absolute;
      top: 9px;
      right: 11px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
      fill: #5046e5;
    }
  }
}

@media (max-width: 768px) {
  .dialog {
    left: 0;
  }
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.25s ease;
}
</style>
