USE Day1;

CREATE TABLE Countries
(
	CountryId INT NOT NULL,
	RegionId TINYINT NOT NULL,
	CountryName VARCHAR(50)CONSTRAINT chkCountryName CHECK(CountryName IN('India','Italy','China')),
	CONSTRAINT pkCountries PRIMARY KEY(CountryId,RegionId)
)

DROP TABLE Countries

CREATE TABLE JobHistory(
	EmployeeId INT NOT NULL PRIMARY KEY,
	JobId INT NOT NULL,
	DepartmentId TINYINT NOT NULL,
	StartDate VARCHAR(10) NOT NULL CONSTRAINT chkJobStartDate CHECK(StartDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
	EndDate VARCHAR(10) NOT NULL CONSTRAINT chkJobEndDate CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]')
)

DROP TABLE JobHistroy

CREATE TABLE Jobs(
	JobId INT NOT NULL CONSTRAINT pkJobs PRIMARY KEY,
	JobTitle VARCHAR(50) CONSTRAINT JobsTitle DEFAULT NULL,
	MinSalary INT CONSTRAINT MinSalaryJobs DEFAULT '8000',
	MaxSalary INT CONSTRAINT MaxSalaryJobs DEFAULT NULL
)

INSERT INTO Jobs(JobId) VALUES (1)
INSERT INTO Jobs(JobId) VALUES (2)
 
DROP TABLE Jobs

CREATE TABLE Departments 
(
	DepartmentId INT CONSTRAINT pkDepartmens PRIMARY KEY IDENTITY(1,1),
	DepartmentName VARCHAR(15) NOT NULL,
)

DROP TABLE Departments

INSERT INTO Departments (DepartmentName) VALUES ('Node')
INSERT INTO Departments (DepartmentName) VALUES ('.Net')

CREATE TABLE Employees(
	EmployeeId INT NOT NULL CONSTRAINT pkEmployees PRIMARY KEY IDENTITY (1,1),
	FirstName VARCHAR(100) NOT NULL,
	LastName VARCHAR(100) NOT NULL,
	Email VARCHAR(100) NOT NULL,
	PhoneNumber VARCHAR(10) NOT NULL,
	HireDate VARCHAR(10) NOT NULL,
	JobId INT NOT NULL CONSTRAINT fkJobId FOREIGN KEY REFERENCES Jobs(JobId),
	Salary INT NOT NULL,
	Commission TINYINT NOT NULL,
	ManagerID INT NOT NULL,
	DepartmentId INT NOT NULL CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES Departments(DepartmentId)
)

DROP TABLE Employees;

INSERT INTO Employees (ManagerId, DepartmentId, JobId, FirstName, LastName, Email, PhoneNumber, HireDate, Salary, Commission) VALUES (2, 1, 1, 'Namra', 'Patel', 'abc@g.com', 0123456789, '04/01/2021', 25000, 15) 

ALTER TABLE Jobs ALTER COLUMN JobId INT;

ALTER TABLE JobHistory ADD CONSTRAINT fkJobIdJobHistory FOREIGN KEY(JobId) REFERENCES Jobs(JobId);

ALTER TABLE JobHistory DROP CONSTRAINT fkJobIdJobHistory;

ALTER TABLE JobHistory ADD Location VARCHAR(255);