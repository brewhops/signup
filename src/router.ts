import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Documentation from "./views/Documentation.vue";
import Signup from "./views/Signup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/documentation",
      name: "documentation",
      component: Documentation
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
  ]
});
