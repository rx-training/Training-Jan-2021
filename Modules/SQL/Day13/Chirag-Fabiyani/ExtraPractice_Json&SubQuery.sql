DECLARE @Json NVARCHAR(MAX)
SET @Json='{

"Info":{
		"ID":2,
		"Name":"Reena",
		"Hobbies":["Chess","Badminton","Hockey"],
		"CollegeInfo":{
			"CollegeID":2,
			"CollegeName":"ABC",
			"Rank":21
		}
	}
}'

INSERT INTO College(PersonID,CollegeID,CollegeName,Rank)
SELECT ID,CollegeID,CollegeName,Rank FROM OPENJSON(@Json)
WITH(
	ID INT '$.Info.ID',
	CollegeInfo NVARCHAR(MAX) '$.Info.CollegeInfo' AS JSON
)
OUTER APPLY OPENJSON(CollegeInfo)
WITH(
CollegeID INT '$.CollegeID',
CollegeName VARCHAR(18) '$.CollegeName',
Rank INT '$.Rank'
)
AS tbl;




INSERT INTO Hobbies(PersonID,Hobbies)
SELECT ID,Hobbiess AS Hobies FROM OPENJSON(@Json)
WITH(
	ID INT '$.Info.ID',
	Name VARCHAR(18) '$.Info.Name',
	Hobbies NVARCHAR(MAX) '$.Info.Hobbies' AS JSON,
	CollegeInfo NVARCHAR(MAX) '$.Info.CollegeInfo' AS JSON
)
OUTER APPLY OPENJSON(Hobbies)
WITH(Hobbiess NVARCHAR(MAX) '$')
AS tbl;



INSERT INTO Person(PersonID,PersonName)
SELECT ID,Name FROM OPENJSON(@Json)
WITH(
	ID INT '$.Info.ID',
	Name VARCHAR(18) '$.Info.Name'
)
AS tbl;













WITH Salary_CTE(EmployeeID,EmployeeName,Salary)
AS
(
	SELECT e.EmployeeID,e.EmployeeName,s.Salary FROM Employees e JOIN Salary s ON e.EmployeeID=s.EmployeeID
)
SELECT EmployeeName FROM Salary_CTE WHERE Salary>(
	SELECT Salary FROM Salary_CTE WHERE EmployeeName='B'
)

SELECT * FROM Employees e JOIN Salary s ON e.EmployeeID=s.EmployeeID WHERE s.Salary > (
		SELECT s.Salary FROM Employees e JOIN Salary s ON e.EmployeeID=s.EmployeeID WHERE e.EmployeeName='B'
	)