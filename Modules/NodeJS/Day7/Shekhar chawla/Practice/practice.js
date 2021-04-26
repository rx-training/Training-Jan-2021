const express = require('express')
const app = express()

// Application-level middleware
const application = require('./practice_middlewares/applicationMw')

// app.use(application.mw1)

// app.use('/user/:id', application.mw2)

// middlewares = [application.mw3, application.mw4]
// app.get('/user/:id', middlewares)



// Router-level Middleware
const router = require('./practice_middlewares/routerMw')
app.use('/router', router)



// Error handling middleware
app.use( (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something went wrong...')
})

// Third-party middleware
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
  
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(3000, () => console.log('3000 started...'))