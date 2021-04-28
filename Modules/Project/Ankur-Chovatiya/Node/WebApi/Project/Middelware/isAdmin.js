module.exports = function(req , res , next) {
    console.log(req.decoded);
    if(!req.decoded.isAdmin){
        return res.status(403).send('Access denied')
    }
    next();
}


