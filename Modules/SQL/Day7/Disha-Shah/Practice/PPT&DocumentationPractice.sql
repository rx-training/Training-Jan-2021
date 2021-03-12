USE Day2DB 

SELECT EmployeeID, FirstName, LastName, Salary INTO OldEmps
FROM OldEmployees

--UNION
SELECT EmployeeID AS 'EmpId', FirstName AS 'Fname', LastName AS 'Lname', Salary AS 'EmpSalary'
FROM OldEmployees
WHERE EmployeeID <=120
UNION
SELECT * 
FROM OldEmps
WHERE EmployeeID>110

SELECT EmployeeID AS 'EmpId', FirstName AS 'Fname', LastName AS 'Lname', Salary AS 'EmpSalary'
FROM OldEmployees
WHERE Salary > 7000
UNION
SELECT * 
FROM OldEmps
WHERE EmployeeID>130

--UNION ALL
SELECT EmployeeID AS 'EmpId', FirstName AS 'Fname', LastName AS 'Lname', Salary AS 'EmpSalary'
FROM OldEmployees
WHERE EmployeeID <=120
UNION ALL
SELECT * 
FROM OldEmps
WHERE EmployeeID>110
ORDER BY EmployeeID

USE AdventureWorks2012

SELECT * FROM Production.ProductModel

--USING SIMPLE UNION
-- Create Gloves table.  
SELECT ProductModelID, Name  
INTO Gloves  
FROM Production.ProductModel  
WHERE ProductModelID IN (3, 4);  
GO
  
-- Here is the simple union.  
-- Uses AdventureWorks  
  
SELECT ProductModelID, Name  
FROM Production.ProductModel  
WHERE ProductModelID NOT IN (3, 4)  
UNION  
SELECT ProductModelID, Name  
FROM Gloves  
ORDER BY Name;  
GO

--USING SELECT INTO WITH UNION
-- Uses AdventureWorks  
  
SELECT ProductModelID, Name  
INTO dbo.ProductResults  
FROM Production.ProductModel  
WHERE ProductModelID NOT IN (3, 4)  
UNION  
SELECT ProductModelID, Name  
FROM Gloves;  
GO  
  
SELECT ProductModelID, Name   
FROM dbo.ProductResults;  


--UNION OF 3 SELECT STATEMENTS
-- Uses AdventureWorks   
  
SELECT pp.LastName, pp.FirstName, e.JobTitle   
INTO dbo.EmployeeOne  
FROM Person.Person AS pp JOIN HumanResources.Employee AS e  
ON e.BusinessEntityID = pp.BusinessEntityID  
WHERE LastName = 'Johnson';  
GO  

SELECT pp.LastName, pp.FirstName, e.JobTitle   
INTO dbo.EmployeeTwo  
FROM Person.Person AS pp JOIN HumanResources.Employee AS e  
ON e.BusinessEntityID = pp.BusinessEntityID  
WHERE LastName = 'Johnson';  
GO  

SELECT pp.LastName, pp.FirstName, e.JobTitle   
INTO dbo.EmployeeThree  
FROM Person.Person AS pp JOIN HumanResources.Employee AS e  
ON e.BusinessEntityID = pp.BusinessEntityID  
WHERE LastName = 'Johnson';  
GO  

-- Union ALL  
SELECT LastName, FirstName, JobTitle  
FROM dbo.EmployeeOne  
UNION ALL  
SELECT LastName, FirstName ,JobTitle  
FROM dbo.EmployeeTwo  
UNION ALL  
SELECT LastName, FirstName,JobTitle   
FROM dbo.EmployeeThree;  
GO  
  
SELECT LastName, FirstName,JobTitle  
FROM dbo.EmployeeOne  
UNION   
SELECT LastName, FirstName, JobTitle   
FROM dbo.EmployeeTwo  
UNION   
SELECT LastName, FirstName, JobTitle   
FROM dbo.EmployeeThree;  
GO  
  
SELECT LastName, FirstName,JobTitle   
FROM dbo.EmployeeOne  
UNION ALL  
(  
SELECT LastName, FirstName, JobTitle   
FROM dbo.EmployeeTwo  
UNION  
SELECT LastName, FirstName, JobTitle   
FROM dbo.EmployeeThree  
);  
GO

--INTERSECT
SELECT EmployeeID AS 'EmpId', FirstName AS 'Fname', LastName AS 'Lname', Salary AS 'EmpSalary'
FROM OldEmployees
WHERE EmployeeID <=120
INTERSECT
SELECT * 
FROM OldEmps
WHERE EmployeeID>110

--uses AdventureWorks

SELECT ProductID   
FROM Production.Product  
INTERSECT  
SELECT ProductID   
FROM Production.WorkOrder ;  

--EXCEPT
SELECT EmployeeID AS 'EmpId', FirstName AS 'Fname', LastName AS 'Lname', Salary AS 'EmpSalary'
FROM OldEmployees
WHERE EmployeeID <=120
EXCEPT
SELECT * 
FROM OldEmps
WHERE EmployeeID>110

-- Uses AdventureWorks  
  
SELECT ProductID   
FROM Production.Product  
EXCEPT  
SELECT ProductID   
FROM Production.WorkOrder ; 

--DERIVED TABLES
SELECT DISTINCT Salary
FROM (
	SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'dRank', *
	FROM OldEmployees
) tblTemp
WHERE dRank = 2

USE Day6DB

SELECT * FROM Employees

SELECT * FROM Departments

SELECT FirstName, dept.DepartmentName
FROM Employees
JOIN (
	SELECT DepartmentID, DepartmentName
	FROM Departments
	) dept
ON dept.DepartmentID = Employees.DepartmentID


--CTE

SELECT * FROM Sales.SalesOrderHeader

WITH SalesCTE (SalesPersonId, NumberOfOrders)
AS
(
	SELECT SalesPersonID, COUNT(*)
	FROM Sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	GROUP BY SalesPersonID
)
SELECT AVG(NumberOfOrders) AS 'Average Sales Per Person'
FROM SalesCTE

--SIMPLE CTE  
WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)  
AS  
-- Define the CTE query.  
(  
    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
)  
-- Define the outer query referencing the CTE name.  
SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear  
FROM Sales_CTE  
GROUP BY SalesYear, SalesPersonID  
ORDER BY SalesPersonID, SalesYear;

--MULTIPLE CTE IN SINGLE QUERY
WITH Sales_CTE (SalesPersonID, TotalSales, SalesYear)  
AS  
-- Define the first CTE query.  
(  
    SELECT SalesPersonID, SUM(TotalDue) AS TotalSales, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
       GROUP BY SalesPersonID, YEAR(OrderDate)  
  
)  
,   -- Use a comma to separate multiple CTE definitions.  
  
-- Define the second CTE query, which returns sales quota data by year for each sales person.  
Sales_Quota_CTE (BusinessEntityID, SalesQuota, SalesQuotaYear)  
AS  
(  
       SELECT BusinessEntityID, SUM(SalesQuota)AS SalesQuota, YEAR(QuotaDate) AS SalesQuotaYear  
       FROM Sales.SalesPersonQuotaHistory  
       GROUP BY BusinessEntityID, YEAR(QuotaDate)  
)  
  
-- Define the outer query by referencing columns from both CTEs.  
SELECT SalesPersonID  
  , SalesYear  
  , FORMAT(TotalSales,'C','en-us') AS TotalSales  
  , SalesQuotaYear  
  , FORMAT (SalesQuota,'C','en-us') AS SalesQuota  
  , FORMAT (TotalSales -SalesQuota, 'C','en-us') AS Amt_Above_or_Below_Quota  
FROM Sales_CTE  
JOIN Sales_Quota_CTE ON Sales_Quota_CTE.BusinessEntityID = Sales_CTE.SalesPersonID  
                    AND Sales_CTE.SalesYear = Sales_Quota_CTE.SalesQuotaYear  
ORDER BY SalesPersonID, SalesYear;

--RECURSIVE CTE
-- Create an Employee table.  
CREATE TABLE MyEmployees  
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
INSERT INTO MyEmployees VALUES   
 (1, N'Ken', N'Sánchez', N'Chief Executive Officer',16,NULL)  
,(273, N'Brian', N'Welcker', N'Vice President of Sales',3,1)  
,(274, N'Stephen', N'Jiang', N'North American Sales Manager',3,273)  
,(275, N'Michael', N'Blythe', N'Sales Representative',3,274)  
,(276, N'Linda', N'Mitchell', N'Sales Representative',3,274)  
,(285, N'Syed', N'Abbas', N'Pacific Sales Manager',3,273)  
,(286, N'Lynn', N'Tsoflias', N'Sales Representative',3,285)  
,(16,  N'David',N'Bradley', N'Marketing Manager', 4, 273)  
,(23,  N'Mary', N'Gibson', N'Marketing Specialist', 4, 16);

WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel) AS   
(  
    SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel  
    FROM MyEmployees   
    WHERE ManagerID IS NULL  
    UNION ALL  
    SELECT e.ManagerID, e.EmployeeID, e.Title, EmployeeLevel + 1  
    FROM MyEmployees AS e  
        INNER JOIN DirectReports AS d  
        ON e.ManagerID = d.EmployeeID   
)  
SELECT ManagerID, EmployeeID, Title, EmployeeLevel   
FROM DirectReports  
ORDER BY ManagerID;

