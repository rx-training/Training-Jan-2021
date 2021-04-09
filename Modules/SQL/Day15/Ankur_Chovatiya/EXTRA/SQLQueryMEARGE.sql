CREATE TABLE SourceProducts(
    ProductID		INT,
    ProductName		VARCHAR(50),
    Price			DECIMAL(9,2),
	Quantity        INT 
)
GO
    
INSERT INTO SourceProducts(ProductID,ProductName, Price , Quantity) VALUES(1,'Table',100 , 2)
INSERT INTO SourceProducts(ProductID,ProductName, Price , Quantity) VALUES(2,'Desk',80 , 3)
INSERT INTO SourceProducts(ProductID,ProductName, Price ,  Quantity) VALUES(3,'Chair',50 , 5)
INSERT INTO SourceProducts(ProductID,ProductName, Price , Quantity) VALUES(4,'Computer',300 , 6)
GO
    

	--==================



	CREATE TABLE TargetProducts(
    ProductID		INT,
    ProductName		VARCHAR(50),
    Price			DECIMAL(9,2)
)
GO
    
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(1,'Table',100)
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(2,'Desk',180)
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(5,'Bed',50)
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(6,'Cupboard',300)
GO
    
    
SELECT * FROM SourceProducts
SELECT * FROM TargetProducts

MERGE TargetProducts AS Target
USING SourceProducts	AS Source
ON Source.ProductID = Target.ProductID
WHEN NOT MATCHED BY Target THEN
    INSERT (ProductID,ProductName, Price) 
    VALUES (Source.ProductID,Source.ProductName, Source.Price);