CREATE DATABASE SampleDB
GO

USE SampleDB
GO

CREATE TABLE Products  
   (ProductID INT PRIMARY KEY NOT NULL,  
   ProductName VARCHAR(25) NOT NULL,  
   Price MONEY NULL,  
   ProductDescription VARCHAR(100) NULL)  
GO

INSERT Products (ProductID, ProductName, Price, ProductDescription)  
    VALUES (1, 'Clamp', 12.48, 'Workbench clamp')  
GO 

INSERT INTO Products VALUES (2, 'Screwdriver', 2.5, NULL)
GO

UPDATE Products  
    SET ProductDescription = 'Flat Head Screwdriver'  
    WHERE ProductID = 2 
GO

SELECT * FROM Products
GO

SELECT ProductName FROM Products
GO

SELECT ProductName FROM Products
				   WHERE Price<5.00
GO


SELECT ProductName, Price*2.00 AS CustomerPays FROM Products
GO

