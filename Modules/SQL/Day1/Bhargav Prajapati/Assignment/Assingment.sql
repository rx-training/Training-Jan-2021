CREATE DATABASE Assingmentdb_Day1
USE Assingmentdb_Day1
CREATE TABLE Employees(
Employee_Id Int  PRIMARY KEY,
Employee_Name Varchar(20),
Employee_Department Varchar(30),
Employee_Deparment_Id Int,
Commission Int

)
INSERT INTO Employees(Employee_Id,Employee_Name,Employee_Deparment_Id,Commission) VALUES (1,'pqr',501,22)
INSERT INTO Employees(Employee_Id,Employee_Name,Employee_Deparment_Id,Commission) VALUES (2,'abc',504,20)
CREATE TABLE Inventory
(
	Car_Id Int PRIMARY KEY,
	Car_Name Varchar(30),
	Car_Model Varchar(50),
	Car_Color Varchar(30)
)
INSERT INTO Inventory(Car_Id,Car_Name,Car_Model,Car_Color)Values(201,'xyz','A1','Blue')
INSERT INTO Inventory(Car_Id,Car_Name,Car_Model,Car_Color)Values(204,'opq','B6','Red')

CREATE TABLE SALES
(
	EmployeeId Int,
	CarId Int,
	Customer_Name Varchar(50),
	Sold_Price Int,
	CONSTRAINT fkEmployeeId FOREIGN KEY (EmployeeId) REFERENCES  Employees(Employee_Id),
	CONSTRAINT fkCarId FOREIGN KEY (CarId) REFERENCES Inventory(Car_Id) 


)
 INSERT INTO SALES (EmployeeId,CarId,Customer_Name,Sold_Price) VALUES (1,201,'abc',250000)
 INSERT INTO SALES (EmployeeId,CarId,Customer_Name,Sold_Price) VALUES (2,204,'asx',350000)