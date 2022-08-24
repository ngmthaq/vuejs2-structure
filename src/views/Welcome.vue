<template>
  <div>
    <div>{{ hello | capitalize }}</div>
    <img class="hidden" src="@/assets/images/logo.png" alt="Logo" />
    <router-link :to="PathConstant.ROOT.path">
      {{ PathConstant.ROOT.name }}
    </router-link>
    <br />
    <button @click="onOpenLoading">Open loading</button>
  </div>
</template>

<script>
import commonModule from "@/store/modules/common.store";
import { mapModuleStore } from "@/utils";

const store = mapModuleStore(commonModule);

export default {
  mixins: [store],

  data: () => ({
    hello: "world",
  }),

  methods: {
    onOpenLoading() {
      this.SET({ isLoading: true });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
