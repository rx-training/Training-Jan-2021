/*** Day 8 Asignment ***/

/* You are a database administrator for the AdventureWorks Corporation. You recently created
some databases, and you’ve just realized how large the databases will become in the future.
Therefore, you need to create a new clustered index to help with overall performance.
Using the SSMS interface, what steps would you use to create a new clustered index on the
name column for the AdventureWorks database? */

-- Using GUI
-- STEP 1 - In Object Explorer, expand the Employees table to create a clustered index.
-- STEP 2 - Right-click the Indexes folder, point to New Index, and select Clustered Index....
-- STEP 3 - In the New Index dialog box, on the General page, enter the name IX_Employees_FirstName in the Index name box.
-- STEP 4 - Under Index key columns, click Add....
-- STEP 5 - In the Select Columns fromtable_name dialog box, select the check box of the table column First Name to be added to the clustered index.
-- STEP 6 - Click OK.
-- STEP 7 - In the New Index dialog box, click OK.

-- Using Transact-SQL

CREATE CLUSTERED INDEX IX_Employees_FirstName
ON Employees (FirstName);

/* As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS: */

CREATE TABLE PlanetsID(
ID INT NOT NULL,
Item INT NOT NULL,
[Value] INT NOT NULL
);
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)

CREATE CLUSTERED INDEX IX_PlanetsID_ID   
ON PlanetsID (ID);
