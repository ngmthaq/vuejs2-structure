const name = "auth";

const mutationTypes = {
  SET: "SET",
  RESET: "RESET",
};

const actionTypes = {};

const getterTypes = {};

const state = () => ({
  accessToken: null,
  refreshToken: null,
  user: null,
});

const mutations = {
  [mutationTypes.SET](state, payload = {}) {
    state = Object.assign(state, payload);
  },

  [mutationTypes.RESET](state) {
    state = Object.assign(state, {
      error: null,
      isLoading: false,
      isCallingApi: false,
    });
  },
};

const actions = {};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  mutationTypes,
  actionTypes,
  getterTypes,
  name,
};
