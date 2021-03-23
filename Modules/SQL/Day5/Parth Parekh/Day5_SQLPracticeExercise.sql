SELECT * FROM HumanResources.EmployeePayHistory eph

-- INNER JOIN
SELECT e.BusinessEntityID ,e.JobTitle , eph.Rate , eph.PayFrequency FROM HumanResources.Employee e
	INNER JOIN HumanResources.EmployeePayHistory eph ON e.BusinessEntityID = eph.BusinessEntityID

-- LEFT OUTER JOIN
SELECT e.BusinessEntityID ,e.JobTitle , eph.Rate , eph.PayFrequency FROM HumanResources.Employee e
	LEFT OUTER JOIN HumanResources.EmployeePayHistory eph ON e.BusinessEntityID = eph.BusinessEntityID

SELECT p.ProductID, p1.SalesOrderID , p1.UnitPrice   FROM Sales.SpecialOfferProduct p 
	LEFT OUTER JOIN Sales.SalesOrderDetail p1 ON p.ProductID = p1.ProductID WHERE SalesOrderID IS NULL 

-- RIGHT OUTER JOIN
SELECT e.JobTitle ,d.JobCandidateID FROM  HumanResources.Employee e 
    RIGHT OUTER JOIN HumanResources.JobCandidate d ON e.BusinessEntityID = d.BusinessEntityID	

-- FULL OUTER JOIN 
SELECT * FROM HumanResources.Employee e
    FULL OUTER JOIN HumanResources.JobCandidate d ON e.BusinessEntityID = d.BusinessEntityID

-- CROSS JOIN

SELECT d.DepartmentID , h.ModifiedDate ,d.GroupName FROM HumanResources.Department d CROSS JOIN HumanResources.EmployeeDepartmentHistory h

--SELF JOIN
USE Day2
SELECT e.EMPLOYEE_ID , e.FIRST_NAME , e.LAST_NAME  FROM EMPLOYEE e , EMPLOYEE s WHERE e.EMPLOYEE_ID = s.MANAGER_ID