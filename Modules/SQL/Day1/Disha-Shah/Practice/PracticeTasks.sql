USE SampleDB

CREATE TABLE Countries(
	CountryId int NOT NULL,
	CountryName varchar(50) CONSTRAINT chkCountryName CHECK(CountryName IN('Italy', 'India', 'China')),
	RegionId int NOT NULL,
	CONSTRAINT pkCountry PRIMARY KEY(CountryId, RegionId)
)

INSERT INTO Countries VALUES (1, 'India', 1)

INSERT INTO Countries VALUES (1, 'China', 2)

CREATE TABLE JobHistorys(
	EmployeeId int CONSTRAINT pkEmployeeId PRIMARY KEY,
	StartDate date,
	EndDate varchar(25) CONSTRAINT chkEndDate CHECK(EndDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]'),
	Job_Id int,
	Department_Id int
)

CREATE TABLE Jobs(
	JobId int CONSTRAINT pkJobId PRIMARY KEY,
	JobTitle varchar(50) CONSTRAINT DefJobTitle DEFAULT '',
	MinSalary int CONSTRAINT DefMinSalary DEFAULT 8000,
	MaxSalary int CONSTRAINT DefMaxSalary DEFAULT NULL
)

SELECT * FROM Jobs

INSERT Jobs (JobId) VALUES (3)

CREATE TABLE Departments(
	DepartmentId int CONSTRAINT pkDepartmentId PRIMARY KEY
)


INSERT Departments (DepartmentId) VALUES (1)

INSERT Departments (DepartmentId) VALUES (2)

SELECT * FROM Departments


CREATE TABLE Employees(
	EmployeesId int CONSTRAINT pkEmployeesId PRIMARY KEY,
	FirstName varchar(25),
	LastName varchar(25),
	Email varchar(50),
	PhoneNumber int,
	HireDate date,
	JobId int CONSTRAINT fkJobId FOREIGN KEY REFERENCES Jobs(JobId),
	Salary int,
	Commision int,
	ManagerId int,
	DepartmentId int CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES Departments(DepartmentId)
)


ALTER TABLE JobHistorys ADD JobId int CONSTRAINT fk_Job_Id FOREIGN KEY REFERENCES Jobs(JobId)

ALTER TABLE JobHistorys DROP CONSTRAINT fk_Job_Id

SELECT * FROM JobHistorys

ALTER TABLE JobHistorys ADD Locations varchar(50)


