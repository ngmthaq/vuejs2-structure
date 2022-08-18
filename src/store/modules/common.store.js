const commonName = "common";

const commonMutatorTypes = {
  SET: "SET",
  RESET: "RESET",
};

const commonActionTypes = {
  onRaiseError: "onRaiseError",
};

const state = () => ({
  error: null,
  isLoading: false,
  isCallingApi: false,
});

const mutations = {
  [commonMutatorTypes.SET](state, payload = {}) {
    state = Object.assign(state, payload);
  },

  [commonMutatorTypes.RESET](state) {
    state = Object.assign(state, {
      error: null,
      isLoading: false,
      isCallingApi: false,
    });
  },
};

const actions = {
  async [commonActionTypes.onRaiseError](context, payload) {},
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};

export { commonName, commonMutatorTypes, commonActionTypes };
