SELECT * 
FROM HumanResources.Employee AS He 
LEFT OUTER JOIN HumanResources.EmployeePayHistory AS HEp
ON He.BusinessEntityID  = HEp.Rate
