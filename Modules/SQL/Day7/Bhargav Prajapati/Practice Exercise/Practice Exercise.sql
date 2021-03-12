USE AdventureWorks2012
SELECT * FROM HumanResources.Employee
------------UNION-----------------------
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE JobTitle='Research and Development Manager' 
UNION  
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE HireDate > '29-Jan-1969' ORDER BY BusinessEntityID
------------UNION ALL--------------------
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE JobTitle='Research and Development Manager' 
UNION  ALL
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE HireDate > '29-Jan-1969' ORDER BY BusinessEntityID

-----------------INTERSECT------------
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE JobTitle='Research and Development Manager' 
INTERSECT
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE HireDate > '29-Jan-1969' ORDER BY BusinessEntityID

--------------------------EXCEPT--------------------------
SELECT BusinessEntityID,JobTitle,HireDate FROM HumanResources.Employee WHERE JobTitle='Research and Development Manager' 
EXCEPT
SELECT 30,JobTitle,HireDate FROM HumanResources.Employee WHERE HireDate > '29-Jan-1969' ORDER BY BusinessEntityID

----------------------DERIVED TABLE---------------
SELECT * FROM HumanResources.EmployeePayHistory
SELECT BusinessEntityID,RateChangeDate,PayFrequency,Rate,ModifiedDate FROM (
SELECT DENSE_RANK()OVER(ORDER BY Rate) As 'DENSERANK' ,*FROM HumanResources.EmployeePayHistory) AS table1 WHERE DENSERANK=1

-----------------COMMAN TABLE Expression---------------
SELECT * FROM Sales.SalesOrderHeader
WITH Sales_CTE(SalesPersonID,NumberOFOrder)
AS
(
	SELECT SalesPersonID,COUNT(*) FROM Sales.SalesOrderHeader WHERE SalesPersonID IS NOT NULL
	GROUP BY SalesPersonID
)

SELECT AVG(NumberOFOrder) AS 'AVERAGE ORDER',SalesPersonID FROM Sales_CTE GROUP BY SalesPersonID



-----------MULTIPLE CTE------------------
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