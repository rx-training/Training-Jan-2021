const express = require('express')
const app = express()

// middlewares
const logger = require('./middlewares/logger')
const generateToken = require('./modules/Auth/generateToken')       // authentication
const verifyToken = require('./modules/Auth/verifyToken')           // authorization

// routers
const patient = require('./routes/patient.routes')
const doctor = require('./routes/doctor.routes')
const report  = require('./routes/report.routes')


app.listen(3000, () => console.log('Listening at 3000...') )

app.use(express.json())
app.use(logger)
app.use('/', generateToken)

// modules
app.use('/patient', patient)         
app.use('/doctor', doctor)      
app.use('/report', report)




/*Assignment:

Create A Mogoose model design and insert record in the collection.

 In a hospital there are different departments. Patients are treated in these departments by the doctors assigned to patients. Usually each patient is treated by a single doctor, but in rare cases they will have two or three. Healthcare assistants will also attend to patients; every department has many healthcare assistants. Each patient is required to take a variety of drugs during different parts of the day such as morning, afternoon and night.

After Creating a Database design. Create ORM with database first Approach.

Insert a Doctor

Update a Doctor

Delete a Doctor

Find a report of patient assigned to a particular doctor

Find a report of medicine list for a particular patient

Display summary report of Doctor and patient (use Include method)
*/





