USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

--RANKING FUNCTIONS
SELECT JobTitle, DENSE_RANK() OVER (ORDER BY JobTitle) 'DenseRank', RANK() OVER (ORDER BY JobTitle) 'Rank', ROW_NUMBER() OVER (ORDER BY JobTitle) 'RowNumber'
FROM HumanResources.Employee

SELECT JobTitle, Gender, DENSE_RANK() OVER (PARTITION BY Gender ORDER BY JobTitle) 'DenseRank', RANK() OVER (PARTITION BY Gender ORDER BY JobTitle) 'Rank'
, ROW_NUMBER() OVER (PARTITION BY Gender ORDER BY JobTitle) 'RowNumber'
FROM HumanResources.Employee

SELECT JobTitle, Gender, NTILE(2) OVER (ORDER BY JobTitle) 'NTLIE2', NTILE(3) OVER (ORDER BY JobTitle) 'NTLIE3',  NTILE(4) OVER (ORDER BY JobTitle) 'NTLIE4'
, NTILE(4) OVER (PARTITION BY Gender ORDER BY JobTitle) 'NTILE4Partition'
FROM HumanResources.Employee

SELECT TOP(10) BusinessEntityID, JobTitle, DENSE_RANK() OVER (ORDER BY JobTitle) 'DenseRank'
FROM HumanResources.Employee

SELECT TOP(10) BusinessEntityID, JobTitle, RANK() OVER (ORDER BY JobTitle) 'Rank'
FROM HumanResources.Employee

SELECT TOP(10) BusinessEntityID, JobTitle, ROW_NUMBER() OVER (ORDER BY JobTitle) 'RowNumber'
FROM HumanResources.Employee


--AGGREGATE FUNCTIONS, Group By & Having

SELECT COUNT(*) AS 'TotalEmployees', COUNT(OrganizationLevel) AS 'TotalOrganizationLevel'
FROM HumanResources.Employee

SELECT JobTitle, COUNT(SickleaveHours) AS 'Count', MIN(SickleaveHours) AS 'Min', MAX(SickleaveHours) AS 'Max', AVG(SickleaveHours) AS 'Avg'
, SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee

SELECT JobTitle, COUNT(SickleaveHours) AS 'Count', MIN(SickleaveHours) AS 'Min', MAX(SickleaveHours) AS 'Max', AVG(SickleaveHours) AS 'Avg'
, SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY JobTitle 

SELECT JobTitle, COUNT(SickleaveHours) AS 'Count', MIN(SickleaveHours) AS 'Min', MAX(SickleaveHours) AS 'Max', AVG(SickleaveHours) AS 'Avg'
, SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
WHERE JobTitle IN ('Design Engineer', 'Research and Development Manager', 'Tool Designer', 'Marketing Assistant', 'Marketing Specialist')
GROUP BY JobTitle 
HAVING COUNT(SickleaveHours)>2

SELECT JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', MIN(SickleaveHours) AS 'Min', MAX(SickleaveHours) AS 'Max', AVG(SickleaveHours) AS 'Avg'
, SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY JobTitle, Gender

SELECT JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', MIN(SickleaveHours) AS 'Min', MAX(SickleaveHours) AS 'Max', AVG(SickleaveHours) AS 'Avg'
, SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY  Gender, JobTitle

SELECT JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY ROLLUP (JobTitle, Gender)

SELECT JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY CUBE (JobTitle, Gender)

SELECT JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY GROUPING SETS (ROLLUP (JobTitle, Gender), CUBE (JobTitle, Gender))

SELECT JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY GROUPING SETS ((JobTitle, Gender), (JobTitle))

SELECT JobTitle, GROUPING(JobTitle) AS 'JobTitleTotal', Gender, GROUPING(Gender) AS 'GenderTotal', COUNT(SickleaveHours) AS 'Count', SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY GROUPING SETS ((JobTitle, Gender), (JobTitle))

SELECT GROUPING_ID(JobTitle, Gender) AS 'EmployeeTotal', JobTitle, Gender, COUNT(SickleaveHours) AS 'Count', SUM(SickleaveHours) AS 'Sum'
FROM HumanResources.Employee
GROUP BY GROUPING SETS ((JobTitle, Gender), (JobTitle))
