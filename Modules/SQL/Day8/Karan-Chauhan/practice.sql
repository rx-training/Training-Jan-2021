USE AdventureWorks2012;

SELECT * FROM HumanResources.JobCandidate WHERE JobCandidateID LIKE '1%';

SELECT ContactTypeID,Name FROM Person.ContactType;

/* You are a database administrator for the AdventureWorks Corporation. You recently created
some databases, and you’ve just realized how large the databases will become in the future.
Therefore, you need to create a new clustered index to help with overall performance.
Using the SSMS interface, what steps would you use to create a new clustered index on the
name column for the AdventureWorks database? */
CREATE TABLE AdventureWorks_Corporation (Performance int NOT NULL);
INSERT INTO AdventureWorks_Corporation(Performance) VALUES (80);
INSERT INTO AdventureWorks_Corporation(Performance) VALUES (60);
INSERT INTO AdventureWorks_Corporation(Performance) VALUES (90);
INSERT INTO AdventureWorks_Corporation(Performance) VALUES (40);

SELECT * FROM AdventureWorks_Corporation;

CREATE CLUSTERED INDEX csindex_AdventureWorks ON AdventureWorks_Corporation(Performance DESC);

SELECT * FROM AdventureWorks_Corporation;


/* As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS: */

IF EXISTS (SELECT * FROM sys.objects
WHERE object_id = OBJECT_ID(N’[dbo] . [PlanetsID]
AND type in (N’U’))
USE AdventureWorks2012
DROP TABLE [dbo].[PlanetsID]
GO
USE [AdventureWorks2012]
GO
CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]
GO
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)
SELECT * FROM PlanetsID;
GO

CREATE CLUSTERED INDEX csindex_planets ON PlanetsID(ID);

SELECT * FROM PlanetsID;