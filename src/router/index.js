import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Auth/Login/index.vue";
import Logout from "../components/Logout/index.vue";
import About from "../components/About/index.vue";
import Register from "../components/Auth/Register/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: "/",
    name: "home",
    component: Home
    // meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: "todo"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
