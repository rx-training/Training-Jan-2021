USE AdventureWorks2012;

-- ------------------------------------------- VARIABLES -------------------------------------------
DECLARE @Rate INT
SELECT @Rate = max(Rate) FROM HumanResources.EmployeePayHistory

PRINT @Rate;
GO


-- ------------------------------------------- IF-ELSE -------------------------------------------
DECLARE @SalaryRate MONEY;
SELECT @SalaryRate = Rate FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID = 25;

IF @SalaryRate < 15
PRINT 'Review of the rate is required'
ELSE
BEGIN
PRINT 'Review of the rate is not required'
PRINT 'Rate = '
PRINT @SalaryRate
END
GO


-- ------------------------------------------- CASE -------------------------------------------
SELECT BusinessEntityID, 'Marital Status' = CASE MaritalStatus
												WHEN 'M' THEN 'Married'
												WHEN 'S' THEN 'Single'
												ELSE 'Not Specified'
											END
FROM HumanResources.Employee
GO


-- ------------------------------------------- WHILE -------------------------------------------
WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300
BEGIN 
	UPDATE Production.Product
		SET ListPrice = ListPrice *2
	SELECT MAX(ListPrice) FROM Production.Product
	IF(SELECT MAX(ListPrice) FROM Production.Product) > $500
		BREAK
	ELSE
		CONTINUE
END
PRINT 'Too much for the market to bear'

SELECT * FROM Production.Product
GO


-- ------------------------------------------- ISJSON -------------------------------------------
CREATE TABLE Families (
   id int identity constraint PK_JSON_ID primary key,
   doc nvarchar(max)
)

INSERT INTO Families (doc) VALUES 
('{
  "id": "WakefieldFamily",
  "parents": [
      { "familyName": "Wakefield", "givenName": "Robin" },
      { "familyName": "Miller", "givenName": "Ben" }
  ],
  "children": [
      {
        "familyName": "Merriam",
        "givenName": "Jesse",
        "gender": "female",
        "grade": 1,
        "pets": [
            { "givenName": "Goofy" },
            { "givenName": "Shadow" }
        ]
      },
      { 
        "familyName": "Miller",
         "givenName": "Lisa",
         "gender": "female",
         "grade": 8 }
  ],
  "address": { "state": "NY", "county": "Manhattan", "city": "NY" },
  "creationDate": 1431620462,
  "isRegistered": false
}')

SELECT *
FROM Families
WHERE ISJSON(doc) > 0
GO


-- ------------------------------------------- JSON_VALUE -------------------------------------------
SELECT JSON_VALUE(f.doc, '$.id')  AS Name, 
       JSON_VALUE(f.doc, '$.address.city') AS City,
       JSON_VALUE(f.doc, '$.address.county') AS County
FROM Families f 
WHERE JSON_VALUE(f.doc, '$.id') = N'WakefieldFamily'
ORDER BY JSON_VALUE(f.doc, '$.address.city') DESC, JSON_VALUE(f.doc, '$.address.state') ASC
GO


-- ------------------------------------------- JSON_QUERY -------------------------------------------
SELECT JSON_QUERY(f.doc, '$.address') AS Address,
       JSON_QUERY(f.doc, '$.parents') AS Parents,
       JSON_QUERY(f.doc, '$.parents[0]') AS Parent0
FROM Families f 
WHERE JSON_VALUE(f.doc, '$.id') = N'WakefieldFamily'
GO


-- ------------------------------------------- JSON_MODIFY -------------------------------------------
DECLARE @json NVARCHAR(MAX)
SET @json = '{"info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
SET @json = JSON_MODIFY(@json, '$.info.address[0].town', 'London');
SELECT modifiedJson = @json
GO

------------------
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
-- Update
SET @info = JSON_MODIFY(@info, '$.name', 'Mike')
PRINT @info
-- Insert
SET @info = JSON_MODIFY(@info, '$.surname', 'Smith')
PRINT @info
-- Delete
SET @info = JSON_MODIFY(@info, '$.name',NULL);
PRINT @info
-- Add Skill
SET @info = JSON_MODIFY(@info, 'append $.skills', 'Azure')
PRINT @info
-- Update 
SET @info = JSON_MODIFY( JSON_MODIFY( JSON_MODIFY(@info, '$.name', 'Mike'), '$.surname', 'Smith'), 'append $.skills', 'Azure')
PRINT @info

-- Rename Key
DECLARE @product NVARCHAR(100)='{"price":49.99}'
SET @product = JSON_MODIFY(
					JSON_MODIFY(@product, '$.Price', CAST(JSON_VALUE(@product, '$.price') AS NUMERIC(4,2))),
					'$.price',
					NULL)
PRINT @product

-- Increment Value
DECLARE @stats NVARCHAR(100)='{"click_count": 173}'
PRINT @stats
SET @stats = JSON_MODIFY(@stats, '$.click_count', CAST(JSON_VALUE(@stats, '$.click_count')AS INT) + 1)
PRINT @stats

-- Modify Json Object
DECLARE @info1 NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info1
-- Update skills array
SET @info1=JSON_MODIFY(@info1,'$.skills','["C#","T-SQL","Azure"]')
PRINT @info1
SET @info1=JSON_MODIFY(@info1,'$.skills',JSON_QUERY('["C#","T-SQL","Azure"]'))
PRINT @info1


-- ------------------------------------------- OPENJSON -------------------------------------------
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
]'

SELECT *
FROM OPENJSON(@json)
	WITH(
		id INT 'strict $.id',
		firstName NVARCHAR(50) '$.info.name',
		lastName NVARCHAR(50) '$.info.surname',
		age INT,
		dateOfBirth DATE '$.dob'
	)
GO


-- ------------------------------------------- FOR JSON PATH -------------------------------------------

--Dot-separated column names
SELECT SalesOrderNumber AS [Order.OrderNumber]
	, OrderDate AS [Order.OrderDate] 
	, TotalDue AS [Order.Price]
FROM Sales.SalesOrderHeader
FOR JSON PATH, ROOT('Orders')

-- Multiple tables
SELECT TOP 2 H.SalesOrderNumber AS 'Order.Number',  
        H.OrderDate AS 'Order.Date',  
        D.UnitPrice AS 'Product.Price',  
        D.OrderQty AS 'Product.Quantity'  
FROM Sales.SalesOrderHeader H  
   INNER JOIN Sales.SalesOrderDetail D  
     ON H.SalesOrderID = D.SalesOrderID  
FOR JSON PATH 

-- ------------------------------------------- FOR JSON AUTO -------------------------------------------
SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON AUTO  


SELECT TOP 2 SalesOrderNumber,  
        OrderDate,  
        UnitPrice,  
        OrderQty  
FROM Sales.SalesOrderHeader H  
   INNER JOIN Sales.SalesOrderDetail D  
     ON H.SalesOrderID = D.SalesOrderID  
FOR JSON AUTO

-- ------------------------------------------- FOR JSON ROOT -------------------------------------------
SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH, ROOT('info')

-- ------------------------------------------- INCLUDE NULL VALUES -------------------------------------------
SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH, ROOT('info'), INCLUDE_NULL_VALUES

   
-- ------------------------------------------- WITHOUT_ARRAY_WRAPPER -------------------------------------------
SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH,  WITHOUT_ARRAY_WRAPPER 