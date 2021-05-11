const chalk = require('chalk');
const LoggerMiddleware = (req, res, next) => {
    console.log(chalk.blue(`Logged ${req.url} ${req.method} --${new Date()}`));
    next();
};
module.exports = LoggerMiddleware;