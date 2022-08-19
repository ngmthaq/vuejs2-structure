<template>
  <div class="primary-loading">
    <v-progress-linear indeterminate color="cyan" v-show="show" />
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $z-index-primary-loading;

  @include down(md) {
    z-index: 100;
  }
}
</style>
