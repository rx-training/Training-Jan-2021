USE Day4


CREATE TABLE ExamResult(
	StudentName VARCHAR(70), 
	Subject VARCHAR(20), 
	Marks INT
)


INSERT INTO ExamResult
VALUES
('Lily', 
 'Maths', 
 65
),
('Lily', 
 'Science', 
 80
),
('Lily', 
 'english', 
 70
),
('Isabella', 
 'Maths', 
 50
),
('Isabella', 
 'Science', 
 70
),
('Isabella', 
 'english', 
 90
),
('Olivia', 
 'Maths', 
 55
),
('Olivia', 
 'Science', 
 60
),
('Olivia', 
 'english', 
 89
)


SELECT StudentName, Subject, Marks, ROW_NUMBER() OVER(ORDER BY Marks) AS 'RowNumber'
FROM ExamResult  --Gives Row Number to every row ordered by marks


SELECT StudentName, Subject, Marks, RANK() OVER(PARTITION BY StudentName ORDER BY Marks DESC) AS 'Rank'
FROM ExamResult
ORDER BY StudentName, Rank  --Makes partition by Student name


SELECT StudentName, Subject, Marks, DENSE_RANK() OVER(ORDER BY Marks) AS 'Rank'
FROM ExamResult
ORDER BY Rank  --Applies same rank to similar values


SELECT *, NTILE(2) OVER(ORDER BY Marks) AS 'Rank'
FROM ExamResult  --Divides the marks in 2 ranks


SELECT SUM(Marks) AS 'Sum of Marks', COUNT(*) AS 'Count', AVG(Marks) AS 'Average of Marks'
FROM ExamResult   --Aggregate functions


USE Day4
CREATE TABLE Sales(
	Country VARCHAR(50),
	Region VARCHAR(50),
	Sales INT
)


INSERT INTO Sales 
VALUES(
	'Canada', 'Alberta', 100
),
('Canada', 'British Columbia', 200),
('Canada', 'British Columbia', 300),
('United States', 'Montana', 100)


-- Group By
SELECT Country, Region, SUM(Sales) AS 'Total Sales'
FROM Sales
GROUP BY Country, Region


-- Group By ROLLUP
SELECT Country, Region, SUM(Sales) AS 'Total Sales'
FROM Sales
GROUP BY ROLLUP(Country, Region)


-- Group By CUBE
SELECT Country, Region, SUM(Sales) AS 'Total Sales'
FROM Sales
GROUP BY CUBE(Country, Region)


-- Group By GROUPING SETS
SELECT Country, Region, SUM(Sales) AS 'Total Sales'
FROM Sales
GROUP BY GROUPING SETS(ROLLUP(Country, Region), CUBE(Country, Region))


--HAVING clause
USE AdventureWorks2012
SELECT SalesOrderId, SUM(LineTotal) AS 'Sub-Total'
FROM Sales.SalesOrderDetail
GROUP BY SalesOrderID
HAVING SUM(LineTotal) > 100000.00
ORDER BY SalesOrderID