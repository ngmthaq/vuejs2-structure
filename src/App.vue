<template>
  <v-app>
    <primary-loading />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { PrimaryLoading } from "@/components/common";

export default {
  components: {
    "primary-loading": PrimaryLoading,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
