
-- Practice Work
USE AdventureWorks2012
----------------------------------------------------------------
-- Simple common table expression

WITH Sales_CTE (SalesPersonId, SalesOrderId, SalesYear)
AS
-- Defineing the CTE 
(
SELECT SalesPersonID,SalesOrderID, YEAR(OrderDate) 'SalesYear'
FROM Sales.SalesOrderHeader
WHERE SalesPersonID IS NOT NULL
)
-- Query relaed to Sales_CTE Table
SELECT SalesPersonId,
COUNT(SalesOrderId)'TotalSales',
SalesYear 
FROM Sales_CTE
GROUP BY SalesYear, SalesPersonId
ORDER BY SalesPersonId, SalesYear;
--------------------------------------------------------------------
-- CTE to limit counts and report averages

WITH Sales_CTE (SalesPersonID, NumberOfOrders)
AS(
	SELECT SalesPersonID, COUNT(*)
	FROM Sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	GROUP BY SalesPersonID
)
SELECT AVG(NumberOfOrders) AS 'Average Sales Per Person'
FROM Sales_CTE;
----------------------------------------------------------------------
-- USING MULTIPLE CTE DEFINITIONS IN A SINGLE QUERY

WITH  Sales_CTE (SalesPersonID, TotalSales, SalesYear)
AS
(
	SELECT SalesPersonID, 
		SUM(TotalDue) 'TotalSales',
		YEAR(OrderDate) 'SalesYear'
	FROM Sales.SalesOrderHeader
	GROUP BY SalesPersonID, YEAR(OrderDate)
)
,	-- Use a comma to seperate multiple CTE definition
-- Defining second query
Sales_Quota_CTE(BusinessEntityID, SalesQuota, SalesQuotaYear)
AS
(
	SELECT BusinessEntityID,
		SUM(SalesQuota)'SalesQuota',
		YEAR(QuotaDate)'SalesQuotaYear'
	FROM Sales.SalesPersonQuotaHistory
	GROUP BY BusinessEntityID, YEAR(QuotaDate)
)
-- defining query using both CTE
SELECT SalesPersonID, 
	SalesYear, 
	FORMAT(TotalSales, 'C', 'en-us')'TotalSales', 
	SalesQuotaYear,
	FORMAT(SalesQuota, 'C','en-us')'SalesQuota',
	FORMAT(TotalSales - SalesQuota,'C','en-us')'Amt_Above_or_Below_Quota'
FROM Sales_CTE
	JOIN Sales_Quota_CTE ON Sales_Quota_CTE.BusinessEntityID =Sales_CTE.SalesPersonID
		AND Sales_Quota_CTE.SalesQuotaYear = Sales_CTE.SalesYear
ORDER BY SalesPersonID, SalesYear;
-----------------------------------------------------------------------------------------
-- Recursive CTE to display multiple levels of recursion
-- Creating employee table
CREATE TABLE dbo.MyEmployees  
(  
EmployeeID SMALLINT NOT NULL,  
FirstName NVARCHAR(30)  NOT NULL,  
LastName  NVARCHAR(40) NOT NULL,  
Title NVARCHAR(50) NOT NULL,  
DeptID SMALLINT NOT NULL,  
ManagerID INT NULL,  
 CONSTRAINT PK_EmployeeID PRIMARY KEY CLUSTERED (EmployeeID ASC)   
);  
-- Populate the table with values.  
INSERT INTO dbo.MyEmployees VALUES   
 (1, N'Ken', N'Sánchez', N'Chief Executive Officer',16,NULL)  
,(273, N'Brian', N'Welcker', N'Vice President of Sales',3,1)  
,(274, N'Stephen', N'Jiang', N'North American Sales Manager',3,273)  
,(275, N'Michael', N'Blythe', N'Sales Representative',3,274)  
,(276, N'Linda', N'Mitchell', N'Sales Representative',3,274)  
,(285, N'Syed', N'Abbas', N'Pacific Sales Manager',3,273)  
,(286, N'Lynn', N'Tsoflias', N'Sales Representative',3,285)  
,(16,  N'David',N'Bradley', N'Marketing Manager', 4, 273)  
,(23,  N'Mary', N'Gibson', N'Marketing Specialist', 4, 16);

WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel)
AS
(
	SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel
	FROM MyEmployees
	WHERE ManagerID IS NULL
	UNION ALL
	SELECT e.ManagerID,e.EmployeeID, e.Title, EmployeeLevel +1 
	FROM MyEmployees e
		INNER JOIN DirectReports d
		ON e.ManagerID = d.EmployeeID
)
SELECT ManagerID, EmployeeID, Title, EmployeeLevel
FROM DirectReports
ORDER BY ManagerID;

----------------------------------------------------------
-- Recursive CTE To display two levels of recursion

WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel)
AS
(
	SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel
	FROM MyEmployees
	WHERE ManagerID IS NULL
	UNION ALL 
	SELECT e.ManagerID, e.EmployeeID,e.Title, EmployeeLevel + 1
	FROM MyEmployees e
	INNER JOIN DirectReports d
	ON e.ManagerID = d.EmployeeID
)
SELECT ManagerID, EmployeeID, Title, EmployeeLevel
FROM DirectReports
WHERE EmployeeLevel <= 2;


----------------------------------------------------------------------
-- Recursive CTE to display a hierarchical list

WITH DirectReports(Name, Title, EmployeeID, EmployeeLevel, Sort)
AS
(
	SELECT CONVERT (VARCHAR(255),e.FirstName+' '+e.LastName),
		e.Title,
		e.EmployeeID,
		1,
		CONVERT(VARCHAR(255),e.FirstName+' '+e.LastName)
	FROM MyEmployees e
	WHERE e.ManagerID IS NULL
	UNION ALL
	SELECT CONVERT(VARCHAR(255), REPLICATE('|   ', EmployeeLevel)+e.FirstName+' '+e.LastName),
		e.Title,
		e.EmployeeID,
		EmployeeLevel + 1,
		CONVERT(VARCHAR(255), RTRIM(sort)+'|   '+FirstName+' '+LastName)
	FROM MyEmployees e
	JOIN DirectReports d 
	ON e.ManagerID = d.EmployeeID
)

SELECT EmployeeID, Name, Title, EmployeeLevel
FROM DirectReports
ORDER BY Sort;
--------------------------------------------------------
-- MAXRECURSION to cancel a Statement

-- Creating an infinite loop
WITH cte (EmployeeID, ManagerID, Title)
AS
(
	SELECT EmployeeID, ManagerID, Title
	FROM MyEmployees
	WHERE ManagerID IS NOT NULL
	
	UNION ALL

	SELECT cte.EmployeeID, cte.ManagerID,cte.Title
	FROM cte
	JOIN MyEmployees e
	ON cte.ManagerID = e.EmployeeID
)
--- USES MAXRECURSION to limit the recursive levels to 2
SELECT EmployeeID, ManagerID, Title
FROM cte
OPTION (MAXRECURSION 2)

--- resolving error
WITH cte (EmployeeID, ManagerID, Title)
AS
(
	SELECT EmployeeID, ManagerID, Title
	FROM MyEmployees
	WHERE ManagerID IS NOT NULL
	UNION ALL
	SELECT e.EmployeeID, e.ManagerID, e.Title
	FROM MyEmployees e
	JOIN cte ON e.ManagerID = cte.EmployeeID
)
SELECT EmployeeID, ManagerID, Title
FROM cte;

------------------------------------------------------------------------
-- CTE to selectively step through a recursive relationship in a SELECT Statement

USE AdventureWorks2012;
WITH Parts(AssemblyID, ComponentID, PerAssemblyQty, EndDate, ComponentLevel)
AS
(
	SELECT b.ProductAssemblyID,
		b.ComponentID,
		b.PerAssemblyQty,
		b.EndDate,
		0 'ComponentLevel'
	FROM Production.BillOfMaterials b
	WHERE b.ProductAssemblyID =800
		AND b.EndDate IS NULL
	UNION ALL
	SELECT bom.ProductAssemblyID, 
		bom.ComponentID,
		p.PerAssemblyQty,
		bom.EndDate, 
		ComponentLevel + 1
	FROM Production.BillOfMaterials bom
	INNER JOIN Parts p
	ON bom.ProductAssemblyID = p.ComponentID
	AND bom.EndDate IS NULL
)
SELECT AssemblyID,
	ComponentID,
	Name,
	PerAssemblyQty,
	EndDate,
	ComponentLevel
FROM Parts p
	INNER JOIN Production.Product AS pr
	ON p.ComponentID = pr.ProductID
	ORDER BY ComponentLevel, AssemblyID, ComponentID;

--------------------------------------------------------------------------
-- Recursive CTE in an UPDATE Statement
WITH Parts(AssemblyID, ComponentID, PerAssemblyQty, EndDate, ComponentLevel)
AS
(
	SELECT b.ProductAssemblyID, 
		b.ComponentID, 
		b.PerAssemblyQty,
		b.EndDate,
		0 AS ComponentLevel
	FROM Production.BillOfMaterials b
	WHERE b.ProductAssemblyID = 800
		AND b.EndDate IS NULL
	UNION ALL
	SELECT bom.ProductAssemblyID,
		bom.ComponentID,
		p.PerAssemblyQty, 
		bom.EndDate,
		ComponentLevel + 1
	FROM Production.BillOfMaterials AS bom
	INNER JOIN Parts p 
	ON bom.ProductAssemblyID = p.ComponentID
		AND bom.EndDate IS NULL
)
UPDATE Production.BillOfMaterials 
SET PerAssemblyQty = c.PerAssemblyQty * 2
FROM Production.BillOfMaterials c
JOIN Parts d 
ON c.ProductAssemblyID = d.AssemblyID
WHERE d.ComponentLevel = 0;


----------------------------------------------------------------
-- Using Multiple anchor and recursive members

IF OBJECT_ID('dbo.Person','U') IS NOT NULL DROP TABLE dbo.Person;
GO 
CREATE TABLE dbo.Person(ID int, Name VARCHAR(30), Mother INT, Father INT);

INSERT dbo.Person   
VALUES(1, 'Sue', NULL, NULL)  
      ,(2, 'Ed', NULL, NULL)  
      ,(3, 'Emma', 1, 2)  
      ,(4, 'Jack', 1, 2)  
      ,(5, 'Jane', NULL, NULL)  
      ,(6, 'Bonnie', 5, 4)  
      ,(7, 'Bill', 5, 4); 

-- Create the recursive CTE to find all of Bonnie's ancestors
WITH Generation(ID) AS
(
	-- First anchor member returns Bonnie's mother
	SELECT Mother
	FROM Person
	WHERE Name = 'Bonnie'
	UNION
	-- Second anchor member returns Bonnie's father
	SELECT Father
	FROM Person
	WHERE Name = 'Bonnie'
	UNION ALL
	-- First recursive member returns male ancestors of the previous generation
	SELECT Person.Father
	FROM Generation, Person
	WHERE Generation.ID = Person.ID
	UNION ALL
	-- Second recursive member returns female ancestors of the previous generation
	SELECT Person.Mother
	FROM Generation, Person
	WHERE Generation.ID = Person.ID
)
SELECT Person.ID, Person.Name, Person.Mother, Person.Father
FROM Generation, dbo.Person
WHERE Generation.ID = Person.ID;

