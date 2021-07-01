const log = (req, res, next) => {
	console.log(`[ ${Date()} ] ${req.method} ${req.url}`)
	next()
}

module.exports = log