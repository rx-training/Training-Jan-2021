/* 
True or False

	-> A clustered index usually improves performance when inserting data. 
	   True

	-> A table can contain only one clustered index.
	   True


Fill in the Blank

	-> Add an index to one or more columns to speed up data _retrival_.

	-> Values in a clustered index are _sorted_.


Multiple Choice

	-> How many clustered indexes can you have for a database?
	   1

	-> Consider using a clustered index when:
	   Columns contain a large number of distinct values


Comparing Clustered and Non-Clustered Indexes
	
	-> Clustered Index :
			Cluster index is a type of index which sorts the data rows in the table on their key values. 
			A clustered index defines the order in which data is stored in the table which can be sorted in only one way.
			In the Database, there is only one clustered index per table.

	-> Non-Clustered Index :
			A Non-clustered index stores the data at one location and indices at another location. 
			The index contains pointers to the location of that data. 
			A single table can have many non-clustered indexes as an index in the non-clustered index is stored in different places.
*/


-- Creating a Clustered Index Using Transact-SQL
USE AdventureWorks2012;

CREATE TABLE [dbo].[PlanetsID]
(
	[ID] [int] NOT NULL,
	[Item] [int] NOT NULL,
	[Value] [int] NOT NULL
) ON [PRIMARY]

INSERT INTO PlanetsID VALUES (4, 23, 66);
INSERT INTO PlanetsID VALUES (1, 12, 59);
INSERT INTO PlanetsID VALUES (3, 66, 24);

SELECT * FROM PlanetsID;

CREATE CLUSTERED INDEX IX_PlanetsID_ID
	ON dbo.PlanetsID (ID);