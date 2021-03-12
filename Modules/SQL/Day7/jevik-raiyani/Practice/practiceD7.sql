USE Jevik

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90
UNION
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName, DepartmentID FROM Employees
WHERE DepartmentID=90
UNION
SELECT FirstName,LastName,'1' FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName, '1' FROM Employees
WHERE DepartmentID=90
UNION
SELECT FirstName,LastName,DepartmentID FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName, '1' AS dept FROM Employees
WHERE DepartmentID=90
UNION
SELECT FirstName,LastName,DepartmentID FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90
UNION
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90
UNION ALL
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90
INTERSECT
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90 OR DepartmentID='110'
UNION 
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90 OR DepartmentID='110'
UNION ALL
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90 OR DepartmentID='110'
INTERSect
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'

SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90 OR DepartmentID='110'
EXCEPT
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'
--(A-B)

--(B-A)
SELECT FirstName,LastName FROM Employees
WHERE HireDate BETWEEN '1-Jan-1987' AND '1-July-1987'
EXCEPT
SELECT FirstName,LastName FROM Employees
WHERE DepartmentID=90 OR DepartmentID='110'

SELECT Salary
FROM(
SELECT DENSE_RANK() OVER (ORDER BY Salary DESC)  'rank', *
FROM Employees)newtab
WHERE  rank= 1

SELECT *
FROM Employees e
JOIN (SELECT EmployeeID,Salary FROM Employees) table2
ON e.EmployeeID =table2.EmployeeID


WITH SALES_CTE(a,b)
AS
(
	SELECT salespersonid, COUNT(*)
	FROM sale
	WHERE salespersonid	IS NOT NULL
	GROUP BY salespersonid
)
SELECT AVG(b) 'AVG sales PER PERSON'
FROM SALES_CTE

SELECT *FROM Employees
SELECT *FROM sale


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

WITH Sales_CTE (SalesPersonID, NumberOfOrders)  
AS  
(  
    SELECT SalesPersonID, COUNT(*)  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
    GROUP BY SalesPersonID  
)  
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person"  
FROM Sales_CTE;


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


WITH Sales_CTE (SalesPersonID, NumberOfOrders)  
AS  
(  
    SELECT SalesPersonID, COUNT(*)  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
    GROUP BY SalesPersonID  
)  
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person"  
FROM Sales_CTE; 