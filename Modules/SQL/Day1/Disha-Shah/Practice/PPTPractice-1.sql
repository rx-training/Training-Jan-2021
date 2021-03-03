CREATE DATABASE SampleDB
GO

USE SampleDB
GO

CREATE TABLE dbo.Products  
   (ProductID int PRIMARY KEY NOT NULL,  
   ProductName varchar(25) NOT NULL,  
   Price money NULL,  
   ProductDescription varchar(max) NULL)  
GO

INSERT dbo.Products (ProductID, ProductName, Price, ProductDescription)  
    VALUES (1, 'Clamp', 12.48, 'Workbench clamp')  
GO 

INSERT INTO dbo.Products VALUES (2, 'Screwdriver', 2.5, NULL)
GO

UPDATE dbo.Products  
    SET ProductDescription = 'Flat Head Screwdriver'  
    WHERE ProductID = 2 
GO

SELECT * FROM dbo.Products
GO

SELECT ProductName FROM dbo.Products
GO

SELECT ProductName FROM dbo.Products
				   WHERE Price<5.00
GO


SELECT ProductName, Price*2.00 AS CustomerPays FROM dbo.Products
GO

