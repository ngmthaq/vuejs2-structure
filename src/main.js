import Vue from "vue";
import router from "@/router";
import store from "@/store";
import bus from "@/bus";
import globalMixins from "@/mixins";
import { vuetify } from "@/plugins";
import * as constants from "@/const";
import * as filters from "@/filters";
import App from "./App.vue";
import "./registerServiceWorker";

// Config
Vue.config.productionTip = false;

// Prototype
Vue.prototype.$bus = bus;
Vue.prototype.$const = constants;

// Global components
// Vue.component("global-component", GlobalComponent)

// Global mixins
Vue.mixin(globalMixins);

// Global filters
Object.entries(filters).map(([filterName, filterFunc]) => {
  Vue.filter(filterName, filterFunc);
});

// Initial
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
