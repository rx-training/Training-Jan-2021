--******************************************* day 9 *****************************************************

/*
1) Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’
and Services as ‘Services Dept’ from employee table*/

DECLARE @HR VARCHAR(30),@Admin  VARCHAR(30),@PR  VARCHAR(30)
SET @HR = 'Human Resources'
SET @Admin = 'Administration'
SET @PR = 'Public Relations'
SELECT e.*,d.DepartmentName FROM Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE DepartmentName = @HR
SELECT e.*,d.DepartmentName FROM Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE DepartmentName = @Admin
SELECT e.*,d.DepartmentName FROM Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE DepartmentName = @PR
GO

/*
2)  5 Students Name, Address, City, DOB, Standard need to be inserted in the student table,
need to fetch these result from json variable. and select output in the json format*/

CREATE TABLE Students
(
	StudentId INT NOT NULL,
	StudentName VARCHAR(30) NOT NULL,
	Address varchar(40) NOT NULL,
	City VARCHAR(30) NOT NULL,
	DateOfBirth DATE NOT NULL,
	Standered INT NOT NULL
)

INSERT INTO Students VALUES 
	(1,'jhon','STREET 1','ahmedabad','2008-12-12',6),
	(2,'vivek','STREET 2','ahmedabad','2004-02-11',10),
	(3,'binod','STREET 6','ahmedabad','2006-01-31',8),
	(4,'abhishek','STREET 3','ahmedabad','2005-07-01',9),
	(5,'mahendra','STREET 9','ahmedabad','2008-09-23',6)

--table to JSON by for json path which make json more proper by name which we can see in address of student in json
SELECT StudentName, Address AS 'Address.street', City AS 'Address.city', DateOfBirth, Standered FROM Students FOR JSON PATH

--table to JSON by for json AUTO WHICH GIVE NAME AS WE GIVEN IN QUERY WHICH DIDN'T PUT STREET AND CITY IN SINGLE VALUE
SELECT StudentName, Address AS 'Address.street', City AS 'Address.city', DateOfBirth, Standered FROM Students FOR JSON AUTO

--WE CAN USE AUTO IN THIS TYPE OF SIMPLE STATEMENT WHICH GIVE SAME OUT PUT AS PATH
SELECT StudentName, Address , City , DateOfBirth, Standered FROM Students FOR JSON AUTO
SELECT StudentName, Address , City , DateOfBirth, Standered FROM Students FOR JSON PATH


-----NOW FATCH DATA FROM JSON FILE AND SHOW IN TABLE USING JSONOPEN METHOD

------------------( 1 )--------------------------
DECLARE @JSON VARCHAR(MAX)
SET @JSON = '[
	{"StudentName":"jhon","Address":"STREET 1","City":"ahmedabad","DateOfBirth":"2008-12-12","Standered":6},
	{"StudentName":"vivek","Address":"STREET 2","City":"ahmedabad","DateOfBirth":"2004-02-11","Standered":10},
	{"StudentName":"binod","Address":"STREET 6","City":"ahmedabad","DateOfBirth":"2006-01-31","Standered":8},
	{"StudentName":"abhishek","Address":"STREET 3","City":"ahmedabad","DateOfBirth":"2005-07-01","Standered":9},
	{"StudentName":"mahendra","Address":"STREET 9","City":"ahmedabad","DateOfBirth":"2008-09-23","Standered":6}
	]'

SELECT * FROM OPENJSON(@JSON) 
	WITH (
		Name VARCHAR(20) '$.StudentName',
		Address varchar(30) '$.Address',
		City varchar(20) '$.City',
		BirthDate DATE '$.DateOfBirth',
		Std INT '$.Standered'
	)


------------------( 2 )--------------------------
	
DECLARE @JSON1 VARCHAR(MAX)
SET @JSON1 = '[
	{	"StudentName":"jhon",
		"Address":{"street":"STREET 1",
					"city":"ahmedabad"},
		"DateOfBirth":"2008-12-12",
		"Standered":6
	},
	{	"StudentName":"vivek",
		"Address":{"street":"STREET 2",
					"city":"ahmedabad"},
		"DateOfBirth":"2004-02-11",
		"Standered":10
	},
	{	"StudentName":"binod",
		"Address":{"street":"STREET 6",
					"city":"ahmedabad"},
		"DateOfBirth":"2006-01-31",
		"Standered":8
	},
	{	"StudentName":"abhishek",
		"Address":{"street":"STREET 3",
					"city":"ahmedabad"},
		"DateOfBirth":"2005-07-01",
		"Standered":9
	},
	{	"StudentName":"mahendra",
		"Address":{"street":"STREET 9",
					"city":"ahmedabad"},
		"DateOfBirth":"2008-09-23",
		"Standered":6
	}
]'

SELECT *  INTO Student2 FROM OPENJSON(@JSON1) 
	WITH (
		Name VARCHAR(20) '$.StudentName',
		Address varchar(30) '$.Address.street',
		City varchar(20) '$.Address.City',
		BirthDate DATE '$.DateOfBirth',
		Std INT '$.Standered'
	) 

select * from Student2