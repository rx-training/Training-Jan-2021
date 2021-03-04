USE Day1

CREATE TABLE CarSales.Employees(
	EmployeeId INT PRIMARY KEY,
	EmployeeName VARCHAR(50) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	JoiningDate DATE NOT NULL,
	Commission MONEY
)


CREATE TABLE CarSales.Inventories(
	CarId INT PRIMARY KEY,
	CarName VARCHAR(50) NOT NULL,
	CarModel VARCHAR(100) NOT NULL,
	Price MONEY NOT NULL,
	CarQuantity INT NOT NULL
)


CREATE TABLE CarSales.CompletedSales(
	EmployeeId INT CONSTRAINT fkEmployeeId FOREIGN KEY REFERENCES CarSales.Employees(EmployeeId),
	CardId INT CONSTRAINT fkCarId FOREIGN KEY REFERENCES CarSales.Inventories(CarId),
	Price MONEY NOT NULL,
	DateOfIssue DATE NOT NULL
)