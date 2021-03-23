USE AdventureWorks2012;

SELECT DENSE_RANK() OVER (ORDER BY Rate DESC) [d_rank], * FROM HumanResources.EmployeePayHistory;

SELECT RANK() OVER (ORDER BY Rate DESC) [d_rank], * FROM HumanResources.EmployeePayHistory;

SELECT ROW_NUMBER() OVER (ORDER BY Rate DESC) [d_rank], * FROM HumanResources.EmployeePayHistory;

SELECT SUM(Rate) AS "Total Sum", COUNT(*) AS "Total Count", AVG(Rate) AS "Average" FROM HumanResources.EmployeePayHistory;

SELECT MAX(Rate) FROM HumanResources.EmployeePayHistory;

SELECT MIN(Rate) FROM HumanResources.EmployeePayHistory;

SELECT SUM(Rate) FROM HumanResources.EmployeePayHistory;

SELECT TerritoryID, SUM(SalesYTD) AS "Sales" FROM Sales.SalesPerson GROUP BY TerritoryID,BusinessEntityID;

SELECT TerritoryID, SUM(SalesYTD) AS "Sales" FROM Sales.SalesPerson GROUP BY ROLLUP (TerritoryID,BusinessEntityID);

SELECT SalesOrderID, SUM(LineTotal) AS SubTotal FROM Sales.SalesOrderDetail GROUP BY SalesOrderID HAVING SUM(LineTotal) > 100000.00 ORDER BY SalesOrderID;