CREATE DATABASE JEVIK1

DROP DATABASE JEVIK1

CREATE TABLE Plants(
	IndividualID int  NOT NULL,

	PlantName VARCHAR(50) NULL,
	Radius VARCHAR(50) NULL
)

sp_help 'dbo.Plants'


CREATE TABLE dbo.Persons
(
	PesonId int CONSTRAINT pkProjectCode PRIMARY KEY,
	)


	CREATE TABLE Customers(
		FirstName VARCHAR(50) not null,
		LastName VARCHAR(50) not null,
		CONSTRAINT pkCustomer PRIMARY KEY(FirstName,LastName)
	)

	CREATE TABLE dbo.Persoons
		(

		PersonId int CONSTRAINT pkPersonId PRIMARY KEY,
		PersonMobile varchar(30) constraint unMobile not null
		)


		CREATE TABLE dbo.Jobs
		(
			JobId int CONSTRAINT pkJobId PRIMARY KEY,
			PersonId int CONSTRAINT fkPersonId FOREIGN KEY REFERENCES dbo.Persoons(PersonId)
		)
		DROP TABLE dbo.Jobs



		CREATE TABLE dbo.Jobs
		(
			JobId int CONSTRAINT pkJobId PRIMARY KEY,
			PersonId int CONSTRAINT fkPersonId FOREIGN KEY REFERENCES dbo.Persoons(PersonId),
		   [Location] varchar(50) chkLocation CHECK(Location IN('Ahmedabad','Rajkot','Gandhinagar'))
		)

		AddressPerson varchar(30) chkAddressPerson C


CREATE TABLE dbo.Personps
(
	PersonId int CONSTRAINT pkPe0sonId PRIMARY KEY,
	PersonMobile varchar(30) ,
	DeptCode char(4) CHECK (DeptCode LIKE '[0-9][0-9][0-9][0-9]')
)
USE Jevik

CREATE TABLE dbo.Countries
(
	CountryId int,
	CountryName varchar(20) CHECK(CountryName IN('india','china','itely')),
	RegionId int,
	CONSTRAINT ukCoRegionId UNIQUE(CountryId,RegionId)
)

DROP TABLE JobHistory

CREATE TABLE JobHistory
(
	EmpoloyeeId  int NOT NULL,
	StartDate date NOT NULL,
	EndDate char(10)  CHECK (EndDate LIKE'[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]') NOT NULL,
	JobId  int NOT NULL,
	DepartmentId int NOT NULL
)
USE Jevik

CREATE TABLE dbo.jobs 
(
	JobId int CONSTRAINT pkjobId PRIMARY KEY,
	JobTitle varchar(30) CONSTRAINT chkDefJobTitle DEFAULT '  ',
	MinSalary int CHECK (MinSalary> 8000) NOT NULL,
	MaxSalary int
)
DROP TABLE dbo.jobs

CREATE TABLE dbo.emloyees
(
	Employee_Id int CONSTRAINT pkEmployeeId PRIMARY KEY,
	FirstName varchar(30),
	LastName varchar(30),
	Email varchar(30),
	PhoneNumber char(10),
	Hire_Date date,
	Job_Id int CONSTRAINT fkjob_Id  FOREIGN KEY REFERENCES dbo.jobs(JobId),
	Salary int,
	Comission varchar(30),
	Manager_Id int ,
	Department_Id int CONSTRAINT fkDeptmentId FOREIGN KEY REFERENCES dbo.Departments(Department_Id)
)
CREATE TABLE Departments
(
	Department_Id int CONSTRAINT pkDepartmentId PRIMARY KEY
)

DROP TABLE Departments

ALTER TABLE dbo.JobHistory
 ADD CONSTRAINT fk_job_id FOREIGN KEY(JobId) REFERENCES dbo.jobs(JobId)


	ALTER COLUMN	JobID int CONSTRAINT fk_job_id FOREIGN KEY REFERENCES dbo.jobs(JobId)


ALTER TABLE JobHistory
 DROP CONSTRAINT fk_job_id 

 ALTER TABLE dbo.JobHistory
 ADD  [location] varchar(30)


 CREATE DATABASE CarSalesBussiness

 USE CarSalesBussiness

 CREATE TABLE Employees
 (	
		EmpId int CONSTRAINT pkEmpId PRIMARY KEY
 )

 CREATE TABLE Inventory
 (
		InventoryId int CONSTRAINT pkInventoryId PRIMARY KEY 
 )
 CREATE TABLE CompletedSales
 (
		CompletedSalesID int CONSTRAINT pkCompletedSalesID PRIMARY KEY,
		InventoryId int CONSTRAINT fkInventoryId REFERENCES FOREIGN KEY dbo.Inventory(InventoryId)
 )

