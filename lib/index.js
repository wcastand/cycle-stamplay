'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStamplayDriver = makeStamplayDriver;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _stamplay = require('stamplay');

var _stamplay2 = _interopRequireDefault(_stamplay);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _codeBlock = require('./codeBlock');

var _codeBlock2 = _interopRequireDefault(_codeBlock);

var _webhook = require('./webhook');

var _webhook2 = _interopRequireDefault(_webhook);

var _stripe = require('./stripe');

var _stripe2 = _interopRequireDefault(_stripe);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeStamplayDriver(id, key) {
  var Stamplay = new _stamplay2.default(id, key);
  return function StamplayDriver(request$) {
    var response$$ = new _rx2.default.ReplaySubject(1);
    request$.subscribe(function (request) {
      var p = function p() {
        switch (request.type) {
          case 'User':
            return (0, _user2.default)(Stamplay, request);
            break;
          case 'Object':
            return (0, _object2.default)(Stamplay, request);
            break;
          case 'CodeBlock':
            return (0, _codeBlock2.default)(Stamplay, request);
            break;
          case 'Webhook':
            return (0, _webhook2.default)(Stamplay, request);
            break;
          case 'Stripe':
            return (0, _stripe2.default)(Stamplay, request);
            break;
          case 'Query':
            return (0, _query2.default)(Stamplay, request);
            break;
        }
      };

      var response$ = _rx2.default.Observable.fromPromise(p());
      response$.request = request;
      response$$.onNext(response$);
    }, response$$.onError.bind(response$$), response$$.onCompleted.bind(response$$));
    return response$$;
  };
}