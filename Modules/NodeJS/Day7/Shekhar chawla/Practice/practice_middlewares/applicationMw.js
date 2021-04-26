// no mount path , any req
const mw1 = (req, res, next) => {
    console.log('Executed every time the app receives request')
    next()
}


// mount path , any req
const mw2 = (req, res, next) => {
    console.log('Executed only on this path with any req')
    next()
}

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

const mw4 = (req, res, next) => {
    res.send('next route')
}

module.exports = {
    mw1,
    mw2,
    mw3,
    mw4
}