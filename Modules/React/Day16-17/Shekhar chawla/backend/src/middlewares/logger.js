const moment = require('moment');
const chalk = require('chalk');

const logger = (req, res, next) => {
  let now = `[${moment().format('HH:mm:ss DD/MM/YYYY')}]`;
  let method = chalk.yellow(req.method);
  let route = chalk.cyan(req.url);
  res.on('finish', function() {
    let code = this.statusCode===200 ? chalk.green(this.statusCode) : chalk.red(this.statusCode);
    console.log(`${now} ${method} ${route} => ${code}`);
  })

  next();
}

module.exports = logger