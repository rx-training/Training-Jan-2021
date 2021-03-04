CREATE DATABASE Employeesdb;

CREATE TABLE Departments
(
	Department_Id int PRIMARY KEY,
	Department_No int,
	Department_Name varchar(30)	
);

CREATE TABLE Employees_Details
(
	Employee_Id int PRIMARY KEY NOT NULL,
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	Email varchar(30) NOT NULL,
	PhoneNumber int CONSTRAINT chkPhoneNumber UNIQUE (PhoneNumber) NOT NULL,
	Job_Id int NOT NULL,
	Salary int NOT NULL,
	Commission int NOT NULL,
	Manager_Id int NOT NULL,
	Department_Id int,
	CONSTRAINT fkDepartment_Id FOREIGN KEY(Department_Id) REFERENCES Departments(Department_Id)
);


INSERT INTO Departments (Department_Id,Department_No,Department_Name) VALUES (1,10,'Graphics');
INSERT INTO Departments (Department_Id,Department_No,Department_Name) VALUES (2,20,'Software Development');
INSERT INTO Departments (Department_Id,Department_No,Department_Name) VALUES (3,30,'Testing');

INSERT INTO Employees_Details (Employee_Id,FirstName,LastName,Email,PhoneNumber,Job_Id,Salary,Commission,Manager_Id,Department_Id) VALUES(11,'Karan','Singh','k@gmail.com',999999,100,50000,30000,28,1);
INSERT INTO Employees_Details (Employee_Id,FirstName,LastName,Email,PhoneNumber,Job_Id,Salary,Commission,Manager_Id,Department_Id) VALUES(12,'Karan','Singh','k@gmail.com',999899,100,50000,30000,28,2);
INSERT INTO Employees_Details (Employee_Id,FirstName,LastName,Email,PhoneNumber,Job_Id,Salary,Commission,Manager_Id,Department_Id) VALUES(13,'Karan','Singh','k@gmail.com',989899,100,50000,30000,28,21);



SELECT * FROM Employees_Details;

SELECT * FROM Departments;