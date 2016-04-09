const User =  (s, r) => {
  return new Promise((resolve, reject) => {
    switch(r.fn){
      case 'save':
      case 'get':
        s.User[r.fn](r.data, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'remove':
        s.User[r.fn](r.id, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'update':
        s.User[r.fn](r.id, r.data, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      default:
        reject('Cette fonction n\'existe pas')
    }
  })
}

export default User
