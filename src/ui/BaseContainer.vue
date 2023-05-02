<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 4rem 7rem;
}

@media screen and (max-width: 970px) {
  .container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
@media screen and (max-width: 450px) {
  .container {
    padding-left: 2.3rem;
    padding-right: 2.3rem;
  }
}
</style>