SELECT * FROM Person;

SELECT * FROM Salary;

SELECT * FROM Skill;

SELECT * FROM PersonSkill;

SELECT * FROM Person P JOIN Salary S ON P.ID = S.ID JOIN Skill SK ON S.ID = SK.ID JOIN PersonSkill PS ON PS.PersonID = SK.ID;

SELECT A.Name FROM Person A WHERE ID IN (SELECT B.ID FROM Salary B WHERE B.Salary >
(SELECT S.Salary FROM Person P LEFT OUTER JOIN Salary S ON P.ID = S.ID WHERE P.Name = 'B'));


SELECT A.Name FROM Person A JOIN Salary S ON A.ID = S.ID WHERE S.Salary > (SELECT Salary FROM Salary B JOIN Person P ON P.ID = B.ID WHERE P.Name = 'B');

WITH Salary_CTE (ID,Name,SId,Month,Salary)
AS
(
	SELECT A.ID, A.Name, S.ID, S.Month, S.Salary FROM Person A JOIN Salary S ON A.ID = S.ID 

)
SELECT * FROM Salary_CTE WHERE Salary > (SELECT Salary FROM Salary_CTE WHERE Name = 'B');

SELECT * FROM(SELECT A.ID, A.Name, S.Month, S.Salary FROM Person A JOIN Salary S ON A.ID = S.ID) AS [temp_table] WHERE Salary > (SELECT Salary FROM [temp_table] WHERE Name = 'B');

/* CREATE PROCEDURE Salary @getjsondata
BEGIN

END

EXECUTE Salary */

USE master;
DECLARE @JSON varchar(MAX)
SET @JSON = N'[{"Name":"M","Skills":[1,3]}]'
PRINT @JSON

/*------------------------------------------------------------------------*/
USE AdventureWorks2012;
GO
CREATE PROCEDURE HumanResources.uspGetEmployeesTest2
	@LastName NVARCHAR(50),
	@FirstName NVARCHAR(50)
AS
	SET NOCOUNT ON;
	SELECT FirstName, LastName, Department FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @FirstName AND LastName = @LastName
	AND EndDate IS NULL;
GO

EXEC HumanResources.uspGetEmployeesTest2 N'Ackerman', N'Pillar';
GO
/*------------------------------------------------------------------------*/

CREATE PROCEDURE prcGetEmployeeDetail @EmpId INT, @DepName CHAR(50) OUTPUT, @ShiftId INT OUTPUT
AS
BEGIN
IF EXISTS(SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = @EmpId)
BEGIN
SELECT @DepName = D.Name, @ShiftId = H.ShiftID FROM HumanResources.Department D JOIN
HumanResources.EmployeeDepartmentHistory H ON D.DepartmentID = H.DepartmentID WHERE
BusinessEntityID = @EmpId AND H.EndDate IS NULL
RETURN 0
END
END
GO

/*------------------------------------------------------------------------*/

CREATE PROCEDURE prcDisplayEmployeeStatus @EmpId INT 
AS
BEGIN
DECLARE @DepName CHAR(50), @ShiftId INT, @ReturnValue INT
EXEC @ReturnValue = prcGetEmployeeDetail @EmpId, @DepName OUTPUT, @ShiftId OUTPUT
IF (@ReturnValue = 0)
BEGIN
PRINT 'Details of an employee with ID: ' + CONVERT(CHAR(10),@EmpId)
PRINT 'Department Name: ' + @DepName
PRINT 'Shift ID: ' + CONVERT(CHAR(1), @ShiftId)
	SELECT BusinessEntityID, JobTitle FROM HumanResources.Employee WHERE BusinessEntityID = @EmpId
END
ELSE
	PRINT 'No record found'
END

/*------------------------------------------------------------------------*/