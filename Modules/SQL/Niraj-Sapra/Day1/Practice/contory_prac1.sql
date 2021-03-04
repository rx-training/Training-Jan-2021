USE Day1SQl	

CREATE TABLE dbo.Countrys  
   (CountryId int PRIMARY KEY NOT NULL,  
   CountryName varchar(25) NOT NULL,  
   RegionId int NOT NULL)  
GO

INSERT INTO dbo.Countrys(CountryId,CountryName,RegionId) VALUES(1,'India',1),(2,'Italy',2),(3,'China',3)
