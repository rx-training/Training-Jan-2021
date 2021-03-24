USE AdventureWorks2012;

--Muliple CTE in one query

WITH CTE1 (EmployeeID, CommisionPct)
AS
(
SELECT BusinessEntityID, CommissionPct FROM Sales.SalesPerson
),
CTE2 (EmployeeID, Name)
AS
(
SELECT BusinessEntityID, FirstName + ' ' + LastName FROM Person.Person
)
SELECT CTE2.*, CTE1.CommisionPct FROM CTE1 JOIN CTE2 ON CTE1.EmployeeID = CTE2.EmployeeID;

-- Recursive CTE

Declare @startID int = 200;
Declare @endID int = 250;

WITH CTE3 (EmployeeID)
AS
(
SELECT @startID as EmployeeID
UNION ALL
SELECT EmployeeID+1 FROM CTE3 WHERE EmployeeID < @endID
)
SELECT * FROM CTE3;

-- Update statement

WITH CTE1 (EmployeeID, CommisionPct)
AS
(
SELECT BusinessEntityID, CommissionPct FROM Sales.SalesPerson
),
CTE2 (EmployeeID, Name)
AS
(
SELECT BusinessEntityID, FirstName + ' ' + LastName FROM Person.Person
)
UPDATE Sales.SalesPerson SET CommissionPct = 0.20 FROM Sales.SalesPerson SP JOIN CTE1 ON CTE1.EmployeeID = SP.BusinessEntityID WHERE CTE1.EmployeeID = 274;

--- UNION, INTERSECT, EXCEPT ---

SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID < 10
UNION
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID > 600 ORDER BY 1

-- repeats records
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID < 10
UNION ALL
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID > 5 AND  BusinessEntityID < 20 ORDER BY 1

-- no repeated records
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID < 10
UNION 
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID > 5 AND  BusinessEntityID < 20 ORDER BY 1

SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID < 10
INTERSECT
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID > 5 AND  BusinessEntityID < 20 ORDER BY 1

SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID < 25
EXCEPT
SELECT BusinessEntityID, FirstName, LastName FROM Person.Person WHERE BusinessEntityID > 5 AND  BusinessEntityID < 20 ORDER BY 1



