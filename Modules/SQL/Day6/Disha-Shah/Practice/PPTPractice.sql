USE Day2DB

SELECT o1.FirstName, o1.Salary
FROM OldEmployees AS o1 JOIN OldEmployees AS o2
ON o1.Salary>o2.Salary
WHERE o2.FirstName='Lisa'

--SUBQUERIES
SELECT FirstName
FROM OldEmployees
WHERE Salary > (
	SELECT Salary
	FROM OldEmployees
	WHERE FirstName = 'Lisa'
	)

USE AdventureWorks2012

--IN
SELECT Rate
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID IN (
	SELECT BusinessEntityID 
	FROM Person.Person
	WHERE FirstName='Aaron'
)

SELECT Rate
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID NOT IN (
	SELECT BusinessEntityID 
	FROM Person.Person
	WHERE FirstName='Aaron'
)

--EXISTS
SELECT *
FROM HumanResources.Employee
WHERE EXISTS (
	SELECT BusinessEntityID
	FROM HumanResources.EmployeePayHistory
	WHERE Rate>100
)

SELECT * 
FROM OldEmployees o
WHERE Salary = (
	SELECT MAX(Salary)
	FROM OldEmployees 
	WHERE EmployeeID = o.EmployeeID
)

--VIEW

SELECT * FROM EmpDepartment

UPDATE EmpDepartment SET Name='Prd' WHERE DepartmentID=8

UPDATE EmpDepartment SET Rate=20 WHERE DepartmentID=8

CREATE VIEW EmpDesigners AS
SELECT * FROM HumanResources.Employee WHERE JobTitle LIKE '%Design%'

SELECT * FROM EmpDesigners

UPDATE EmpDesigners SET MaritalStatus='M' WHERE BusinessEntityID=4

