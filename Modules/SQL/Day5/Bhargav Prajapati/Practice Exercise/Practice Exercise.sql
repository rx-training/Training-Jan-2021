USE AdventureWorks2012

--------Inner Join -----------
SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.EmployeePayHistory

SELECT e.BusinessEntityID ,e.JobTitle,eph.Rate,eph.PayFrequency From HumanResources.Employee AS e JOIN HumanResources.EmployeePayHistory AS eph ON e.BusinessEntityID=eph.BusinessEntityID

---Left Outer Join--------
SELECT * FROM  Sales.SpecialOfferProduct
SELECT * FROM Sales.SalesOrderDetail

SELECT p.ProductID,p1.SalesOrderID,p1.rowguid FROM Sales.SpecialOfferProduct p LEFT OUTER JOIN Sales.SalesOrderDetail p1 ON p.ProductID=p1.ProductID WHERE SalesOrderDetailID IS NULL

------ Right Outer Join------
SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.JobCandidate

SELECT  e.BusinessEntityID,e.JobTitle,e.BirthDate,j.Resume,j.ModifiedDate FROM HumanResources.Employee e RIGHT OUTER JOIN HumanResources.JobCandidate j ON e.BusinessEntityID=j.JobCandidateID

-----------FULL JOIN---------
SELECT  e.BusinessEntityID,e.JobTitle,e.BirthDate,j.Resume,j.ModifiedDate FROM HumanResources.Employee e FULL OUTER JOIN HumanResources.JobCandidate j ON e.BusinessEntityID=j.JobCandidateID

------------CROSS JOIN---------
SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.Department

SELECT e.BusinessEntityID,e.JobTitle,e.BirthDate,d.Name,d.GroupName FROM HumanResources.Employee e CROSS  JOIN  HumanResources.Department d    


---------SELF JOIN-----------
CREATE TABLE EmpDetails(

EmployeeID int,
Title varchar(60),
ManagerID int
)
INSERT INTO EmpDetails(EmployeeID,Title,ManagerID) VALUES(1,'Production Technician-WC60',16)
INSERT INTO EmpDetails(EmployeeID,Title,ManagerID) VALUES(2,'Marketing Assitant',6)
INSERT INTO EmpDetails(EmployeeID,Title,ManagerID) VALUES(3,'Engineering Manager',12),
														 (4,'Senior Tool Designer',3),
														 (5,'Tool Designer',263),
														 (6,'Marketing Manager',109),
														 (7,'Production Technician-WC60',21),
														 (8,'Production Technician-WC10',185),
														 (9,'Design Engineer',3),
														 (10,'Production Technician-WC10',185)
SELECT * FROM EmpDetails
SELECT emp.EmployeeID ,emp.Title As Employee_Designation ,emp.ManagerID,mrg.Title AS Manager_Designation FROM EmpDetails emp,EmpDetails mrg WHERE emp.EmployeeID=mrg.ManagerID 
