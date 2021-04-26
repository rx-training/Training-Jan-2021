const mongoose = require('mongoose')

const assignmentSchema = mongoose.Schema({
    AssignmentId: { type : Number, required : true},
    AssignmentName: {type : String, required : true},
    ActionCode: String,
    ActionReasonCode:  String,
    ActualTerminationDate: Date,
    AssignmentCategory: String,
    assignmentDFF: [ Number ],
    assignmentExtraInformation: [ Number ],
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
