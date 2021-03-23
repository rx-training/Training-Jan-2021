USE AdventureWorks2012  


CREATE TABLE TestTable  
    (TestCol1 int NOT NULL,  
     TestCol2 nchar(10) NULL,  
     TestCol3 nvarchar(50) NULL)


--Clustered Index  
CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
    ON TestTable(TestCol1)


-- Unique Index
CREATE UNIQUE INDEX UK_Name
   ON TestTable(TestCol2)


--Data Access Method
SELECT FirstName, LastName
FROM Person.Person
WHERE FirstName = 'Kelli'


--
DECLARE @sql NVARCHAR(500) = 'SELECT FirstName, LastName
	FROM Person.Person
	WHERE FirstName = @FirstName'
DECLARE @parameterDefinitions NVARCHAR(500) = '@FirstName NVARCHAR(50)'
EXECUTE sp_executesql @sql, @parameterDefinitions, @FirstName = 'Kelli'