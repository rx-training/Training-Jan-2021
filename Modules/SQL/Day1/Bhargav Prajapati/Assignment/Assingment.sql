CREATE DATABASE AssingmentdbDay1
USE AssingmentdbDay1
CREATE TABLE Employees(
EmployeeId INT  PRIMARY KEY,
EmployeeName VARCHAR(20),
EmployeeDepartment VARCHAR(30),
EmployeeDeparmentId INT,
Commission INT

)
INSERT INTO Employees(EmployeeId,EmployeeName,EmployeeDeparmentId,Commission) VALUES (1,'pqr',501,22)
INSERT INTO Employees(EmployeeId,EmployeeName,EmployeeDeparmentId,Commission) VALUES (2,'abc',504,20)
CREATE TABLE Inventory
(
	CarId INT PRIMARY KEY,
	CarName VARCHAR(30),
	CarModel VARCHAR(50),
	CarColor VARCHAR(30)
)
INSERT INTO Inventory(CarId,CarName,CarModel,CarColor)Values(201,'xyz','A1','Blue')
INSERT INTO Inventory(CarId,CarName,CarModel,CarColor)Values(204,'opq','B6','Red')

CREATE TABLE SALES
(
	EmployeeId INT,
	CarId INT,
	CustomerName VARCHAR(50),
	SoldPrice INT,
	CONSTRAINT fkEmployeeId FOREIGN KEY (EmployeeId) REFERENCES  Employees(EmployeeId),
	CONSTRAINT fkCarId FOREIGN KEY (CarId) REFERENCES Inventory(CarId) 


)
 INSERT INTO SALES (EmployeeId,CarId,CustomerName,SoldPrice) VALUES (1,201,'abc',250000)
 INSERT INTO SALES (EmployeeId,CarId,CustomerName,SoldPrice) VALUES (2,204,'asx',350000)