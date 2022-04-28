import { request } from "./request";

const getSystemRoutes = () => {
  return request.get("/getSystemRoutes");
};

export { getSystemRoutes };
