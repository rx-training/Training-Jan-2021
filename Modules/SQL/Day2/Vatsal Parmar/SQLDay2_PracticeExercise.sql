USE AdventureWorks2012;
/* UPDATE */

UPDATE Person.Address SET ModifiedDate = GETDATE();

UPDATE Sales.SalesPerson SET Bonus = 6000,CommissionPct = .10, SalesQuota = NULL;

UPDATE Production.Product SET Color = N'Metallic Red' WHERE Name Like N'Road-250%' AND Color = N'Red';

UPDATE Production.Product SET ListPrice = ListPrice * 2;

/*SELECT*/

SELECT * FROM HumanResources.Employee;

SELECT BusinessEntityID,LoginID FROM HumanResources.Employee;

SELECT DepartmentID 'Department Number', Name 'Department Name' FROM HumanResources.Department;

SELECT Name + 'Department comes under' + GroupName + 'group' AS Department FROM HumanResources.Department;

SELECT BusinessEntityID,Rate,Per_Day_Rate = 8 * Rate FROM HumanResources.EmployeePayHistory;

/* WHERE */

SELECT * FROM HumanResources.Department WHERE GroupName = 'Research and Development';

/* LOGICAL OPERATOR*/

SELECT BusinessEntityID,NationalIDNumber,JobTitle,VacationHours FROM HumanResources.Employee WHERE VacationHours < 5;

SELECT * FROM HumanResources.Department WHERE GroupName = 'Manufacturing' OR GroupName = 'Quality Assurance';

SELECT BusinessEntityID,VacationHours FROM HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 50;

SELECT BusinessEntityID,LoginID,JobTitle FROM HumanResources.Employee WHERE JobTitle IN('Recruiter','Stocker');

SELECT * FROM HumanResources.Department WHERE Name LIKE 'Pro%';

SELECT BusinessEntityID,EndDate FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL

SELECT GroupName,DepartmentID FROM HumanResources.Department ORDER BY GroupName,DepartmentID;

SELECT TOP 10 * FROM HumanResources.Employee;

SELECT DISTINCT JobTitle FROM HumanResources.Employee WHERE JobTitle LIKE 'Pr%';

SELECT * FROM HumanResources.Employee;

SELECT BusinessEntityID,JobTitle,MaritalStatus,HireDate FROM HumanResources.Employee WHERE MaritalStatus = 'S'
UNION
SELECT BusinessEntityID,JobTitle,MaritalStatus,HireDate FROM HumanResources.Employee WHERE HireDate BETWEEN '2007-01-26' AND '2011-01-18';