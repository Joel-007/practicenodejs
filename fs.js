const { readFileSync , WriteFileSync, read, writeFileSync} = require ('fs')

const first= readFileSync('./content/first.txt','utf-8')
const second= readFileSync('./content/second.txt','utf-8')
console.log(first,second)
writeFileSync('./content/result.txt',`result is : ${first} ${second}`)
const result = readFileSync('./content/result.txt','utf-8')
console.log(result)

