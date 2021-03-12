/* SQL Day 7 Practice Exercise */

--UNION

SELECT ProductModelID, Name  
INTO Gloves  
FROM Production.ProductModel  
WHERE ProductModelID IN (3, 4);

SELECT ProductModelID, Name  
FROM Production.ProductModel  
WHERE ProductModelID NOT IN (3, 4)  
UNION  
SELECT ProductModelID, Name  
FROM Gloves;

-- UNION ALL

SELECT ProductModelID, Name  
FROM Production.ProductModel   
UNION  ALL
SELECT ProductModelID, Name  
FROM Gloves
ORDER BY ProductModelID;

--	EXCEPT
SELECT ProductModelID, Name  
FROM Production.ProductModel   
EXCEPT
SELECT ProductModelID, Name  
FROM Gloves
ORDER BY ProductModelID;

-- INTERSECT

SELECT ProductModelID, Name  
FROM Production.ProductModel   
INTERSECT
SELECT ProductModelID, Name  
FROM Gloves
ORDER BY ProductModelID;

-- DERIVED TABLE
USE SQLDay6Learning
-- DERIVED TABLE IN SUBQUERY
SELECT Salary
FROM
(SELECT DENSE_RANK() OVER (ORDER BY Salary DESC)[d_rank],*
FROM Employees
)[tb1]
WHERE d_rank = 1;
-- DERIVED TABLE IN JOIN
SELECT FirstName,dept.DepartmentName
FROM Employees e
JOIN (SELECT DepartmentID,DepartmentName FROM Departments)[dept] 
ON dept.DepartmentID =e.DepartmentID;

-- CTE 
USE AdventureWorks2012
WITH Sales_CTE(SalesPersonId,NuberOfOrders)
AS
(
	SELECT SalesPersonID,COUNT(*)
	FROM Sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	GROUP BY SalesPersonID
)
SELECT AVG(NuberOfOrders) 'Average Sales'
FROM Sales_CTE;

--Recursive Common Table Rxpression
USE SQLDay6Learning
WITH DirectReports(ManagerID, EmployeeID, EmployeeLevel) AS   
(  
    SELECT ManagerID, EmployeeID, 0 AS EmployeeLevel  
    FROM Employees
    WHERE ManagerID = 0
    UNION ALL  
    SELECT e.ManagerID, e.EmployeeID, EmployeeLevel + 1  
    FROM Employees AS e  
        INNER JOIN DirectReports AS d  
        ON e.ManagerID = d.EmployeeID   
)  
SELECT ManagerID, EmployeeID, EmployeeLevel   
FROM DirectReports  
ORDER BY ManagerID;