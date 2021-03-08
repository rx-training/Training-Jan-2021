CREATE DATABASE PRACTCICE1
USE PRACTCICE1
CREATE TABLE Countries
(
	CountryId INT NOT NULL PRIMARY KEY,
	CountryName VARCHAR(20) CONSTRAINT chkCountryName CHECK (CountryName IN('Italy','India','China')),
	RegionId INT NOT NULL,
	CONSTRAINT UC_Countries UNIQUE (CountryId,RegionId)
);
DROP TABLE Countries;
INSERT INTO Countries VALUES('1','Italy','1');
SELECT * FROM Countries;
CREATE TABLE JobHistory
(
	EmployeeId INT NOT NULL PRIMARY KEY,
	StartDate DATE,
	EndDate VARCHAR(20) CONSTRAINT chkDate CHECK(EndDate LIKE'[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]'),
	JobId INT,
	DepartmentId INT,
	CONSTRAINT fkJid FOREIGN KEY (JobId) REFERENCES Jobs(JobId)
);
ALTER TABLE JobHistory DROP fkJid;
ALTER TABLE JobHistory ADD Location varchar(20);
INSERT INTO JobHistory VALUES(1,'2000-12-12','12-12-2000',110,1);
DROP TABLE JobHistory;
SELECT * FROM JobHistory;
DROP  TABLE JobHistory;
CREATE TABLE Jobs
(
	JobId INT PRIMARY KEY,
	JobTitle VARCHAR(20) DEFAULT ' ',
	MinSalary INT DEFAULT 8000,
	MaxSalary INT DEFAULT NULL
);
Drop TABLE Jobs;
INSERT INTO Jobs (JobId) values (1);
SELECT * FROM Jobs;
CREATE TABLE Departments
(
	DepartmentId INT CONSTRAINT pkDepartmentId PRIMARY KEY,
	DepartmentName VARCHAR(20)
);
INSERT INTO Departments VALUES(1,'Accounting');
DROP TABLE Departments;
CREATE TABLE JOBForEmployee
(
	JobId INT CONSTRAINT pkJobId PRIMARY KEY,
	JobName VARCHAR(20)
);
INSERT INTO JOBForEmployee VALUES(110,'Accountant');
DROP TABLE JOBForEmployee;

CREATE TABLE Employee
(
	EmployeeId INT CONSTRAINT pkEmployeeId PRIMARY KEY,
	ID INT FOREIGN KEY REFERENCES JOBForEmployee(JobId),
	dID INT FOREIGN KEY REFERENCES Departments(DepartmentId),
	FirstName VARCHAR(20), 
	LastName VARCHAR(20), 
	Email VARCHAR(20), 
	PhoneNumber NUMERIC, 
	Hire_Date DATE, 
	Salary INT, 
	Commission INT, 
	Manager_Id INT,
);
SELECT * FROM Employee;
DROP TABLE Employee;

CREATE TABLE Inventory
(
	InventoryId INT PRIMARY KEY,
	OpeningStock INT,
	ClosingStock INT,
	Purchase INT,
	TotalSale INT 
);
DROP TABLE Inventory;
CREATE TABLE Sales
(
	Quantity INT,
	Sales INT PRIMARY KEY,
	Price INT,
	InventoryId  INT FOREIGN KEY REFERENCES Inventory(InventoryId),
	EmployeeId  INT FOREIGN KEY REFERENCES Employees(EmployeeId)
)
DROP TABLE Sales;
CREATE TABLE Employees
(
	EmployeeId INT PRIMARY KEY,
	EmployeeName VARCHAR(20),
);
DROP TABLE Employees;