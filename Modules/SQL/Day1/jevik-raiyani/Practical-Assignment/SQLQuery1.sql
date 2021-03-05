----Practice from PPT And video


--CREATE DATABASE JEVIK1

--DROP DATABASE JEVIK1

--CREATE TABLE Plants(
--	IndividualID INT  NOT NULL,

--	PlantName VARCHAR(50) NULL,
--	Radius VARCHAR(50) NULL
--)

--sp_help 'dbo.Plants'


--CREATE TABLE dbo.Persons
--(
--	PesonId INT CONSTRAINT pkProjectCode PRIMARY KEY,
--	)


--	CREATE TABLE Customers(
--		FirstName VARCHAR(50) not null,
--		LastName VARCHAR(50) not null,
--		CONSTRAINT pkCustomer PRIMARY KEY(FirstName,LastName)
--	)

--	CREATE TABLE dbo.Persoons
--		(

--		PersonId INT CONSTRAINT pkPersonId PRIMARY KEY,
--		PersonMobile varchar(30) constraint unMobile not null
--		)


--		CREATE TABLE dbo.Jobs
--		(
--			JobId INT CONSTRAINT pkJobId PRIMARY KEY,
--			PersonId INT CONSTRAINT fkPersonId FOREIGN KEY REFERENCES dbo.Persoons(PersonId)
--		)
--		DROP TABLE dbo.Jobs



--		CREATE TABLE dbo.Jobs
--		(
--			JobId INT CONSTRAINT pkJobId PRIMARY KEY,
--			PersonId INT CONSTRAINT fkPersonId FOREIGN KEY REFERENCES dbo.Persoons(PersonId),
--		   [Location] VARCHAR(50) chkLocation CHECK(Location IN('Ahmedabad','Rajkot','Gandhinagar'))
--		)


--CREATE TABLE dbo.Personps
--(
--	PersonId INT CONSTRAINT pkPe0sonId PRIMARY KEY,
--	PersonMobile VARCHAR(30) ,
--	DeptCode CHAR(4) CHECK (DeptCode LIKE '[0-9][0-9][0-9][0-9]')
--)
--USE Jevik



--Practice exercise....................

CREATE TABLE dbo.Countries
(
	CountryId INT,
	CountryName VARCHAR(20) CHECK(CountryName IN('india','china','itely')),
	RegionId INT,
	CONSTRAINT ukCoRegionId UNIQUE(CountryId,RegionId)
)

DROP TABLE JobHistory

CREATE TABLE JobHistory
(
	EmpoloyeeId  INT NOT NULL,
	StartDate DATE NOT NULL,
	EndDate CHAR(10)  CHECK (EndDate LIKE'[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]') NOT NULL,
	JobId  INT NOT NULL,
	DepartmentId INT NOT NULL
)
USE Jevik

CREATE TABLE dbo.jobs 
(
	JobId INT CONSTRAINT pkjobId PRIMARY KEY,
	JobTitle VARCHAR(30) CONSTRAINT chkDefJobTitle DEFAULT '  ',
	MinSalary INT CHECK (MinSalary> 8000) NOT NULL,
	MaxSalary INT DEFAULT NULL
)
DROP TABLE dbo.jobs	

CREATE TABLE dbo.emloyees
(
	Employee_Id INT CONSTRAINT pkEmployeeId PRIMARY KEY,
	FirstName VARCHAR(30),
	LastName VARCHAR(30),
	Email VARCHAR(30),
	PhoneNumber CHAR(10),
	Hire_Date DATE,
	Job_Id INT CONSTRAINT fkjob_Id  FOREIGN KEY REFERENCES dbo.jobs(JobId),
	Salary INT,
	Comission VARCHAR(30),
	Manager_Id INT ,
	Department_Id INT CONSTRAINT fkDeptmentId FOREIGN KEY REFERENCES dbo.Departments(Department_Id)
)
CREATE TABLE Departments
(
	Department_Id INT CONSTRAINT pkDepartmentId PRIMARY KEY
)


--ALTER PRACTICES
DROP TABLE Departments

ALTER TABLE dbo.JobHistory
 ADD CONSTRAINT fk_job_id FOREIGN KEY(JobId) REFERENCES dbo.jobs(JobId)

ALTER COLUMN	JobID INT CONSTRAINT fk_job_id FOREIGN KEY REFERENCES dbo.jobs(JobId)


ALTER TABLE JobHistory
 DROP CONSTRAINT fk_job_id 

 ALTER TABLE dbo.JobHistory
 ADD  [location] VARCHAR(30)


 CREATE DATABASE CarSalesBussiness

 USE CarSalesBussiness

 
