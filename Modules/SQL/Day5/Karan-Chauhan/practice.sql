USE AdventureWorks2012;

SELECT E.BusinessEntityID, E.JobTitle, Ep.Rate, Ep.PayFrequency FROM HumanResources.Employee E JOIN HumanResources.EmployeePayHistory Ep ON E.BusinessEntityID = Ep.BusinessEntityID;

SELECT * FROM HumanResources.Employee;

SELECT * FROM Sales.SalesOrderDetail;

SELECT * FROM Sales.SalesPerson;

SELECT E.BusinessEntityID, E.JobTitle, Ep.Rate, Ep.PayFrequency FROM HumanResources.Employee E LEFT OUTER JOIN HumanResources.EmployeePayHistory Ep ON E.BusinessEntityID = Ep.BusinessEntityID;

SELECT * FROM HumanResources.Employee E RIGHT OUTER JOIN HumanResources.EmployeePayHistory Ep ON E.BusinessEntityID = Ep.BusinessEntityID;

SELECT * FROM HumanResources.Employee E FULL OUTER JOIN HumanResources.EmployeePayHistory Ep ON E.BusinessEntityID = Ep.BusinessEntityID;

SELECT A.OrderQty + B.OrderQty AS 'Total Products' FROM Sales.SalesOrderDetail A CROSS JOIN Sales.SalesOrderDetail B;

SELECT E.BusinessEntityID, E.JobTitle, M.HireDate FROM HumanResources.Employee E, HumanResources.Employee M WHERE E.HireDate = M.HireDate;
