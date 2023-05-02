<template>
  <div>
    <tawk-header></tawk-header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    "tawk-header": Header,
  },
};
</script>

<style lang="scss">
@import "scss/main.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  background: #f9f9f9;
}
</style>