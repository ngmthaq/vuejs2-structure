<template>
  <div>
    <p>{{ $t("message") }}</p>
    <b-icon-alarm></b-icon-alarm>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
p {
  color: $red;

  @include downXl {
    color: $blue;
  }
}
</style>
