USE SampleDB

/* You have been hired to create a relational database to support a car sales business. You need to store information on the business’s employees, 
inventory, and completed sales. You also need to account for the fact that each salesperson receives a different percentage of their sales in commission.
What tables and columns would you create in your relational database, and how would you link the tables? */
CREATE TABLE SalesEmployees(
	EmpId INT CONSTRAINT pkEmpId PRIMARY KEY,
	EmpName VARCHAR(50),
	EmpSalary INT,
	EmpCommission INT CONSTRAINT ukEmpCommission UNIQUE
)

INSERT SalesEmployees (EmpId, EmpName, EmpSalary, EmpCommission) VALUES (1, 'Reena Sharma', 30000, 17)


INSERT SalesEmployees (EmpId, EmpName, EmpSalary, EmpCommission) VALUES (2, 'Rima Sharma', 50000, 20)


INSERT SalesEmployees (EmpId, EmpName, EmpSalary, EmpCommission) VALUES (3, 'Meena Sharma', 80000, 15)

SELECT * FROM SalesEmployees

CREATE TABLE CarInventory(
	CarId INT CONSTRAINT pkCarId PRIMARY KEY,
	CarName VARCHAR(50) NOT NULL,
	CarColour VARCHAR(50),
	CarQty INT CONSTRAINT DefCarQty DEFAULT 0
)


INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (1, 'Scala', 'Silver', 20)


INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (2, 'Kwid', 'Red', 30)


INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (3, 'Fortuner', 'Black', 20)

SELECT * FROM CarInventory

CREATE TABLE CompletedSales(
	SalesId INT CONSTRAINT pkSCompletedalesId PRIMARY KEY,
	EmpId INT CONSTRAINT fkSalesEmpId FOREIGN KEY REFERENCES SalesEmployees(EmpId),
	CarId INT CONSTRAINT fkCarInventoryId FOREIGN KEY REFERENCES CarInventory(CarId),
	DateOfSelling DATE NOT NULL,
)

SELECT * FROM CompletedSales

