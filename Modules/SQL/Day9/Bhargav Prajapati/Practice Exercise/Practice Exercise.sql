USE AdventureWorks2012

---------------------Variable-------------------------
DECLARE @Rate int  /*Declaration of The Vareable*/
SELECT @Rate =MAX(Rate) FROM HumanResources.EmployeePayHistory /*Use of Declare Variable*/
PRINT @Rate  /*Print the Declare variable*/

SELECT Max(Rate) FROM HumanResources.EmployeePayHistory
Go
----------------------If Else Statement------------------
----------Example 1-------------
DECLARE @Rate1 money
SELECT @Rate1=Rate  FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID=23
IF @Rate1<15
PRINT 'Review of Rate Is Required'
ELSE 
BEGIN
PRINT 'Review Of Rate Is Not Required'
PRINT 'RATE='
PRINT @Rate1
END
GO

------------------Example2-----------------------
SELECT * FROM Production.Product
IF
(SELECT COUNT(*) FROM Production.Product WHERE NAME LIKE 'Touring-3000%') >5
PRINT 'There Are More Then 5 Bycle of Turing-3000 Company'
ELSE
PRINT 'Turing-3000 Company Is Not Avalilable'
GO

--------------------------Example-3----------------------
SELECT * FROM Production.Product
DECLARE @Avgweight int,@countcycle int
IF(SELECT COUNT(*) FROM Production.Product WHERE Name LIKE 'Touring-3000%')>5
BEGIN
SET @Avgweight=(SELECT AVG(Weight) FROM Production.Product WHERE Name LIKE 'Touring-3000%')
SET @countcycle =(SELECT COUNT(*) FROM Production.Product WHERE Name LIKE 'Touring-3000%')
PRINT 'The Average Wight is  '+ CAST(@Avgweight AS varchar(20)) +' of Touring-3000 Bikes'
PRINT 'The number of Bike   '+ CAST(@countcycle AS varchar(20)) +' of Touring-3000 Bikes'
END
ELSE
BEGIN
SET @countcycle =(SELECT COUNT(*) FROM Production.Product WHERE Name LIKE 'Touring-3000%')
PRINT 'The number of Bike   '+ CAST(@countcycle AS varchar(20)) +' of Touring-3000 Bikes'
END
GO
---------------------------Example 4------------------------
DECLARE @Number INT
SET @Number=50
IF(@Number)>100
BEGIN
	PRINT 'The Number Is Large'
END
ELSE
BEGIN
	IF(@Number<10)
		PRINT 'The Number is Samll'
	ELSE
		PRINT 'The Number Is Medium'
END
GO

----------------------Case Statement----------------------

SELECT BusinessEntityID,'Marital Status'=
CASE MaritalStatus
	WHEN 'M' THEN 'Marrid'
	WHEN 'S' THEN 'Single'
	ELSE 'Not Specified'
END
FROM HumanResources.Employee

SELECT* FROM HumanResources.Employee
GO

-----------------------------------------While Statement-----------------------------------------------
SELECT * FROM Production.Product
WHILE(SELECT AVG(ListPrice) FROM Production.Product)<$300
BEGIN
UPDATE Production.Product SET ListPrice=ListPrice*2
 IF(SELECT MAX(ListPrice) FROM Production.Product)>$500
	BREAK
	ELSE
	CONTINUE
	END
	PRINT 'TO MUCH FOR  THE MARKET BEAR'
GO

	SELECT * FROM Production.Product


----------------------- JOSON DATA INTO TABLE FORMENT---------------------------------
USE master
DECLARE @JSON varchar(MAX)
SET @JSON=N'[
			{"Id":1,"Name":"JOHN"},
			{"Id":2,"Name":"Doe"},
			{"Id":3,"Name":"ABC"}
		   ]'
SELECT * FROM OPENJSON(@JSON)  WITH (id Int '$.Id' ,name Varchar(MAX) '$.Name');
GO
-----------------------------JSON PATH---------------
USE AdventureWorks2012
SELECT * FROM HumanResources.Department

SELECT DepartmentID AS'JSONID' ,Name AS 'JSONNAME',GroupName AS 'GROUPNAME' FROM HumanResources.Department FOR JSON PATH

---------------------------------------JSON AUTO------------------------
SELECT DepartmentID AS'JSONID' ,Name AS 'JSONNAME',GroupName AS 'GROUPNAME' FROM HumanResources.Department FOR JSON AUTO

---------------------------IS JSON-------------------------------------------
USE master
DECLARE @JSON1 varchar(MAX)
SET @JSON1='[
			{"Id":1,"FirstName":"JOHN","LastName":"Doe"},
			{"Id":2,"FirstName":"Jemes","LastName":"Bond"}
		]'
SELECT * FROM  OPENJSON(@JSON1) WITH (Id int '$.Id',FirstName varchar(50) '$.FirstName',LastName varchar(50) '$.LastName') WHERE ISJSON(@JSON1)>0
GO

-----------------------JSON Modify----------------
USE master

DECLARE @info NVARCHAR(100)='{"Id":1,"name":"John","skills":["C#","SQL"]}'

PRINT @info
-------Update Name-----------
SET @info=JSON_MODIFY(@Info,'$.name','Smith')
PRINT @info

-----------Insert SurName----------
SET @info=JSON_MODIFY(@info,'$.surname','zxa')
PRINT @info

----------Delete Name--------------
SET @info=JSON_MODIFY(@info,'$.name',NULL)
SET @info=JSON_MODIFY(@info,'$.surname',NULL)
PRINT @info

--------------Add Skill-------------------
SET @info=JSON_MODIFY(@info,'append $.skills','JAVA')
PRINT @info

--------------Multiple Update----------------
SET @info=JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info,'append $.skills','C++'),'$.surname','dsfdsf'),'$.name','qae')
PRINT @info
GO
-----------Increment value----------------
DECLARE @incrementval nvarchar(100)='{"Id":1,"Name":"John","incval":175}'
PRINT @incrementval

SET @incrementval=JSON_MODIFY(@incrementval,'$.incval',CAST(JSON_VALUE(@incrementval,'$.incval') AS INT)+1)
PRINT @incrementval

--------------------Rename Data type-----------------------
DECLARE @product NVARCHAR(100)='{"price":49.99}'

PRINT @product
SET @product=
 JSON_MODIFY(
  JSON_MODIFY(@product,'$.Price',CAST(JSON_VALUE(@product,'$.price') AS NUMERIC(4,2))),
  '$.price',
  NULL
 )

PRINT @product
GO

------------------------JSON VALUE---------------------
DECLARE @jsonInfo NVARCHAR(MAX)
DECLARE @town NVARCHAR(32)

SET @jsonInfo=N'{"info":{"address":[{"town":"Paris"},{"town":"London"}]}}';

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[0].town'); -- Paris
PRINT @town
SET @town=JSON_VALUE(@jsonInfo,'$.info.address[1].town'); -- London
PRINT @town
GO
--------------------Example 2--------------------------
DECLARE @JSONStudent varchar(MAX)
DECLARE @JSONFirstName varchar(MAX)
DECLARE @JSONLastName varchar(MAX)
DECLARE @JSONEmail varchar(MAX)
SET @JSONStudent='{"info":{"address":[{
								"RollNo":1,
								"FirstName":"abc",
								"LastName":"def",
								"Email":"abc@gmail.com"
								
								},{
								"RollNo":2,
								"FirstName":"ghi",
								"LastName":"jkl",
								"Email":"ghi@gmail.com"
								
								}]}}';


SET @JSONFirstName=JSON_VALUE(@JSONStudent,'$.info.address[0].FirstName')
PRINT @JSONFirstName
SET  @JSONLastName=JSON_VALUE(@JSONStudent,'$.info.address[0].LastName')
PRINT @JSONLastName
SET @JSONEmail=JSON_VALUE(@JSONStudent,'$.info.address[0].Email')
PRINT @JSONEmail
GO

---------------------------------------JSON QUery----------------------------------
DECLARE @JSONQuery varchar(MAX)
SET @JSONQuery='{"Employee":[
							{
							"EmployeeId":1,
							"Name":"abc",
							"Department":".NET"
						    },
							{
							"EmployeeId":2,
							"Name":"def",
							"Department":"Java"
						    }
							]
							}';
SELECT JSON_QUERY(@JSONQuery,'$.Employee[0]') AS 'RESULT1'
SELECT JSON_QUERY(@JSONQuery,'$.Employee[1]') AS 'RESULT2'

SELECT JSON_QUERY(@JSONQuery) AS 'All Element Of JSON '

SELECT JSON_VALUE(@JSONQuery,'$.Employee[0].Name' )AS 'RESULT'

