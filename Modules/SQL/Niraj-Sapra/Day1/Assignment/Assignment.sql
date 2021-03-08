USE Day1SQl
CREATE TABLE Employees
(
    EmployeeId INT PRIMARY KEY,
    EmployeeName VARCHAR(20),
    Comissionpercentage INT,
);
DROP TABLE Employees;
CREATE TABLE Inventory
(
    InventoryId INT PRIMARY KEY,
    OpeningStock INT,
    ClosingStock INT,
    Purchase INT,
    TotalSale INT 
);
DROP TABLE  Inventory;
CREATE TABLE Sales
(
    Quantity INT,
    Sales INT PRIMARY KEY,
    Price INT,
    InventoryId  INT FOREIGN KEY REFERENCES Inventory(InventoryId),
	EmployeeId INT FOREIGN KEY REFERENCES Employees(EmployeeId)
)
DROP TABLE Sales;
