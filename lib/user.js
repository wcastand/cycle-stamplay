'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var User = function User(s, r) {
  return new Promise(function (resolve, reject) {
    switch (r.fn) {
      case 'save':
      case 'get':
        s.User[r.fn](r.data, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'remove':
        s.User[r.fn](r.id, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'update':
        s.User[r.fn](r.id, r.data, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      default:
        reject('Cette fonction n\'existe pas');
    }
  });
};

exports.default = User;