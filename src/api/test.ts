import { request } from "./request";

const test = () => {
  return request.get("/test");
};

export { test };
