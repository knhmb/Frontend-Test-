import VueRouter from "vue-router";
import Vue from "vue";

import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/category/:categoryId", component: Category, name: "category" },
  ],
});

export default router;
