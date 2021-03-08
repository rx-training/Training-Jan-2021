--Assignment
USE CarSalesBussiness

CREATE TABLE Employees
 (	
		EmpId INT CONSTRAINT pkEmpId PRIMARY KEY,
		EmpName VARCHAR(20) 
 )

 CREATE TABLE Inventory
 (
		InventoryId INT CONSTRAINT pkInventoryId PRIMARY KEY ,
		inventoryName VARCHAR(20) NOT NULL,
		PriceItem FLOAT NOT NULL
 )
 CREATE TABLE CompletedSales
 (
		CompletedSalesID INT CONSTRAINT pkCompletedSalesID PRIMARY KEY,
		InventoryId INT CONSTRAINT fkInventoryId  FOREIGN KEY REFERENCES dbo.Inventory(InventoryId)
		EmpId INT CONSTRAINT fkEmpIdComSales   FOREIGN KEY REFERENCES dbo.Employees(EmpId)
 )
 CREATE TABLE EmpsSales
 (
		EmpId INT CONSTRAINT fkEmpId  FOREIGN KEY REFERENCES Employees(EmpID),
		Sold_Radio Float 
		 --IN slod ration we get percentage using.. emp sale / complete sales
 )
