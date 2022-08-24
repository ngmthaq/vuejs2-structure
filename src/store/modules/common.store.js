const name = "common";

const mutationTypes = {
  SET: "SET",
  RESET: "RESET",
};

const actionTypes = {
  onRaiseError: "onRaiseError",
};

const getterTypes = {};

const state = () => ({
  error: null,
  isLoading: false,
  isCallingApi: false,
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

const actions = {
  async [actionTypes.onRaiseError](context, payload) {},
};

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
