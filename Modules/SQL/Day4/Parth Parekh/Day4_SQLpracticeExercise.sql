-- Ranked Function
SELECT Rate ,
	DENSE_RANK() OVER ( ORDER BY  Rate) AS 'DENSE_RANK' ,
	ROW_NUMBER() OVER (ORDER BY Rate) AS 'Row_number' ,
	RANK () OVER (ORDER BY Rate) AS 'Rank'
FROM HumanResources.EmployeePayHistory

-- Aggregate Function SUM ,COUNT ,AVG , MIN , MAX
SELECT  SUM(Rate) 'Sum', COUNT(*) 'Count' , AVG(Rate) 'Rate',MIN(Rate) 'MINIMUM' , MAX(Rate) 'MAXIMUM'   FROM HumanResources.EmployeePayHistory

-- Group BY
SELECT JobTitle , Gender , SUM(SickLeaveHours) AS 'Hours' From HumanResources.Employee GROUP BY JobTitle,Gender

-- Group BY ROLLUP
SELECT JobTitle , Gender , SUM(SickLeaveHours) AS 'Hours' From HumanResources.Employee GROUP BY ROLLUP (JobTitle,Gender)

SELECT JobTitle , Gender , SUM(SickLeaveHours) AS 'Hours' From HumanResources.Employee GROUP BY ROLLUP (Gender,JobTitle)

-- GROUP BY CUBE
SELECT JobTitle , Gender , SUM(SickLeaveHours) AS 'Hours' From HumanResources.Employee GROUP BY CUBE (JobTitle,Gender)

-- GROUP BY GROUPING SETS
SELECT JobTitle , Gender , SUM(SickLeaveHours) AS 'Hours' From HumanResources.Employee 
       GROUP BY GROUPING SETS ( ROLLUP (JobTitle,Gender ) , CUBE (JobTitle , Gender))

-- Group BY	HAVING
SELECT JobTitle , Gender , SUM(SickLeaveHours) AS 'Hours' From HumanResources.Employee 
	   GROUP BY JobTitle,Gender HAVING SUM(SickLeaveHours) > 200

-- SELECT - INTO  
SELECT * INTO NewProducts  
FROM Production.Product  
WHERE ListPrice > 25   
AND ListPrice < 100
 
SELECT BusinessEntityID ,VacationHours INTO newTable FROM HumanResources.Employee

-- PARTITION BY
SELECT  JobTitle ,RANK() OVER ( PARTITION BY JobTitle ORDER BY VacationHours ) FROM HumanResources.Employee 

SELECT * FROM HumanResources.Employee

-- Ranking all rows in a result set
SELECT TOP(10) BusinessEntityID , RANK() OVER (ORDER BY Rate DESC) AS RankBySalary  FROM HumanResources.EmployeePayHistory AS t1
Where RateChangeDate = (SELECT MAX(RateChangeDate)   
                        FROM HumanResources.EmployeePayHistory AS t2  
                        WHERE t1.BusinessEntityID = t2.BusinessEntityID)  
ORDER BY BusinessEntityID


-- NTILE 

SELECT * , NTILE(6) OVER (ORDER BY Rate) FROM HumanResources.EmployeePayHistory


SELECT * FROM HumanResources.Department
