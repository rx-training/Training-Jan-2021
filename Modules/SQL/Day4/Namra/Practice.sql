
-- Aggrgate Function
	-- SUM, COUNT, AVG, MAX, MIN
		SELECT SUM(Rate) FROM HumanResources.EmployeePayHistory
		-- SUM OF RATE : 5611.7821
		SELECT COUNT(Rate) FROM HumanResources.EmployeePayHistory
		-- COUNT OF RATE : 316
		SELECT AVG(Rate) FROM HumanResources.EmployeePayHistory
		-- AVARAGE RATE : 17.7588
		SELECT MAX(Rate) FROM HumanResources.EmployeePayHistory
		-- MAXIMUM RATE : 125.50
		SELECT MIN(Rate) FROM HumanResources.EmployeePayHistory
		-- MINIMUM RATE : 6.50

		-- If var is used on all items in a SELECT statements, each value in the result set is included in the calculation. 
		-- VAR can be used with numeric columns only. Null values are ignored. 
		SELECT VAR(Bonus)[VarSales] FROM Sales.SalesPerson

-- Getting employees data sorted by sickleavehours
SELECT * FROM HumanResources.Employee ORDER BY SickLeaveHours
SELECT BusinessEntityID,JobTitle, SickLeaveHours FROM HumanResources.Employee ORDER BY JobTitle,SickLeaveHours

-- to get top 4 sickleave hours employees
SELECT TOP(4) SickLeaveHours, JobTitle FROM HumanResources.Employee ORDER BY SickLeaveHours;

-- Getting top 10 using nested select statement
SELECT * FROM 
(SELECT JobTitle, SickLeaveHours, ROW_NUMBER() OVER (ORDER BY SickLeaveHours)'RankInfo'
FROM HumanResources.Employee) as tbl
WHERE RankInfo BETWEEN 1 AND 10;

-- Group By

	SELECT Gender, SUM(SickLeaveHours)'SUMOFHOURS',Count(SickLeaveHours)'NoOfEmployee' FROM HumanResources.Employee GROUP BY Gender;
	SELECT JobTitle, SUM(SickLeaveHours)'SUMOFHOURS',Count(SickLeaveHours)'NoOfEmployee' FROM HumanResources.Employee GROUP BY JobTitle;
	SELECT JobTitle, Gender, SUM(SickLeaveHours)'SUMOFHOURS',Count(SickLeaveHours)'NoOfEmployee' FROM HumanResources.Employee GROUP BY JobTitle, Gender;
	
-- Group By ROLL UP

	SELECT JobTitle, Gender, SUM(SickLeaveHours) AS leaveHours FROM HumanResources.Employee GROUP BY ROLLUP(Gender,JobTitle)

-- Group By CUBE()

	SELECT JobTitle, Gender,SUM(SickLeaveHours) AS TotalLeaveHours FROM HumanResources.Employee GROUP BY CUBE(JobTitle,Gender)
	
-- GROUP BY GROUPING SETS()

	SELECT JobTitle, Gender,SUM(SickLeaveHours) AS TotalLeaveHours FROM HumanResources.Employee
	GROUP BY GROUPING SETS(ROLLUP(Gender, JobTitle), CUBE(Gender, JobTitle))

-- Having clause

	SELECT SalesOrderID, SUM(UnitPrice) AS UnitTotal FROM Sales.SalesOrderDetail
	GROUP BY SalesOrderID 
	HAVING SUM(UnitPrice)>10000.00 ORDER BY SalesOrderID;

-- Ranking Function 

	SELECT BusinessEntityID, DENSE_RANK() OVER(ORDER BY Rate)'DRate', RANK() OVER (ORDER BY Rate)'RankRate', ROW_NUMBER() OVER (ORDER BY Rate)'RowRate',NTILE(3) OVER(ORDER BY Rate) 'NTILERate(3)' FROM HumanResources.EmployeePayHistory ORDER BY Rate

	SELECT BusinessEntityID,NTILE(3) OVER(PARTITION BY PayFrequency ORDER BY Rate) AS NTILERate FROM HumanResources.EmployeePayHistory ORDER BY Rate
	