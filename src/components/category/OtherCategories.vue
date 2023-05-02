<template>
  <div class="other-categories">
    <base-container>
      <h3>Other categories</h3>
      <Carousel />
    </base-container>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.other-categories {
  border: 1px solid #e3e0e0;

  .container {
    padding-top: 2rem;
    position: relative;
  }

  h3 {
    font-family: $font-family;
    color: $text-gray;
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>