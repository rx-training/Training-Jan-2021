
USE Day1


CREATE TABLE dbo.Countries(
	CountryId INT NOT NULL,
	CountryName VARCHAR(50) CHECK (CountryName IN('Italy', 'India', 'China')),
	RegionId INT NOT NULL,
	CONSTRAINT pkCountries PRIMARY KEY(CountryId, RegionId)
)


CREATE TABLE dbo.JobHistories(
	EmployeeId INT PRIMARY KEY,
	StartDate DATE CHECK (StartDate LIKE('[0-3][0-9]/[0-1][0-9]/[0-3][0-9][0-9][0-9]')),
	EndDate DATE CHECK (EndDate LIKE('[0-3][0-9]/[0-1][0-9]/[0-3][0-9][0-9][0-9]')),
	JobId INT,
	DepartmentId INT 
)


CREATE TABLE dbo.Jobs(
	JobId INT PRIMARY KEY,
	JobTitle VARCHAR(50) DEFAULT '',
	MinSalary MONEY DEFAULT '8000',
	MaxSalary MONEY DEFAULT NULL
)


CREATE TABLE dbo.Departments(
	DepartmentId INT PRIMARY KEY,
	DepartmentName VARCHAR(50)
)


CREATE TABLE dbo.Employees(
	EmployeeId INT PRIMARY KEY,
	FirstName VARCHAR(50),
	LastName VARCHAR(50),
	Email VARCHAR(255),
	PhoneNumber VARCHAR(50),
	HireDate DATE,
	JobId INT CONSTRAINT fkJobId FOREIGN KEY REFERENCES dbo.Jobs(JobId),
	Salary MONEY,
	Commission INT,
	ManagerId INT,
	DepartmentId INT CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES dbo.Departments(DepartmentId)
)


ALTER TABLE	dbo.JobHistories
ADD CONSTRAINT fkJodId FOREIGN KEY (JobId) REFERENCES dbo.Jobs(JobId)


ALTER TABLE dbo.JobHistories
DROP CONSTRAINT fkJodId


ALTER TABLE dbo.JobHistories
ADD Location VARCHAR(50)