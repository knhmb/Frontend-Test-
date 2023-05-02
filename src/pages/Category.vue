<template>
  <div class="category">
    <base-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }"
          >All categories</el-breadcrumb-item
        >
        <el-breadcrumb-item>Getting started</el-breadcrumb-item>
      </el-breadcrumb>

      <el-row :gutter="80">
        <el-col :md="24" :lg="8">
          <LeftSection />
        </el-col>
        <el-col :dm="24" :lg="16">
          <RightSection :category-details="categoryDetails" />
        </el-col>
      </el-row>
    </base-container>
    <OtherCategories />
  </div>
</template>

<script>
import LeftSection from "../components/category/LeftSection.vue";
import RightSection from "../components/category/RightSection.vue";
import OtherCategories from "../components/category/OtherCategories.vue";

import axios from "axios";

export default {
  components: {
    LeftSection,
    RightSection,
    OtherCategories,
  },
  data() {
    return {
      categoryDetails: [],
    };
  },
  async created() {
    await axios
      .get(`/api/category/${this.$route.params.categoryId}`)
      .then((res) => {
        this.categoryDetails = res.data;
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
@import "../scss/_variables.scss";

.category {
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;

    .el-breadcrumb {
      margin-bottom: 2rem;
    }

    :deep(.el-breadcrumb__inner) {
      font-family: $font-family;
      color: $text-gray;
    }

    :deep(.el-breadcrumb__inner.is-link) {
      color: $green;
    }

    :deep(.el-breadcrumb__separator.el-icon-arrow-right) {
      margin: 0 0.5rem;
    }
  }
}
</style>