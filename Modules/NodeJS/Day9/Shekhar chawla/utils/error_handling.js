function validKeys(body, data) {
  for(var i in body) {
    if(!data[0].hasOwnProperty(i)){
      console.log(`invalid key ${i}`)
      return {keysError:`Invalid key ${i}`}
    }
  }
}


function uniqueConstraint(body, data) {
  var error = null
  // check if value exists
  for(var field in body) {
    for (var i = 0; i < data.length; i++) {
      if( data[i][field] == body[field] ){
        error = field
        break
      }
    }

    // if uniqueConstraint, raise error
    if(error) {
      return { uniqueConstraint : `${error} already exists` }
    }
  } 
}

function errorLog(body, data, unique=1){
  if(!body) {
    console.log('pass some body')
    return new Error
  }
  errArray = []

  const error1 = validKeys(body, data)
	if(error1) {
		errArray.push(error1)
	}

  if (unique) {
    const error2 = uniqueConstraint(body, data)
    if(error2){
      errArray.push(error2)
    }
  } 
	

  return errArray
}



module.exports = {
  validKeys, 
  uniqueConstraint,
  errorLog
}
