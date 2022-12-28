<template>
  <div>
    <p>{{ $t("message") }}</p>
    <b-button class="button">
      <b-icon-alarm></b-icon-alarm>
    </b-button>
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

button {
  background-color: $danger;
}
</style>
