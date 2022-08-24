import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export const getStoreNS = (moduleName, moduleType) => {
  if (moduleName && moduleType) {
    return `${moduleName}/${moduleType}`;
  }

  console.error("[getStoreNS] - Not found moduleName or moduleType");

  return "";
};

export const mapModuleStore = (module) => {
  try {
    if (module) {
      let stateKey = module.state();
      let stateArray = Object.keys(stateKey);
      let gettersArray = Object.values(module.getterTypes);
      let mutationsArray = Object.values(module.mutationTypes);
      let actionsArray = Object.values(module.actionTypes);

      let stateObj = stateArray.reduce((obj, key) => {
        obj[key] = (state) => state[key];

        return obj;
      }, {});

      let state = mapState(module.name, stateObj);
      let getters = mapGetters(module.name, gettersArray);
      let mutations = mapMutations(module.name, mutationsArray);
      let actions = mapActions(module.name, actionsArray);

      let mixin = {
        computed: { ...state, ...getters },
        methods: { ...mutations, ...actions },
      };

      return mixin;
    }

    console.error("[mapModuleStore] - Module not found");

    return {};
  } catch (error) {
    console.error("[mapModuleStore] - Get error with module: ", error);

    return {};
  }
};
