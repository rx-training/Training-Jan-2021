CREATE TABLE Countries
(
	CountryId VARCHAR(5),
	CountryName varchar(20),
	CONSTRAINT chkCountryName CHECK(CountryName IN ('Italy','India','china')),
	RegionId VARCHAR(5),
	CONSTRAINT pkCountries PRIMARY KEY(CountryId , RegionId )
)

DROP TABLE JobHistories
CREATE TABLE JobHistories
(	
	EmployeeId VARCHAR(5),
	StartDate date,
	Job_Id VARCHAR(5),
	Department_Id VARCHAR(2),
	
	EndDate VARCHAR(20) CHECK (EndDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')
	
)

CREATE TABLE Jobs
(
	JobId varchar(5) PRIMARY KEY,
	JobTitle varchar(20) DEFAULT '',
	MinSalary Money CHECK (MinSalary >8000),
	MaxSalary Money DEFAULT NULL,
	




)
DROP TABLE Departments
CREATE TABLE Departments(
	DepartmentId varchar(5) PRIMARY KEY,
)
CREATE TABLE Employees(
	EmployeeId varchar(5),
	FirstName VARCHAR(20),
	LastName VARCHAR(20),
	Email VARCHAR(max),
	PhoneNumber Tinyint ,
	Hire_Date date,
	Salary money,
	Commission money,
	Manager_id varchar(5),
	Job_Id varchar(5) CONSTRAINT fk_Job_Id FOREIGN KEY REFERENCES dbo.Jobs(JobId),
	Department_Id varchar(5)  CONSTRAINT fk_DepartmentId FOREIGN KEY  REFERENCES dbo.Departments(DepartmentId)

	
)
ALTER TABLE JobHistories  ADD CONSTRAINT fk_jobId FOREIGN KEY(Job_Id ) REFERENCES Jobs(JobId)
ALTER TABLE JobHistories DROP CONSTRAINT fk_jobId
ALTER TABLE JobHIstories ADD Location varchar(20)
