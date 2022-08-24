import Vue from "vue";
import VueRouter from "vue-router";
import { Welcome } from "@/views";
import { PathConstant } from "@/const";

Vue.use(VueRouter);

const routes = [
  {
    path: PathConstant.ROOT.path,
    name: PathConstant.ROOT.name,
    component: Welcome,
    meta: {
      title: "Welcome to Vuejs 2",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  });
});

export default router;
