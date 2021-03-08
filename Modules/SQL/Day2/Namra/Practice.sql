USE AdventureWorks2012;

UPDATE Person.Address SET ModifiedDate = GETDATE();
SELECT * FROM Person.Address;

UPDATE Sales.SalesPerson SET Bonus = 6000, CommissionPct = .10, SalesQuota = NULL;
SELECT * FROM Sales.SalesPerson;

UPDATE Production.Product SET ListPrice = ListPrice*2;
SELECT * FROM Production.Product;

SELECT LoginID, JobTitle FROM HumanResources.Employee;

SELECT 'Department Number'= DepartmentID, Name 'Department Name', GroupName as 'Department GroupName' FROM HumanResources.Department;

SELECT Name + 'department comes under ' + GroupName + ' group' AS Department from HumanResources.Department;

SELECT BusinessEntityID, RATE, Per_Day_Rate= 8 * Rate  FROM HumanResources.EmployeePayHistory;

SELECT * FROM HumanResources.Department WHERE GroupName = 'Research and Development';

SELECT BusinessEntityID, NationalIDNumber, JobTitle, VacationHours  FROM HumanResources.Employee WHERE VacationHours < 5;

SELECT * FROM HumanResources.Department WHERE GroupName = 'Manufacturing' OR GroupName = 'Quality Assurance';

SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours BETWEEN 5 AND 20;

SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours NOT BETWEEN 5 AND 20;

SELECT BusinessEntityID, JobTitle, LoginID FROM HumanResources.Employee WHERE JobTitle IN ('Recruiter', 'Stocker');

SELECT * FROM HumanResources.Department WHERE Name LIKE 'PRO%';

SELECT BusinessEntityID, EndDate FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL;

SELECT GroupName, DepartmentID FROM HumanResources.Department ORDER BY GroupName, DepartmentID;

SELECT TOP 10 * FROM HumanResources.Employee;