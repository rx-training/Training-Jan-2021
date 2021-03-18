USE AdventureWorks2012

SELECT * 
FROM HumanResources.Employee JOIN HumanResources.EmployeePayHistory
ON HumanResources.Employee.BusinessEntityID = HumanResources.EmployeePayHistory.BusinessEntityID

SELECT * 
FROM HumanResources.Employee e JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID

SELECT e.BusinessEntityID,e.JobTitle, eph.Rate,eph.PayFrequency
FROM HumanResources.Employee e INNER JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID

SELECT * 
FROM HumanResources.Employee e LEFT OUTER JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID 
WHERE OrganizationLevel IS NULL

SELECT e.BusinessEntityID,e.JobTitle,eph.Rate,eph.PayFrequency 
FROM HumanResources.Employee e LEFT OUTER JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID 

SELECT e.BusinessEntityID,e.JobTitle,eph.Rate,eph.PayFrequency 
FROM HumanResources.Employee e LEFT OUTER JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID 

SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e LEFT OUTER JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID 


SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e RIGHT OUTER JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID 

SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e RIGHT OUTER JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID 
WHERE e.BusinessEntityID IS NULL

SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e FULL OUTER JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID

SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e FULL OUTER JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID WHERE JobCandidateID IS NOT NULL 

SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e  JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID 

SELECT e.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e FULL OUTER JOIN HumanResources.JobCandidate jc
ON e.BusinessEntityID = jc.BusinessEntityID  

SELECT e.BusinessEntityID,jc.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e CROSS JOIN HumanResources.JobCandidate jc 

SELECT e.BusinessEntityID,jc.BusinessEntityID,e.JobTitle, jc.JobCandidateID
FROM HumanResources.Employee e CROSS JOIN HumanResources.JobCandidate jc 
WHERE e.BusinessEntityID = jc.BusinessEntityID 


SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.EmployeeDepartmentHistory
SELECT * FROM HumanResources.EmployeePayHistory
SELECT * FROM HumanResources.JobCandidate
SELECT * FROM Sales.Store

