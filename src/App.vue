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
  name: "App",

  components: {
    "primary-loading": PrimaryLoading,
  },

  created() {},
};
</script>

<style lang="scss"></style>
