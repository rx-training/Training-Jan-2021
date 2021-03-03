USE SampleDB


CREATE TABLE SalesEmployees(
	EmpId int CONSTRAINT pkEmpId PRIMARY KEY,
	EmpName varchar(50),
	EmpSalary int,
	EmpCommission int CONSTRAINT ukEmpCommission UNIQUE
)

INSERT SalesEmployees (EmpId, EmpName, EmpSalary, EmpCommission) VALUES (1, 'Reena Sharma', 30000, 17)


INSERT SalesEmployees (EmpId, EmpName, EmpSalary, EmpCommission) VALUES (2, 'Rima Sharma', 50000, 20)


INSERT SalesEmployees (EmpId, EmpName, EmpSalary, EmpCommission) VALUES (3, 'Meena Sharma', 80000, 15)

SELECT * FROM SalesEmployees

CREATE TABLE CarInventory(
	CarId int CONSTRAINT pkCarId PRIMARY KEY,
	CarName varchar(50) NOT NULL,
	CarColour varchar(50),
	CarQty int CONSTRAINT DefCarQty DEFAULT 0
)


INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (1, 'Scala', 'Silver', 20)


INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (2, 'Kwid', 'Red', 30)


INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (3, 'Fortuner', 'Black', 20)

SELECT * FROM CarInventory

CREATE TABLE CompletedSales(
	SalesId int CONSTRAINT pkSCompletedalesId PRIMARY KEY,
	EmpId int CONSTRAINT fkSalesEmpId FOREIGN KEY REFERENCES SalesEmployees(EmpId),
	CarId int CONSTRAINT fkCarInventoryId FOREIGN KEY REFERENCES CarInventory(CarId),
	DateOfSelling date NOT NULL,
)

SELECT * FROM CompletedSales

