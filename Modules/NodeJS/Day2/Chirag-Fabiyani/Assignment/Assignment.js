const fs = require('fs');
let content;
const args = process.argv.slice(2);
switch (args[0].toString()){
    case 'Add':   content = "\nResult:"+(parseInt(args[1])+parseInt(args[2]));
    break;
    case 'Subtract':  content = "\nResult:"+(parseInt(args[1])-parseInt(args[2]));
    break;
    case 'Multiply':   content = "\nResult:"+(parseInt(args[1])*parseInt(args[2]));
    break;
    case 'Divide':  content = "\nResult:"+(parseInt(args[1])/parseInt(args[2]));
    break;
    default: console.log("Enter Values Correctly!!");
}
fs.appendFile('./Result.txt', content, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })