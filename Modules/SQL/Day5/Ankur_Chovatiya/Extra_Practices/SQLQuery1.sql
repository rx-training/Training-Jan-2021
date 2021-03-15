SELECT He.BusinessEntityID , He.LoginID, He.VacationHours, HEp.* 
FROM HumanResources.Employee AS He 
INNER JOIN HumanResources.EmployeePayHistory AS HEp
ON He.BusinessEntityID  = HEp.BusinessEntityID

SELECT * FROM HumanResources.Employee

SELECT * FROM HumanResources.EmployeePayHistory