<template>
  <v-app>
    <primary-loading :show="isLoading" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { PrimaryLoading } from "@/components/common";
import commonModule from "@/store/modules/common.store";
import { mapModuleStore } from "@/utils";

const store = mapModuleStore(commonModule);

export default {
  components: {
    "primary-loading": PrimaryLoading,
  },

  mixins: [store],
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
