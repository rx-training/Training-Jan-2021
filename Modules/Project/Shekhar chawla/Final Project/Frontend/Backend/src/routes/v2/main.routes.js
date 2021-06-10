const router = require('express').Router({mergeParams: true})
const otherRoutes = require('./other.routes')
const adminRoutes = require('./admin.routes')


router.use('/admin', adminRoutes)
router.use('/', otherRoutes)


module.exports = router