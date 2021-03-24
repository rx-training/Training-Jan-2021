-- to see indexes applied on table
EXEC sp_helpindex 'Person.Person'
GO

--check execution plan (Index scan on Primary key due to missing index on FirstName)
SELECT FirstName FROM Person.Person WHERE FirstName = 'Kelli';

--add missing index by using below statement
CREATE NONCLUSTERED INDEX [FirstName]
ON [Person].[Person] ([FirstName])

-- Index seek only
SELECT FirstName FROM Person.Person WHERE FirstName = 'Kelli'

-- Index seeking and key Lookup will happen (due to *)
SELECT * FROM Person.Person WHERE FirstName = 'Kelli'

--Scenario 4.4
EXEC sp_helpindex 'dbo.PlanetsID'
GO

CREATE CLUSTERED INDEX ID ON dbo.PlanetsID (ID)

SELECT * FROM dbo.PlanetsID;
