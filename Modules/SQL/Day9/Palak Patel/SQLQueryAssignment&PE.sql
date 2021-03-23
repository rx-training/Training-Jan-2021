USE AdventureWorks2014

SELECT * FROM HumanResources.Employee

USE DaySixAssignment

SELECT * FROM Employees_1

USE DayNine

CREATE TABLE Employees_1(
	EmployeeID INT NOT NULL PRIMARY KEY,
	FirstName varchar(20) NOT NULL,
	LastName varchar(25) NOT NULL,
	Salary MONEY NOT NULL,
	JoiningDate DATETIME NOT NULL,
	Department VARCHAR(30) NOT NULL,
	ManagerID INT DEFAULT NULL
)

CREATE TABLE Students(
	StudentID INT,
	Name VARCHAR(30),
	Address VARCHAR(30),
	City VARCHAR(30),
	DOB VARCHAR(20),
	Standard VARCHAR(10)
)

--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
SELECT EmployeeID, FirstName, 'Department'=
	CASE Department
		WHEN 'Banking' THEN 'Bank Dept'
		WHEN 'Insurance' THEN 'Insurance Dept'
		WHEN 'Service' THEN 'Services Dept'
		ELSE 'Not Specified'
	END	
FROM Employees_1
GO

--5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
	{"id":1, "info":{"Name":"John", "Address":"Sola", "City":"Ahmedabad", "DOB":"23/02/2000", "Standard":"12"}},
	{"id":2, "info":{"Name":"Micheal", "Address":"Gota", "City":"Ahmedabad", "DOB":"15/04/2002", "Standard":"10"}},
	{"id":3, "info":{"Name":"Roy", "Address":"Gorwa", "City":"Vadodara", "DOB":"08/01/2004", "Standard":"8"}},
	{"id":4, "info":{"Name":"Tom", "Address":"Manigar", "City":"Ahmedabad", "DOB":"09/10/2002", "Standard":"10"}},
	{"id":5, "info":{"Name":"Philip", "Address":"Alkapuri", "City":"Vadodara", "DOB":"26/07/2003", "Standard":"9"}}
]';

--Converting JSON data into row set
SELECT * FROM OPENJSON(@json)
	WITH (
		StudentID INT 'strict $.id',
		Name VARCHAR(30) '$.info.Name',
		Address VARCHAR(30) '$.info.Address',
		City VARCHAR(30) '$.info.City',
		DOB VARCHAR(20) '$.info.DOB',
		Standard VARCHAR(10) '$.info.Standard'
	);

--Import JSON Data into SQL Server Tables
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
	{"id":1, "info":{"Name":"John", "Address":"Sola", "City":"Ahmedabad", "DOB":"23/02/2000", "Standard":"12"}},
	{"id":2, "info":{"Name":"Micheal", "Address":"Gota", "City":"Ahmedabad", "DOB":"15/04/2002", "Standard":"10"}},
	{"id":3, "info":{"Name":"Roy", "Address":"Gorwa", "City":"Vadodara", "DOB":"08/01/2004", "Standard":"8"}},
	{"id":4, "info":{"Name":"Tom", "Address":"Manigar", "City":"Ahmedabad", "DOB":"09/10/2002", "Standard":"10"}},
	{"id":5, "info":{"Name":"Philip", "Address":"Alkapuri", "City":"Vadodara", "DOB":"26/07/2003", "Standard":"9"}}
]'

SELECT Students.* FROM OPENJSON(@json, N'$')
	WITH(
		StudentID INT N'strict $.id',
		Name VARCHAR(30) N'$.info.Name',
		Address VARCHAR(30) N'$.info.Address',
		City VARCHAR(30) N'$.info.City',
		DOB VARCHAR(20) N'$.info.DOB',
		Standard VARCHAR(10) N'$.info.Standard'
	) AS Students

SELECT * FROM Students

INSERT INTO Students (StudentID, Name, Address, City, DOB, Standard) VALUES
	(12,'Jisso','Seattle','US','23/02/2002','10th'),
	(10,'Rose','New York','US','15/06/2003','9th'),
	(13,'Lisa','Busan','Korea','01/07/2006','6th'),
	(14,'Jisso','Deagu','Korea','14/12/2001','11th');

--Convert SQL Server data to JSON or export JSON

SELECT StudentID, 
		Name AS 'info.Student Name',
		Address AS 'info.Address', 
		City AS 'info.City', 
		DOB AS 'info.DateOfBirth', 
		Standard AS 'info.Grade' 
		FROM Students
FOR JSON PATH;