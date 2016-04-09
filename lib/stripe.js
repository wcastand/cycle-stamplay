'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Stripe = function Stripe(s, r) {
  return new Promise(function (resolve, reject) {
    switch (r.fn) {
      case 'createSubscriptionUser':
        s.Stripe[r.fn](r.id, r.planId, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'deleteSubscription':
      case 'updateSubscription':
        s.Stripe[r.fn](r.userId, r.subscriptionId, r.options, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'getSubscription':
        s.Stripe[r.fn](r.userId, r.subscriptionId, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      case 'getSubscriptions':
        s.Stripe[r.fn](r.userId, r.options, function (err, res) {
          if (err) reject(err);else resolve(res);
        });
        break;
      default:
        reject('Cette fonction n\'existe pas');
    }
  });
};

exports.default = Stripe;