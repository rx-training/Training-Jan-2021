/*
TRUE FLASE
4. F
5.T


Fill in the Blank
Values in a clustered index are "UNIQUE"____________.
Add an index to one or more columns to speed up data ___SCAN OR SEEK_________.

--MCQ ANSWER

1. D -Index

5. A. Columns contain a large number of distinct values

8. A 1

*/
--Scenario 4-3: Creating a Clustered Index
USE AdventureWorks2012
CREATE TABLE Indians(
ADhaar_ID nchar(10),
Name varchar(50),
Adress varchar(500),
Email Varchar(100))

EXEC sp_helpindex Indians


--Creating a Clustered Index Using Transact-SQL

CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]
GO
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)
SELECT * FROM PlanetsID
GO

CREATE CLUSTERED INDEX IX_PlanetsID_ID  ON dbo.planetsID (ID)


EXEC sp_helpindex PlanetsID