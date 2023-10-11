import { createRouter, createWebHistory } from "vue-router";
import FindDocs from "@/views/FindDocs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FindDocs",
      component: FindDocs,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutRight",
      },
    },
  ],
});

export default router;
