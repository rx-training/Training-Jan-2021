--T/F
4. True
5. True


--Fill ups
4. retrieval
5. sorted


--MCQ
5. a. Columns contain a large number of distinct values
8. a. 1


--4.4
USE AdventureWorks2012


CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]


INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)


CREATE CLUSTERED INDEX IX_PlanetsID_ID  
    ON PlanetsID(ID)