<template>
  <div class="category-left-section">
    <base-card>
      <div class="top">
        <i :class="`fa fa-${singleCategory.icon}`"></i>
        <p class="title">{{ singleCategory.title }}</p>
        <p>
          Updated {{ getDateDifference(singleCategory.updatedOn, 7) }} weeks ago
        </p>
      </div>
      <div class="bottom">
        <i class="fa fa-info"></i>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          voluptatem perferendis id aut obcaecati praesentium cumque maxime
          vitae eaque molestiae quasi.
        </p>
      </div>
    </base-card>
  </div>
</template>

<script>
import dateDifference from "../../mixins/dateDifference";
import moment from "moment";

export default {
  mixins: [dateDifference],
  data() {
    return {
      singleCategory: {},
    };
  },
  methods: {
    dateDifference(date) {
      const currentDate = moment(new Date()).format();
      const itemDate = moment(date).format();
      console.log(currentDate);
      console.log(itemDate);
    },
  },
  created() {
    const cat = localStorage.getItem("singleCategory");
    this.singleCategory = JSON.parse(cat);
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.category-left-section {
  .card {
    p {
      font-family: $font-family;
      color: $text-gray;
      font-size: 14px;
    }

    .top {
      padding: 4rem 2rem 2rem;
      text-align: center;
      border-bottom: 2px solid #e3e0e0;
      width: 100%;

      i {
        filter: $shadow;
        font-size: 4rem;
        color: $icon-color;
      }

      p.title {
        color: $text-black;
        margin: 2.2rem 0 0.5rem 0;
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
    .bottom {
      padding: 2rem 2rem 4rem;
      text-align: center;
    }

    i {
      color: $icon-color;
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
    }
    .bottom {
      padding: 2rem 2rem 4rem;
      text-align: center;
    }

    i {
      color: $icon-color;
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 1199px) {
  .category-left-section {
    margin-bottom: 1.5rem;

    .card {
      .top,
      .bottom {
        padding: 2rem 1rem;
      }
    }
  }
}
</style>