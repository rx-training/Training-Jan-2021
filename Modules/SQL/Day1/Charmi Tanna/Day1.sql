CREATE DATABASE PRACTCICE1
USE PRACTCICE1
CREATE TABLE Countries
(
	CountryId int NOT NULL,
	CountryName varchar(20) CONSTRAINT chkCountryName CHECK (CountryName IN('Italy','India','China')),
	RegionId int NOT NULL,
	CONSTRAINT UC_Countries UNIQUE (CountryId,RegionId)
);
DROP TABLE Countries;
INSERT INTO Countries VALUES('1','Italy','1');
SELECT * FROM Countries;
CREATE TABLE JobHistory
(
	EmployeeId int NOT NULL PRIMARY KEY,
	StartDate date,
	EndDate varchar(20) CONSTRAINT chkDate CHECK(EndDate LIKE'[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]'),
	JobId int,
	DepartmentId int,
	CONSTRAINT fkJid FOREIGN KEY (JobId) REFERENCES Jobs(JobId)
);
ALTER TABLE JobHistory DROP fkJid;
ALTER TABLE JobHistory ADD Location varchar(20);
INSERT INTO JobHistory VALUES(1,'2000-12-12','12-12-2000',110,1);
DROP TABLE JobHistory;
SELECT * FROM JobHistory;

CREATE TABLE Jobs
(
	JobId int PRIMARY KEY,
	JobTitle varchar(20) DEFAULT ' ',
	MinSalary int DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);
Drop TABLE Jobs;
INSERT INTO Jobs (JobId) values (1);
SELECT * FROM Jobs;
CREATE TABLE Departments
(
	DepartmentId int CONSTRAINT pkDepartmentId PRIMARY KEY,
	DepartmentName varchar(20)
);
INSERT INTO Departments VALUES(1,'Accounting');
DROP TABLE Departments;
CREATE TABLE JOBForEmployee
(
	JobId int CONSTRAINT pkJobId PRIMARY KEY,
	JobName varchar(20)
);
INSERT INTO JOBForEmployee VALUES(110,'Accountant');
DROP TABLE JOBForEmployee;

CREATE TABLE Employee
(
	EmployeeId int CONSTRAINT pkEmployeeId PRIMARY KEY,
	ID int FOREIGN KEY REFERENCES JOBForEmployee(JobId),
	dID int FOREIGN KEY REFERENCES Departments(DepartmentId),
	FirstName varchar(20), 
	LastName varchar(20), 
	Email varchar(20), 
	PhoneNumber numeric, 
	Hire_Date date, 
	Salary int, 
	Commission int, 
	Manager_Id int,
);

DROP TABLE Employee;

CREATE TABLE Inventory
(
	InventoryId int PRIMARY KEY,
	OpeningStock int,
	ClosingStock int,
	Purchase int,
	TotalSale int 
);
CREATE TABLE Sales
(
	Quantity int,
	Sales int PRIMARY KEY,
	Price int,
	InventoryId  int FOREIGN KEY REFERENCES Inventory(InventoryId)
)
DROP TABLE Sales;
CREATE TABLE Employees
(
	EmployeeId int PRIMARY KEY,
	EmployeeName varchar(20),
	Sale int,
	Comission int,
	CONSTRAINT fkSid FOREIGN KEY (Sale) REFERENCES Sales(Sales)
);
DROP TABLE Employees;