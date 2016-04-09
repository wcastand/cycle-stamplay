const WebHook =  (s, r) => {
  return new Promise((resolve, reject) => {
    const webhook = s.Webhook(r.name)
    webhook.post(r.data, (err, res) => {
      if(err) reject(err)
      else resolve(res)
    })
  })
}

export default WebHook
