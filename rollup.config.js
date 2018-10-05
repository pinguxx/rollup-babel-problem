/**
 * rollup.config.js
 */
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import npm from "rollup-plugin-node-resolve";
import cdn from "rollup-plugin-cdn";
const hypertemplate = require("./rollup/hypertemplate");

const defaults = {
    input: "test.js",
    output: {
      file: "dist/test.js",
      name: "test",
      globals: {},
      format: "umd"
    },
    external: [],
    plugins: [
      cdn(),
      hypertemplate({
        include: "**/*.htt"
      }),
      npm({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      babel({
        babelrc: false,
        presets: [
          [
            "@babel/env",
            {
              modules: false,
              targets: {
                ie: "10"
              }
            }
          ]
        ]
      })
    ]
  };

  const bundles = [];

  bundles.push(defaults);

  export default bundles;