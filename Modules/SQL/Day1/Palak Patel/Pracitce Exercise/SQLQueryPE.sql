USE DayOnePractice
--Practice 1
CREATE TABLE Countries (
	CountryId INT,
	RegionId INT,
	CountryName VARCHAR(30) CONSTRAINT chkCountryName CHECK (CountryName IN ('Italy','China','India'))
	UNIQUE (CountryId, RegionId)
);

DROP TABLE Countries

--Practice 2
CREATE TABLE JobHistory (
	EmployeeId INT NOT NULL,
	StartDate DATE NOT NULL,
	EndDate DATE CONSTRAINT chkEndDate CHECK (EndDate LIKE ('[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')),
	JobId VARCHAR(30),
	DeptId VARCHAR(30)
);

DROP TABLE JobHistory

--Practice 3
CREATE TABLE Jobs(
	JobId INT PRIMARY KEY,
	JobTitle VARCHAR(50) CONSTRAINT chkJobTitle DEFAULT ' ',
	MinSalary MONEY CONSTRAINT chkMinSalary DEFAULT '8000',
	MaxSalary MONEY CONSTRAINT chkMaxSalary DEFAULT NULL,
);


--Practice 4
CREATE TABLE Employees(
	Employee_Id INT CONSTRAINT pkEmployee_Id PRIMARY KEY,
	FirstName VARCHAR(50),
	LastName VARCHAR(50),
	Email VARCHAR(60),
	PhoneNumber BIGINT,
	HireDate DATE,
	JobId INT CONSTRAINT fkJobId FOREIGN KEY REFERENCES dbo.Jobs(JobId),
	Salary MONEY,
	Comission MONEY,
	ManagerId VARCHAR(20),
	DepartmentID VARCHAR(20) CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES dbo.Departments(DepartmentId)
);

DROP TABLE Employees

CREATE TABLE Departments(
	DepartmentId VARCHAR(20) CONSTRAINT pkDepartmentId PRIMARY KEY,
	DepartmentName VARCHAR(30)
);