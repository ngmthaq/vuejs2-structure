const commonModule = {
  namespaced: true,

  state: () => ({
    isLoading: false,
  }),

  mutations: {
    SET_IS_LOADING: (state, payload) => {
      state.isLoading = payload.isLoading;
    },
  },

  actions: {},
};

export default commonModule;
