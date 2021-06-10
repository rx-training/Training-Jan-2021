const Collections = require('../models/index')

//**********    LOGICAL FUNCTIONS   */

class logicalFunctions{
    static async incId(collection){
        var data = await Collections.Counter.findOneAndUpdate(
            {_id : collection},
            {$inc : {count:1}},
            {useFindAndModify : false}
        )

        if(!data){
            const newData = new Collections.Counter({
                _id : collection,
                count : 2
            })
            data = await newData.save()
            return 1;
        }
        return await data.count
    }

    static async distance(id1,id2) {
        var lat1 =await logicalFunctions.findLatLon(id1,'latitude')
        var lon1 =await logicalFunctions.findLatLon(id1,'longitude')
        var lat2 =await logicalFunctions.findLatLon(id2,'latitude')
        var lon2 =await logicalFunctions.findLatLon(id2,'longitude')
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.85315962;
            
            return  Math.ceil(dist);
        }
    }

    static async findLatLon(id,temp){
        var lat = await Collections.Cities.findById(id)
        return  lat[temp]
    }

    static async calculteTime(startTime,d1,d2){
        var distance = await this.distance(d1,d2)
        if(distance != 0){
            var minute = distance * 1.2
            var hour = parseInt(minute/60)
            minute = parseInt(minute%60)
            
            var id1 = parseInt(startTime.split(':')[0])
            var id2 = parseInt(startTime.split(':')[1])
            minute = minute+id2
            hour = hour +id1
            if(minute >= 60){
                minute = minute-60
                hour+=1
            }
            if(hour > 24) hour = hour - 24
            hour = hour.toString()
            if(hour.length == 1) hour = '0'+ hour
            minute = minute.toString()
            if(minute.length == 1) minute = '0'+ minute
            startTime = hour +':'+ minute +':00'
        }   
        return startTime
    }

    static  ticketCount(coach, distance)
    {
        var multiplier = 1.0
        if(coach.match(/^.*non.*A.*C.*SEATER.*$/i)){
            multiplier = 1.0
        } else if(coach.match(/^.*A.*C.*SEATER.*$/i)) {
            multiplier = 1.3
        } else if(coach.match(/^.*non.*A.*C.*sleeper.*$/i)) {
            multiplier = 1.6
        } else if(coach.match(/^.*A.*C.*sleeper.*$/i)) {
            multiplier = 2.3
        }
        return distance * multiplier
    }

    static async remainingSeat(id,date){
        var seat = await Collections.OccupiedSeats.findOne({routeId : id, Date : date})
        console.log(seat);
        if(!seat) {
            var seat = new Collections.OccupiedSeats({
                routeId: id,
                Date : date,
                occupiedSeats : [0]
            })
            seat.save()
        }
        var totalseat = await Collections.MainRoute
                            .findById(id)
                            .populate('busNumber')
        totalseat = totalseat.busNumber.totalSleeperseat
        seat = seat['occupiedSeats']
        var remainingSeat = []
        for(var i=1;i <= totalseat;i++){
            if(!seat.includes(i)){
                remainingSeat.push(i)
            }
        }  
        return remainingSeat;
    }

    static async getField(collection, id, field){
        const data = await collection.findById(id)
        return data[field]
    }

    static async updateBookedSeat(id,date,newSeat){
        console.log(date);
        var seat = await Collections.OccupiedSeats.findOne({routeId : id, Date : date})
        console.log(seat);
        for(var i of newSeat){
            if(!seat.occupiedSeats.includes(i)){
                seat.occupiedSeats.push(i)
            }
        }
        seat.save()
    }

}

//console.log(logicalFunctions.incId('de'));
//logicalFunctions.incId('de')
//logicalFunctions.remainingSeat(3,'2021-12-21T00:00:00.000Z')
/*     var date =new Date(Date.parse('1998-12-31','dd-mm-yyyy'))
            console.log(date);
            date.setDate(date.getDate() + 1)
             console.log(date); */
//logicalFunctions.calculteTime('22:04',2,1)
//console.log(logicalFunctions.ticketCount('Bharat Benz  A/C seater (2+1)',200)); 
// console.log(logicalFunctions.getField(Collections.Cities,1,'cityName'));
//logicalFunctions.updateBookedSeat(4,'2021-08-21T00:00:00.000Z',[14,15,16])
module.exports = logicalFunctions
