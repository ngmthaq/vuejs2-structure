const context = require.context(".", false, /.store.js/);
const modules = {};

context.keys().forEach((file) => {
  const defaultContext = context(file).default;

  // register file context under module name
  modules[defaultContext.name] = defaultContext;

  // override namespaced option
  modules[defaultContext.name]["namespaced"] = true;
});

export default modules;
