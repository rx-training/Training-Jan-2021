USE Day6;

/*	1. Create a batch Select Purchasing as 'Purchasing Dept', Marketing as 'Marketing Dept' 
	and Administration as 'Administration Dept' from employee table */

	SELECT * FROM Departments WHERE DepartmentName = 'Purchasing'
	SELECT * FROM Departments WHERE DepartmentName = 'Marketing'
	SELECT * FROM Departments WHERE DepartmentName = 'Administration'
	GO


/*	2. 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, 
	need to fetch these result from json variable. and select output in the json format */

	USE Day9;

	CREATE TABLE Students
	(
		StudentId INT CONSTRAINT pkStudents PRIMARY KEY IDENTITY(1,1),
		Name VARCHAR(100) NOT NULL, 
		Address VARCHAR(255) NOT NULL, 
		City VARCHAR(50) NOT NULL, 
		DOB DATE NOT NULL, 
		Standard VARCHAR(2)
	);

	SELECT * FROM Students;

	DECLARE @studentData NVARCHAR(MAX) = '[
		{
			"name":"A",
			"address":"a",
			"city":"Surat",
			"dob":"2010-03-01",
			"standard":"1"
		},
		{
			"name":"B",
			"address":"b",
			"city":"Ahmedabad",
			"dob":"2010-03-01",
			"standard":"2"
		},
		{
			"name":"C",
			"address":"c",
			"city":"Nadiad",
			"dob":"2010-03-01",
			"standard":"3"
		},
		{
			"name":"D",
			"address":"d",
			"city":"Gandhinagar",
			"dob":"2010-03-01",
			"standard":"4"
		},
		{
			"name":"E",
			"address":"e",
			"city":"Vadodara",
			"dob":"2010-03-01",
			"standard":"5"
		}
	]';

	INSERT INTO Students
		SELECT *
		FROM OPENJSON(@studentData)
		WITH(	name VARCHAR(100),
				address VARCHAR(255),
				city VARCHAR(50),
				dob DATE,
				standard VARCHAR(2)
			);
		

	SELECT StudentId AS [student.id]
		, Name AS [student.name]
		, Address AS [student.address]
		, City As [student.city]
		, DOB AS [student.dob]
		, Standard AS [student.standard]
	FROM Students
	FOR JSON PATH, ROOT('Students'), INCLUDE_NULL_VALUES;