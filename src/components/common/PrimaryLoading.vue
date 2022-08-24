<template>
  <div class="primary-loading" v-show="show">
    <v-progress-linear indeterminate color="cyan" />
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
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
