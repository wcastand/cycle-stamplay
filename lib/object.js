'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CustomObject = function CustomObject(s, r) {
  return new Promise(function (resolve, reject) {
    switch (r.fn) {
      case 'save':
      case 'get':
        s.Object(r.object)[r.fn](r.data, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'remove':
      case 'upVote':
      case 'downVote':
        s.Object(r.object)[r.fn](r.id, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'update':
      case 'patch':
        s.Object(r.object)[r.fn](r.id, r.data, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'rate':
        s.Object(r.object)[r.fn](r.id, r.rate, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'comment':
        s.Object(r.object)[r.fn](r.id, r.text, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'push':
        s.Object(r.object)[r.fn](r.id, r.attribute, r.data, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      default:
        reject('Cette fonction n\'existe pas');
    }
  });
};
exports.default = CustomObject;