/*Scenario 4-2: Comparing Clustered and Non-Clustered Indexes
	Your boss wants to speed things up on the company’s database server. 
	Therefore, he is thinking of having you create a couple of indexes.
	He asks you to explain the advantages and disadvantages of creating a clustered index versus a non-clustered index. 
	How should you respond?*/

/* Ans :
--> Cluster Index Doesn't require Additional Spaces Whereas the Non-Clusterd Index requires Addititonal disk space
--> Cluster Index Offers faster Data Accesing , on ther hand , Non Clustered index is Slower
-->	On Cluster Index Table Data Can be Stored in one way , On Non-Clustered index data Can Store in Multiple Way */ 


/*Scenario 4-3: Creating a Clustered Index
    You are a database administrator for the AdventureWorks Corporation. You recently created
	some databases, and you’ve just realized how large the databases will become in the future.
    Therefore, you need to create a new clustered index to help with overall performance.

    Using the SSMS interface, what steps would you use to create a new clustered index on the
    name column for the AdventureWorks database? */

CREATE CLUSTERED INDEX IX_Employees_Name   
    ON Employees (Name);   

SELECT * FROM Employees


/* Steps In SSMS : 
   1. In Object Explorer, expand the table on which you want to create a clustered index.
   2. Right-click the Indexes folder, point to New Index, and select Clustered Index.... 
   3. In the New Index dialog box, on the General page, enter the name of the new index in the Index name box. 
   4. Under Index key columns, click Add.... 
   5. Select name Column in Index key Column and add .
   6. Click OK.
   7. In the New Index dialog box, click OK.   */


/*Scenario 4-4: Creating a Clustered Index Using Transact-SQL  
    As a database administrator, you need to increase the performance of the PlanetsID table, so
    you decide to create a clustered index. But instead of using SSMS, you decide to use queries
    to perform this task. Therefore, you create a new PlanetsID database using the following
    commands within SMMS: */

CREATE TABLE PlanetsID(
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) 

INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)

CREATE CLUSTERED INDEX IX_Planets_ID  
    ON PlanetsID (ID);

SELECT * FROM PlanetsID


