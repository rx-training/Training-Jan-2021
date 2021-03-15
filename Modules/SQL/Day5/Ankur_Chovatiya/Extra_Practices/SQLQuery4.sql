SELECT He.*, HEp.* 
FROM HumanResources.Employee AS He 
FULL OUTER JOIN HumanResources.EmployeePayHistory AS HEp
ON He.BusinessEntityID  = HEp.BusinessEntityID
