USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

SELECT * FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.JobCandidate

--INNER JOIN
SELECT e.BusinessEntityID, e.JobTitle, eph.Rate, eph.PayFrequency
FROM HumanResources.Employee AS e JOIN HumanResources.EmployeePayHistory AS eph
ON e.BusinessEntityID = eph.BusinessEntityID

SELECT e.BusinessEntityID, e.JobTitle, eph.Rate, eph.PayFrequency
FROM HumanResources.Employee AS e INNER JOIN HumanResources.EmployeePayHistory AS eph
ON e.BusinessEntityID = eph.BusinessEntityID

SELECT * FROM Sales.SpecialOfferProduct

SELECT * FROM Sales.SalesOrderDetail

--LEFT OUTER JOIN
SELECT sop.ProductID, sod.SalesOrderID, sod.UnitPrice
FROM Sales.SpecialOfferProduct AS sop LEFT OUTER JOIN Sales.SalesOrderDetail AS sod
ON sop.ProductID = sod.ProductID
WHERE SalesOrderID IS NULL

--RIGHT OUTER JOIN
SELECT e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee AS e RIGHT OUTER JOIN HumanResources.JobCandidate AS jc
ON e.BusinessEntityID = jc.BusinessEntityID

--FULL OUTER JOIN
SELECT e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee AS e FULL OUTER JOIN HumanResources.JobCandidate AS jc
ON e.BusinessEntityID = jc.BusinessEntityID

--CROSS JOIN
SELECT e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee AS e CROSS JOIN HumanResources.JobCandidate AS jc

--SELF JOIN
SELECT * FROM Employees

SELECT e1.EmpName, COUNT(e2.ManagerId) AS 'ManagerCount'
FROM Employees AS e1 JOIN Employees AS e2
ON e1.ManagerId = e2.ManagerId
GROUP BY e1.EmpName

