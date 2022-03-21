const Login = () => import("../views/Login/index");
const Home = () => import("@/views/Home/index");
const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
];
export { routes };
