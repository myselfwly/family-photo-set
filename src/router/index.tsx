import { deepClone } from "@/libs/tools";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routes } from "./routes";
const LayoutPage = () => import("@/components/business/LayoutPage");
const routerHistory = createWebHashHistory();
// const oneLevelRoute = (routes: RouteRecordRaw[]) => {
//   const cloneRoutes = deepClone(routes) as Array<any>;
//   return cloneRoutes.map((item) => {
//     item.path = "/" + item.path;
//     return item;
//   });
// };
const route = createRouter({
  history: routerHistory,
  routes: [
    { path: "", redirect: "/familyPhotoSet/home" },
    { path: "/familyPhotoSet", component: LayoutPage, children: [...routes] },
  ],
});

export { route };
