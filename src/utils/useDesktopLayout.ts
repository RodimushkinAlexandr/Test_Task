import { ref, onUnmounted } from "vue";

export function useDesktopLayout() {
  const desktopLayout = ref<boolean>(false);

  function onResize() {
    desktopLayout.value = window.innerWidth > 480;
  }

  onResize();

  window.addEventListener("resize", onResize);
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  return { desktopLayout };
}
