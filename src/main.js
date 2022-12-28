import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import eventBus from "./bus";
import { vuetify } from "./plugins";
import { appConst, apiConst, keyConst, pathConst } from "./const";
import filters from "./filters";
import App from "./App.vue";
import MainLayout from "./layouts/MainLayout.vue";
import "./registerServiceWorker";

// Vue configs
Vue.config.productionTip = false;

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Event bus
Vue.prototype.$eventBus = eventBus;

// Config constants
Vue.prototype.$appConst = appConst;
Vue.prototype.$apiConst = apiConst;
Vue.prototype.$keyConst = keyConst;
Vue.prototype.$pathConst = pathConst;

// Config filters
Object.values(filters).forEach(filter => {
  Object.entries(filter).forEach(([name, func]) => {
    Vue.filter(name, func);
  });
});

// Global components
Vue.component("main-layout", MainLayout);

const app = new Vue({
  router: router,
  store: store,
  vuetify: vuetify,
  i18n: i18n,

  render: function (h) {
    return h(App);
  },
});

app.$mount("#app");
