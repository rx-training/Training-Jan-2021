const mongoose = require('mongoose')
const { count } = require('./model')
const { Story , Person } = require('./model')


DB_CONNECTION_STRING = 'mongodb://localhost:27017/test'
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err))




const p1 = new Person({
    _id: new mongoose.Types.ObjectId,
    name: 'john',
    age: 34,
    stories: []
})
const p2 = new Person({
    _id: new mongoose.Types.ObjectId,
    name: 'mary',
    age: 14,
    stories: []
})
const s1 = new Story({
    _id: new mongoose.Types.ObjectId,
    author: p1._id,
    title: 'Casino party',
    fans: [p2._id]
})

const s2 = new Story({
    _id: new mongoose.Types.ObjectId,
    author: p2._id,
    title: 'Birthday party',
    fans: [p1._id]
})


p1.stories.push(s1._id)
p2.stories.push(s2._id)
const checkValidation = async () => {
    const john = await p1.save()
    const mary = await p2.save()
    const story1 = await s1.save()
    const story2 = await s2.save()

    const p = await Person.findOne({ name: 'john'}).populate('stories').exec( (err, person) => {
        console.log(person)
    })

    const s = await Story.findOne({ title: 'Casino party' }).populate('author').populate('fans').exec( (err, story) => {
        console.log(story)
    })
}
checkValidation()





/*
Practice Exercise:

Do the hands from videos provided and mongoose official site

Assignment:

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