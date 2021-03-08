USE sqlTraining;

CREATE TABLE Departments (
	DepartmentID int PRIMARY KEY IDENTITY(1,1),--starts id from 1, auto increament by 1 
	DepartmentName varchar(50) NOT NULL,
);

INSERT INTO Departments (DepartmentName) VALUES ('DotNet'),('PHP'),('Node');

CREATE TABLE Jobs (
	JobID int PRIMARY KEY NOT NULL,
	JobTitle varchar(50) DEFAULT '',
	MinSalary int NOT NULL DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);

--inserts default values if not given
INSERT INTO Jobs (JobID,JobTitle) VALUES (1,DEFAULT),(2,'Trainee');

--DROP TABLE Employees;

CREATE TABLE Employees (
	EmployeeID int PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	PhoneNumber varchar(10) NOT NULL,
	HireDate date NOT NULL,
	JobID int NOT NULL,
	Salary varchar(50) NOT NULL,
	Commission int NOT NULL,
	ManagerID int NOT NULL,
	DepartmentID int NOT NULL
	CONSTRAINT fkDepartmentID FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID),
	CONSTRAINT fkJobID FOREIGN KEY (JobID) REFERENCES Jobs (JobID)
);

INSERT INTO Employees VALUES ('Milit','Panchasara','m@m.m','7990349033','2020-12-12',2,15000,2000,1,1);
