--Assignment:
--SQL MTA book uploaded on tutorial site.
--MCQS
--1.A(INDEX)
--2.A clustered index(C)
--5.A,B,D
--8.A(1)

--True or False
--4. A clustered index usually improves performance when inserting data.
--True

--5.A table can contain only one clustered index.
--True


--4.Add an index to one or more columns to speed up data 
--Retreival

--5.How many values in a clustered indexes can you have for a database?
--1


--Do the assignment of the chapter 4 only for Indexes.
CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]
GO

INSERT INTO PlanetsID VALUES (4,23,66) , (1,12,59) , (3,66,24)
SELECT * FROM PlanetsID ;

CREATE CLUSTERED INDEX Index_Planets_Id ON
	PlanetsID(ID) ;

