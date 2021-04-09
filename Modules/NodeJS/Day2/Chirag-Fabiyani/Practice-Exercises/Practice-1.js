const fs = require('fs')

const content1 = '\nHello India'

fs.appendFile('./Person.txt', content1, (err) => {
  if (err) {
    console.error(err)
    return
  }
})


const args = process.argv.slice(2)
const content2='\nHello '+args[0].toString();
fs.appendFile('./Person.txt', content2, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })


fs.readFile('./Person.txt','utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
