USE AdventureWorks2012
------------------Procedure Example  1 ----------------------------------------

-----------------Create Procedure with perameter-------------------------
CREATE PROCEDURE ProcedureNamewithperameter
@FirstName varchar(50),
@LastName varchar(50)                       
AS
-------------------------------apply logic of procedure------------------------------
BEGIN
	SELECT FirstName,LastName,Department FROM HumanResources.vEmployeeDepartmentHistory 
	WHERE  FirstName=@FirstName AND LastName=@LastName AND EndDate IS NOT NULL
END

--------------------------------different way to calling or executing the procedure---------------------------
EXECUTE ProcedureNamewithperameter 'Rob','Walters'
GO

EXEC ProcedureNamewithperameter 'Rob','Walters'
GO

EXEC ProcedureNamewithperameter @LastName='Walters' , @FirstName ='Rob' 
GO


-------------------------------Procedure with output peramenter------------------------------

CREATE Procedure OutputProcedurewithperameter 
@EmpId int ,@DeptName varchar(50) OUTPUT,@Shifted int OUTPUT
AS
BEGIN
		IF EXISTS (SELECT * FROM HumanResources.Employee WHERE BusinessEntityID=@EmpId)
			BEGIN
				SELECT @DeptName=d.Name,@Shifted=dh.ShiftID FROM HumanResources.Department d 
				JOIN HumanResources.EmployeeDepartmentHistory dh ON d.DepartmentID=dh.DepartmentID WHERE dh.BusinessEntityID=@EmpId
				AND dh.EndDate IS NOT NULL
				RETURN 0
			END
END

DECLARE @department varchar(50),@Shift int
EXEC OutputProcedurewithperameter @EmpId=250,@DeptName=@department OUTPUT,@Shifted=@Shift OUTPUT
PRINT 'DEPARTMENT=' + @department
PRINT 'SHIFED ID='+ CAST(@Shift AS varchar(50))

SELECT * FROM HumanResources.EmployeeDepartmentHistory


-----------------------------------Call Procedure From Another Procedure-----------------------------
ALTER PROCEDURE callanotherprocedureformthisprocedure
@EmpId int WITH ENCRYPTION 
AS
BEGIN
	DECLARE @department varchar(50),@Shift int,@ReturnValue int
	EXEC  @ReturnValue=OutputProcedurewithperameter @EmpId,@department OUTPUT,@Shift OUTPUT
	IF(@ReturnValue=0)
	BEGIN
		PRINT 'The Details Of Employee With ID '+ CAST(@EmpId As varchar(30))
		PRINT 'Department Name :-'+ @department
		PRINT 'SHIFT ID :-'+ CAST(@Shift As varchar(30))
		--SELECT * FROM HumanResources.Employee WHERE BusinessEntityID=@EmpId
	END
	ELSE
	PRINT 'NO RECOURD FOUND IN THIS EMPLOYEE'
END


EXEC callanotherprocedureformthisprocedure  @EmpId=251

------------------------Return JSON output from Store Procedure----------------------------

SELECT * FROM HumanResources.Employee

CREATE PROCEDURE jsondata @jsonform varchar(MAX) OUTPUT

AS
BEGIN
		SET @jsonform=(SELECT BusinessEntityID,NationalIDNumber,LoginID FROM HumanResources.Employee FOR JSON PATH) 
END
	DECLARE @Jsondatafromtable nvarchar(max)
	EXEC jsondata @Jsondatafromtable OUTPUT
	PRINT @Jsondatafromtable

	---------------------TRY CATCH----------------------
	SELECT * FROM Person.ContactType
BEGIN TRY
INSERT INTO Person.ContactType(ContactTypeID,Name,ModifiedDate) VALUES(2,'Assistant Sales Agent',GETDATE())
INSERT INTO Person.ContactType(ContactTypeID,Name,ModifiedDate) VALUES(297,'PQR',GETDATE())

END TRY

BEGIN CATCH
SELECT 'THERE WAS A ERROR !  ' + ERROR_MESSAGE() AS 'ERROR MESSAGE',
							   ERROR_LINE() AS 'ERROR Line',
							   ERROR_NUMBER() AS 'ERROR NUMBER',
							   ERROR_PROCEDURE() AS 'ERROR PROCEDURE',
							   ERROR_SEVERITY() AS 'ERROR SEVERITY ',
							   ERROR_STATE() AS 'ERROR STATE'
END CATCH
GO



















