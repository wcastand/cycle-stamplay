"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CodeBlock = function CodeBlock(s, r) {
  return new Promise(function (resolve, reject) {
    var codeblock = s.Codeblock(r.id);
    codeblock.run(r.data, r.query, function (err, res) {
      if (err) reject(err);else resolve(res);
    });
  });
};

exports.default = CodeBlock;