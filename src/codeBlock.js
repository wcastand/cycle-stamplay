const CodeBlock =  (s, r) => {
  return new Promise((resolve, reject) => {
    const codeblock = s.Codeblock(r.id)
    codeblock.run(r.data, r.query, (err, res) => {
      if(err) reject(err)
      else resolve(res)
    })
  })
}

export default CodeBlock
