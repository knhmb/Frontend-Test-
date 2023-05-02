<template>
  <div class="carousel">
    <SimpleCarousel :items-per-view="itemsPerView" hide-buttons-on-start-end>
      <base-card v-for="category in allCategories" :key="category.id">
        <i :class="`fa fa-${category.icon}`"></i>
        <p>{{ category.title }}</p>
        <div class="info">
          <p class="article">{{ category.totalArticle }} articles</p>
          <p>
            Last update
            {{ getDateDifference(category.updatedOn) }} days ago
          </p>
        </div>
      </base-card>
    </SimpleCarousel>
  </div>
</template>

<script>
import SimpleCarousel from "vue2-simple-carousel";
import dateDifference from "../../mixins/dateDifference";

export default {
  components: {
    SimpleCarousel,
  },
  mixins: [dateDifference],
  data() {
    return {
      allCategories: [],
      itemsPerView: 3,
    };
  },

  methods: {
    myEventHandler(e) {
      console.log(window);
      if (window.innerWidth <= 971) {
        this.itemsPerView = 1;
      } else if (window.innerWidth <= 1099) {
        this.itemsPerView = 2;
      } else {
        this.itemsPerView = 3;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    this.myEventHandler();

    this.allCategories = JSON.parse(localStorage.getItem("categories"));
    console.log(this.allCategories);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.carousel {
  :deep(.carousel) {
    position: inherit;
  }
  :deep(.carousel__element) {
    padding: 0 1rem;
  }

  :deep(.carousel__button) {
    background: #f0f0f0;
    display: flex;
    height: 3rem;
    width: 3rem;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    span {
      font-size: 2rem;
      color: #d6d6d6;
    }
  }

  :deep(.carousel__button--prev) {
    left: 4rem;
  }

  :deep(.carousel__button--next) {
    right: 4rem;
  }
  .card {
    padding: 4rem 1.5rem;
    height: 20rem;
    cursor: pointer;
    width: 100%;
    // width: 24.8rem;

    i {
      filter: $shadow;
      font-size: 4rem;
      color: $icon-color;
    }

    p {
      color: $text-black;
      font-family: $font-family;
      font-weight: 700;
      font-size: 1.8rem;
      margin: 2.2rem 0;
      text-align: center;
    }

    .info {
      text-align: center;

      p {
        font-size: 14px;
        margin: 0;
        color: $text-gray;
      }

      p.article {
        font-size: 16px;
        color: $green;
      }
    }
  }

  @media screen and (max-width: 970px) {
    :deep(.carousel__button--prev) {
      left: 0.2rem;
    }

    :deep(.carousel__button--next) {
      right: 0.2rem;
    }
  }
}
</style>