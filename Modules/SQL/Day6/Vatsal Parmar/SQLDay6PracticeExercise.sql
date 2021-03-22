--SubQueries
SELECT FirstName 
FROM Employees
WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName='Lex');
--Same Using Self Join
SELECT e.FirstName
FROM Employees e ,Employees a
WHERE e.Salary>a.Salary AND a.FirstName='Lex';

--IN
SELECT EmployeeID,JobId
FROM Employees
WHERE JobId IN
(SELECT JobId FROM Employees WHERE JobId = 'IT_PROG');

--EXISTS
SELECT EmployeeID,JobId
FROM Employees
WHERE EXISTS
(SELECT EmployeeID FROM Employees WHERE EmployeeID = 100);

--Nested SubQueries
USE AdventureWorks2012

SELECT LastName, FirstName
FROM Person.Person
WHERE BusinessEntityID IN
	(
		SELECT BusinessEntityID
		FROM HumanResources.Employee
		WHERE BusinessEntityID IN
        (
			SELECT BusinessEntityID
			FROM Sales.SalesPerson
		)
    );

--Correlated Subqueries
SELECT * FROM HumanResources.Employee e
WHERE OrganizationLevel = 
(SELECT MIN(OrganizationLevel) 
FROM HumanResources.Employee WHERE Gender = e.Gender);

/* VIEW */
USE AdventureWorks2012;
CREATE VIEW HumanResources.vEmployeeHireDate
AS
SELECT p.FirstName,p.LastName,e.HireDate
FROM HumanResources.Employee e 
JOIN Person.Person p
ON e.BusinessEntityID = p.BusinessEntityID;

SELECT FirstName,LastName,HireDate
FROM HumanResources.vEmployeeHireDate
ORDER BY LastName;

