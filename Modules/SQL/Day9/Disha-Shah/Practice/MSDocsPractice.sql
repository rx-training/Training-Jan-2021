USE AdventureWorks2012

SELECT * FROM HumanResources.EmployeePayHistory
SELECT * FROM HumanResources.Employee
SELECT * FROM Production.Product
GO

--VARIABLES
DECLARE @Rate INT
SELECT @Rate = MAX(Rate)
FROM HumanResources.EmployeePayHistory

PRINT @Rate
GO

--MS DOCS EXAMPLE
-- Create the table.
CREATE TABLE TestTable (cola INT, colb CHAR(3));
GO
SET NOCOUNT ON;
GO
-- Declare the variable to be used.
DECLARE @MyCounter INT;

-- Initialize the variable.
SET @MyCounter = 0;

-- Test the variable to see if the loop is finished.
WHILE (@MyCounter < 26)
BEGIN;
   -- Insert a row into the table.
   INSERT INTO TestTable VALUES
       -- Use the variable to provide the integer value
       -- for cola. Also use it to generate a unique letter
       -- for each row. Use the ASCII function to get the
       -- integer value of 'a'. Add @MyCounter. Use CHAR to
       -- convert the sum back to the character @MyCounter
       -- characters after 'a'.
       (@MyCounter,
        CHAR( ( @MyCounter + ASCII('a') ) )
       );
   -- Increment the variable to count this iteration
   -- of the loop.
   SET @MyCounter = @MyCounter + 1;
END;
GO
SET NOCOUNT OFF;
GO
-- View the data.
SELECT cola, colb
FROM TestTable;
GO
DROP TABLE TestTable;
GO


-- Declare two variables.
DECLARE @JobTitleVariable NVARCHAR(50),
	@GenderVariable NVARCHAR(10);

-- Set their values.
SET @JobTitleVariable = N'Design Engineer';
SET @GenderVariable = N'M';

-- Use them in the WHERE clause of a SELECT statement.
SELECT *
FROM HumanResources.Employee
WHERE JobTitle = @JobTitleVariable
   AND Gender = @GenderVariable;
GO


DECLARE @RateVariable INT;

SELECT @RateVariable = MAX(Rate)
FROM HumanResources.EmployeePayHistory;

SELECT @RateVariable AS 'MaxRate'
GO

--COMPOUND ASSIGNMENT OF A LOCAL VARIABLE
/* Example one */  
DECLARE  @NewBalance  INT ;  
SET  @NewBalance  =  10;  
SET  @NewBalance  =  @NewBalance  *  10;  
SELECT  @NewBalance;  
GO

/* Example Two */  
DECLARE @NewBalance INT = 10;  
SET @NewBalance *= 10;  
SELECT @NewBalance;
GO

--ASSIGN VALUE USING QUERY
DECLARE @rows INT;  
SET @rows = (SELECT COUNT(*) FROM Sales.Customer);  
SELECT @rows;
GO


--USE SELECT TO RETURN SINGLE VALUE
DECLARE @var1 VARCHAR(30);         
SELECT @var1 = 'Generic Name';         
SELECT @var1 = Name         
FROM Sales.Store         
WHERE BusinessEntityID = 1;        
SELECT @var1 AS 'Company Name';


--USE SELECT TO RETURN NULL
DECLARE @var1 VARCHAR(30);         
SELECT @var1 = 'Generic Name';         
SELECT @var1 = (SELECT Name         
FROM Sales.Store         
WHERE BusinessEntityID = 1);        
SELECT @var1 AS 'Company Name';

--IF ELSE
DECLARE @Rate MONEY
SELECT @Rate = Rate 
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID=1
IF @Rate < 15
PRINT 'Review of the rate is required'
ELSE 
BEGIN
PRINT 'Review of the rate is not required'
PRINT 'Rate='
PRINT @Rate
END
GO

--USING A QUERY AS PART OF IF CONDITION STATEMENT
IF   
(SELECT COUNT(*) FROM Production.Product WHERE Name LIKE 'Touring-3000%' ) > 5  
PRINT 'There are more than 5 Touring-3000 bicycles.'  
ELSE PRINT 'There are 5 or less Touring-3000 bicycles.' ;  
GO


--USING A STATEMENT BLOCK
DECLARE @AvgWeight DECIMAL(8,2), @BikeCount INT  
IF   
(SELECT COUNT(*) FROM Production.Product WHERE Name LIKE 'Touring-3000%' ) > 5  
BEGIN  
   SET @BikeCount =   
        (SELECT COUNT(*)   
         FROM Production.Product   
         WHERE Name LIKE 'Touring-3000%');  
   SET @AvgWeight =   
        (SELECT AVG(Weight)   
         FROM Production.Product   
         WHERE Name LIKE 'Touring-3000%');  
   PRINT 'There are ' + CAST(@BikeCount AS VARCHAR(3)) + ' Touring-3000 bikes.'  
   PRINT 'The average weight of the top 5 Touring-3000 bikes is ' + CAST(@AvgWeight AS VARCHAR(8)) + '.';  
END  
ELSE   
BEGIN  
SET @AvgWeight =   
        (SELECT AVG(Weight)  
         FROM Production.Product   
         WHERE Name LIKE 'Touring-3000%' );  
   PRINT 'Average weight of the Touring-3000 bikes is ' + CAST(@AvgWeight AS VARCHAR(8)) + '.' ;  
END ;  
GO  


--NESTED IF ELSE
DECLARE @Number INT;  
SET @Number = 50;  
IF @Number > 100  
   PRINT 'The number is large.';  
ELSE   
   BEGIN  
      IF @Number < 10  
      PRINT 'The number is small.';  
   ELSE  
      PRINT 'The number is medium.';  
   END ;  
GO

--CASE
SELECT BusinessEntityID, 'Marital Status' =
CASE MaritalStatus
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not specified'
END
FROM HumanResources.Employee
GO

--SIMPLE CASE   
SELECT   ProductNumber, Category =  
      CASE ProductLine  
         WHEN 'R' THEN 'Road'  
         WHEN 'M' THEN 'Mountain'  
         WHEN 'T' THEN 'Touring'  
         WHEN 'S' THEN 'Other sale items'  
         ELSE 'Not for sale'  
      END,  
   Name, ProductLine  
FROM Production.Product  
ORDER BY ProductNumber;  
GO


--SEARCHED CASE
SELECT   ProductNumber, Name, "Price Range" =   
      CASE   
         WHEN ListPrice =  0 THEN 'Mfg item - not for resale'  
         WHEN ListPrice < 50 THEN 'Under $50'  
         WHEN ListPrice >= 50 and ListPrice < 250 THEN 'Under $250'  
         WHEN ListPrice >= 250 and ListPrice < 1000 THEN 'Under $1000'  
         ELSE 'Over $1000'  
      END  
FROM Production.Product  
ORDER BY ProductNumber ;  
GO

--USING CASE IN AN ORDER BY
SELECT BusinessEntityID, SalariedFlag  
FROM HumanResources.Employee  
ORDER BY CASE SalariedFlag WHEN 1 THEN BusinessEntityID END DESC  
        ,CASE WHEN SalariedFlag = 0 THEN BusinessEntityID END;  
GO

SELECT BusinessEntityID, LastName, TerritoryName, CountryRegionName  
FROM Sales.vSalesPerson  
WHERE TerritoryName IS NOT NULL  
ORDER BY CASE CountryRegionName WHEN 'United States' THEN TerritoryName  
         ELSE CountryRegionName END;


--USING CASE IN AN UPDATE
UPDATE HumanResources.Employee  
SET VacationHours =   
    ( CASE  
         WHEN ((VacationHours - 10.00) < 0) THEN VacationHours + 40  
         ELSE (VacationHours + 20.00)  
       END  
    )  
OUTPUT Deleted.BusinessEntityID, Deleted.VacationHours AS BeforeValue,   
       Inserted.VacationHours AS AfterValue  
WHERE SalariedFlag = 0;   


--USING CASE IN A HAVING CLAUSE
SELECT JobTitle, MAX(ph1.Rate)AS MaximumRate  
FROM HumanResources.Employee AS e  
JOIN HumanResources.EmployeePayHistory AS ph1 ON e.BusinessEntityID = ph1.BusinessEntityID  
GROUP BY JobTitle  
HAVING (MAX(CASE WHEN Gender = 'M'   
        THEN ph1.Rate   
        ELSE NULL END) > 40.00  
     OR MAX(CASE WHEN Gender  = 'F'   
        THEN ph1.Rate    
        ELSE NULL END) > 42.00)  
ORDER BY MaximumRate DESC;  


--WHILE
WHILE (SELECT AVG(ListPrice) FROM Production.Product) < 300
BEGIN
	UPDATE Production.Product
	SET ListPrice = ListPrice * 2
	SELECT MAX(ListPrice) FROM Production.Product
	IF (SELECT MAX(ListPrice) FROM Production.Product) > 500
		BREAK
	ELSE
		CONTINUE
END
PRINT 'Too much for the market to bear'
GO

--JSON

--OPENJSON
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
	{"id":1, "Name": "john"},
	{"id":2, "Name": "rita"}
]';

SELECT *
FROM OPENJSON(@json)
	WITH (
		Id INT '$.id',
		Name NVARCHAR(50) '$.Name'
	)
GO


--CONVERT TO JSON
SELECT BusinessEntityID, JobTitle AS "Designation", BirthDate AS dob
FROM HumanResources.Employee
FOR JSON PATH
GO


DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
]';

SELECT *
FROM OPENJSON(@json)
  WITH (
    id INT 'strict $.id',
    firstName NVARCHAR(50) '$.info.name',
    lastName NVARCHAR(50) '$.info.surname',
    age INT,
    dateOfBirth DATETIME2 '$.dob'
  );
GO


--JSON_VALUE
DECLARE @jsonInfo NVARCHAR(MAX)

SET @jsonInfo=N'{  
     "info":{    
       "type":1,  
       "address":{    
         "town":"Bristol",  
         "county":"Avon",  
         "country":"England"  
       },  
       "tags":["Sport", "Water polo"]  
    },  
    "type":"Basic"  
 }'

SELECT StudID, Name,
 JSON_VALUE(jsonInfo,'$.info.address.town') AS Town
FROM OldStudents
WHERE ISJSON(jsonInfo) > 0 AND JSON_VALUE(jsonInfo,'$.info.address.country') LIKE 'Eng%'
ORDER BY JSON_VALUE(jsonInfo,'$.info.address.town')


--EXTRACTS JSON PROPERTY VALUE INTO A LOCAL VARIABLE
DECLARE @jsonInfo NVARCHAR(MAX)
DECLARE @town NVARCHAR(32)

SET @jsonInfo=N'{"info":{"address":[{"town":"Paris"},{"town":"London"}]}}';

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[0].town'); -- Paris
PRINT @town
SET @town=JSON_VALUE(@jsonInfo,'$.info.address[1].town'); -- London
PRINT @town


--JSON_QUERY
SELECT Name, JSON_QUERY(jsonInfo,'$.info.address') AS 'Address'
FROM OldStudents


SELECT Name, JSON_QUERY(jsonInfo) AS 'Info',
JSON_QUERY(CONCAT('["',StudID,'","',Name,'"]')) AS 'StudIdName'
FROM OldStudents

--JSON_MODIFY
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Update name  

SET @info=JSON_MODIFY(@info,'$.name','Mike')

PRINT @info

-- Insert surname  

SET @info=JSON_MODIFY(@info,'$.surname','Smith')

PRINT @info

-- Delete name  

SET @info=JSON_MODIFY(@info,'$.name',NULL)

PRINT @info

-- Add skill  

SET @info=JSON_MODIFY(@info,'append $.skills','Azure')

PRINT @info


--Multiple Updates
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

SET @info=JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info,'$.name','Mike'),'$.surname','Smith'),'append $.skills','Azure')

PRINT @info

--RENAME
DECLARE @product NVARCHAR(100)='{"price":49.99}'

PRINT @product

SET @product=
 JSON_MODIFY(
  JSON_MODIFY(@product,'$.Price',CAST(JSON_VALUE(@product,'$.price') AS NUMERIC(4,2))),
  '$.price',
  NULL
 )

PRINT @product


--INCREMENT
DECLARE @stats NVARCHAR(100)='{"click_count": 173}'

PRINT @stats

SET @stats=JSON_MODIFY(@stats,'$.click_count',
 CAST(JSON_VALUE(@stats,'$.click_count') AS INT)+1)

PRINT @stats


--MODIFY A JSON OBJECT
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Update skills array

SET @info=JSON_MODIFY(@info,'$.skills','["C#","T-SQL","Azure"]')

PRINT @info


--TO AVOID AUTOMATIC ESCAPING
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Update skills array  

SET @info=JSON_MODIFY(@info,'$.skills',JSON_QUERY('["C#","T-SQL","Azure"]'))

PRINT @info

--UPDATE A JSON COLUMN
UPDATE OldStudents
SET jsonInfo=JSON_MODIFY(jsonInfo,'$.info.address.town','London')
WHERE StudID=3

SELECT jsonInfo FROM OldStudents 
FOR JSON PATH


--JSON_AUTO
SELECT 'https://services.odata.org/V4/Northwind/Northwind.svc/$metadata#Products(ProductID,ProductName)/$entity' AS '@odata.context',
  ProductID,
  Name as ProductName
FROM Production.Product
WHERE ProductID = 1
FOR JSON AUTO;

--
DROP TABLE IF EXISTS #tabStudent;
DROP TABLE IF EXISTS #tabClass;

GO

CREATE TABLE #tabClass
(
   ClassGuid   uniqueIdentifier  not null  default newid(),
   ClassName   nvarchar(32)      not null
);

CREATE TABLE #tabStudent
(
   StudentGuid   uniqueIdentifier  not null  default newid(),
   StudentName   nvarchar(32)      not null,
   ClassGuid     uniqueIdentifier      null   -- Foreign key.
);

GO

INSERT INTO #tabClass
      (ClassGuid, ClassName)
   VALUES
      ('DE807673-ECFC-4850-930D-A86F921DE438', 'Algebra Math'),
      ('C55C6819-E744-4797-AC56-FF8A729A7F5C', 'Calculus Math'),
      ('98509D36-A2C8-4A65-A310-E744F5621C83', 'Art Painting')
;

INSERT INTO #tabStudent
      (StudentName, ClassGuid)
   VALUES
      ('Alice Apple', 'DE807673-ECFC-4850-930D-A86F921DE438'),
      ('Alice Apple', 'C55C6819-E744-4797-AC56-FF8A729A7F5C'),
      ('Betty Boot' , 'C55C6819-E744-4797-AC56-FF8A729A7F5C'),
      ('Betty Boot' , '98509D36-A2C8-4A65-A310-E744F5621C83'),
      ('Carla Cap'  , null)
;

GO

SELECT
      c.ClassName,
      s.StudentName
   from
                       #tabClass   as c
      RIGHT OUTER JOIN #tabStudent as s ON s.ClassGuid = c.ClassGuid
   --where
   --   c.ClassName LIKE '%Math%'
   order by
      c.ClassName,
      s.StudentName
   FOR
      JSON AUTO
      --, INCLUDE_NULL_VALUES
;

GO

DROP TABLE IF EXISTS #tabStudent;
DROP TABLE IF EXISTS #tabClass;

GO

--
SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH, ROOT('info')


--MULTIPLE TABLES
SELECT TOP 2 H.SalesOrderNumber AS 'Order.Number',  
        H.OrderDate AS 'Order.Date',  
        D.UnitPrice AS 'Product.Price',  
        D.OrderQty AS 'Product.Quantity'  
FROM Sales.SalesOrderHeader H  
   INNER JOIN Sales.SalesOrderDetail D  
     ON H.SalesOrderID = D.SalesOrderID  
FOR JSON PATH


--WITHOUT ARRAY WRAPPER
SELECT 2015 as year, 12 as month, 15 as day  
FOR JSON PATH, WITHOUT_ARRAY_WRAPPER

--MULTIPLE ROW RESULT
SELECT TOP 3 SalesOrderNumber, OrderDate, Status  
FROM Sales.SalesOrderHeader  
ORDER BY ModifiedDate  
FOR JSON PATH, WITHOUT_ARRAY_WRAPPER


--CHECK COMPATIBILITY OF DATABASES
SELECT compatibility_level, name
FROM sys.databases
GO
