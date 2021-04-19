const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Students',{useNewUrlParser: true, useUnifiedTopology: true})
    .then()
    .catch(err => console.log('could not connect to server .....',err))

const assignmentSchema = mongoose.Schema({
    ActionCode: String,
    ActionReasonCode:  String,
    ActualTerminationDate: Date,
    AssignmentCategory: String,
    assignmentDFF: [ Number ],
    assignmentExtraInformation: [ Number ],
    AssignmentId: Number,
    AssignmentName: String,
    AssignmentNumber: String,
    AssignmentProjectedEndDate: Date,
    AssignmentStatus: String,
    AssignmentStatusTypeId: Number,
    BusinessUnitId: Number,
    CreationDate: Date,
    DefaultExpenseAccount: String,
    DepartmentId: Number,
    EffectiveEndDate: Date,
    EffectiveStartDate: Date,
    empreps: [ Number ],
    EndTime: String,
    Frequency: String,
    FullPartTime: String,
    GradeId: Number,
    GradeLadderId: Number,
    JobId: Number,
    LastUpdateDate: Date,
    LegalEntityId: Number,
    links: [ Number ],
    LocationId: Number,
    ManagerAssignmentId: Number,
    ManagerId: Number
})

const Assignments = mongoose.model('Assignments',assignmentSchema)


module.exports = Assignments
