"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WebHook = function WebHook(s, r) {
  return new Promise(function (resolve, reject) {
    var webhook = s.Webhook(r.name);
    webhook.post(r.data, function (err, res) {
      if (err) reject(err);else resolve(res);
    });
  });
};

exports.default = WebHook;