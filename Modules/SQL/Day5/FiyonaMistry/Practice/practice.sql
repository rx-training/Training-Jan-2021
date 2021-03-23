USE AdventureWorks2012


--INNER JOIN
SELECT e.BusinessEntityID, e.JobTitle, eph.Rate, eph.PayFrequency
FROM HumanResources.Employee AS e
JOIN HumanResources.EmployeePayHistory AS eph
ON e.BusinessEntityID = eph.BusinessEntityID


--LEFT OUTER JOIN
SELECT p.ProductID, p1.SalesOrderID, p1.UnitPrice
FROM Sales.SpecialOfferProduct p
LEFT OUTER JOIN Sales.SalesOrderDetail p1
ON p.ProductID = p1.ProductID
WHERE SalesOrderID IS NULL


--RIGHT OUTER JOIN
SELECT e.JobTitle, d.JobCandidateID
FROM HumanResources.Employee e
RIGHT OUTER JOIN HumanResources.JobCandidate d
ON e.BusinessEntityID = d.BusinessEntityID


--SELF JOIN
SELECT emp.BusinessEntityID, emp.JobTitle AS 'Employee Designation', mgr.BusinessEntityID, mgr.JobTitle AS 'Manager Designation'
FROM HumanResources.Employee emp, HumanResources.Employee mgr
WHERE emp.BusinessEntityID = mgr.BusinessEntityID