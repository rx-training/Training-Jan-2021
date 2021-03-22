SELECT * FROM HumanResources.Employee

SELECT SickLeaveHours,RANK() OVER(ORDER BY SickLeaveHours ) FROM HumanResources.Employee

SELECT SickLeaveHours,
		RANK() OVER(ORDER BY SickLeaveHours),
		DENSE_RANK() OVER (ORDER BY sickLeaveHours)  
   FROM HumanResources.Employee

SELECT DISTINCT RANKf, ROW_NUMBER FROM 
		(SELECT SickLeaveHours,
		RANK() OVER(ORDER BY SickLeaveHours) AS 'RANKf',
		DENSE_RANK() OVER (ORDER BY sickLeaveHours) AS 'DENSE_RANK', 
		ROW_NUMBER() OVER (ORDER BY sickLeaveHours) AS 'ROW_NUMBER'  
		FROM HumanResources.Employee) AS TBL


SELECT SickLeaveHours, Jobtitle,
		RANK() OVER(ORDER BY SickLeaveHours) AS 'RANKf',
		DENSE_RANK() OVER (PARTITION BY JobTitle ORDER BY sickLeaveHours) AS 'DENSE_RANK', 
		ROW_NUMBER() OVER (ORDER BY sickLeaveHours) AS 'ROW_NUMBER'  
		FROM HumanResources.Employee 

SELECT APPROX_COUNT_DISTINCT( SickLeaveHours ) FROM HumanResources.Employee

SELECT AVG( SickLeaveHours ) FROM HumanResources.Employee

SELECT   COUNT(SickLeaveHours), COUNT(DISTINCT SickLeaveHours) FROM HumanResources.Employee  

SELECT   * FROM HumanResources.Employee  

SELECT jOBTITLE,VacationHours, COUNT(SickLeaveHours) as 'SickLeaveHours'
FROM HumanResources.Employee GROUP BY ROLLUP (JOBTITLE,VacationHours)

SELECT Jobtitle , 
	MAX(VacationHours) 'MaxVacationHours',
	MIN(VacationHours) 'MinVacationHours',
	COUNT(VacationHours) 'TotalVacationHours'
	FROM HumanResources.Employee  GROUP BY (Jobtitle)

SELECT jOBTITLE, VacationHours, SUM(SickLeaveHours) as 'SickLeaveHours'
	FROM HumanResources.Employee GROUP BY ROLLUP (JOBTITLE,VacationHours) HAVING( SUM(SickLeaveHours) > 50 )

