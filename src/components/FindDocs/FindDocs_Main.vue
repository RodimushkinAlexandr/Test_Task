<script setup lang="ts">
import FindDocsSeacrch from "@/components/FindDocs/FindDocs_Main/FindDocs_Main-Search.vue";
import FindDocsResults from "@/components/FindDocs/FindDocs_Main/FindDocs_Main-Results.vue";
import FindDocsFind from "@/components/FindDocs/FindDocs_Main/FindDocs_Main-Find.vue";
import FindDocsFindNo from "@/components/FindDocs/FindDocs_Main/FindDocs_Main-FindNo.vue";
import { FindDocsStore } from "@/store/FindDocsStore";
import Doc from "@/types/Doc";
import { defineAsyncComponent, ref, watchEffect } from "vue";
import FindDocsMainResultsOne from "./FindDocs_Main/FindDocs_Main-ResultsOne.vue";
import { useDesktopLayout } from "@/utils/useDesktopLayout";

const DialogWindow = defineAsyncComponent({
  loader: () => import("../UI_KIT/dialogWindow.vue"),
  suspensible: true,
});

const LoaderSpinner = defineAsyncComponent({
  loader: () => import("../UI_KIT/loaderSpinner.vue"),
  suspensible: true,
});

const ErrorSearch = defineAsyncComponent({
  loader: () => import("../UI_KIT/errorSearch.vue"),
  suspensible: true,
});

const findDocsStore = FindDocsStore();
findDocsStore.getAllDocs();

const { desktopLayout } = useDesktopLayout();
const dialogVisible = ref<boolean>(false);

const findDoc = (doc: Doc) => {
  findDocsStore.doc = doc;
  if (!desktopLayout.value) {
    dialogVisible.value = true;
  }
};

const deleteDoc = (doc: Doc) => {
  findDocsStore.deleteDoc(doc.id);
  findDocsStore.doc = null;
  dialogVisible.value = false;
};

const downloadDoc = () => {
  findDocsStore.GeterationFile();
  dialogVisible.value = false;
};

watchEffect(() => {
  if (findDocsStore.findSearchId !== 0) {
    findDocsStore.getOneDoc();
  }
});
</script>

<template>
  <main class="findDocs__main">
    <section class="findDocs__main-section searchFind">
      <FindDocsSeacrch
        v-model="findDocsStore.findSearchId"
        class="FindDocsSeacrch"
      />
      <FindDocsResults
        v-if="findDocsStore.findSearchId === 0"
        :docs="findDocsStore.docs"
        @doc="findDoc"
      />
      <FindDocsMainResultsOne
        v-else-if="findDocsStore.doc"
        :doc="findDocsStore.doc"
        @doc="findDoc"
      />
      <Suspense v-else-if="findDocsStore.errorSearch">
        <ErrorSearch />
      </Suspense>
      <Suspense v-else>
        <LoaderSpinner />
      </Suspense>
    </section>
    <section v-if="desktopLayout" class="findDocs__main-section findDocsFind">
      <FindDocsFind
        v-if="findDocsStore.doc"
        :doc="findDocsStore.doc"
        @downloadDoc="downloadDoc"
        @deleteDoc="deleteDoc"
      />
      <FindDocsFindNo v-else />
    </section>
    <Suspense v-if="dialogVisible">
      <DialogWindow @updateFalse="dialogVisible = false">
        <FindDocsFind
          v-if="findDocsStore.doc"
          :doc="findDocsStore.doc"
          @downloadDoc="downloadDoc"
          @deleteDoc="deleteDoc"
      /></DialogWindow>
    </Suspense>
  </main>
</template>

<style lang="scss">
.findDocs__main {
  background-color: rgba(253, 253, 253, 1);
  box-shadow: 0px 0px 10px 0px #0000001a;
  display: flex;

  .findDocs__main-section {
    width: 100%;
  }
}
.searchFind {
  padding: 27px 20px;
  display: flex;
  flex-direction: column;
  max-width: 282px;
  background-color: #fdfdfd;

  .FindDocsSeacrch {
    margin-bottom: 29px;
  }

  .findDocsFind {
    background-color: #e0e0e0;
    width: 100%;
  }
}

@media (max-width: 540px) {
  .searchFind {
    padding: 12px;
    max-width: 100%;
  }
}
</style>
