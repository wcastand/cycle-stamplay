const Stripe = (s, r) => {
  return new Promise((resolve, reject) => {
    switch(r.fn){
      case 'createSubscriptionUser':
        s.Stripe[r.fn](r.id, r.planId, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'deleteSubscription':
      case 'updateSubscription':
        s.Stripe[r.fn](r.userId, r.subscriptionId, r.options, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'getSubscription':
        s.Stripe[r.fn](r.userId, r.subscriptionId, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'getSubscriptions':
        s.Stripe[r.fn](r.userId, r.options, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      default:
        reject('Cette fonction n\'existe pas')
    }
  })
}

export default Stripe
