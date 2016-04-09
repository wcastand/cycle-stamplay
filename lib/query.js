'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Query = function Query(s, r) {
  return new Promise(function (resolve, reject) {
    r.query.reduce(function (y, x) {
      switch (x.fn) {
        case 'greaterThan':
        case 'greaterThanOrEqual':
        case 'lessThan':
        case 'lessThanOrEqual':
        case 'equalTo':
          return y[x.fn](x.attr, x.value);
          break;
        case 'pagination':
          return y.pagination(x.page, x.per_page);
          break;
        case 'between':
          return y.between(x.attr, x.value1, x.value2);
          break;
        case 'exists':
        case 'notExists':
        case 'sortAscending':
        case 'sortDescending':
          return y[x.fn](x.attr);
          break;
        case 'populate':
        case 'populateOwner':
          return y[x.fn]();
          break;
        case 'select':
          return y.select.apply(y, _toConsumableArray(x.attr));
          break;
        case 'regex':
          return y.regex(x.attr, x.regex, x.options);
          break;
        case 'near':
        case 'nearSphere':
          return y[x.fn](x.type, x.coordinates, x.maxDistance, x.minDistance);
          break;
        case 'geoIntersects':
        case 'geoWithinGeometry':
          return y[x.fn](x.type, x.coordinates);
          break;
        case 'geoWithinCenterSphere':
          return y.geoWithinCenterSphere(x.coordinates, x.radius);
          break;
        case 'or':
          return y.or.apply(y, _toConsumableArray(x.query));
          break;
        case 'exec':
        default:
          return y.exec(function (err, res) {
            if (err) reject(err);else resolve(res);
          });
      }
    }, s.Query('object', r.object));
  });
};
exports.default = Query;