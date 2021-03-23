USE AdventureWorks2012
GO

CREATE PROCEDURE HumanResources.uspGetEmployeesTest2
	@lastname varchar(50),
	@firstname varchar(50)
AS
	SET NOCOUNT ON
	SELECT  FirstName ,  LastName , Department
	FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @firstname AND LastName = @lastname
	AND EndDate is NULL;
GO
EXEC HumanResources.uspGetEmployeesTest2 'Ackerman' , 'pilar'

USE [AdventureWorks2012]
GO
/****** Object:  StoredProcedure [HumanResources].[uspGetEmployeesTest2]    Script Date: 18-03-2021 12:54:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [HumanResources].[uspGetEmployeesTest2]
	@lastname varchar(50),
	@firstname varchar(50)
AS
	SET NOCOUNT ON
	SELECT  FirstName ,  LastName 
	FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @firstname AND LastName = @lastname
	AND EndDate is NULL;

ALTER PROCEDURE prcGetEmployeeDetail @EmpId int , @depName char(50) OUTPUT
				,@shiftId int OUTPUT
	AS
		SET NOCOUNT ON
		IF EXISTS (SELECT  * FROM HumanResources.Employee WHERE BusinessEntityID= @EmpId)
		BEGIN
		SELECT  @depName = d.name , @shiftId= h.shiftId FROM 
			HumanResources.Department d JOIN HumanResources.EmployeeDepartmentHistory h
			ON d.DepartmentID =  h.DepartmentID
			WHERE BusinessEntityID = @EmpId AND h.EndDate IS NULL
			RETURN 0
		END

ALTER PROCEDURE prcDisplayEmpstatus @EmpId int
AS
BEGIN
	DECLARE @Depname char(50) , @shiftId Int ,  @returnvalue int
	EXEC @returnvalue =  prcGetEmployeeDetail @EmpId , @Depname OUTPUT,
						@shiftId OUTPUT
			
		IF (@returnvalue = 0 )
		BEGIN
			PRINT 'The details of an employee withj Id: ' + convert(char(10),@Empid)
			PRINT 'Department Name:' + @depname
			PRINT 'SHIFT ID:' + convert(char(1),@shiftId)
			SELECT JobTitle  FROM HumanResources.Employee WHERE BusinessEntityID = @EmpId
			RETURN 0
		END
		ELSE
		PRINT 'NO DATA FOUND'
	END

EXEC prcDisplayEmpstatus 10

EXEC sp_rename 'prcDisplayEmpstatus' , 'pcrDisplayEmployeeStatus'

--need to execute with new name 
EXEC pcrDisplayEmployeeStatus 10

CREATE PROCEDURE sales.uspgetSalesYTD
@salesperson nvarchar(50) =  NULL
	AS
		SET NOCOUNT ON

		IF @salesperson IS null
		BEGIN
			PRINT 'specify the name'
		RETURN
		END
	SELECT SalesYTD 
	FROM sales.SalesPerson AS sp JOIN HumanResources.vEmployee e
		ON e.BusinessEntityID =  sp.BusinessEntityID
		WHERE LastName = @salesperson
	GO
EXEC sales.uspgetSalesYTD
EXEC sales.uspgetSalesYTD N'Blythe'

CREATE PROCEDURE Production.uspGetList @product varchar(40),
				@maxprice money,
				@comparePrice money OUTPUT,
				@listprice money OUT
AS
	SET NOCOUNT ON
		SELECT p.Name as 'PRODUCT',
		p.ListPrice as 'list price'
			FROM Production.Product p JOIN  Production.ProductSubcategory as s
				ON p.ProductSubcategoryID = s.ProductSubcategoryID
			WHERE s.Name LIKE @product AND p.ListPrice < @maxprice 
		SET @listprice = (SELECT MAX(p.listprice) FROM Production.Product as p
		JOIN production.ProductSubcategory as s ON p.ProductSubcategoryID = s.ProductSubcategoryID
			WHERE s.Name LIKE @product AND p.ListPrice < @maxprice) 
		SET @comparePrice = @maxprice
GO
DECLARE @compareprice money , @costprice money;
EXEC Production.uspGetList '%Bikes%',700, @compareprice OUT	
					,@costprice OUT
IF @costprice <= @compareprice
BEGIN 
	PRINT 'THESE PRODUCTS CAN BE PURCAHES FOR LESS then $' 
			+convert(varchar(20),@compareprice) +'.'
	END
ELSE
PRINT 'PRICE IN ALL CATEGORY EXCEEDS the $' 
			+convert(varchar(20),@compareprice) +'.'
GO


			-- Create a procedure that takes one input parameter and returns one output parameter and a return code.
CREATE PROCEDURE SampleProcedure @EmployeeIDParm INT,
         @MaxTotal INT OUTPUT
AS
-- Declare and initialize a variable to hold @@ERROR.
DECLARE @ErrorSave INT
SET @ErrorSave = 0

-- Do a SELECT using the input parameter.
SELECT FirstName, LastName, JobTitle
FROM HumanResources.vEmployee
WHERE BusinessEntityID = @EmployeeIDParm

-- Save any nonzero @@ERROR value.
IF (@@ERROR <> 0)
   SET @ErrorSave = @@ERROR

-- Set a value in the output parameter.
SELECT @MaxTotal = MAX(TotalDue)
FROM Sales.SalesOrderHeader;

IF (@@ERROR <> 0)
   SET @ErrorSave = @@ERROR

-- Returns 0 if neither SELECT statement had an error; otherwise, returns the last error.
RETURN @ErrorSave
GO

DECLARE @returnCode INT
DECLARE @MaxtotalVariable INt

EXEC @returnCode =  SampleProcedure @employeeIDparm =19,
	@maxtotal = @MaxtotalVariable OUTPUT

	PRINT ' ' 
	PRINT concat('REtrun code ;' , @returncode)
	PRINT concat('Max quantity :' , @MaxtotalVariable)
	GO
	SELECT * FROM HumanResources.Employee
	--EXCEPTION HANDLING
	USE AdventureWorks2012
	BEGIN TRY
	INSERT INTO HumanResources.Employee
	VALUES
	( 424211 ,'99', 'roberl' , 16, 'Tool designer' , '1972-05-15' 
		, 's', 'M' , '1996-07-31' , 0,16,20,1,NEWID(), GETDATE())
	END TRY
	BEGIN CATCH
	SELECT'THERE WAS ERROR AS: ' + ERROR_MESSAGE() AS ErrorMessage , 
		ERROR_LINE() AS Errorline,
		ERROR_MESSAGE() as ErrorMessage,
		ERROR_PROCEDURE() AS ErrorProcedure,
		ERROR_SEVERITY() AS ErrorEverity,
		ERROR_STATE() AS ErroRState
		END CATCH
	GO

	BEGIN TRY
	DECLARE @a int , @b int , @c varchar(12)
	SET @b= 0
	SET @c=  1 / @b 
	
	END TRY
	BEGIN CATch
	SELECT ERROR_MESSAGE(),
	 ERROR_LINE()
	END CATCH
