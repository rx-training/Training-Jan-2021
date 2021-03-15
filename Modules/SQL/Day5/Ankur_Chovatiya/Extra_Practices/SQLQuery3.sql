SELECT * 
FROM HumanResources.Employee AS He 
RIGHT OUTER JOIN HumanResources.EmployeePayHistory AS HEp
ON He.BusinessEntityID = HEp.Rate   --  Select Rate fields to see changes



SELECT * FROM HumanResources.Employee

SELECT * FROM HumanResources.EmployeePayHistory