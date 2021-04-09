---Assignment-1
SELECT EmployeeID , 'job-title' =
CASE JobID 
	WHEN 'IT_PROG' THEN 'IT-programmer'
	WHEN 'PU_CLERK' THEN 'CLERK'
	WHEN  'AD_ASST' THEN 'Advertisemnet Assistance'
	ELSE 'not availible'
	END
FROM Employees 
GO



--DECLARE @json NVARCHAR(MAX)
--SET @json = N'[{
--	"Students" : [ { "Student" : {
--									"name" : "tirth",
--									"Address" :"thaltej",
--									"city" : "ahmedabad",
--									"DOB" :"5/12/1999",
--									"Standard" : "FY"
--								}
--					}
--					]}]'
--SELECT JSON_QUERY(@json, '$.student.name')
--SELECT * FROM OPENJSON(@json,'$.Students')
--WITH (
--		NAME Varchar(50) '$.student.name',
--		Address Varchar(50) '$.STUDENT.Address',
--		city Varchar(50) '$.STUDENT.city',
--		DOB Date '$.STUDENT.DOB',
--		Standard Varchar(50) '$.STUDENT.Standard'
--	);

--	GO
--assignment 2 
	DECLARE @json NVARCHAR(MAX)
SET @json = N'[
								{
									"name" : "tirth",
									"Address" :"thaltej",
									"city" : "ahmedabad",
									"DOB" :"5/12/1999",
									"Standard" : "FY"
								},
								 {
									"name" : "Milan",
									"Address" :"pakwan",
									"city" : "ahmedabad",
									"DOB" :"5/12/1999",
									"Standard" : "Ty"
								},
					 {
									"name" : "Ravi",
									"Address" :"Keshod",
									"city" : "Jungadh",
									"DOB" :"5/9/1999",
									"Standard" : "TY"
								},
					 {
									"name" : "Aniket",
									"Address" :"mota",
									"city" : "Surat",
									"DOB" :"5/8/1999",
									"Standard" : "FY"
								},
					 {
									"name" : "jimmy",
									"Address" :"virpur",
									"city" : "badoda",
									"DOB" :"9/12/1999",
									"Standard" : "FY"
								}
					
					
					]'

SELECT * FROM OPENJSON(@json)
WITH (
		NAME Varchar(50) '$.name',
		Address Varchar(50) '$.Address',
		city Varchar(50) '$.city',
		DOB Date '$.DOB',
		Standard Varchar(50) '$.Standard'
	);



SELECT * FROM OPENJSON(@json)
FOR JSON PATH ,ROOT ('STUDENTS')
GO





SELECT Name AS [Students.Name],
	Address AS [Students.Address],
	City AS [Students.City],
	DOb AS [Students.DOB],
	Standard AS [Students.Standard]

	FROM students 
	FOR JSON PATH , ROOT('Students')
	
DROP TABLE STudents
{ "Student" :