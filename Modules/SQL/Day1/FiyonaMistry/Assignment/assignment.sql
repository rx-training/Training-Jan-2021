USE Day1


CREATE TABLE CarSalesEmployees(
	EmployeeId INT PRIMARY KEY,
	EmployeeName VARCHAR(50) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	PhoneNumber VARCHAR(50) NOT NULL,
	JoiningDate DATE NOT NULL,
	Salary MONEY NOT NULL,
	Commission MONEY
)


CREATE TABLE CarSalesInventories(
	CarId INT PRIMARY KEY,
	CarName VARCHAR(50) NOT NULL,
	CarModel VARCHAR(100) NOT NULL,
	CarType VARCHAR(50) NOT NULL,
	Price MONEY NOT NULL,
	CarQuantity INT NOT NULL
)


CREATE TABLE CarSalesCompletedSales(
	SalesId INT PRIMARY KEY,
	EmployeeId INT CONSTRAINT fkEmployeeId FOREIGN KEY REFERENCES CarSalesEmployees(EmployeeId),
	CardId INT CONSTRAINT fkCarId FOREIGN KEY REFERENCES CarSalesInventories(CarId),
	SalesCommission MONEY NOT NULL,
	SalesDate DATE NOT NULL
)