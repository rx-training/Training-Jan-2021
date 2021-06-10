const Car = require('../../models/v2/Car')

getPopularCars = async ( req, res)  => {
  await Car.find({ carPower: 'Popular'}, (err, data) => {
    if ( err ){
      return res.status(500).json({msg: 'Something went wrong', error: err})
    }
    console.log(data)
    res.status(200).json({ msg: 'Popular Cars', data: data})
  })
}



module.exports = {
  getPopularCars
}