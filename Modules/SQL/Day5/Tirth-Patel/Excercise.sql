--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and
--incentives table


USE AdventureWorks2012
--INNER JOIN
SELECT ps.Name AS 'Product-Name',
		pc.Name AS 'productSubcaretgory-Name'
FROM Production.ProductCategory pc
INNER JOIN  Production.ProductSubcategory ps
ON pc.ProductCategoryID = ps.ProductCategoryID

--OUTER JOIN 
SELECT ps.Name AS 'Product-Name',
		pc.Name AS 'productSubcaretgory-Name'
FROM Production.ProductCategory pc
RIGHT OUTER JOIN  Production.ProductSubcategory ps
ON pc.ProductCategoryID = ps.ProductCategoryID


SELECT	wo.OrderQty ,
		wr.WorkOrderID
FROM Production.WorkOrder wo FULL OUTER JOIN Production.WorkOrderRouting wr
	 ON wo.ProductID = wr.ProductID WHERE wr.WorkOrderID < 50


--SELF JOIN
--//query with same hiredate
SELECT	lhs.BusinessEntityID,
		lhs.HireDate,
		rhs.BusinessEntityID
FROM HumanResources.Employee lhs INNER JOIN HumanResources.Employee rhs
		ON lhs.BusinessEntityID < rhs.BusinessEntityID


--Cross Join
--map every coloumn with other table's every coloumn
SELECT ct.Name,
		p.ModifiedDate
FROM Person.ContactType ct ,
			Person.Person p

SELECT e.BusinessEntityID ,
		e.JobTitle,
		eph.Rate
FROM HumanResources.Employee e JOIN HumanResources.EmployeePayHistory eph ON 
	e.BusinessEntityID = eph.BusinessEntityID

SELECT emp.LoginID,
		mgr.JobTitle
FROM HumanResources.Employee emp , HumanResources.Employee mgr 
	WHERE emp.JobTitle = mgr.JobTitle