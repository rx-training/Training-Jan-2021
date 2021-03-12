USE AdventureWorks2012


--Simple CTE
WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)  
AS  
(  
    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
)  
SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear  
FROM Sales_CTE  
GROUP BY SalesYear, SalesPersonID  
ORDER BY SalesPersonID, SalesYear


--Using CTE with Aggregate functions
WITH Sales_CTE (SalesPersonID, NumberOfOrders)  
AS  
(  
    SELECT SalesPersonID, COUNT(*)  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
    GROUP BY SalesPersonID  
)  
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person"  
FROM Sales_CTE


--Multiple CTE 
WITH Sales_CTE (SalesPersonID, TotalSales, SalesYear)  
AS    
(  
    SELECT SalesPersonID, SUM(TotalDue) AS TotalSales, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
    GROUP BY SalesPersonID, YEAR(OrderDate)  
  
)  
,    
Sales_Quota_CTE (BusinessEntityID, SalesQuota, SalesQuotaYear)  
AS  
(  
       SELECT BusinessEntityID, SUM(SalesQuota)AS SalesQuota, YEAR(QuotaDate) AS SalesQuotaYear  
       FROM Sales.SalesPersonQuotaHistory  
       GROUP BY BusinessEntityID, YEAR(QuotaDate)  
)  
SELECT SalesPersonID  , SalesYear  , FORMAT(TotalSales,'C','en-us') AS TotalSales  , SalesQuotaYear  , FORMAT (SalesQuota,'C','en-us') AS SalesQuota  , FORMAT (TotalSales -SalesQuota, 'C','en-us') AS Amt_Above_or_Below_Quota  
FROM Sales_CTE  
JOIN Sales_Quota_CTE ON Sales_Quota_CTE.BusinessEntityID = Sales_CTE.SalesPersonID  
                    AND Sales_CTE.SalesYear = Sales_Quota_CTE.SalesQuotaYear  
ORDER BY SalesPersonID, SalesYear


--UNION
USE Day5
SELECT FirstName, LastName
FROM Employees
WHERE Department = 'Insurance'
UNION
SELECT	FirstName, LastName
FROM Employees
WHERE FirstName LIKE 'R%'


--INTERSECT
SELECT ProductID   
FROM Production.Product  
INTERSECT  
SELECT ProductID   
FROM Production.WorkOrder 


--EXCEPT
SELECT ProductID   
FROM Production.Product  
EXCEPT  
SELECT ProductID   
FROM Production.WorkOrder 


--Derived Table
SELECT Salary
FROM
	(SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) AS Rank, *
	FROM Employees) AS temp
WHERE Rank = 2