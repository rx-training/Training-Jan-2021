const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
})

readline.question(`what is your name?`,(name , surname) => {
    console.log(`hi ${name}+${surname}!`)
    readline.close()
})

