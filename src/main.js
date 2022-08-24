import Vue from "vue";
import router from "@/router";
import store from "@/store";
import bus from "@/bus";
import globalMixins from "@/mixins";
import { vuetify } from "@/plugins";
import * as filters from "@/filters";
import App from "./App.vue";
import "./registerServiceWorker";

// Config
Vue.config.productionTip = false;

// Prototype
Vue.prototype.$bus = bus;

// Global components
// Vue.component("global-component", GlobalComponent)

// Global mixins
Vue.mixin(globalMixins);

// Global filters
Object.entries(filters).forEach(([filterName, filterFunc]) => {
  Vue.filter(filterName, filterFunc);
});

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
});

// Initial
app.$mount("#app");
