/* Practice Exercise Day-5 */
--JOIN
--INNER JOIN

SELECT e.BusinessEntityID, e.JobTitle, eph.Rate, eph.PayFrequency 
FROM HumanResources.Employee e JOIN HumanResources.EmployeePayHistory eph 
ON e.BusinessEntityID = eph.BusinessEntityID;

--OUTER JOIN
--LEFT OUTER JOIN
SELECT p.ProductID, p1.SalesOrderID, p1.UnitPrice 
FROM Sales.SpecialOfferProduct p
LEFT OUTER JOIN Sales.SalesOrderDetail p1
ON p.ProductID = p1.ProductID
WHERE SalesOrderID IS NULL;

--RIGHT OUTER JOIN
SELECT e.JobTitle, d.JobCandidateID
FROM HumanResources.Employee e
RIGHT OUTER JOIN HumanResources.JobCandidate d
ON e.BusinessEntityID = d.BusinessEntityID;

--FULL OUTER JOIN
SELECT e.JobTitle, d.JobCandidateID
FROM HumanResources.Employee e
FULL OUTER JOIN HumanResources.JobCandidate d
ON e.BusinessEntityID = d.BusinessEntityID;

--CROSS JOIN
SELECT d.DepartmentID,d.Name,e.BusinessEntityID,e.JobTitle 
FROM HumanResources.Department d 
CROSS JOIN HumanResources.Employee e;

--SELF JOIN
SELECT a.BusinessEntityID,b.DepartmentID
FROM HumanResources.EmployeeDepartmentHistory a,HumanResources.EmployeeDepartmentHistory b
WHERE a.BusinessEntityID = b.DepartmentID;