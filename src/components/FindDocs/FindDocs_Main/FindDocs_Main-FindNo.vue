<template>
  <div class="findDocs_find">
    <p class="posAbsolute">Выберите документ, чтобы посмотреть его содержиое</p>
  </div>
</template>

<style scoped lang="scss">
.findDocs_find {
  padding: 30px;
  border-left: 1px solid #e0e0e0;
  min-height: 100%;
  position: relative;

  .posAbsolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
}
</style>
