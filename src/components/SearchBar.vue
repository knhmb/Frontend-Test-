<template>
  <div class="input-content">
    <input type="text" placeholder="Search for answers" />
    <div class="search-icon">
      <i class="fa fa-search" style="color: #ffffff"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.input-content {
  position: relative;
  width: fit-content;
  margin: 3rem auto;

  input {
    border: none;
    outline: none;
    padding: 1.2rem 6rem 1.2rem 1.2rem;
    width: 45rem;
    border: 1px solid #eee;
    border-radius: 2px;
    font-size: 12px;
    font-family: $font-family;
  }

  input::placeholder {
    color: $text-gray;
    font-family: $font-family;
  }

  .search-icon {
    background-color: $green;
    width: 5rem;
    height: 3.3rem;
    border-radius: 2px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    cursor: pointer;

    i {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 746px) {
    input {
      width: 30rem;
    }
  }
  @media screen and (max-width: 540px) {
    input {
      width: 20rem;
    }
  }
}
</style>