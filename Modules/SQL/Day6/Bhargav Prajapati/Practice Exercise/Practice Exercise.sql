USE AdventureWorks2012
CREATE TABLE Emps
(
FirstName varchar(30),
LastName varchar(30),
Salary int ,
Email varchar(50)
)
INSERT INTO  Emps (FirstName,LastName,Salary,Email) VALUES ('BHARGAV','Prajapati',5000,'abc@gmail.com'),
															('Parth','Prajapati',10000,'xyz@gmail.com'),
															('John','Doe',8000,'pqr@gmail.com'),
															('Aryan','Patel',20000,'uvw@gmail.com'),
															('Dixit','Patel',8000,'qwe@gmail.com')
-------------SUB QUERY----------------------
SELECT * FROM Emps WHERE Salary>(SELECT Salary FROM Emps WHERE FirstName='John')
--------------IN------------------
SELECT * FROM HumanResources.Employee
SELECT*FROM Person.Address
SELECT JobTitle FROM HumanResources.Employee WHERE BusinessEntityID IN(SELECT AddressID FROM Person.Address WHERE City='Bothell') 
---------------EXISTS-------------------
SELECT JobTitle,BusinessEntityID FROM HumanResources.Employee WHERE  EXISTS(SELECT * FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID=HumanResources.Employee.BusinessEntityID)

-----------NESTED SUBQUERY---------
SELECT DepartmentID FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID=(SELECT BusinessEntityID FROM HumanResources.Employee WHERE BusinessEntityID=(SELECT BusinessEntityID FROM Person.BusinessEntity WHERE rowguid='0C7D8F81-D7B1-4CF0-9C0A-4CD8B6B50087'))
SELECT * FROM HumanResources.Employee 
SELECT * FROM Person.BusinessEntity
-------Correleted SubQuery-----------
SELECT * FROM Emps WHERE Salary=(SELECT MAX(Salary) FROM Emps)

--------- VIEW---------
CREATE VIEW HumanResources.MyView AS 
SELECT p.FirstName,p.LastName,e.HireDate FROM HumanResources.Employee AS e JOIN Person.Person AS p ON e.BusinessEntityID=p.BusinessEntityID

SELECT * FROM HumanResources.MyView ORDER BY LastName