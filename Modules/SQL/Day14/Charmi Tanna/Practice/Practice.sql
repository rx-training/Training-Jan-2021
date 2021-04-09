CREATE DATABASE TRIGGERSPRACTICE
USE TRIGGERSPRACTICE

-->DML TRIGGER
CREATE TABLE Customer
(
CustomerID INT PRIMARY KEY, 
Name VARCHAR(20), 
Address VARCHAR(50), 
City VARCHAR(20), 
State VARCHAR(20));

INSERT INTO Customer VALUES(200,'Bhavesh','Sankalp Bunglows ,Near Star Bazar,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(201,'Amar','Sakar Bunglows,Near XYZ school,Chandkheda','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(202,'Anish','Sankalp-2 Bunglows ,Near xyx Mandir,Navrangpura','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(203,'Komal','Sankalp Bunglows ,Near Star Bazar,Thaltej','Ahmedabad','Gujarat')
INSERT INTO Customer VALUES(204,'Kiran','Mangal Flats,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(205,'Banasari','Mangal Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(206,'Bhakti','Mangal Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(207,'Neha','Abhay Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');

DROP TABLE Customer;
SELECT * FROM Customer

-->Trigger

-->DML Trigger(Insert)
CREATE TRIGGER Customer_Trigger
ON Customer 
FOR INSERT
AS
BEGIN
SELECT * FROM inserted
END

INSERT INTO Customer VALUES(208,'Neha','Abhay Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
-->DML Trigger(Insert)
CREATE TRIGGER Customer_Trigger
ON Customer 
FOR INSERT
AS
BEGIN
SELECT * FROM inserted
END

INSERT INTO Customer VALUES(208,'Neha','Abhay Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');

CREATE TABLE Employees
(
EmployeeID INT CONSTRAINT PK_Employees_EmployeeID PRIMARY KEY,
EmployeeName VARCHAR(40),
Gender VARCHAR(40),
DepartmentID INT CONSTRAINT FK_Employee_DepartmentID FOREIGN KEY REFERENCES Department(DepartmentID)
);
CREATE TABLE Department
(
DepartmentID INT CONSTRAINT PK_Department_DepartmentID PRIMARY KEY, 
DepartmentName VARCHAR(40)
);
DROP TABLE Department
DROP TABLE Employees
SELECT * FROM Department
SELECT * FROM Employees
INSERT INTO Employees VALUES(1,'John','Male',3)
INSERT INTO Employees VALUES(2,'Mike','Male',2)
INSERT INTO Employees VALUES(3,'Pam','Female',1)
INSERT INTO Employees VALUES(4,'Todd','Male',4)
INSERT INTO Employees VALUES(5,'Sara','Female',1)
INSERT INTO Employees VALUES(6,'Ben','Male',3)
INSERT INTO Department VALUES(1,'IT')
INSERT INTO Department VALUES(2,'Payroll')
INSERT INTO Department VALUES(3,'HR')
INSERT INTO Department VALUES(4,'Admin')
-->DML Trigger(Insert)
DROP TABLE Employees
SELECT * FROM Employees
CREATE TRIGGER EmployeeTrigger
ON Employees
FOR INSERT
AS 
BEGIN
SELECT * FROM inserted
END
INSERT INTO Employees VALUES(1,'Naina','10000.00')

-->DML Trigger(Insert)
CREATE TRIGGER InsertTrigger
ON Employees
FOR INSERT
AS
BEGIN
ROLLBACK TRANSACTION
END
INSERT INTO Employees VALUES(1,'Naina','23000.00')
SELECT * FROM Employees

-->DML Trigger(Delete)
CREATE OR ALTER TRIGGER EmployeeDelete
ON Employees
FOR DELETE
AS
BEGIN
DECLARE @ID INT
SELECT @ID = EmployeeID FROM Employees
END

DELETE FROM Employees WHERE EmployeeID = 1

-->DML Trigger(Update)
CREATE OR ALTER TRIGGER EmployeeUpdate
ON Employees
FOR UPDATE
AS 
BEGIN
SELECT * FROM deleted
SELECT * FROM inserted
END

UPDATE Employees SET Salary='20000' WHERE EmployeeID = 1 

SELECT * FROM Employees

-->After Trigger FOR INSERT
CREATE OR ALTER TRIGGER InsertTrigger
ON Employees
AFTER INSERT
AS
BEGIN
SELECT * FROM Employees
END
INSERT INTO Employees VALUES(10,'Meena','20000.00')
SELECT * FROM Employees
-->AFTER TRIGGER FOR UPDATE
CREATE OR ALTER TRIGGER EmployeeUpdate
ON Employees
AFTER UPDATE
AS 
BEGIN
SELECT * FROM deleted
SELECT * FROM inserted
END
UPDATE Employees SET Salary='24000' WHERE EmployeeID = 10 

-->AFTER Trigger FOR Delete
CREATE OR ALTER TRIGGER EmployeeDelete
ON Employees
FOR DELETE
AS
BEGIN
DECLARE @ID INT
SELECT @ID = EmployeeID FROM Employees
END

DELETE FROM Employees WHERE EmployeeID = 10

-->Instead of INSERT Trigger
CREATE OR ALTER VIEW View_Employee
AS SELECT e.EmployeeID,e.EmployeeName,e.Gender,d.DepartmentName,d.DepartmentID FROM Employees e JOIN Department  d ON e.DepartmentID = d.DepartmentID
SELECT * FROM View_Employee

INSERT INTO View_Employee VALUES(7,'Rita','Female','IT')


CREATE OR ALTER TRIGGER tr_View_Employee_InsteadOfInsert
ON View_Employee
INSTEAD OF INSERT
AS
BEGIN
SELECT * FROM inserted
SELECT * FROM deleted
END

CREATE OR ALTER TRIGGER tr_View_Employee_InsteadOfInsert
ON View_Employee
INSTEAD OF INSERT
AS
BEGIN
DECLARE @DeptID INT
SELECT @DeptID = DepartmentID FROM Department JOIN inserted ON inserted.DepartmentName = Department.DepartmentName
IF(@DeptID IS NULL)
BEGIN
RAISERROR('Invalid Department Name',16,1)
RETURN
END

INSERT INTO Employees(EmployeeID,EmployeeName,Gender,DepartmentID) SELECT EmployeeID,EmployeeName,Gender,@DeptID FROM inserted
END

-->INSTEAD OF UPDATE
-->create VIEW
CREATE OR ALTER VIEW View_Employee
AS SELECT EmployeeID,EmployeeName,Gender,DepartmentName FROM Employees JOIN Department  ON Employees.DepartmentID = Department.DepartmentID
SELECT * FROM View_Employee
-->Update view
UPDATE View_Employee SET EmployeeName = 'Roy', DepartmentName='IT'WHERE EmployeeID=1

UPDATE View_Employee  SET DepartmentName='HR' WHERE DepartmentID=3
-->Instead of update
CREATE OR ALTER TRIGGER tr_EmpTrigger_InsteadOfUpdate
ON View_Employee
INSTEAD OF UPDATE
AS
BEGIN
IF(UPDATE(DepartmentName))
BEGIN
DECLARE  @DeptID INT
SELECT @DeptID=d.DepartmentID FROM Department d JOIN inserted i ON i.DepartmentName = d.DepartmentName 
UPDATE Employees SET DepartmentID = @DeptID FROM inserted  JOIN Employees  ON inserted.EmployeeID = Employees.EmployeeID
END
END
-->
SELECT * FROM Employees
SELECT * FROM Department