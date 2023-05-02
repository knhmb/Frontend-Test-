<template>
  <div class="category-right-section">
    <template v-for="cat in categoryDetails">
      <base-card v-if="cat.status === 'published'" :key="cat.id">
        <div class="info">
          <i :class="`fa fa-${cat.icon}`"></i>
          <div class="text">
            <p>{{ cat.title }}</p>
            <p class="date">{{ formatDate(cat.updatedOn) }}</p>
          </div>
        </div>
        <i class="fa fa-chevron-right"></i>
      </base-card>
    </template>
  </div>
</template>

<script>
export default {
  props: ["categoryDetails"],
  methods: {
    formatDate(date) {
      const formattedDate = new Date(date);
      const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
        formattedDate
      );
      const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
        formattedDate
      );
      return `${month}, ${day} ${formattedDate.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.category-right-section {
  .card {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    margin-bottom: 1.5rem;
    cursor: pointer;

    i {
      color: $icon-color;
      font-size: 1.8rem;
    }

    .info {
      display: flex;
      align-items: center;

      i {
        margin-right: 2rem;
      }

      .text {
        p {
          font-family: $font-family;
          color: $text-black;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        p.date {
          color: $text-gray;
          font-size: 14px;
          margin: 0;
        }
      }
    }
  }
  @media screen and (max-width: 669px) {
    .card {
      padding: 2rem 1rem;
      justify-content: center;
      .info i {
        margin-bottom: 1rem;
        margin-right: 0;
      }

      i.fa.fa-chevron-right {
        display: none;
      }
      .info {
        flex-direction: column;
        text-align: center;
      }
    }
  }
}

// @media screen and (max-width: 669px) {
//   .card {
//     padding: 2rem 1.5rem;
//     .info {
//       flex-direction: column;
//       text-align: center;
//     }
//   }
// }
</style>