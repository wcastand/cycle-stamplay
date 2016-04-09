const CustomObject = (s, r) => {
  return new Promise((resolve, reject) => {
    switch(r.fn){
      case 'save':
      case 'get':
        s.Object(r.object)[r.fn](r.data, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'remove':
      case 'upVote':
      case 'downVote':
        s.Object(r.object)[r.fn](r.id, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'update':
      case 'patch':
        s.Object(r.object)[r.fn](r.id, r.data, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'rate':
        s.Object(r.object)[r.fn](r.id, r.rate, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'comment':
        s.Object(r.object)[r.fn](r.id, r.text, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      case 'push':
        s.Object(r.object)[r.fn](r.id, r.attribute, r.data, (err, res) => {
          if(err) reject(err)
          else resolve(res)
        })
        break
      default:
        reject('Cette fonction n\'existe pas')
    }
  })
}
export default CustomObject
