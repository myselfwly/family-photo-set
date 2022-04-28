import { createApp } from "vue";
import App from "./App";
import { route } from "./router";
import "ant-design-vue/dist/antd.css";
import "./index.less";
import { isLogin } from "./api/login";
const theme = "dark";
const setTheme = async (theme) => {
  await import(`./theme/${theme}Light.css`);
};
setTheme(theme);
const app = createApp(App);

app.use(route);
app.mount("#app");
