const express = require('express')
const router = express.Router()

// no mount path , any req
const mw1 = (req, res, next) => {
    console.log('Executed every time the app receives request')
    next()
}
router.use(mw1)


// mount path , any req
const mw2 = (req, res, next) => {
    console.log('Executed only on this path with any req')
    next()
}
router.use('/user/:id', mw2)


// a route and its handler function (middleware system)
const mw3 = (req, res, next) =>  {
    if (req.params.id == 6) {
        // res.send('Stop the middleware')
        next('route')
    } else {
        console.log('Jump to next middleware')
        next()
    }
}
router.use('/user/:id', mw3)


const mw4 = (req, res, next) => {
    res.send('next route')
}
router.get('/user/:id', mw4)


module.exports = router