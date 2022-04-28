import { RouteRecordRaw } from "vue-router";
const Home = () => import("@/views/Home/index");
const Login = () => import("../views/Login/index");
const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "home", component: Home },
  { path: "login", component: Login },
];
export { routes };
