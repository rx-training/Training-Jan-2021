USE AdventureWorks2012
--CREATE TABLE--
CREATE TABLE EmpTble(
EmpId INT,
EmpName VARCHAR(30),
EmpAddress VARCHAR(50)
)
--INSRT COMMAND--
INSERT INTO EmpTble(EmpId,EmpName,EmpAddress) VALUES (1,'JAY','Ahmedabad');
INSERT INTO EmpTble VALUES (2,'Ayaush','Surat');
INSERT INTO EmpTble(EmpId,EmpName,EmpAddress) VALUES (3,'Pratik','Mumbai'),
												        (4,'Jainam','Ahmedabad')	
--Update Command--
 SELECT * FROM Person.Address
 UPDATE Person.Address SET ModifiedDate=GETDATE();

 SELECT * FROM  Sales.SalesPerson
UPDATE Sales.SalesPerson SET Bonus=6000,CommissionPct=.10,SalesQuota=NULL

SELECT * FROM Production.Product
UPDATE Production.Product SET Color=N'Metalic Red' WHERE Name LIKE N'Road-250%' AND Color=N'Red';
UPDATE Production.Product SET ListPrice =ListPrice*2
SELECT * FROM Production.Product
UPDATE Production.Product SET ListPrice =ListPrice+5
SELECT * FROM Production.Product

/*DECLARE @NewPrice Int=10;
UPDATE Production.Product SET ListPrice+=@NewPrice WHERE Color=N'Red'*/



--SELECT COMMAND--
--Customizing The Display--
SELECT BirthDate,NationalIDNumber,LoginID,JobTitle FROM HumanResources.Employee
SELECT 'Deparment Number'=DepartmentID ,'Deparment Name'=NAME FROM HumanResources.Department
SELECT DepartmentID 'Department Number',Name 'Deparment Name' FROM HumanResources.Department
SELECT DepartmentID AS 'DEpartment Number' , Name  AS 'Deparment Name' FROM HumanResources.Department
--Litrals And Concatination--
SELECT BusinessEntityID,'Designation',JobTitle  FROM HumanResources.Employee
SELECT BusinessEntityID,'Designation'+ NationalIDNumber AS 'DESIGNATION MODIFIED',JobTitle  FROM HumanResources.Employee

--Calculating Column Value--
SELECT * FROM HumanResources.EmployeePayHistory
SELECT BusinessEntityID ,Rate=Rate*8 FROM HumanResources.EmployeePayHistory
SELECT BusinessEntityID ,Rate=Rate/8 FROM HumanResources.EmployeePayHistory
SELECT BusinessEntityID ,Rate=Rate%8 FROM HumanResources.EmployeePayHistory
SELECT BusinessEntityID ,Rate=Rate+8 FROM HumanResources.EmployeePayHistory
SELECT BusinessEntityID ,Rate=Rate-8 FROM HumanResources.EmployeePayHistory

--Comparison Operator/ Logical Operator--
SELECT BusinessEntityID,NationalIDNumber,JobTitle,VacationHours FROM HumanResources.Employee WHERE VacationHours<5
SELECT BusinessEntityID,NationalIDNumber,JobTitle,VacationHours FROM HumanResources.Employee WHERE VacationHours>5
SELECT BusinessEntityID,NationalIDNumber,JobTitle,VacationHours FROM HumanResources.Employee WHERE VacationHours=5


--Range Operator--
SELECT * FROM HumanResources.Department WHERE GroupName='Manufacturing' OR GroupName='Quality Assurance'
SELECT BusinessEntityID,NationalIDNumber,JobTitle ,VacationHours  FROM HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 30
SELECT BusinessEntityID,NationalIDNumber,JobTitle ,VacationHours  FROM HumanResources.Employee WHERE VacationHours NOT BETWEEN 20 AND 30


--IN AND NOT IN Operator--
SELECT *FROM HumanResources.Employee
SELECT LoginId,JobTitle,BirthDate FROM HumanResources.Employee WHERE JobTitle IN('Chief Executive Officer','Engineering Manager')

--Like KeyWorld--
SELECT *FROM HumanResources.Department
SELECT DepartmentID,Name,GroupName FROM HumanResources.Department WHERE GroupName LIKE 'Res%'
SELECT DepartmentID,Name,GroupName FROM HumanResources.Department WHERE GroupName LIKE 'S____ and Marketing'

--NULL Values--
Select * From HumanResources.EmployeeDepartmentHistory
SELECT DepartmentID ,StartDate,EndDate FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL

--ORDERD by--
SELECT * FROM HumanResources.Department
SELECT DepartmentID , Name,GroupName FROM HumanResources.Department ORDER BY DepartmentID,GroupName

--Top--
SELECT TOP 10* FROM HumanResources.Employee
--Distinct--
SELECT *FROM HumanResources.Employee
SELECT DISTINCT JobTitle FROM HumanResources.Employee WHERE JobTitle LIKE 'PR%'

