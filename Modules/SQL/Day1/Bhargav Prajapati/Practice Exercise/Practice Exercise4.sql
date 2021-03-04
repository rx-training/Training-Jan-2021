/*Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email,
PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that, the Employee_Id 
column does not contain any duplicate value at the time of insertion, and the foreign key column DepartmentId, reference
by the column DepartmentId of Departments table, can contain only those values which are exists in the Department table
and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only those values
which are exists in the jobs table*/
CREATE DATABASE Employeesdb;
CREATE TABLE Departments(
DepartmentsID int PRIMARY KEY,
Department_name varchar(50),
Department_mamber int

)
CREATE TABLE JobDetails
(
Job_Id int PRIMARY KEY,
Department_Id int,
JOb_Title varchar(30) CONSTRAINT defJob_Title DEFAULT 'TRAINEE SOFTWARE ENGINEER',
MinSalary int CHECK(MinSalary BETWEEN 0 And 4000 ),
MaxSalary int CHECK(MaxSalary BETWEEN 4000 And 8000 )
)
CREATE TABLE Employees_Details
(
	Employee_Id int PRIMARY KEY  Not Null,
	FirtName varchar(40) Not Null,
	LastName varchar(40) Not Null,
	Email varchar(60) Not Null,
	PhoneNumber int  CONSTRAINT unPhonenumber UNIQUE (PhoneNumber) Not Null,
	
	Job_Id int Not Null,
	Salary int Not Null,
	Commission int Not Null,
	Manager_Id int NOt Null,
	Department_ID int,
	CONSTRAINT fkDepartmentID FOREIGN KEY(Department_ID) REFERENCES Departments(DepartmentsID),
	CONSTRAINT fkJob_Id FOREIGN KEY(Job_Id) REFERENCES JobDetails(Job_Id),
	
)
INSERT INTO Departments (DepartmentsID,Department_name,Department_mamber)VALUES(1,'.NET',23)
INSERT INTO Departments (DepartmentsID,Department_name,Department_mamber)VALUES(2,'.PHP',33)
INSERT INTO JobDetails(Job_Id,Department_Id,JOb_Title,MinSalary,MaxSalary)VALUES(3,504,'PROJECT MANAGER',2000,7000)
INSERT INTO JobDetails(Job_Id,Department_Id,JOb_Title,MinSalary,MaxSalary)VALUES(101,402,DEFAULT,3000,8000)
INSERT INTO Employees_Details (Employee_Id,FirtName,LastName,Email,PhoneNumber,Job_Id,Salary,Commission,Manager_Id,Department_ID)VALUES(1,'abc','def','abc@gmail.com',5656565,3,5000,2000,501,1)
INSERT INTO Employees_Details (Employee_Id,FirtName,LastName,Email,PhoneNumber,Job_Id,Salary,Commission,Manager_Id,Department_ID)VALUES(2,'abc','def','abc@gmail.com',910683,101,5000,2000,501,2)