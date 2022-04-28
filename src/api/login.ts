import axios from "axios";
const login = (params) => {
  return axios.post("/fps/login", params);
};
const isLogin = () => {
  return axios.get("/fps/islogin");
};
export { login, isLogin };
