/* Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table */

SELECT A.FirstName, A.LastName, 'Department' = CASE B.JobId
WHEN 'Banking' THEN 'Bank Dept'
WHEN 'Insurance' THEN 'Insurance Dept'
WHEN 'Services' THEN 'Services Dept'
ELSE 'Not Specified'
END
FROM Employees B JOIN Employees A ON B.JobId = A.JobId WHERE B.JobId = 'Banking' OR B.JobId = 'Insurance' OR B.JobId = 'Service';

SELECT * FROM Employees;

/* 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format */

 CREATE TABLE Student (Name varchar(20), Address varchar(30), City varchar(30), DOB date, Standard varchar(20));

 /* DROP TABLE Student; */

 INSERT INTO Student(Name, Address, City, DOB, Standard) VALUES('Karan','Naroda','Ahmedabad','04-Sep-1999','10'),
															   ('Yash','Bapunagar','Rajkot','14-Jan-2002','12' ),
															   ('Rajesh','Bapunagar','Ahmedabad','17-Dec-2002','9'),
															   ('Mitesh','Odhav','Ahmedabad','17-Dec-2002','11'),
															   ('Yashvardhan','Bapunagar','Rajkot','14-Oct-2002','10');

SELECT * FROM Student FOR JSON PATH;
SELECT * FROM Student FOR JSON AUTO;

DECLARE @JSONDATA varchar(MAX)='[
{"Name":"Karan", "Address":"Naroda", "City":"Ahmedabad", "DOB": "04-Sep-1999", "Standard":"10"},
{"Name":"Yash", "Address":"Bapunagar", "City":"Rajkot", "DOB": "14-Jan-2002", "Standard":"12"},
{"Name":"Rajesh", "Address":"Bapunagar", "City":"Ahmedabad", "DOB": "17-Dec-2002", "Standard":"9"},
{"Name":"Mitesh", "Address":"Odhav", "City":"Ahmedabad", "DOB": "17-Dec-2002", "Standard":"11"},
{"Name":"Yashvardhan", "Address":"Bapunagar", "City":"Rajkot", "DOB": "14-Oct-2002", "Standard":"10"}
]'

SELECT * FROM OPENJSON(@JSONDATA)
WITH(
Name varchar(20) '$.Name',
Address varchar(20) '$.Address',
City varchar(20) '$.City',
DOB date '$.DOB',
Standard varchar(20) '$.Standard')

