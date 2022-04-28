import { deepClone } from "@/libs/tools";

const state = () => ({
  routers: [],
});

const getters = {
  getRoutes(state, getters, rootState) {
    return deepClone(state.routers);
  },
};

const action = {};
