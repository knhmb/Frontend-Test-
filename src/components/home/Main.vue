<template>
  <div class="main">
    <el-row :gutter="25">
      <template v-for="category in categories">
        <el-col :sm="12" :lg="8" v-if="category.enabled" :key="category.id">
          <base-card @click.native="selectCategory(category)">
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
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import dateDifference from "../../mixins/dateDifference";

export default {
  mixins: [dateDifference],
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    selectCategory(cat) {
      localStorage.setItem("singleCategory", JSON.stringify(cat));
      localStorage.setItem("categories", JSON.stringify(this.categories));
      this.$router.push({ name: "category", params: { categoryId: cat.id } });
    },
  },
  async created() {
    let response;
    response = await axios
      .get("/api/categories")
      .then((res) => {
        const data = res.data.sort((a, b) => a.order - b.order);
        this.categories = data;
      })
      .catch((err) => {
        this.$notify({
          title: "Error",
          message: "Sorry an error occurred. Please try again later",
          type: "error",
        });
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.main {
  display: flex;
  align-items: center;
  justify-content: center;

  .el-col {
    margin-bottom: 25px;
  }

  .card {
    padding: 4rem 1.5rem;
    height: 20rem;
    cursor: pointer;

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
}
</style>