/*Scenario 4-3: Creating a Clustered Index
You are a database administrator for the AdventureWorks Corporation. You recently created 
some databases, and you’ve just realized how large the databases will become in the future. 
Therefore, you need to create a new clustered index to help with overall performance.
Using the SSMS interface, what steps would you use to create a new clustered index on the 
name column for the AdventureWorks database?
Ans.*/ 

--CREATING CLUSTERED INDEX ON NAME COLUMN USING OBJECT EXPLORER
CREATE TABLE TblAdventureWorks(
	AdvWorksID INT,
	Name VARCHAR(50)

)

INSERT INTO TblAdventureWorks VALUES (2, 'Reena'),
							(4, 'Meena'),
							(1, 'Rita'),
							(3, 'Reshma'),
							(2, 'Seema'),
							(3, 'Tina')

SELECT * FROM TblAdventureWorks

/*Scenario 4-4: Creating a Clustered Index Using Transact-SQL
As a database administrator, you need to increase the performance of the PlanetsID table, so 
you decide to create a clustered index. But instead of using SSMS, you decide to use queries 
to perform this task. Therefore, you create a new PlanetsID database using the following 
commands within SMMS:
IF EXISTS (SELECT * FROM sys.objects
WHERE object_id = OBJECT_ID(N’[dbo] . [PlanetsID]
AND type in (N’U’))
USE AdventureWorks2008
DROP TABLE [dbo].[PlanetsID]
GO
USE [AdventureWorks2008]
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
SELECT * FROM PlanetID
GO
You should now see the following output in the results pane (below the Query Editor 
Window):
ID Item Value
4 23 66
1 12 59
3 66 24
Now that you have a database with data, what steps would you use to create a clustered index 
based on the ID column?
Ans.*/
CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]

INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)

SELECT * FROM PlanetsID

--CREATING CLUSTERED INDEX ON ID COLUMN USING TRANSACT SQL
CREATE CLUSTERED INDEX IXPlanetsIDID   
    ON PlanetsID (ID);
