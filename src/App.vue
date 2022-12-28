<template>
  <v-app>
    <v-main>
      <router-view />
      <loading :open="$store.state.common.isLoading"></loading>
    </v-main>
  </v-app>
</template>

<script>
import Loading from "@/components/common/Loading.vue";

export default {
  name: "App",

  components: {
    loading: Loading,
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},
};
</script>

<style lang="scss" scoped></style>
