USE  CarSales

CREATE TABLE SalesEmployees(
	
	EmpName VARCHAR(20),
	EmpId VARCHAR(5) CONSTRAINT pkEmpId PRIMARY KEY,
	EmpSalary money,
	EmpCommission money	CONSTRAINT ukCommission UNIQUE,

)

CREATE TABLE CarInventories(
	CarName VARCHAR(20),
	CarId VARCHAR(5)  CONSTRAINT pkCarId PRIMARY KEY,
	CarQuantity INT ,
)

CREATE TABLE CompleteSales
(
	EmpId varchar(5) CONSTRAINT fkEmpId FOREIGN KEY REFERENCES dbo.SalesEmployees(EmpId),
	CarId Varchar(5) CONSTRAINT fkCarId FOREIGN KEY REFERENCES dbo.CarInventories(carId) ,
	CarSalesId Varchar(5) CONSTRAINT pkCarSalesId PRIMARY KEY,
)
ALTER TABLE CompleteSales 
ADD SaleAmount float,
	SaleDate date
