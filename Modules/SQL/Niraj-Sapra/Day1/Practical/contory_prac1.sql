USE Day1SQl	

CREATE TABLE dbo.Countrys  
   (CountryId INT PRIMARY KEY NOT NULL,  
   CountryName VARCHAR(25) NOT NULL,  
   RegionId INT NOT NULL)  
GO

INSERT INTO dbo.Countrys(CountryId,CountryName,RegionId) VALUES(1,'India',1),(2,'Italy',2),(3,'China',3);
