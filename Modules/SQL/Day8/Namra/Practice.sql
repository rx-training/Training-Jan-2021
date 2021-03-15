
-- Non-cluster index
SELECT FirstName, LastName
FROM Person.Person
WHERE LastName = 'Harisson';
-- clustered index
SELECT FirstName, LastName
FROM Person.Person
WHERE BusinessEntityID = 1230;

DECLARE @sql NVARCHAR(500) = 'SELECT FirstName,LastName FROM Person.Person WHERE LastName= @LastName';
DECLARE @parameterDefinitions nvarchar(500) = '@LastName nvarchar(50)';

EXECUTE sp_executesql @sql, @parameterDefinitions, @LastName='Harrison';

-------------------------------------------------------------------------------------------------------
USE AdventureWorks2012

CREATE TABLE dbo.TestTable
	(
		TestCol1 INT NOT NULL, 
		TestCol2 NCHAR(10) NULL, 
		TestCol3 NVARCHAR(50) NULL
	);
-- Creating a cluster index called IX_TestTable_TestCol1
-- On the dbo.TestTable Table using the TestCol1 column

CREATE CLUSTERED INDEX IX_TestTable_TestCol1
	ON dbo.TestTable(TestCol1);

-- Creating non clustered index called IX_TestTable_TestCol2_NONCLUSTERED
CREATE NONCLUSTERED INDEX IX_TestTable_TestCol2_NONCLUSTERED
	ON dbo.TestTable(TestCol2);


-- Creating unique index called IX_TestTable_TestCol2_Unique
CREATE UNIQUE INDEX IX_TestTable_TestCol3_Unique
	ON dbo.TestTable(TestCol3);