/* PRACTICE EXERCISES  */

USE Day1;

CREATE TABLE Countries
(
	CountryId INT NOT NULL,
	RegionId INT NOT NULL,
	CountryName VARCHAR(50)CONSTRAINT chkCountryName CHECK(CountryName IN('India','Italy','China')),
	CONSTRAINT pkCountries PRIMARY KEY(CountryId,RegionId)
);

DROP TABLE Countries;

CREATE TABLE JobHistory(
	EmployeeId INT NOT NULL PRIMARY KEY,
	JobId INT NOT NULL,
	DepartmentId INT NOT NULL,
	StartDate VARCHAR(10) NOT NULL CONSTRAINT chkJoBStartDate CHECK(StartDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
	EndDate VARCHAR(10) NOT NULL CONSTRAINT chkJobEndDate CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
);

DROP TABLE JobHistory;

CREATE TABLE Jobs
(
	JobId INT NOT NULL CONSTRAINT pkJobs PRIMARY KEY,
	JobTitle VARCHAR(15) CONSTRAINT defJobTitle DEFAULT 'blank',
	MinSalary INT CONSTRAINT defMinSalary DEFAULT 8000,
	MaxSalary INT CONSTRAINT defMaxSalary DEFAULT NULL,
);

INSERT INTO Jobs (JobId) VALUES (1);

CREATE TABLE Departments
(
	DepartmentId INT CONSTRAINT pkDepartmens PRIMARY KEY IDENTITY(1,1),
	DepartmentName VARCHAR(15) NOT NULL,
);

INSERT INTO Departments (DepartmentName) VALUES ('Node');
INSERT INTO Departments (DepartmentName) VALUES ('.Net');

CREATE TABLE Employess 
(
	EmployeeId INT NOT NULL CONSTRAINT pkEmployees PRIMARY KEY IDENTITY(1,1),
	ManagerId INT NOT NULL,
	DepartmentId INT NOT NULL CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES Departments(DepartmentId),
	JobId INT NOT NULL CONSTRAINT fkJobId FOREIGN KEY REFERENCES Jobs(JobId),
	FirstName VARCHAR(15) NOT NULL,
	LastName VARCHAR(15) NOT NULL,
	Email VARCHAR(15) NOT NULL,
	PhoneNumber VARCHAR(10) NOT NULL,
	HireDate VARCHAR(10) NOT NULL CONSTRAINT chkHireDate CHECK(HireDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
	Salary INT NOT NULL,
	Commision TINYINT NOT NULL,
);

INSERT INTO Employess (ManagerId, DepartmentId, JobId, FirstName, LastName, Email, PhoneNumber, HireDate, Salary, Commision) VALUES (2, 1, 2, 'Nihar', 'Sodha', 'abc@g.com', 0123456789, '04/01/2021', 25000, 15);

/* ALTER STATEMENTS */

ALTER TABLE JobHistory ADD CONSTRAINT fkJobIdInJobHistory FOREIGN KEY(JobId) REFERENCES Jobs(JobId);

ALTER TABLE JobHistory DROP CONSTRAINT fkJobIdInJobHistory;

ALTER TABLE JobHistory ADD Location VARCHAR(50);