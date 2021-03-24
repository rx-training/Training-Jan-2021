USE day5

CREATE PROCEDURE EmpPro
	@Lastname nvarchar(50),
	@Firstname varchar(50)
AS
	SET NOCOUNT ON;
	SELECT First_Name,Last_Name,Salary
	FROM Employees
	WHERE First_Name =@Firstname  AND Last_Name =@Lastname
GO

EXEC EmpPro N'raiyani',N'jevik';
EXEC EmpPro @Firstname = N'jevik', @Lastname ='raiyani'
EXEC EmpPro @Lastname= N'raiyani', @Firstname = N'jevik'

CREATE PROCEDURE p1
AS
SELECT * FROM Employees
GO
EXEC p1

CREATE PROCEDURE p2 @dept varchar(20)
AS
SELECT * FROM Employees
WHERE  Department=@dept
GO
EXEC p2 'Banking'

BEGIN TRY   
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
	EXECUTE p2 'Banking';  
END CATCH; 

BEGIN TRY
	SELECT 1/0
END TRY
BEGIN CATCH
SELECT
	ERROR_LINE() AS errorline,
	ERROR_NUMBER()  as error_no,
	ERROR_PROCEDURE() as error_pro,
	ERROR_SEVERITY()  as error_ser,
	ERROR_STATE() as error_state
END CATCH

BEGIN TRY
	SELECT POWER(2,4/0)
END TRY
BEGIN CATCH
SELECT
	ERROR_LINE() AS errorline,
	ERROR_NUMBER()  as error_no,
	ERROR_PROCEDURE() as error_pro,
	ERROR_SEVERITY()  as error_ser,
	ERROR_STATE() as error_state
END CATCH

DROP PROCEDURE EmpPro1 
SELECT * FROM Employees1

CREATE PROCEDURE dept
	@deptid int
AS
	SELECT d.*,e.FirstName+ ' '+e.LastName 'Manager Name',e.Email FROM Departments1 d
	LEFT OUTER JOIN Employees1 e
	ON d.ManagerID=e.EmployeeID
	WHERE @deptid = d.DepartmentID
GO
DROP PROCEDURE dept

EXEC dept 110
EXEC dept @deptid = 20

CREATE PROCEDURE dept1
	@deptid int, 
	@dename NVARCHAR(30) OUTPUT,
	@name NVARCHAR(30) OUTPUT
AS	
	SET NOCOUNT ON
	SELECT  @dename=d.DepartmentName,@name=e.FirstName+ ' '+e.LastName
	FROM Departments1 d
	LEFT OUTER JOIN Employees1 e
	ON d.ManagerID=e.EmployeeID
	WHERE @deptid = d.DepartmentID
	SET NOCOUNT OFF
GO
declare @dename varchar(30), @name varchar(30)
EXEC dept1 20,@dename OUTPUT,@name OUTPUT
PRINT @dename 
PRINT @name

CREATE PROCEDURE emp12
AS
	SELECT * FROM Employees
RETURN
GO
EXEC emp12

USE AdventureWorks2012;  
GO  
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD', 'P') IS NOT NULL  
   DROP PROCEDURE Sales.uspGetEmployeeSalesYTD;  
GO  
CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD  
AS    
 
   SET NOCOUNT ON;  
   SELECT LastName, SalesYTD  
   FROM Sales.SalesPerson AS sp  
   JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
   
RETURN  
GO
EXEC Sales.uspGetEmployeeSalesYTD

USE AdventureWorks2012;  
GO  
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD', 'P') IS NOT NULL  
    DROP PROCEDURE Sales.uspGetEmployeeSalesYTD;  
GO  
CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD  
@SalesPerson nvarchar(50),  
@SalesYTD money OUTPUT  
AS    
  
    SET NOCOUNT ON;  
    SELECT @SalesYTD = SalesYTD  
    FROM Sales.SalesPerson AS sp  
    JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
    WHERE LastName = @SalesPerson;  
RETURN  
GO
  
DECLARE @SalesYTDBySalesPerson money;  
EXECUTE Sales.uspGetEmployeeSalesYTD  
    N'Blythe', @SalesYTD = @SalesYTDBySalesPerson OUTPUT;  
PRINT 'Year-to-date sales for this employee is ' +   
    convert(varchar(10),@SalesYTDBySalesPerson);  
GO


CREATE PROCEDURE dept1
	@deptid int, 
	@dename NVARCHAR(30) OUTPUT,
	@name NVARCHAR(30) OUTPUT
AS	
	SET NOCOUNT ON
	SELECT  @dename=d.DepartmentName,@name=e.FirstName+ ' '+e.LastName
	FROM Departments1 d
	LEFT OUTER JOIN Employees1 e
	ON d.ManagerID=e.EmployeeID
	WHERE @deptid = d.DepartmentID
	SET NOCOUNT OFF
GO
declare @de_name varchar(30), @Nname varchar(30)
EXEC dept1 20,@dename =@de_name OUTPUT,@name = @Nname OUTPUT
PRINT @de_name 
PRINT @Nname

sp_helptext dept1

ALTER PROCEDURE p3 @dept varchar(20)
AS
SET NOCOUNT ON
BEGIN
SELECT * FROM Employees
WHERE  Department=@dept
FOR JSON PATH ,WITHOUT_ARRAY_WRAPPER
END
SET NOCOUNT OFF
GO
EXECUTE p3 'Banking'

ALTER PROCEDURE p3 @dept varchar(20)
WITH ENCRYPTION
AS
SET NOCOUNT ON
BEGIN
SELECT * FROM Employees
WHERE  Department=@dept
FOR JSON PATH ,WITHOUT_ARRAY_WRAPPER
END
SET NOCOUNT OFF
GO
EXECUTE p3 'Banking'

sp_helptext p3

