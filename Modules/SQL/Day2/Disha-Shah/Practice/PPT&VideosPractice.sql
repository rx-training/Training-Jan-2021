USE AdventureWorks2012

--Created Table Employees from SSMS UI
SELECT * FROM Employees

INSERT INTO Employees (EmpId, EmpName, EmpDesignation, Address) VALUES (1, 'Reena', '.NET', 'Ahmedabad')


INSERT INTO Employees (EmpId, EmpDesignation, EmpName) VALUES (2,'PHP', 'Reema')

INSERT INTO Employees VALUES (3,'Rita','NODEJS','Mumbai')


INSERT INTO Employees VALUES (4,'Rima','ReactJS',NULL)

INSERT INTO Employees (EmpId, EmpDesignation, EmpName) VALUES (5,'QA', 'Meena'),
															  (6,'.NET','Minal')

UPDATE Employees SET Address='Ahmedabad'


UPDATE Employees SET Address='Mumbai', EmpDesignation='.NET'

UPDATE Employees SET Address='Ahmedabad' WHERE EmpName LIKE 'M%'


UPDATE Employees SET Address='Bangalore' WHERE EmpName LIKE 'Ri_a'

SELECT * FROM Person.Address

UPDATE Person.Address SET ModifiedDate = GETDATE();

SELECT * FROM Sales.SalesPerson

UPDATE Sales.SalesPerson SET Bonus=6000, CommissionPct= .10, SalesQuota=NULL

SELECT * FROM Production.Product

UPDATE Production.Product SET Color=N'Metallic Red' WHERE Name LIKE N'Road-250%' AND Color=N'Red'

UPDATE Production.Product SET ListPrice=ListPrice*2

SELECT * FROM HumanResources.Employee

SELECT BusinessEntityID, JobTitle, BirthDate, Gender INTO HumanResources.Emp FROM HumanResources.Employee WHERE BusinessEntityID<21

SELECT * FROM HumanResources.Emp

SELECT BusinessEntityId AS 'BusinessID', JobTitle AS 'Designation' FROM HumanResources.Emp


SELECT BusinessEntityId AS 'BusinessID', JobTitle AS 'Designation', 'learning' AS 'Learning' FROM HumanResources.Emp

SELECT BusinessEntityID, 'Designation: ', LoginID FROM HumanResources.Employee

SELECT 'snow' + 'ball'


SELECT BusinessEntityID, 'Designation: ' + LoginID AS 'DesignationID' FROM HumanResources.Employee

SELECT * FROM HumanResources.Department

SELECT Name + ' department comes under ' + GroupName + ' group' AS Department FROM HumanResources.Department

SELECT * FROM HumanResources.EmployeePayHistory

SELECT BusinessEntityID, Rate, PayFrequency, TotalPay = Rate * PayFrequency FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.Department

SELECT * FROM HumanResources.Department WHERE GroupName = 'Manufacturing' OR GroupName = 'Quality Assurance'

SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 50


SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours NOT BETWEEN 20 AND 50

SELECT * FROM HumanResources.Employee

SELECT BusinessEntityID, JobTitle, LoginID FROM HumanResources.Employee WHERE JobTitle IN ('Engineering Manager', 'Design Engineer')

SELECT * FROM HumanResources.Department

SELECT * FROM HumanResources.Department WHERE Name LIKE 'Pro%'

SELECT * FROM HumanResources.EmployeeDepartmentHistory

SELECT BusinessEntityID, EndDate FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL

SELECT GroupName, DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName


SELECT GroupName, DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName, DepartmentID


SELECT GroupName, DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName DESC


SELECT GroupName, DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName, DepartmentID DESC

SELECT TOP 10 * FROM HumanResources.Department


SELECT TOP 10 GroupName, DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName DESC

SELECT DISTINCT JobTitle FROM HumanResources.Employee WHERE JobTitle LIKE '%Designer'


SELECT * 
FROM HumanResources.EmployeeDepartmentHistory
WHERE EndDate = NULL


SELECT * 
FROM HumanResources.EmployeeDepartmentHistory
WHERE NOT (EndDate = NULL)


SELECT * 
FROM HumanResources.EmployeeDepartmentHistory
WHERE EndDate IS NULL


SELECT * 
FROM HumanResources.EmployeeDepartmentHistory
WHERE EndDate IS NOT NULL

DELETE FROM Employees WHERE Address='Bangalore'