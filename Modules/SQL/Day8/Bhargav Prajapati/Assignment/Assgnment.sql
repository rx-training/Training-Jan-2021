------------------Proficiency Assessment-----------------------

/*You are a database administrator for the AdventureWorks Corporation. You recently created
some databases, and you�ve just realized how large the databases will become in the future.
Therefore, you need to create a new clustered index to help with overall performance.*/
USE AdventureWorks2012
SELECT * FROM HumanResources.Employee
CREATE CLUSTERED INDEX cl_Employee_performance  ON HumanResources.Employee(Name)



/*As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS:*/

CREATE TABLE  PlanetsID
(
ID int NOT NULL,
Item int NOT NULL,
Value int NOT NULL
)

INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)

SELECT * FROM PlanetsID

CREATE CLUSTERED INDEX CIX_PlanetsID_ID ON PlanetsID(ID ASC)

SELECT * FROM PlanetsID