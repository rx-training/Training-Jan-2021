USE Day1SQl
CREATE TABLE Inventory
(
    InventoryId int PRIMARY KEY,
    OpeningStock int,
    ClosingStock int,
    Purchase int,
    TotalSale int 
);
CREATE TABLE Sales
(
    Quantity int,
    Sales int PRIMARY KEY,
    Price int,
    InventoryId  int FOREIGN KEY REFERENCES Inventory(InventoryId)
)
DROP TABLE Sales;
CREATE TABLE Employees
(
    EmployeeId int PRIMARY KEY,
    EmployeeName varchar(20),
    Sale int,
    Comission int,
    CONSTRAINT fkSid FOREIGN KEY (Sale) REFERENCES Sales(Sales)
);
DROP TABLE Employees;