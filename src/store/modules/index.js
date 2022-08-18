const context = require.context(".", false, /.store.js/);
const modules = {};

context.keys().forEach((file) => {
  // create the module name from file
  const moduleName = file.replace(/(\.\/|\.store\.js$)/g, "");

  // register file context under module name
  modules[moduleName] = context(file).default;

  // override namespaced option
  modules[moduleName]["namespaced"] = true;
});

export default modules;
