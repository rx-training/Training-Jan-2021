CREATE DATABASE carsalesdb;
USE carsalesdb;
GO
CREATE TABLE Employees
(
	Employee_Id int PRIMARY KEY,
	Employee_Name varchar(30) NOT NULL,
	Department varchar(30) NOT NULL
);

INSERT INTO Employees (Employee_Id,Employee_Name,Department) VALUES (1,'Rakesh','Sales');
INSERT INTO Employees (Employee_Id,Employee_Name,Department) VALUES (2,'Raj','Marketing');
INSERT INTO Employees (Employee_Id,Employee_Name,Department) VALUES (3,'Mukesh','Management');

CREATE TABLE Carsales
(
	SalesId int PRIMARY KEY,
	Car_Model varchar(20) NOT NULL,
	CustomerName varchar(30) NOT NULL,
	SalesDate varchar(30) NOT NULL,
	Salesperson_Id int,
	CONSTRAINT fksalesperson FOREIGN KEY(Salesperson_Id) REFERENCES Employees(Employee_Id)
);

INSERT INTO Carsales(SalesId,Car_Model,CustomerName,SalesDate,Salesperson_Id) VALUES (11,'Swift Dzire','Mahesh Patel','3 Jan 2021',2);
INSERT INTO Carsales(SalesId,Car_Model,CustomerName,SalesDate,Salesperson_Id) VALUES (12,'Swift Dzire','Raj Patel','4 Jan 2021',3);

CREATE TABLE Salesrecord
(
	SalesId int,
	Employee_Id int NOT NULL,
	Commission int NOT NULL,
	CONSTRAINT fksales FOREIGN KEY(Employee_Id) REFERENCES Employees(Employee_Id),
	CONSTRAINT fksalesid FOREIGN KEY(SalesId) REFERENCES Carsales(SalesId)
);

INSERT INTO Salesrecord (SalesId,Employee_Id,Commission) VALUES (11,2,2000);
INSERT INTO Salesrecord (SalesId,Employee_Id,Commission) VALUES (12,3,2000);

DROP TABLE Salesrecord;
