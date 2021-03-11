--Select employee details from employee table if data exists in incentive table ?

SELECT * FROM Employees
WHERE EXISTS 
(SELECT *  FROM Incentives)

--Find Salary of the employee whose salary is more than Roy Salary

SELECT * FROM Employees
WHERE Salary>(SElECT Salary FROM Employees
WHERE First_Name='Roy')

--Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

CREATE VIEW D6Assign3 AS
SELECT e.First_Name,e.Last_Name,e.Salarye,e.Joining_Date,i.Incentive_Date,i.Incentive_Amount
FROM Employees e LEFT OUTER JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID

--Create a view to select Select first_name, incentive amount from employee and incentives table for 
--those employees who have incentives and incentive amount greater than 3000

CREATE VIEW D6Assign4 AS
SELECT e.First_Name,i.Incentive_Amount
FROM Employees e  JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID
WHERE i.Incentive_Amount> 3000

--Create a View to Find the names (first_name, last_name), job, department number, and department name 
--of the employees who work in London

CREATE VIEW Assign2 AS
SELECT e.FirstName+' '+e.LastName 'Name', e.JobId, e.DepartmentID,d.DepartmentName
FROM Employees1 e INNER JOIN Departments1 d 
ON e.DepartmentID =d.DepartmentID
INNER JOIN Locations1 l
ON d.LocationID = l.LocationID
WHERE l.City = 'London'
 
 --Create a View to get the department name and number of employees in the department.

CREATE VIEW assign4 AS
SELECT d.DepartmentName, COUNT(*) 'No_Of_Employee'
FROM Employees1 e JOIN Departments1 d
ON e.DepartmentID=e.DepartmentID
GROUP BY e.DepartmentID, d.DepartmentName

--Find the employee ID, job title, number of days between ending date and starting date for 
--all jobs in department 90 from job history.

SELECT e.EmployeeID, e.JobId, DATEDIFF(DAY,j.StartDate,j.EndDate) 'difDay'
FROM Employees1 e JOIN JobHistory1 j
ON e.DepartmentID=j.DepartmentID
WHERE e.DepartmentID=90

--Write a View to display the department name, manager name, and city

CREATE VIEW assign5 AS
SELECT d.DepartmentName,e.FirstName,l.City 
FROM Departments1 d 
LEFT OUTER JOIN Employees1 e
ON d.ManagerID=e.EmployeeID 
JOIN Locations1 l
ON l.LocationID = d.LocationID

--Create a View to display department name, name (first_name, last_name), hire date, 
--salary of the manager for all managers whose experience is more than 15 years.

CREATE VIEW assign05 AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName 'Name',e.HireDate,e.Salary
FROM Departments1 d 
LEFT OUTER JOIN Employees1 e
ON d.ManagerID=e.EmployeeID 
WHERE DATEDIFF(YEAR,e.HireDate,GETDATE()) > 15

--SUBQUERIES

--1. Write a query to find the names (first_name, last_name) and salaries of the employees 
--who have higher salary than the employee whose last_name='Bull'. 

SELECT FirstName+' ' + LastName 'NAME', Salary FROM Employees1
Where Salary>(SELECT Salary FROM Employees1 WHERE LastName='Bull')

--2. Find the names (first_name, last_name) of all employees who works in the IT department. 

SELECT FirstName+' '  + LastName 'NAME', Salary FROM Employees1
Where DepartmentID =(SELECT DepartmentID  FROM Departments1 WHERE DepartmentName='IT')

--3. Find the names (first_name, last_name) of the employees who have a manager 
--who works for a department based in United States. 

--Hint : Write single-row and multiple-row subqueries
SELECT FirstName+' '  + LastName 'NAME' FROM Employees1
WHERE DepartmentID  IN(SELECT DepartmentID  FROM Departments1 WHERE LocationID IN(
SELECT LocationID FROM Locations1 WHERE CountryID='US'))

--4. Find the names (first_name, last_name) of the employees who are managers. 
SELECT FirstName+' '  + LastName 'NAME' FROM Employees1 
WHERE EmployeeID  IN(SELECT ManagerID  FROM Employees1  )

--5. Find the names (first_name, last_name), salary of the employees whose salary 
--is greater than the average salary. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE Salary >(SELECT AVG(Salary)  FROM Employees1  )

--6. Find the names (first_name, last_name), salary of the employees whose salary 
--is equal to the minimum salary for their job grade. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE Salary IN(SELECT MIN(Salary) 'Salary'  FROM Employees1 GROUP BY DepartmentID )

--7. Find the names (first_name, last_name), salary of the employees who earn more than the
--average salary and who works in any of the IT departments. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE Salary >(SELECT AVG(Salary)  FROM Employees1  )  AND
DepartmentID =(SELECT DepartmentID FROM Departments1 WHERE DepartmentName='IT')

--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE Salary >(SELECT Salary  FROM Employees1
WHERE LastName='Bell')
--gender is not in col.. otherwise we can use

--9. Find the names (first_name, last_name), salary of the employees who earn the same salary 
--as the minimum salary for all departments. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE Salary IN(SELECT MIN(Salary) 'Salary'  
FROM Employees1 GROUP BY DepartmentID )

--10. Find the names (first_name, last_name), salary of the employees 
--whose salary greater than average salary of all department. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE 
Salary >(SELECT AVG(Salary) 'Salary' FROM
(SELECT AVG(Salary) 'Salary'  FROM Employees1 GROUP BY DepartmentID )new)

SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE 
Salary > (SELECT AVG(Salary) 'Salary'  FROM Employees1)

--11. Write a query to find the names (first_name, last_name) and salary of the employees
--who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). 
--Sort the results on salary from the lowest to highest. 
SELECT FirstName+' '  + LastName 'NAME',Salary FROM Employees1 
WHERE Salary > (SELECT MAX(Salary)   FROM Employees1 
WHERE JobId='SH_CLERK' GROUP BY JobId)
ORDER BY Salary

--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
SELECT FirstName+' '  + LastName 'NAME' FROM Employees1 
WHERE EmployeeID NOT IN (SELECT ManagerID   FROM Employees1) 

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT e.EmployeeID, e.FirstName, e.LastName,d.DepartmentName 
FROM Employees1 e
JOIN Departments1 d
ON e.DepartmentID = d.DepartmentID

--14. Write a query to display the employee ID, first name, last names, salary of all employees 
--whose salary is above average for their departments. 
SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary FROM Employees1  e
INNER JOIN (SELECT DepartmentID,AVG(Salary) 'Salary'  FROM Employees1
GROUP BY DepartmentID) new 
ON  e.Salary > new.Salary AND e.DepartmentID =new.DepartmentID
ORDER BY EmployeeID

SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary, new.Salary 'AvgSalaryOfTheirDept' FROM Employees1  e
INNER JOIN (SELECT DepartmentID,AVG(Salary) 'Salary'  FROM Employees1
GROUP BY DepartmentID) new 
ON  e.Salary > new.Salary AND e.DepartmentID =new.DepartmentID
ORDER BY EmployeeID

--15. Write a query to fetch even numbered records from employees table. 
SELECT * FROM 
(SELECT ROW_NUMBER() OVER (ORDER BY EmployeeID) 'X',* FROM Employees1)newtab  
WHERE   X%2=0

--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT Salary FROM 
(SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'X',* FROM Employees1)newtab  
WHERE  X=5

--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT Salary FROM 
(SELECT DENSE_RANK() OVER (ORDER BY Salary) 'X',* FROM Employees1)newtab  
WHERE  X=4

--18. Write a query to select last 10 records from a table.
SELECT TOP 10 * FROM Employees1 ORDER BY EmployeeID DESC

--19. Write a query to list department number, name for all the departments in 
--which there are no employees in the department. 

SELECT DepartmentID,DepartmentName FROM Departments1
WHERE DepartmentID NOT IN(
SELECT DepartmentID FROM Employees1)

----20. Write a query to get 3 maximum salaries. 
SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary DESC) 'X',* FROM Employees1)newtab  
WHERE  X BETWEEN 1 AND 3

--21. Write a query to get 3 minimum salaries.
SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary ) 'X',*  FROM Employees1)newtab  
WHERE  X BETWEEN 1 AND 3

--22. Write a query to get nth max salaries of employees. 
SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary DESC) 'X',* FROM Employees1)newtab  
WHERE  X = n
--n=5
SELECT Salary FROM 
(SELECT  DENSE_RANK() OVER (ORDER BY Salary DESC) 'X',* FROM Employees1)newtab  
WHERE  X = 5

--VIEW QUERIEs

--1. Write a query to find the addresses (location_id, street_address, city, state_province,
--country_name) of all the departments. 

CREATE VIEW V1 AS
SELECT * FROM Locations1
WHERE LocationID IN (
SELECT LocationID FROM Departments1)

--2. Write a query to find the names (first_name, last name), department ID and 
--name of all the employees. 
CREATE VIEW V2 AS
SELECT e.FirstName+' '  + e.LastName 'NAME',d.DepartmentID,d.DepartmentName FROM Employees1 e
JOIN Departments1 d
ON d.DepartmentID =e.DepartmentID

CREATE VIEW V2 AS
SELECT e.FirstName+' '  + e.LastName 'NAME',d.DepartmentID,d.DepartmentName FROM Employees1 e
LEFT OUTER JOIN Departments1 d
ON d.DepartmentID =e.DepartmentID

--3. Find the names (first_name, last_name), job, department number, 
--and department name of the employees who work in London. 
CREATE VIEW V3 AS
SELECT e.FirstName+' '  + e.LastName 'NAME',e.JobId,d.DepartmentID,d.DepartmentName 
FROM Employees1 e
JOIN Departments1 d
ON d.DepartmentID =e.DepartmentID
WHERE d.LocationID IN(
SELECT LocationID FROM Locations1 WHERE City='London') 

--4. Write a query to find the employee id, name (last_name) along with their manager_id, 
--manager name (last_name).
CREATE VIEW V4 AS
SELECT e.EmployeeID,e.LastName 'NAME',e1.EmployeeID 'ManagerId',e1.LastName'ManagerName' 
FROM Employees1 e
JOIN Employees1 e1
ON e.ManagerID =e1.EmployeeID

CREATE VIEW V4 AS
SELECT e.EmployeeID,e.LastName 'NAME',e1.EmployeeID 'ManagerId',e1.LastName'ManagerName' 
FROM Employees1 e
LEFT OUTER JOIN Employees1 e1
ON e.ManagerID =e1.EmployeeID

--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
CREATE VIEW V5 AS
SELECT FirstName+' '  + LastName 'NAME',HireDate FROM Employees1 
WHERE HireDate  >(SELECT MAX(HireDate)  FROM Employees1 
WHERE FirstName='John' GROUP BY FirstName)

--6. Write a query to get the department name and number of employees in the department. 
CREATE VIEW V6 AS
SELECT d.DepartmentName,COUNT(e.EmployeeID)
FROM Departments1 d
LEFT OUTER JOIN Employees1 e
ON d.DepartmentID =e.DepartmentID
GROUP BY d.DepartmentName

--7. Find the employee ID, job title, number of days between ending date and 
--starting date for all jobs in department 90 from job history.  
CREATE VIEW V7 AS
SELECT EmployeeID,JobId,DATEDIFF(DD,StartDate,EndDate) 'Days' 
FROM JobHistory1
WHERE DepartmentID=90

--8. Write a query to display the department ID, department name and manager first name. 
CREATE VIEW V8 AS
SELECT d.DepartmentID,d.DepartmentName,e.FirstName
FROM Departments1 d
JOIN Employees1 e
ON d.ManagerID=e.EmployeeID

--9. Write a query to display the department name, manager name, and city. 
CREATE VIEW V9 AS
SELECT d.DepartmentName,e.FirstName,l.City
FROM Departments1 d
JOIN Employees1 e
ON d.ManagerID=e.EmployeeID
JOIN Locations1 l
ON d.LocationID =l.LocationID

--10. Write a query to display the job title and average salary of employees. 
CREATE VIEW V10 AS
SELECT JobId,AVG(Salary) 'AvgSalary'
FROM Employees1
GROUP BY JobId

--11. Display job title, employee name, and the difference between salary of the employee 
--and minimum salary for the job. 
CREATE VIEW V11 AS
SELECT JobId,FirstName+' '+LastName'NAme',Salary-(
SELECT MIN(Salary) FROM Employees1) 'DiffSal'
FROM Employees1

--12. Write a query to display the job history that were done by any employee 
--who is currently drawing more than 10000 of salary. 
CREATE VIEW V12 AS
SELECT * FROM JobHistory1 
WHERE EmployeeID IN (
SELECT EmployeeID FROM Employees1
WHERE Salary>10000) 

--13. Write a query to display department name, name (first_name, last_name), hire date, 
--salary of the manager for all managers whose experience is more than 15 years. 
CREATE VIEW V13 AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName 'Name',e.HireDate,e.Salary
FROM Departments1 d
JOIN Employees1 e
ON d.ManagerID=e.EmployeeID
WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15

--SELECT * FROM Employees1
--SELECT * FROM Departments1
--SELECT * FROM Locations1
--SELECT * FROM Countries1
--SELECT * FROM JobHistory1

--USE day5

--SELECT * FROM Employees
--SELECT * FROM Incentives
----USE day5
----CREATE DATABASE day5
----DROP TABLE Incentives
--SELECT * FROM Newwww
--CREATE TABLE Newwww(
--id int
--)