<template>
  <div class="loading" v-show="open">
    <v-progress-linear indeterminate></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "Loading",

  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.loading {
  z-index: $z-index-loading;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba($color: #000000, $alpha: 0.1);
  position: fixed;
  top: 0;
  left: 0;
}
</style>
