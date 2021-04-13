const express = require("express");
const fs = require("fs");
const empRouter = require("./router");
const Joi = require("joi");
const employees = require("./employees.json");

const app = express();
const port = 3000;

const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  next();
};

app.use(LoggerMiddleware);
app.use(express.json());
//storing employee data from json file

// Error handling middle ware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

var empData = employees;

const schema = Joi.object({
  EmpId: Joi.number().integer().required(),
  AddressLine1: Joi.string(),
  AddressLine2: Joi.string(),
  AddressLine3: Joi.string(),
  Assignments: Joi.array(),
  CitizenshipId: Joi.number().integer(),
  CitizenshipLegislationCode: Joi.string(),
  CitizenshipStatus: Joi.string(),
  CitizenshipToDate: Joi.date(),
  City: Joi.string(),
  CorrespondenceLanguage: Joi.string(),
  Country: Joi.string(),
  CreationDate: Joi.date(),
  DateOfBirth: Joi.date(),
  DirectReports: Joi.array(),
  DisplayName: Joi.string(),
  DriversLicenseExpirationDate: Joi.date(),
  DriversLicenseId: Joi.number().integer(),
  DriversLicenseIssuingCountry: Joi.string(),
  EffectiveStartDate: Joi.date(),
  Ethnicity: Joi.string(),
  FirstName: Joi.string().required(),
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
  LastName: Joi.string().required(),
  LastUpdateDate: Joi.date(),
  LegalEntityId: Joi.number().integer(),
  LicenseNumber: Joi.string(),
  links: Joi.array(),
  MaritalStatus: Joi.string(),
  MiddleName: Joi.string(),
  MilitaryVetStatus: Joi.string(),
  NameSuffix: Joi.string(),
  NationalId: Joi.string(),
  NationalIdCountry: Joi.string(),
});

//shwing all emlyees
app.get("/emps", (req, res) => {
  res.json(empData);
});

//To Create an employee

app.post("/emps", (req, res) => {
  //getting user input
  let data = req.body;

  //Validating user input
  const { error, value } = schema.validate(data);

  if (error) {
    res.send(error.details[0].message);
  } else {
    empData.push(value);

    //writing changes in json file
    fs.writeFile(
      "employees.json",
      JSON.stringify(empData),
      { flag: "w" },
      (err) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.status(200).send("Emloyee Created Successfully");
        }
      }
    );
  }
});

app.put("/emps", (req, res) => {
  //getting user input
  let data = req.body;

  //Validating user input
  const { error, value } = schema.validate(data);

  if (error) {
    res.send(error.details[0].message);
  } else {
    const isAvail = empData.find((e) => e.EmpId == value.EmpId);
    if (isAvail) {
      for (let i = 0; i < empData.length; i++) {
        if (empData[i].EmpId == value.EmpId) {
          empData[i].FirstName = value.FirstName;
          empData[i].LastName = value.LastName;

          //writing changes in json file
          fs.writeFile(
            "employees.json",
            JSON.stringify(empData),
            { flag: "w" },
            (err) => {
              if (err) {
                console.log(err);
                res.end();
              } else {
                res.status(200).send("Emloyee Data Updated Successfully");
              }
            }
          );
          break;
        }
      }
    } else {
      res.status(404).send("Data Not Found");
    }
  }
});

//Assignment Route
app.use("/emps", empRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
