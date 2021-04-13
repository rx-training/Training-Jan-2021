const Joi = require("joi");
const router = require("./router1");
var express = require("express");
const empData = require("./employee.json");
const LoggerMiddleware = require("./loggerMiddleware");

const fs = require("fs");
const app = express();
app.use(express.json());
app.use("/emps", router);
app.use(LoggerMiddleware);

const schema = Joi.object({
    EmpId: Joi.number(),
    AddressLine1: Joi.string().max(100),
    AddressLine2: Joi.string().max(30),
    AddressLine3: Joi.string().max(30),
    Assignments: Joi.array(),
    CitizenshipId: Joi.number().integer(),
    CitizenshipLegislationCode: Joi.string(),
    CitizenshipToDate: Joi.date(),
    City: Joi.string().max(30),
    CorrespondenceLanguage: Joi.string(),
    Country: Joi.string().max(30),
    CreationDate: Joi.date().timestamp(),
    DateOfBirth: Joi.date(),
    directReports: Joi.array(),
    DisplayName: Joi.string(),
    DriversLicenseExpirationDate: Joi.date(),
    DriversLicenseId: Joi.number(),
    DriversLicenseIssuingCountry: Joi.string().max(100),
    EffectiveStartDate: Joi.string(),
    Ethnicity: Joi.string(),
    FirstName: Joi.string(),
    Gender: Joi.string(),
    HireDate: Joi.date(),
    HomeFaxAreaCode: Joi.string(),
    HomeFaxCountryCode: Joi.string(),
    HomeFaxExtension: Joi.string(),
    HomeFaxLegislationCode: Joi.string(),
    HomeFaxNumber: Joi.string(),
    HomePhoneAreaCode: Joi.string(),
    HomePhoneCountryCode: Joi.string(),
    HomePhoneExtension: Joi.string(),
    HomePhoneLegislationCode: Joi.string(),
    HomePhoneNumber: Joi.string(),
    Honors: Joi.string(),
    LastName: Joi.string(),
    LastUpdateDate: Joi.date().timestamp(),
    LegalEntityId: Joi.number(),
    LicenseNumber: Joi.string(),
    links: Joi.array(),
    MaritalStatus: Joi.string(),
    MiddleName: Joi.string(),
    MilitaryVetStatus: Joi.string(),
    NameSuffix: Joi.string(),
    NationalId: Joi.string(),
    NationalIdCountry: Joi.string(),
});

//To Create a employee
app.post("/emps", (req, res) => {
    let data = req.body;
    const { error, value } = schema.validate(data);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        empData.push(data);
        fs.writeFile("employee.json", JSON.stringify(empData), (err) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.send("Data Inserted Successfully");
            }
        });
    }
});

//Update FirstName LastName of Employee
app.put("/emps/:id", (req, res) => {
    let data = req.body;
    for (let i = 0; i < empData.length; i++) {
        if (empData[i].EmpId == req.params.id) {
            empData[i].FirstName = data.FirstName;
            empData[i].LastName = data.LastName;
        }
    }
    fs.writeFile("employee.json", JSON.stringify(empData), (err) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.send("Data Updated Successfully");
        }
    });
});

app.listen(3000, (req, res) => {
    console.log("server running");
});
