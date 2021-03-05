

-----------------PRACTICE-1------------------------


CREATE TABLE Countries(
	CountryId int,
	CountryName varchar(255) CHECK (CountryName='Italy' OR CountryName='India' OR CountryName='China'),
	RegionId int,
	CONSTRAINT UC_Person UNIQUE (CountryId,RegionId)
);
-----------------SAMPLE-CODE-----------------------
CREATE TABLE CountriesSample(
	CountryId int,
	CountryName varchar(255) CHECK (CountryName IN ('Italy','India','China')),
	RegionId int,
	CONSTRAINT UC_Person UNIQUE (CountryId,RegionId)
);




-----------------PRACTICE-2------------------------


CREATE TABLE JobHistory(
	EmployeeId int,
	StartDate date,
	End_date date,
	Job_Id int,
	Department_Id int
);

DROP TABLE JobHistory;




-----------------PRACTICE-3------------------------


CREATE TABLE Jobs(
	JobId int,
	JobTitle varchar(255) DEFAULT '',
	MinSalary int DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);
INSERT INTO Jobs(JobId) values(1);
SELECT * FROM Jobs;






-----------------PRACTICE-4------------------------


CREATE TABLE Jobs1(
	JobId int PRIMARY KEY
);
CREATE TABLE Departments(
	DepartmentId int PRIMARY KEY
);
CREATE TABLE Employees(
	Employee_Id int PRIMARY KEY, 
	FirstName varchar(255), 
	LastName varchar(255), 
	Email varchar(255), 
	PhoneNumber int, 
	Hire_Date date, 
	Job_Id int FOREIGN KEY REFERENCES Jobs1(JobId), 
	Salary int, 
	Commission int, 
	Manager_Id int,
	Department_Id int FOREIGN KEY REFERENCES Departments(DepartmentId)
);
INSERT INTO Jobs1(JobId) values (503);
INSERT INTO Departments(DepartmentId) values (5003);
INSERT INTO Employees ( Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date,Job_Id, Salary, Commission, Manager_Id, Department_Id) values (102 , 'kavush' , 'sharma', 'krs@mail.com', 757648 , '04-01-2021',501, 15000, 5, 405,5001);





-----------------ALTER-1------------------------


ALTER TABLE JobHistory ADD CONSTRAINT fk_job_id FOREIGN KEY (Job_Id) References Jobs1(JobId);





-----------------ALTER-2------------------------


ALTER TABLE JobHistory DROP CONSTRAINT fk_job_id;





-----------------ALTER-3------------------------


ALTER TABLE JobHistory ADD Location varchar(255);





-----------------ASSIGNMENT-1------------------------


CREATE TABLE BusinessEmployees(
	EmployeeId int CONSTRAINT PK_EMPLOYEE PRIMARY KEY (EmployeeId),
	FirstName varchar(255),
	LastName varchar(255),
	Salary int,
	Commission float UNIQUE,
);
CREATE TABLE Inventory(
	VehicleId int CONSTRAINT PK_INVENTORY PRIMARY KEY (VehicleId),
	SalesPerMonth int,
	AssignedSalesPersonId int CONSTRAINT FK_INVENTORY FOREIGN KEY (AssignedSalesPersonID) REFERENCES BusinessEmployees(EmployeeId),
);
CREATE TABLE CompletedSales(
	TransactionNumber int CONSTRAINT PK_COMPLETEDSALES PRIMARY KEY(TransactionNumber),
	EmployeeId int CONSTRAINT FK_COMPLETEDSALES FOREIGN KEY (EmployeeId) REFERENCES BusinessEmployees(EmployeeId),
	PerMonthSales int,
	MaxSoldProductId int CONSTRAINT FK_PRODUCT FOREIGN KEY (MaxSoldProductId) REFERENCES Inventory(VehicleId)
);

SELECT * FROM BusinessEmployees
SELECT * FROM Inventory
SELECT * FROM CompletedSales

