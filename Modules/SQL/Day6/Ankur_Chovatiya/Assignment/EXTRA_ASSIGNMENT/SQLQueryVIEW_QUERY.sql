-- VIEW QUERY FROM SUPPORTED FILE

-- 1 

CREATE VIEW DEPT_ADDRESS 
AS
SELECT  D.DepartmentID,L.*, C.CountryName  FROM Departments AS D
JOIN Locations AS L ON D.LocationID = L.LocationID
JOIN Countries AS C ON L.CountryID = C.CountryID
ORDER BY D.DepartmentID


 -- 2 

CREATE VIEW DEPT_EMP
AS
SELECT e.FirstName+' '  + e.LastName 'NAME',d.DepartmentID,d.DepartmentName FROM Employees e
JOIN Departments d
ON d.DepartmentID =e.DepartmentID


-- 3 

CREATE VIEW LONDON_EMP
AS
SELECT e.FirstName+' '  + e.LastName 'NAME',e.JobId,d.DepartmentID,d.DepartmentName 
FROM Employees e
JOIN Departments d
ON d.DepartmentID =e.DepartmentID
WHERE d.LocationID IN(
SELECT LocationID FROM Locations WHERE City='London') 


-- 4 

CREATE VIEW EMP_IS_MANGER
AS
SELECT e.EmployeeID,e.LastName 'NAME',e1.EmployeeID 'ManagerId',e1.LastName'ManagerName' 
FROM Employees e
JOIN Employees e1
ON e.ManagerID =e1.EmployeeID

-- 5 

CREATE VIEW HIRE_AFT_JONE
AS
SELECT FirstName+' '  + LastName 'NAME',HireDate FROM Employees 
WHERE HireDate  >(SELECT MAX(HireDate)  FROM Employees 
WHERE FirstName='John' GROUP BY FirstName)

-- 6 

CREATE VIEW DEPT_CONTACT
AS
SELECT d.DepartmentName,D.DepartmentID,  COUNT(e.EmployeeID) EMP_COUNT
FROM Departments d
LEFT OUTER JOIN Employees e
ON d.DepartmentID =e.DepartmentID
GROUP BY d.DepartmentName , D.DepartmentID


-- 7 
 
CREATE VIEW DEPT_90
AS
SELECT EmployeeID,JobId,DATEDIFF(DD,StartDate,EndDate) 'Days' 
FROM JobHistory
WHERE DepartmentID=90


--8 *

CREATE VIEW DEPT_MANAGER_F
AS
SELECT d.DepartmentID,d.DepartmentName,e.FirstName
FROM Departments d
JOIN Employees e
ON d.ManagerID=e.EmployeeID

-- 9 

CREATE VIEW DEPT_CITY 
AS
SELECT d.DepartmentName,e.FirstName,l.City
FROM Departments d
JOIN Employees e
ON d.ManagerID=e.EmployeeID
JOIN Locations l
ON d.LocationID =l.LocationID


-- 10

CREATE VIEW AVG_SAL_EMP
AS
SELECT JobId,AVG(Salary) 'AvgSalary'
FROM Employees
GROUP BY JobId


-- 11

CREATE VIEW DIFF_SAL_EMP
AS
SELECT JobId,FirstName+' '+LastName'NAme',Salary-(
SELECT MIN(Salary) FROM Employees) 'DiffSal'
FROM Employees


-- 12


CREATE VIEW MORE_SAL_10K 
AS
SELECT * FROM JobHistory 
WHERE EmployeeID IN (
SELECT EmployeeID FROM Employees
WHERE Salary>10000) 


-- 13 

CREATE VIEW MAN_EXP_15Y
AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName 'Name',e.HireDate,e.Salary
FROM Departments d
JOIN Employees e
ON d.ManagerID=e.EmployeeID
WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15
