const context = require.context("./", true, /[A-Za-z0-9-_,\s]+\.module\.js$/);
const modules = {};

context.keys().forEach(file => {
  const name = file.replace(/(\.\/|\.module\.js$)/g, "");
  modules[name] = context(file).default;
  modules[name].namespaced = true;
});

export default modules;
