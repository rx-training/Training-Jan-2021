USE day5
SELECT * FROM Employees
USE AdventureWorks2012

SELECT * FROM HumanResources.EmployeePayHistory

DECLARE @Rate int
SELECT @Rate=MAX(Rate) FROM HumanResources.EmployeePayHistory
GO

DECLARE @Rate money
SELECT @Rate = Rate FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID =  4
IF @Rate< 15
PRINT '<15'
ELSE
BEGIN
PRINT '>15'
PRINT 'Rate='
PRINT @Rate
END
GO

DECLARE @Rate money
SELECT @Rate = Rate FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID =  16
IF @Rate< 30
PRINT '<30'
ELSE
BEGIN
PRINT '>30'
PRINT 'Rate='
PRINT @Rate
END
GO

SELECT * FROM HumanResources.Employee

SELECT BusinessEntityID , 'Marital Status ' =
CASE MaritalStatus
	WHEN 'M' THEN 'MARRIED'
	WHEN 'S' THEN 'Single'
	ELSE 'NOT SPECIFIED'
	END

FROM HumanResources.Employee
GO
SELECT BusinessEntityID , 
CASE MaritalStatus
	WHEN 'M' THEN 'MARRIED'
	WHEN 'S' THEN 'Single'
	ELSE 'NOT SPECIFIED'
	END 'Status'

FROM HumanResources.Employee
GO

SELECT * FROM Production.Product

WHILE(SELECT AVG(ListPrice) FROM Production.Product)< 300
BEGIN
	UPDATE Production.Product
	 SET ListPrice= ListPrice*2
	 SELECT MAX(ListPrice) FROM Production.Product
	 IF(SELECT MAX(ListPrice) FROM Production.Product) > 500
	 BREAK
	 ELSE
	 CONTINUE
END
PRINT 'Too much for the market to bear'


DECLARE	@json NVARCHAR(MAX);
SET @json = N'[
	{"id": 1, "Name":"jevik"},
	{"id": 2, "Name":"pratik"}
]';
SELECT * 
FROM OPENJSON(@json)
WITH (
	Id INT '$.id',
	Name NVARCHAR(50) '$.Name'
)

DECLARE	@json NVARCHAR(MAX);
SET @json = N'[
	{"id": 1, "Name":"jevik", "Mno":7096240696},
	{"id": 2, "Name":"pratik","Mno": 7096240694}
]';
SELECT * 
FROM OPENJSON(@json)
WITH (
	Id INT '$.id',
	Name NVARCHAR(50) '$.Name',
	MoNo NVARCHAR(10) '$.Mno'
)

DECLARE	@json NVARCHAR(MAX);
SET @json = N'[{"student":
	[{"id": 1, "Name":"jevik", "Mno":7096240696},
	{"id": 2, "Name":"pratik","Mno": 7096240694}]
}]';
SELECT * 
FROM OPENJSON(@json)
WITH (
	Id INT '$.student[0].id',
	Name NVARCHAR(50) '$.student[0].Name',
	MoNo NVARCHAR(10) '$.student[0].Mno'
)

DECLARE	@json1 NVARCHAR(MAX);
SET @json1 = N'[
	{
	"Student":
		{"id": 1, "Name":"jevik", "Mno":7096240696}
	},
	{
	"Student":
		{"id": 2, "Name":"jevik2", "Mno":7096240296}
	}
]';
SELECT * 
FROM OPENJSON(@json1)
WITH (
	Id INT '$.Student.id',
	Name NVARCHAR(50) '$.Student.Name',
	MoNo NVARCHAR(10) '$.Student.Mno'
)

USE day5
SELECT * FROM Employees

DECLARE	@json1 NVARCHAR(MAX);
SET @json1 = N'[1,2]';
SELECT * 
FROM Employees e
INNER JOIN OPENJSON(@json1) AS j
ON  e.Emp_ID = j.value

DECLARE	@json1 NVARCHAR(MAX);
SET @json1 = N'[5,7]';
SELECT * 
FROM Employees e
INNER JOIN OPENJSON(@json1) AS j
ON  e.Emp_ID = j.value

DECLARE @json1 NVARCHAR(MAX),@json2 NVARCHAR(MAX)
SET @json1=N'{"name": "John", "surname":"Doe"}'
SET @json2=N'{"name": "John", "age":45}'

SELECT *
FROM OPENJSON(@json1)
UNION ALL
SELECT *
FROM OPENJSON(@json2)
WHERE [key] NOT IN (SELECT [key] FROM OPENJSON(@json1))


DECLARE @json1 NVARCHAR(MAX),@json2 NVARCHAR(MAX)
SET @json1=N'{"name": "John", "surname":"Doe"}'
SET @json2=N'{"name": "John", "age":45}'

SELECT *
FROM OPENJSON(@json1)
UNION 
SELECT *
FROM OPENJSON(@json2)

DECLARE @json1 NVARCHAR(MAX),@json2 NVARCHAR(MAX)
SET @json1=N'{"name": "John", "surname":"Doe"}'
SET @json2=N'{"name": "John", "age":45}'

SELECT *
FROM OPENJSON(@json1)
UNION ALL
SELECT *
FROM OPENJSON(@json2)


DECLARE @json1 NVARCHAR(MAX),@json2 NVARCHAR(MAX)
SET @json1=N'{"name": "John", "surname":"Doe"}'
SET @json2=N'{"name": "John", "age":45}'

SELECT *
FROM OPENJSON(@json1) j1 
INNER JOIN  OPENJSON(@json2) j2
ON  j1.[key] =j2.[key]


SELECT Emp_ID,First_Name as "Info.name", Last_Name as "info_surname"
FROM Employees
FOR JSON PATH

SELECT * FROM Employees
FOR JSON PATH


DECLARE @json1 NVARCHAR(MAX);
SET @json1 = N'[5,7]';
IF (ISJSON(@json1) > 0)  
BEGIN  
  PRINT 'je'
END

DECLARE @json1 NVARCHAR(MAX);
SET @json1 = N'[5,7]';
SELECT Emp_ID,@json1 FROM  Employees
WHERE ISJSON(@json1)>0


DECLARE @json1 NVARCHAR(MAX);
SET @json1 = N'[
	{"id": 1, "Name":"jevik"}
]';
SELECT Emp_ID,@json FROM  Employees
WHERE ISJSON(@json1)>0


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


DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info
-- Multiple updates  
SET @info=JSON_MODIFY
(JSON_MODIFY
(JSON_MODIFY(@info,'$.name','Mike'),'$.surname','Smith'),'append $.skills','Azure')
PRINT @info

DECLARE @product NVARCHAR(100)='{"price":49.9999}'
PRINT @product
-- Rename property  

SET @product=
 JSON_MODIFY(
  JSON_MODIFY(@product,'$.Price',CAST(JSON_VALUE(@product,'$.price') AS NUMERIC(4,2))),
  '$.price',
  NULL
 )
PRINT @product

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info
-- Update name  
PRINT JSON_VALUE(@info,'$.name')

DECLARE	@json NVARCHAR(MAX);
SET @json = '{"student":
	{"id": 1, "Name":"jevik", "Mno":7096240696}
}';
PRINT JSON_VALUE(@json,'$.student.Mno')


DECLARE	@json NVARCHAR(MAX);
SET @json = '{"student":
	{"id": 1, "Name":"jevik", "Mno":7096240696}
}';
PRINT JSON_QUERY(@json,'$.student')

DECLARE	@json NVARCHAR(MAX);
SET @json = '{"student":[
	{"id": 1, "Name":"jevik", "Mno":7096240696},
	{"id": 1, "Name":"jevik", "Mno":7096240696}]
}';
PRINT JSON_QUERY(@json)

DECLARE	@json NVARCHAR(MAX);
SET @json = '{"student":[
	{"id": 1, "Name":"jevik", "Mno":7096240696},
	{"id": 1, "Name":"jevik", "Mno":7096240696}]
}';
PRINT JSON_QUERY(@json,'$.student')


DECLARE	@json NVARCHAR(MAX);
SET @json = '{"student":[
	{"id": 1, "Name":"jevik", "Mno":7096240696},
	{"id": 1, "Name":"jevik", "Mno":7096240696}]
}';
PRINT JSON_QUERY(@json,'$.student[0]')


DECLARE	@json NVARCHAR(MAX);
SET @json = '{"student":[
	{"id": 1, "Name":"jevik", "Mno":7096240696},
	{"id": 2, "Name":"jevik", "Mno":7096240696}]
}';
PRINT JSON_QUERY(@json,'$.student[1]')

DECLARE @stats NVARCHAR(100)='{"click_count": 173}'
PRINT @stats
-- Increment value  
SET @stats=JSON_MODIFY(@stats,'$.click_count',
 CAST(JSON_VALUE(@stats,'$.click_count') AS INT)+1)
PRINT @stats

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info
-- Update skills array
SET @info=JSON_MODIFY(@info,'$.skills','["C#","T-SQL","Azure","old will be replaced"]')
PRINT @info

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info
-- Update skills array  
SET @info=JSON_MODIFY(@info,'$.skills',JSON_QUERY('["C#","T-SQL","Azure"]'))
PRINT @info

DECLARE @json NVARCHAR(MAX)
SET @json='{"name":"John","surname":"Doe","age":45,"skills":["SQL","C#","MVC"]}';
SELECT *
FROM OPENJSON(@json);

DECLARE @json NVARCHAR(MAX)
SET @json =   
  N'[  
       {  
         "Order": {  
           "Number":"SO43659",  
           "Date":"2011-05-31T00:00:00"  
         },  
         "AccountNumber":"AW29825",  
         "Item": {  
           "Price":2024.9940,  
           "Quantity":1  
         }  
       },  
       {  
         "Order": {  
           "Number":"SO43661",  
           "Date":"2011-06-01T00:00:00"  
         },  
         "AccountNumber":"AW73565",  
         "Item": {  
           "Price":2024.9940,  
           "Quantity":3  
         }  
      }  
 ]'  
SELECT * FROM  
 OPENJSON ( @json )  
WITH (   
              Number   varchar(200) '$.Order.Number' ,  
              Date     datetime     '$.Order.Date',  
              Customer varchar(200) '$.AccountNumber',  
              Quantity int          '$.Item.Quantity'  
 )
SELECT * FROM Employees
FOR JSON AUTO

SELECT * FROM Employees
FOR JSON PATH

SELECT TOP 2 SalesOrderNumber,  
        OrderDate,  
        UnitPrice,  
        OrderQty  
FROM Sales.SalesOrderHeader H  
   INNER JOIN Sales.SalesOrderDetail D  
     ON H.SalesOrderID = D.SalesOrderID  
FOR JSON AUTO

SELECT TOP 2 SalesOrderNumber,  
        OrderDate,  
        UnitPrice,  
        OrderQty  
FROM Sales.SalesOrderHeader H  
   INNER JOIN Sales.SalesOrderDetail D  
     ON H.SalesOrderID = D.SalesOrderID  
FOR JSON PATH 

SELECT TOP 2 SalesOrderNumber,  
        OrderDate,  
        UnitPrice,  
        OrderQty  
FROM Sales.SalesOrderHeader H  
   INNER JOIN Sales.SalesOrderDetail D  
     ON H.SalesOrderID = D.SalesOrderID  
FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER

--DECLARE @info Nvarchar(MAX)
--SET @info = N'[{
--		"customer"{ "name":"jevik raiyani"
--		}	
--		}]'
--SELECT Emp_ID,Salary,JSON_VALUE(@info, '$.customer.name') AS name FROM Employees
--WHERE JSON_VALUE(@info, '$.customer.name')= N'jevik raiyani'

--SELECT * FROM Employees
