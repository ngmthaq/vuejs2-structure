<template>
  <div>
    <div>{{ hello | capitalize }}</div>
    <img class="hidden" src="@/assets/images/logo.png" alt="Logo" />
    <router-link :to="PathConstant.ROOT.path">
      {{ PathConstant.ROOT.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    hello: "world",
  }),
};
</script>

<style lang="scss" scoped>
</style>
