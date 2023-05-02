<template>
  <div class="home">
    <base-container>
      <Main />
    </base-container>
  </div>
</template>

<script>
import Main from "../components/home/Main.vue";

export default {
  components: {
    Main,
  },
  created() {
    localStorage.removeItem("singleCategory");
  },
};
</script>

<style lang="scss" scoped>
</style>