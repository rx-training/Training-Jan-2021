
--True or False
--Circle T if the statement is true or F if the statement is false.

--T F 3. A primary key can contain NULL values.
false
--T F 4. A clustered index usually improves performance when inserting data.
false
--T F 5. A table can contain only one clustered index.
true

--2. The value of a primary key must be ____________.
UNIQUE and NOT NULL
--3. A foreign key works in conjunction with primary key or unique constraints to enforce
--_________ between tables.
data or link one column 2 tables

--4. Add an index to one or more columns to speed up data ____________.
retrive data
--5. Values in a clustered index are _____
sorted	

--Circle the letter that corresponds to the best answer.

--1. Which of the following is not a constraint?
--a. CHECK
--b. DEFAULT
--c. UNIQUE
--d. INDEX
index

--2. Which of the following things can help speed data retrieval?
--a. A DEFAULT constraint
--b. A primary key constraint
--c. A clustered index
--d. A foreign key constraint
 A clustered index

--4. Which of the following statements is not true with regard to foreign keys?
--a. A foreign key is a combination of one or more columns used to establish and enforce
--a link between the data in two tables.
--b. You can create a foreign key by defining a foreign key constraint when you create or
--alter a table.
--c. A foreign key enforces referential integrity by ensuring only valid data is stored.
--d. A table can contain only one foreign key.
A table can contain only one foreign key.

--5. Consider using a clustered index when:
--a. Columns contain a large number of distinct values
--b. Columns are accessed sequentially
--c. Columns undergo frequent changes
--d. Queries return large result sets
a. Columns contain a large number of distinct values

--7. Which of the following could not be used as a primary key?
--a. A Social Security number
--b. An address
--c. An employee number
--d. The serial number of an electronic component
 An address

--8. How many clustered indexes can you have for a database?
--a. 1
--b. 2
--c. 4
--d. 8
 1

--9. What is the name for the situation in which more than one columns act as a primary
--key?
--a. Composite primary key
--b. Escalating key
--c. Foreign key
--d. Constraint key
Composite primary key


--Your boss wants to speed things up on the company’s database server. Therefore, he 
--is thinking of having you create a couple of indexes. He asks you to explain 
--the advantages and disadvantages of creating a clustered index versus 
--a non-clustered index. How should you respond?

1. We can make one cluster index one par table
 but, multiple non-cluster in one table
2 cluster index sort by table.. cosume not extra space
 non-cluster place seperate place so it will consume space
 3. cluster > non-cluster faster exceution because.. cluster is on main table

-- You are a database administrator for the AdventureWorks Corporation. You recently created
--some databases, and you’ve just realized how large the databases will become in the future.
--Therefore, you need to create a new clustered index to help with overall performance.
--Using the SSMS interface, what steps would you use to create a new clustered index on the
--name column for the AdventureWorks database?

I will make primary key or composite primary key  AS a clustered index
...steps.
goto data base
click on + sign before table name
goto table
right click on INDEX
then New INdex
click on CLustered Index
add column by we want to make INdex
ok then ok
created new clustered index

If column have primary key then IT will automatically become clusterd index
but we can delete from index 
then we can make new clustered index

--As a database administrator, you need to increase the performance of the PlanetsID table, so
--you decide to create a clustered index. But instead of using SSMS, you decide to use queries
--to perform this task. Therefore, you create a new PlanetsID database using the following
--commands within SMMS:

--IF EXISTS (SELECT * FROM sys.objects
--WHERE object_id = OBJECT_ID(N’[dbo] . [PlanetsID]
--AND type in (N’U’))
--USE AdventureWorks2008
--DROP TABLE [dbo].[PlanetsID]
--GO
--USE [AdventureWorks2008]
--GO
--CREATE TABLE [dbo].[PlanetsID](
--[ID] [int] NOT NULL,
--[Item] [int] NOT NULL,
--[Value] [int] NOT NULL
--) ON [PRIMARY]
--GO
--INSERT INTO PlanetsID VALUES (4, 23, 66)
--INSERT INTO PlanetsID VALUES (1, 12, 59)
--INSERT INTO PlanetsID VALUES (3, 66, 24)
--SELECT * FROM PlanetsID
--GO
--You should now see the following output in the results pane (below the Query Editor
--Window):
--ID Item Value
--4 23 66
--1 12 59
--3 66 24
Now that you have a database with data, what steps would you use to create a clustered index
based on the ID column?

HERE THERE Is not any key..
we can make not cluster INdex

so let'' s choose one key 

After analyzing data I come to decide that 
I can make I have to make primary key to ID column

STEPS:
goto object Explorer
then goto planets table
right click on table namae
click on Design..
Right click ON ID 
then Choose SET PRIMARY KEY
..we make primary key to ID

Then Refersh Table..
come to table name and see the index now we can see that there is key
this is alreay clusterd key index..

AS we seen in Clustered INDEX if we make primary key ,
means that we automatically set clustered index

--OR
WE can make CLUSTERED INDEX WIHOUT MAKEING PRIAMARY KEY
Right Click on index
NEW INdex
CLUSTED INDEX
THEn IN box select Id
ok then ok 
we set ID  CLUSTEred INDEX 

SELECT * FROM PlanetsID
