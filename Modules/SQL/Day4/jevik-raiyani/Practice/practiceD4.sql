USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

SELECT LoginID,JobTitle,SickLeaveHours FROM HumanResources.Employee ORDER BY SickLeaveHours

SELECT LoginID,JobTitle,SickLeaveHours, RANK() OVER (ORDER BY SickLeaveHours) AS 'RAnK'
FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, DENSE_RANK() OVER (ORDER BY SickLeaveHours) 'DenseRank'
FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, ROW_NUMBER() OVER (ORDER BY SickLeaveHours) 'RowNumber'
FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, NTILE(58) OVER (ORDER BY SickLeaveHours) 'RowNumber'
FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, RANK() OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours)
AS 'RAnK' FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, DENSE_RANK() OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours)
AS 'RAnK' FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, RANK() OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours)
AS 'RAnK' FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, DENSE_RANK() OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours)
AS 'RAnK' FROM HumanResources.Employee 

SELECT LoginID,JobTitle,SickLeaveHours, NTILE(58) OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours) 
'RowNumber' FROM HumanResources.Employee  

SELECT LoginID,JobTitle,SickLeaveHours,RowNumber FROM (
SELECT LoginID,JobTitle,SickLeaveHours, ROW_NUMBER() OVER (ORDER BY SickLeaveHours) 'RowNumber'
FROM HumanResources.Employee ) New1  WHERE RowNumber<=10

SELECT LoginID,JobTitle,SickLeaveHours,RowNumber FROM (
SELECT LoginID,JobTitle,SickLeaveHours, RANK() OVER (ORDER BY SickLeaveHours) 'RowNumber'
FROM HumanResources.Employee ) New1  WHERE RowNumber<=10

SELECT LoginID,JobTitle,SickLeaveHours,RowNumber FROM (
SELECT LoginID,JobTitle,SickLeaveHours, DENSE_RANK() OVER (ORDER BY SickLeaveHours) 'RowNumber'
FROM HumanResources.Employee ) New1  WHERE RowNumber<=10

SELECT HOST_ID() 

SELECT * FROM HumanResources.Employee

SELECT 
SUM(SickLeaveHours),
COUNT(*),
AVG(SickLeaveHours),
MIN(SickLeaveHours),
MAX(SickLeaveHours) FROM HumanResources.Employee

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee GROUP BY JobTitle, Gender ORDER BY JobTitle

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee GROUP BY ROLLUP (JobTitle, Gender) ORDER BY JobTitle

SELECT JobTitle , Gender
FROM HumanResources.Employee GROUP BY JobTitle, Gender 

SELECT JobTitle , Gender
FROM HumanResources.Employee GROUP BY  Gender , JobTitle

SELECT JobTitle + Gender
FROM HumanResources.Employee GROUP BY JobTitle, Gender 

SELECT JobTitle + Gender
FROM HumanResources.Employee GROUP BY Gender, JobTitle

SELECT JobTitle + Gender
FROM HumanResources.Employee GROUP BY JobTitle + Gender 

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee GROUP BY JobTitle, Gender 

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee GROUP BY ROLLUP (JobTitle, Gender) 

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee GROUP BY CUBE (JobTitle, Gender) 

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee 
GROUP BY GROUPING SETS (ROLLUP (JobTitle, Gender) , CUBE (JobTitle, Gender) )

SELECT JobTitle , SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee 
GROUP BY GROUPING SETS (JobTitle)

SELECT JobTitle , SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee 
GROUP BY GROUPING SETS (JobTitle,())
	
SELECT JobTitle , SUM(SickLeaveHours) 'totalsickleavehours' FROM HumanResources.Employee 
GROUP BY JobTitle HAVING SUM(SickLeaveHours)>100


SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee 
GROUP BY GROUPING SETS (ROLLUP (JobTitle, Gender) , CUBE (JobTitle, Gender) )
HAVING  Gender IS NOT NULL

SELECT JobTitle , Gender, SUM(SickLeaveHours) 'totalsickleavehours'
FROM HumanResources.Employee 
GROUP BY GROUPING SETS (ROLLUP (JobTitle, Gender) , CUBE (JobTitle, Gender) )
HAVING  Gender IS NOT NULL AND SUM(SickLeaveHours) BETWEEN 99 AND 201

SELECT  jevik FROM (
SELECT jevik='NULL',* FROM HumanResources.Employee) new

SELECT * INTO hevik
FROM HumanResources.Employee

SELECT * FROM hevik


SELECT * FROM HumanResources.Employee

