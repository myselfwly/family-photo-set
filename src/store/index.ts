import { createLogger, createStore } from "vuex";

export default createStore({
  modules: {},
  strict: true,
  plugins: [createLogger()],
});
