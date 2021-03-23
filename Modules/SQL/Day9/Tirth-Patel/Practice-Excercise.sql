

USE AdventureWorks2012
DECLARE @Rate INt
SELECT @Rate  = MAX(rate)
FROM HumanResources.EmployeePayHistory
PRINT @rate
GO

DECLARE @rate Money	

SELECT @rate = Rate
		
		FROM  HumanResources.EmployeePayHistory 
	WHERE BusinessEntityID = 23 
	IF @rate < 15
	PRINT 'REVIEW IS REQUIRED'
	ELSE
	BEGIN 
	PRINT 'NOt requyired'
	PRINT 'RATE = '
	PRINT @rate	
	END
	GO

	IF DATENAME(weekday, GETDATE()) IN (N'Saturday', N'Sunday')
       SELECT 'Weekend hain';
ELSE 
       SELECT 'office-day';
USE TestData
DECLARE @maxsal FLOAT , @ID int
SET @maxsal= 25000
SET @ID = 102

IF @maxsal <= (SELECT salary from Employees WHERE EmployeeID = @ID)
SELECT @ID as 'empID' , FirstName, JobId,'emp is this' AS employeestatus
				FROM  Employees WHERE EmployeeID = @ID
ELSE
SELECT @ID as 'empID' , FirstName, JobId,'emp is NOT this' AS employeestatus
				FROM  Employees WHERE EmployeeID = @ID




USE AdventureWorks2012
WHILE (SELECT AVG(listprice) 
FROM Production.Product) < $300
BEGIN
		UPDATE Production.Product
		SET ListPrice = ListPrice *2  ;
		DECLARE @maximum money	
		SET @maximum = (SELECT MAX(listprice) FROM Production.Product) 
		
		IF(@maximum) > $500
		BREAK
		
		ELSE
			CONTINUE
		END
		PRINT 'TOO MUCH FOR THE MARKET TO BEAR'
GO

USE AdventureWorks2012;  
GO  
SELECT   ProductNumber, Category =  
      CASE ProductLine  
         WHEN 'R' THEN 'Road'  
         WHEN 'M' THEN 'Mountain'  
         WHEN 'T' THEN 'Touring'  
         WHEN 'S' THEN 'Other sale items'  
         ELSE 'Not for sale'  
      END,  
   Name  
FROM Production.Product  
ORDER BY ProductNumber;  
GO

--declaring pl with multiple values wont work

DECLARE @pL varchar(50)
SET @pL  =(SELECT ProductLine FROM Production.Product)

IF(@pL != NULL)
SELECT ProductNumber , 
	Category  = 
	CASE productline 
	WHEN 'R' THEN 'ROAD'
	WHEN 'M' THEN 'MOUNTAIN'
	WHEN 'T' THEN 'Touring'
	WHEN 'S' THEN 'OTHER SALE ITEM'
	ELSE 
	'NOT FOR SALE'
	END,
	ProductLine,
	Name


FROM Production.Product
ELSE
PRINT 'PRODUCT LINE IS NULL'
GO

SELECT  ProductNumber ,Name , "price range " = 
		CASE	
			WHEN ListPrice = 0 then 'not for sale'
			WHEN ListPrice  < 50 then 'under $50'
			WHEN ListPrice >=50  then 'Under 250$'
			WHEN ListPrice >=250 then 'Under 1000$'
			ELSE
			'over 100$'
			END
FROM Production.Product
ORDER BY ProductNumber
GO