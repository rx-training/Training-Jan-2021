const fs = require('fs')

function getData(field, value , data) {
    const body = data.find(i => i[field] == value)
    
    if(!body) {
        return 
    }
    
    return body

}

function createData(body, data, file=null, assignId=1){
    if( assignId ){
        var lastbody = data[data.length-1] 
	    body.id = lastbody.id + 1
    } 
    
    data.push(body)
    if(file){
        fs.writeFile(file, JSON.stringify(data), (err) => {
			if(err) throw err
		})
    }
    return body
}

function updateData(field, value, body, data, file=null) {
    var newbody = getData(field, value, data)
    if(newbody) {
        // employee.id = uuidv4()												// assigning new id to employee
        index = data.indexOf(newbody)

        for(var key in body){
            data[index][key] = body[key]					        		// update fields
        }
        if(file){
            fs.writeFile(file, JSON.stringify(data), (err) => {
                if(err) throw err
            })
        }
        return newbody
    } 
    else {
        return 
    }
}
	

function deleteData(field, value, data, file=null) {
    var body = getData(field, value, data)

    if(body) {
        index = data.indexOf(body) 
		data.splice(index, 1)

        if(file){
            fs.writeFile(file, JSON.stringify(data), (err) => {
                if(err) throw err
            })
        }
        return body
    } 
    else {
        return
    }
    
}



module.exports = {
    getData,
    createData,
    updateData,
    deleteData
}