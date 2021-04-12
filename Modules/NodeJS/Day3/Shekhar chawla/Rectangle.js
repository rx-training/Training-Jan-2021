const Rectangle = class {
	constructor() {
		console.log('Rectangle class Initiated')
	}

	area(l, b) {
		return l*b
	}

	perimeter(l, b) {
		return 2*(parseInt(l) + parseInt(b))
	}
}

module.exports = Rectangle