function authenticate(req, res, next){
    console.log('Authenticatng...');
    next();
}

module.exports = authenticate;