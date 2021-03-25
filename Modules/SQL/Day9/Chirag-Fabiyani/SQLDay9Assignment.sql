

----Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table----

DECLARE @bank NVARCHAR(50)
DECLARE @insurance NVARCHAR(50)
DECLARE @service NVARCHAR(50)

SET @bank = 'Bank Dept'
SET @insurance = 'Insurance Dept'
SET @service = 'Services Dept'

SELECT EmployeeID, EmployeeName,
	CASE DepartmentName
		WHEN 'Banking' THEN @bank
		WHEN 'Insurance' THEN @insurance
		WHEN 'Services' THEN @service
		ELSE DepartmentName
		END AS DepartmentName
FROM Employees




----5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch----
----these result from json variable. and select output in the json format----

DECLARE @json NVARCHAR(MAX)
SET @json = '[
		{
			"Name": "Vikas",
			"Address": "Judges Bungalow",
			"City": "Ahmedabad",
			"DOB": "1999-09-02",
			"Std": "10th"
		},
		{
			"Name": "Rahul",
			"Address": "Victoria Heights",
			"City": "Ahmedabad",
			"DOB": "1996-06-25",
			"Std": "9th"
		},
		{
			"Name": "Deepak",
			"Address": "Aatrey Tulip",
			"City": "Ahmedabad",
			"DOB": "2000-06-24",
			"Std": "8th"
		},
		{
			"Name": "Divesh",
			"Address": "Aatrey Exotica",
			"City": "Ahmedabad",
			"DOB": "2000-03-13",
			"Std": "7th"
		},
		{
			"Name": "Vinod",
			"Address": "Lilamani",
			"City": "Ahmedabad",
			"DOB": "2000-04-03",
			"Std": "6th"
		}
	]'

INSERT INTO Students(Name,Address,City,DateOfBirth,Standard)
SELECT * FROM OPENJSON(@json)
WITH(
	Name VARCHAR(10) '$.Name',
	Address VARCHAR(20) '$.Address',
	City VARCHAR(10) '$.City',
	DateOfBirth VARCHAR(25) '$.DOB',
	Standard VARCHAR(10) '$.Std'
)
SELECT * FROM OPENJSON(@json)
WITH(
	Name VARCHAR(10) '$.Name',
	Address VARCHAR(20) '$.Address',
	City VARCHAR(10) '$.City',
	DateOfBirth VARCHAR(25) '$.DOB',
	Standard VARCHAR(10) '$.Std'
)
FOR JSON PATH, ROOT('Students');