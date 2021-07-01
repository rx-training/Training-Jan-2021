const Employees = require('../models/employees/employees.models')

class EmpController {
    getAll(req, res) {
        Employees.find((err, employees) => {
            if (err) return res.send(err)
            return res.json(employees)
        })
    }

    get(req, res) {
        Employees.findById(req.params.id, (err, employee) => {
            if (err) return res.status(500).send(err)
            return res.json(employee)
        })
    }

    create(req, res) {
        const employee = new Employees(req.body)

        employee.save((err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            }

            return res.json({ msg: "Employee created", employee: result })
        })

    }


    update(req, res) {
        Employees.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, e) => {
            if (err) {
                console.log(err)
                return res.send('error')
            }
    
            return res.json({ msg: 'Employee Updated', Employee: e })
        })

    }


    delete(req, res) {
        Employees.findByIdAndRemove(req.params.id, (err, e) => {
            if (err) {
                console.log(err)
                return res.send('error')
            }
    
            return res.json({ msg: 'Employees Deleted', Employee: e })
        })
    }

    
}


module.exports = EmpController;




/*
var e1 = new Employees(
    {
        AddressLine1: "D-45 Gandhi houses",
        AddressLine2: "near kasturba flats",
        AddressLine3: "sabarmati ashram",
        CitizenshipId: 1,
        CitizenshipLegislationCode: "A1",
        CitizenshipStatus: "Indian",
        CitizenshipToDate: '2002-12-09',
        City: "Ahmedabad",
        CorrespondenceLanguage: "Gujarati",
        Country: "India",
        CreationDate: '2002-12-09',
        DateOfBirth: '2002-12-09',
        DisplayName: "bapu",
        DriversLicenseExpirationDate: '2002-12-09',
        DriversLicenseId: 123456,
        DriversLicenseIssuingCountry: "India",
        EffectiveStartDate: '2002-12-09',
        Ethnicity: "Indo-Aryan",
        FirstName: "Mohandas",
        Gender: "Male",
        HireDate: '2002-12-09',
        HomeFaxAreaCode: "A4552",
        HomeFaxCountryCode: "I15545",
        HomeFaxExtension: ".pdf",
        HomeFaxLegislationCode: "D554",
        HomeFaxNumber: "1225455",
        HomePhoneAreaCode: "A455522",
        HomePhoneCountryCode: "012",
        HomePhoneExtension: "48485",
        HomePhoneLegislationCode: "4542200",
        HomePhoneNumber: "7990165272",
        Honors: "Mr",
        LastName: "Gandhi",
        LastUpdateDate: '2002-12-09',
        LegalEntityId: 54811,
        LicenseNumber: "FFEE0215454",
        MaritalStatus: "Married",
        MiddleName: "Karamchand",
        MilitaryVetStatus: "No",
        NameSuffix: "bapu",
        NationalId: "264644",
        NationalIdCountry: "99",
        assignments: [
            {
                ActionCode: "1",
                ActionReasonCode: "1",
                ActualTerminationDate: '2002-12-09',
                AssignmentCategory: "Freedom",
                AssignmentId: "1",
                AssignmentName: "Salt Movement",
                AssignmentNumber: "111",
                AssignmentProjectedEndDate: '2002-12-09',
                AssignmentStatus: "Completed",
                AssignmentStatusTypeId: 11223344,
                BusinessUnitId: 11223344,
                CreationDate: '2002-12-09',
                DefaultExpenseAccount: "Yes",
                DepartmentId: 11223344,
                EffectiveEndDate: '2002-12-09',
                EffectiveStartDate: '2002-12-09',
                EndTime: "1 :4 :12",
                Frequency: "15",
                FullPartTime: "Yes",
                GradeId: 11223344,
                GradeLadderId: 11223344,
                JobId: 11223344,
                LastUpdateDate: '2002-12-09',
                LegalEntityId: 11223344,
                LocationId: 11223344,
                ManagerAssignmentId: 11223344,
                ManagerId: 11223344,
                assignmentDFF: [],
                assignmentExtraInformation: [],
                empreps: [],
                links: [
                    "Sardar Patel"
                ]
            },
            {
                ActionCode: "2",
                ActionReasonCode: "2",
                ActualTerminationDate: '2002-12-09',
                AssignmentCategory: "Freedom",
                AssignmentId: "2",
                AssignmentName: "Dandi March",
                AssignmentNumber: "222",
                AssignmentProjectedEndDate: '2002-12-09',
                AssignmentStatus: "Completed",
                AssignmentStatusTypeId: 55667788,
                BusinessUnitId: 55667788,
                CreationDate: '2002-12-09',
                DefaultExpenseAccount: "Yes",
                DepartmentId: 55667788,
                EffectiveEndDate: '2002-12-09',
                EffectiveStartDate: '2002-12-09',
                EndTime: "1 :4 :12",
                Frequency: "15",
                FullPartTime: "Yes",
                GradeId: 55667788,
                GradeLadderId: 55667788,
                JobId: 55667788,
                LastUpdateDate: '2002-12-09',
                LegalEntityId: 55667788,
                LocationId: 55667788,
                ManagerAssignmentId: 55667788,
                ManagerId: 55667788,
                assignmentDFF: [],
                assignmentExtraInformation: [],
                empreps: [],
                links: [
                    "Sardar Patel"
                ]
            }
        ],
        directReports: [
            "school certificate",
            "driving license"
        ],
        links: [
            "bhagat singh",
            "sukhdev",
            "ambedkar doctor"
        ]
    }
)
*/
// e1.save()
//     .then( result => console.log(result))
//     .catch( err => console.log(err))
