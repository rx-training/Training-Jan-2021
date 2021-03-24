
--Day7

--What to Learn

--Union Clause
--Except and Intersect Clauses
--Derived Tables
--CTE

--Practice exercise:


--Returns distinct rows from both tables
SELECT Name FROM SalesPersons 
UNION 
SELECT Name FROM Customers ;

--Returns Duplicate rows from both tables 
SELECT Name FROM SalesPersons 
UNION ALL
SELECT Name FROM Customers ;

--Returns common field from both tables
SELECT Name FROM SalesPersons 
INTERSECT
SELECT Name FROM Customers ;

--Returns all rows of left table
SELECT Name FROM Customers 
EXCEPT
SELECT Name FROM SalesPersons ;



--Do the practice exercise from the following link
--https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql?view=sql-server-ver15

--A. Creating a simple common table expression
--The following example shows the total number of sales orders per year for each sales representative at Adventure Works Cycles.
WITH Sales_CTE ( SalespersonId , Vin , SaleYear ) 
AS
(
	SELECT SalespersonId , Vin , YEAR(SaleDate) AS SaleYear
	FROM Sales
)
SELECT SalespersonId , COUNT(Vin) AS TotalCars , SaleYear
FROM Sales_CTE
GROUP BY SaleYear , SalespersonId 
ORDER BY SalespersonId , SaleYear ;



--B. Using a common table expression to limit counts and report averages
--The following example shows the average number of sales orders for all years for the sales representatives.
WITH Sales_CTE ( SalespersonId , NumberOfSales ) AS
(
	SELECT SalespersonId , COUNT(*) FROM Sales GROUP BY SalespersonId 
)
SELECT AVG(NumberOfSales) AS 'Average persons sale' FROM Sales_CTE ;



--C. Using multiple CTE definitions in a single query
WITH Car_CTE AS
(
	SELECT CarId , Vin , InvoicePrice 
	FROM Car
) ,
	Sale_CTE AS 
( 
	SELECT SaleId , Vin AS SaleVin , Saleprice
	FROM Sales
) 
SELECT CarId , SaleId , SaleVin , FORMAT(Saleprice - InvoicePrice , 'C' , 'en-us') AS Profit
FROM Car_CTE
JOIN Sale_CTE ON Car_CTE.Vin = Sale_CTE.SaleVin
ORDER BY Profit DESC ;



--D. Using a recursive common table expression to display multiple levels of recursion
WITH E_Cte(ManagerID, EmployeeID, FirstName, EmployeeLevel) AS   
(  
    SELECT ManagerID, EmployeeID, FirstName, 0 AS EmployeeLevel  
    FROM Employees   
    WHERE ManagerID = 0  

    UNION ALL  

    SELECT e.ManagerID, e.EmployeeID, e.FirstName, EmployeeLevel + 1  
    FROM Employees AS e  
        INNER JOIN E_Cte AS d  
        ON e.ManagerID = d.EmployeeID   
)  
SELECT ManagerID, EmployeeID, FirstName, EmployeeLevel   
FROM E_Cte  
ORDER BY EmployeeLevel ;




WITH E_Cte(EmployeeID , ManagerID , Name ,  EmployeeLevel ) AS 
( 
	SELECT	e.EmployeeID ,
			e.ManagerID ,
			CONVERT(VARCHAR , e.FirstName + ' ' + e.LastName ),
			1 AS EmployeeLevel
	FROM Employees e
	WHERE e.ManagerID = 0
	UNION ALL 

	SELECT	m.EmployeeID , 
			m.ManagerID ,
			CONVERT(VARCHAR , REPLICATE('|    ', EmployeeLevel) + m.FirstName + ' ' + m.LastName ) ,
			EmployeeLevel + 1
	FROM Employees m
	JOIN E_Cte AS c
		ON m.ManagerID = c.EmployeeID 
)
SELECT * FROM E_Cte ;


