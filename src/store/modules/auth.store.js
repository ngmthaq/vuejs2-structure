const authName = "auth";

const authMutatorTypes = {
  SET: "SET",
  RESET: "RESET",
};

const authActionTypes = {};

const state = () => ({
  accessToken: null,
  refreshToken: null,
  user: null,
});

const mutations = {
  [authMutatorTypes.SET](state, payload = {}) {
    state = Object.assign(state, payload);
  },

  [authMutatorTypes.RESET](state) {
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
};

export { authName, authMutatorTypes, authActionTypes };
