USE AdventureWorks2012;

UPDATE Person.Address SET ModifiedDate = GETDATE();

UPDATE Sales.SalesPerson SET Bonus = 6000, CommissionPct = .10, SalesQuota=NULL;

UPDATE Production.Product SET Color = N'Metallic Red' WHERE Name LIKE N'Road-250%';

UPDATE Production.Product SET ListPrice = ListPrice * 2;

SELECT * FROM HumanResources.Employee;

SELECT LoginID, JobTitle FROM HumanResources.Employee;

SELECT DepartmentID AS "Department Number", Name AS "Department Name" FROM HumanResources.Department;

SELECT Rate, RatePerDay = 8 * Rate FROM HumanResources.EmployeePayHistory;

SELECT * FROM HumanResources.Department WHERE GroupName = 'Research and Development';

SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 50;

SELECT JobTitle, BusinessEntityID FROM HumanResources.Employee WHERE JobTitle IN ('Recruiter', 'Stocker');

SELECT * FROM HumanResources.Department WHERE Name LIKE 'Pro%';

SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL;

SELECT GroupName FROM HumanResources.Department ORDER BY GroupName;

SELECT GroupName FROM HumanResources.Department ORDER BY GroupName DESC;

SELECT DISTINCT GroupName FROM HumanResources.Department ORDER BY GroupName;

