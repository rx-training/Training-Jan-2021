USE AdventureWorks2012
SELECT * FROM Employee

-- SubQuery
SELECT FIRST_NAME FROM EMPLOYEE WHERE SALARY > (SELECT SALARY FROM EMPLOYEE WHERE FIRST_NAME = 'jerry')

SELECT e.FIRST_NAME , e.LAST_NAME  FROM  EMPLOYEE e , EMPLOYEE s WHERE e.SALARY > s.SALARY AND s.FIRST_NAME ='Tom' 

-- IN SubQuery
SELECT * FROM HumanResources.Employee WHERE JobTitle 
       IN (SELECT JobTitle FROM HumanResources.Employee WHERE JobTitle = 'Design Engineer' OR JobTitle = 'Tool Designer')

-- EXISTS SubQuery
SELECT BusinessEntityID , JobTitle  FROM HumanResources.Employee
       WHERE 
	   EXISTS( SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID = HumanResources.Employee.BusinessEntityID AND DepartmentID =4) 

-- Nested SubQuery
SELECT LastName, FirstName
FROM Person.Person
WHERE BusinessEntityID IN
    (SELECT BusinessEntityID
     FROM HumanResources.Employee
     WHERE BusinessEntityID IN
        (SELECT BusinessEntityID
         FROM Sales.SalesPerson)
    )

-- Correlated Queries

SELECT * FROM EMPLOYEE e WHERE SALARY = (SELECT MAX(SALARY) FROM EMPLOYEE WHERE DEPARTMENT = 'Banking')

-- View 
CREATE VIEW HumanResources.EmployeeHirdDate 
AS 
SELECT p.FirstName , p.LastName , e.HireDate  FROM HumanResources.Employee e JOIN Person.Person p
ON e.BusinessEntityID = p.BusinessEntityID

SELECT * FROM HumanResources.EmployeeHirdDate
SELECT  FirstName , LastName FROM HumanResources.EmployeeHirdDate
