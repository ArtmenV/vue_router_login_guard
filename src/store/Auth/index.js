import axios from "axios";

export default {
  state: {
    token: localStorage.getItem("token") || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  },

  actions: {
    async retriveToken({ commit }, payload) {
      try {
        const data = await axios.post(
          "http://demo-rmcsapi.zimalab.com/api/login",
          {
            username: payload.username,
            password: payload.password
          }
        );
        const token = data.data.token;
        localStorage.setItem("token", token);
        commit("retriveToken", token);
      } catch (error) {
        console.log(error);
      }
    },
    async destroyToken({ commit }) {
      try {
        // axios.defaults.headers.common["Authorization"] =
        //   "Bearer " + commit.state.token;
        if (commit.getters.loggedIn) {
          localStorage.removeItem("token");
          commit("destroyToken");
        }
      } catch (error) {
        localStorage.removeItem("token");
        commit("destroyToken");
        console.log(error);
      }
    }
  },
  mutations: {
    retriveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  }
};
