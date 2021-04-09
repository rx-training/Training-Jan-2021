IF EXISTS (SELECT 1 FROM SYS.TABLES where name ='Locations_stage')
BEGIN 
DROP TABLE Locations_stage
END
 
IF EXISTS (SELECT 1 FROM SYS.TABLES where name ='Locations')
BEGIN 
DROP TABLE Locations
END
 
 
CREATE TABLE [dbo].[Locations](
  [LocationID] [int] NULL,
  [LocationName] [varchar](100) NULL
) 
GO
 
 
 
CREATE TABLE [dbo].[Locations_stage](
  [LocationID] [int] NULL,
  [LocationName] [varchar](100) NULL
) 
GO
 

 
INSERT INTO Locations values (1,'Richmond Road'),(2,'Brigade Road') ,(3,'Houston Street')
 
 
INSERT INTO Locations_stage values (1,'Richmond Cross') ,(3,'Houston Street'), (4,'Canal Street')



SELECT * FROM Locations
SELECT * FROM Locations_stage

MERGE Locations T
USING Locations_stage S ON T.LocationID=S.LocationID
WHEN MATCHED THEN
UPDATE SET LocationName=S.LocationName;



CREATE TABLE Grades(
  [Student] VARCHAR(50),
  [Subject] VARCHAR(50),
  [Marks]   INT
)
GO
 
INSERT INTO Grades VALUES 
('Jacob','Mathematics',100),
('Jacob','Science',95),
('Jacob','Geography',90),
('Amilee','Mathematics',90),
('Amilee','Science',90),
('Amilee','Geography',100),
('anks' , 'gujarati' , 91),
('anks' , 'mathematics' , 100),
('Jacob','Mathematics',100)
GO
SELECT * FROM Grades

SELECT * from (
	SELECT [Student] ,
	[SUBJECT] , [MARKS] 
	FROM Grades ) AS STUDENTRESULTS
PIVOT (
	SUM([MARKS])
	FOR [SUBJECT]
	IN(
	[MATHEMATICS],
	[SCIENCE],
	[GEOGRAPHY]
	)
) AS PIVOTTABLE

SELECT * FROM (SELECT [Student] , [Subject] ,[MARKS] FROM Grades ) AS STUDENT
PIVOT (
	SUM([MARKS])
	FOR [SUBJECT]
	IN(
	[MATHEMATICS],
	[SCIENCE],
	[GEOGRAPHY],
	[gujarati]
	)
) AS PIVOTTABLE


--=====                     
CREATE TABLE SourceProducts(
    ProductID		INT,
    ProductName		VARCHAR(50),
    Price			DECIMAL(9,2),
	quantity        INT 
)
GO
    
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(1,'Table',100 , 2)
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(2,'Desk',80 , 3)
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(3,'Chair',50 , 5)
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(4,'Computer',300 , 6)
GO
    