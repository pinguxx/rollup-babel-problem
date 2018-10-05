const { createFilter } = require("rollup-pluginutils");

module.exports = function string(opts = {}) {
  if (!opts.include) {
    throw Error("include option should be specified");
  }

  const filter = createFilter(opts.include, opts.exclude);

  return {
    name: "string",

    transform(code, id) {
      if (filter(id)) {
        return {
          code: "export default (render, model) => render`" + code + "`;",
          map: { mappings: "" }
        };
      }
    }
  };
};
