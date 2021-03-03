---------------------------------------------------SQL DAY 1-------------------------------------


CREATE DATABASE RadixTraining

use RadixTraining

-----------------------------------------PRACTICE 01-------------------------------------------------------

/*Write a SQL statement to create a table named countries including columns 
CountryId, CountryName and RegionId and make sure that no countries except Italy,
India and China will be entered in the table. and combination of columns CountryId
and RegionId will be unique.*/


CREATE TABLE Countries
(
	CountryId INT NOT NULL, 
	CountryName VARCHAR(30) NOT NULL,
	RegionId INT NOT NULL ,
	CONSTRAINT chkCountryName CHECK( CountryName IN('India','China','Italy')),
	CONSTRAINT pkCountries PRIMARY KEY(CountryId,RegionId)
)

-----------------------------------------PRACTICE 02-------------------------------------------------------

/*Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate,
End_Eate, Job_Id and Department_Id and make sure that the value against column EndDate will be entered
at the time of insertion to the format like ‘–/–/—-‘.*/

CREATE TABLE JobHistory
(
	EmployeeId INT NOT NULL CONSTRAINT pkJobHistory PRIMARY KEY,
	StartDate VARCHAR(20) NOT NULL,
	EndDate VARCHAR(20) NOT NULL,
	JobId INT NOT NULL,
	DepartmentId INT NOT NULL,
	CONSTRAINT chkEndDate CHECK(EndDate LIKE('[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'))
)

-----------------------------------------PRACTICE 03-------------------------------------------------------

/*Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary
and MaxSalary, and make sure that, the default value for JobTitle is blank and MinSalary is 8000
and MaxSalary is NULL will be entered automatically at the time of insertion if no value assigned
for the specified columns.*/

CREATE TABLE Jobs
(
	JobId INT NOT NULL CONSTRAINT pkJobs PRIMARY KEY,
	JobTitle VARCHAR(20) NOT NULL CONSTRAINT dftJobTitle DEFAULT '',
	MinSalary MONEY NOT NULL CONSTRAINT dftMinsalary DEFAULT 8000,
	MaxSalary MONEY CONSTRAINT dftMaxSalary DEFAULT NULL
)

-----------------------------------------PRACTICE 04-------------------------------------------------------

/*Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName,
Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that,
the Employee_Id column does not contain any duplicate value at the time of insertion, and the foreign key
column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those
values which are exists in the Department table and another foreign key column JobId, referenced by the
column JobId of jobs table, can contain only those values which are exists in the jobs table.*/


----------CREATE DEPARTMENT TABLE FIRST----

CREATE TABLE Departments
(
	DepartmentID INT NOT NULL CONSTRAINT pkDepartments PRIMARY KEY,
	DepartmentName VARCHAR(30) NOT NULL
)
CREATE TABLE Employees
(
	EmployeeId INT NOT NULL CONSTRAINT pkEmployee PRIMARY KEY,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(20) NOT NULL,
	Email VARCHAR(20) NOT NULL,
	PhoneNumber INT NOT NULL,
	HireDate DATE NOT NULL,
	JobId INT NOT NULL,
	Salary MONEY NOT NULL,
	Commission VARCHAR(20) NOT NULL,
	ManagerId INT NOT NULL,
	DepartmentId INT NOT NULL,
	CONSTRAINT fkDepartmentId FOREIGN KEY(DepartmentId) REFERENCES Departments(DepartmentID),
	CONSTRAINT	fkJobId FOREIGN KEY(JobId) REFERENCES Jobs(JobId)
)

--------------------------------------ALTER STATEMENT PRACTICE-------------------

-----------------------------------------PRACTICE 01--------------------------------------------

/*Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory 
table referencing to the primary key JobId of jobs table.*/

ALTER TABLE JobHistory ADD CONSTRAINT fk_JobId FOREIGN KEY(JobId) REFERENCES Jobs(JobId)


-----------------------------------------PRACTICE 02--------------------------------------------

/*Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId 
column which is referencing to the JobId of jobs table.*/

ALTER TABLE JobHistory DROP fk_JobId


-----------------------------------------PRACTICE 03--------------------------------------------

/*Write a SQL statement to add a new column named location to the JobHistory table.*/

ALTER TABLE JobHistory ADD Location VARCHAR(20) NOT NULL


-----------------------------------------ASSIGNMENT--------------------------------------------

/*You have been hired to create a relational database to support a car sales business.
You need to store information on the business’s employees, inventory, and completed sales. 
You also need to account for the fact that each salesperson receives a different percentage 
of their sales in commission. What tables and columns would you create in your relational database,
and how would you link the tables?*/


/*
	1) CREATE TABLE TO STORE DATA OF EMPLOYEE AND INVENTORIES(CARS).WHERE COMMISION COLUMN IN
	   EMPLOYEE WILL BE UNIQUE KEY
	2) CREATE TABLE TO STORE SALE DETAIL WHICH SHOW THAT WHICH SALESMAN SALE WHICH 
	   CAR AND HOW MUCH COMMISION HE GOT 
	3) IN SALES TABLE WE GIVE FOREIGN KEY FROM EMPLOYEE TABLE AND INVENTORY TABLE
*/

CREATE DATABASE CarSalesBusiness

USE CarSalesBusiness

CREATE TABLE Employees
(
	EmployeeId INT NOT NULL CONSTRAINT pkEmployee PRIMARY KEY,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(20) NOT NULL,
	Email VARCHAR(20) NOT NULL,
	PhoneNumber INT NOT NULL,
	HireDate DATE NOT NULL,
	Salary MONEY NOT NULL,
	Commission VARCHAR(20) NOT NULL UNIQUE,
	Department VARCHAR(20) NOT NULL DEFAULT ('Marketing'),
)


CREATE TABLE Cars
(
	CarId INT NOT NULL CONSTRAINT pkCars PRIMARY KEY,
	CarName VARCHAR(20) NOT NULL,
	CompanyName VARCHAR(20) NOT NULL,
	Price MONEY NOT NULL,
	COLOR VARCHAR(20) NOT NULL
)

CREATE TABLE SaleHistory
(
	SaleId INT NOT NULL CONSTRAINT pkSaleHistory PRIMARY KEY,
	EmployeeId INT NOT NULL,
	CarId INT NOT NULL,
	SellingDate DATE NOT NULL,
	SellingPrice MONEY NOT NULL,
	CONSTRAINT fkEmployeeId FOREIGN KEY (EmployeeId) REFERENCES Employees(EmployeeId),
	CONSTRAINT fkCarId FOREIGN KEY (CarId) REFERENCES Cars(CarId),
)

