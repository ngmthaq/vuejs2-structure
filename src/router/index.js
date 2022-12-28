import Vue, { nextTick } from "vue";
import VueRouter from "vue-router";
import { pathConst } from "@/const";

Vue.use(VueRouter);

const routes = Object.values(pathConst);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(to => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;

const DEFAULT_TITLE = "Vuejs";
