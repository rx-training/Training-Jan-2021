USE Jevik

SELECT FirstName,Salary FROM Employees
WHERE Salary>(SELECT Salary FROM Employees 
WHERE FirstName='Lisa')

SELECT FirstName,Salary FROM Employees
WHERE Salary>=(SELECT Salary FROM Employees 
WHERE FirstName='Lisa')

SELECT * FROM Employees
WHERE ManagerID IN(SELECT ManagerID FROM Employees 
WHERE Salary > 15000)

SELECT * FROM Employees
WHERE EXISTS (SELECT Salary FROM Employees 
WHERE FirstName='Lisa')

SELECT * FROM Employees
WHERE EXISTS (SELECT Salary FROM Employees 
WHERE FirstName='jevik')

SELECT * FROM Employees
WHERE EXISTS (SELECT Salary FROM Employees 
WHERE FirstName LIKE '%_______%')

SELECT * FROM Employees e
WHERE Salary =(SELECT max(Salary) FROM Employees 
WHERE DepartmentID=e.DepartmentID)

CREATE VIEW Myfirstview AS
SELECT FirstName,LastName FROM Employees

SELECT * FROM Myfirstview
USE AdventureWorks2012
