USE Day1SQl
CREATE TABLE Inventory
(
    InventoryId INT PRIMARY KEY,
    OpeningStock INT,
    ClosingStock INT,
    Purchase INT,
    TotalSale INT 
);
CREATE TABLE Sales
(
    Quantity INT,
    Sales INT PRIMARY KEY,
    Price INT,
    InventoryId  INT FOREIGN KEY REFERENCES Inventory(InventoryId)
)
DROP TABLE Sales;
CREATE TABLE Employees
(
    EmployeeId INT PRIMARY KEY,
    EmployeeName VARCHARvarchar(20),
    Sale INT,
    Comission INT,
    CONSTRAINT fkSid FOREIGN KEY (Sale) REFERENCES Sales(Sales)
);
DROP TABLE Employees;