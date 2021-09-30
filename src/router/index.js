import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { auth } from "../firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuthentication);
  if (requiresAuth && !auth.currentUser) {
    next("/");
  }
  next();
});

export default router;
