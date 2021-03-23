/*
	=> True or False

	4. A clustered index usually improves performance when inserting data.
	>> True
	5.A table can containe only one clustered index.
	>> True

	=> Fill in the blank

	4. Add an index to one or more columns to speed up data ______________ .
	>> Retrival

	5. Values in a clustered index are _____________ .
	>> Sorted

	=> Multiple Choice
	5. Consider using a clustered index when:
	>>Columns contain a large number of distinct values

	8. How many clustered indexes can you have for a database?
	>> 1

	=> Comparing Clustered and Non-clustered Indexes

	>> Clustered Index
		::	Cluster index is a type of index which sorts the data rows in the table on their key values. 
		::	A clustered index defines the order in which data is stored in the table which can be sorted in only one way.
		::	There should be only one clustered index per table.

	>> Non-Clustered Index
		::	A Non-clustered index stores the data at one location and indices at another location.
		::	The index contains pointers to the location of that data.
		::	A table may have number of Non-clustered indexes as it is stored in different places
*/

-- Creating a Clustered Index Using Transact-SQL

USE AdventureWorks2012
-- creating a planetsId table using dbo schema
CREATE TABLE dbo.PlanetsID
(
	ID INT NOT NULL,
	Item INT NOT NULL,
	Value INT NOT NULL
)ON [PRIMARY]
-- Inserting data into planetsID table
INSERT INTO PlanetsID VALUES
	(4,23,66),
	(1,12,59),
	(3,66,24);
SELECT * FROM PlanetsID;

-- creating a clustered column based on the ID Column
CREATE CLUSTERED INDEX IX_PlanetsID_ID
	ON dbo.PlanetsID(ID);
