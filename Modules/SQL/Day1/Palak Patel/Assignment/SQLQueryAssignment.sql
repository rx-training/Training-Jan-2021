USE DayOneAssignment

CREATE TABLE Employees(
	EmployeeId INT PRIMARY KEY,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Email VARCHAR(60) NOT NULL,
	PhoneNumber BIGINT NOT NULL,
	HireDate DATE NOT NULL,
);

CREATE TABLE Inventories(
	InventoryId INT PRIMARY KEY,
	InventoryName VARCHAR(30) NOT NULL,
	ModalId INT CONSTRAINT fkModalId FOREIGN KEY REFERENCES dbo.ModalInfo(ModalId)
);

DROP TABLE Inventories

CREATE TABLE Sales(
	SalesId INT PRIMARY KEY,
	EmployeeId INT CONSTRAINT fkEmployeeId FOREIGN KEY REFERENCES dbo.Employees(EmployeeId),
	CarId INT CONSTRAINT fCarId FOREIGN KEY REFERENCES dbo.Inventories(InventoryId),
	Commission INT NOT NULL,
	SalesDate DATE NOT NULL
);

DROP TABLE Sales

CREATE TABLE ModalInfo(
	ModalId INT PRIMARY KEY,
	ModalName VARCHAR(50) NOT NULL,
	Price MONEY NOT NULL,
	Stock INT NOT NULL
);