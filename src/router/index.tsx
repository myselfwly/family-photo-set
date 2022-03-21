import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
const routerHistory = createWebHashHistory();
const route = createRouter({
  history: routerHistory,
  routes: [...routes],
});

export { route };
