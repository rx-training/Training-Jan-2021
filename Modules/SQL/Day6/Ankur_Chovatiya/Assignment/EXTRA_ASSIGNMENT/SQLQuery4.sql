-- extra assignment in supported files 

-- 1

SELECT FirstName , LastName ,Salary FROM Employees
WHERE Salary > (SELECT	Salary FROM Employees WHERE LastName = 'Bull')

-- 2

SELECT FirstName , LastName FROM Employees 
WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')


-- 3

SELECT FirstName+' '  + LastName 'NAME' FROM Employees
WHERE DepartmentID  IN(SELECT DepartmentID  FROM Departments WHERE LocationID IN(
SELECT LocationID FROM Locations WHERE CountryID='US'))

-- 4 

SELECT FirstName+' '  + LastName 'NAME' FROM Employees
WHERE EmployeeID  IN(SELECT ManagerID  FROM Employees)

-- 5
 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees
WHERE Salary >(SELECT AVG(Salary)  FROM Employees)

-- 6 

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees 
WHERE Salary IN(SELECT MIN(Salary) 'Salary'  FROM Employees GROUP BY DepartmentID )

-- 7

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees 
WHERE Salary >(SELECT AVG(Salary)  FROM Employees  )  AND
DepartmentID =(SELECT DepartmentID FROM Departments WHERE DepartmentName='IT')

-- 8

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees 
WHERE Salary >(SELECT Salary  FROM Employees
WHERE LastName='Bell')

-- 9 

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees 
WHERE Salary IN(SELECT MIN(Salary) 'Salary'  
FROM Employees GROUP BY DepartmentID )

-- 10 

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees 
WHERE 
Salary > (SELECT MAX(Salary) 'Salary'  FROM((SELECT AVG(Salary) 'Salary'  FROM Employees GROUP BY DepartmentID) new)


-- 11

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees 
WHERE Salary > (SELECT MAX(Salary)   FROM Employees 
WHERE JobId='SH_CLERK' GROUP BY JobId)
ORDER BY Salary

-- 12 

SELECT FirstName+' '  + LastName 'NAME' FROM Employees 
WHERE EmployeeID NOT IN (SELECT ManagerID   FROM Employees) 

-- 13 
 
SELECT e.EmployeeID, e.FirstName, e.LastName,d.DepartmentName 
FROM Employees e
JOIN Departments d
ON e.DepartmentID = d.DepartmentID

-- 14 *

SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary FROM Employees  e
INNER JOIN (SELECT DepartmentID,AVG(Salary) 'Salary'  FROM Employees
GROUP BY DepartmentID) new 
ON  e.Salary > new.Salary AND e.DepartmentID =new.DepartmentID
ORDER BY EmployeeID


-- 15 

SELECT * FROM 
(SELECT ROW_NUMBER() OVER (ORDER BY EmployeeID) 'ROW_NUMBER',* FROM Employees) NEW
WHERE  ROW_NUMBER%2=0


-- 16

SELECT Salary FROM 
(SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'DNS_RANK' , Salary FROM Employees) NEW  
WHERE  DNS_RANK = 5

-- 17

SELECT Salary FROM 
(SELECT DENSE_RANK() OVER (ORDER BY Salary) 'DNS_RANK' , Salary FROM Employees) NEW  
WHERE DNS_RANK = 4

-- 18 

SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC

-- 19

SELECT DepartmentID,DepartmentName FROM Departments
WHERE DepartmentID NOT IN(
SELECT DepartmentID FROM Employees)

-- 20 

SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary DESC) 'DNS_RANK', Salary FROM Employees)newtab  
WHERE  DNS_RANK BETWEEN 1 AND 3


-- 21 

SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary ) 'DNS_RANK',*  FROM Employees)newtab  
WHERE  DNS_RANK BETWEEN 1 AND 3

-- 22 

--DECLARE @N INT
--N=5

SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary DESC) 'DNS_RANK',* FROM Employees)newtab  
WHERE  DNS_RANK = N

