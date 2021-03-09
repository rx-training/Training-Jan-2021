/* Practice Exercise Day 4 */

--Danse Rank

SELECT Rate, DENSE_RANK() OVER(ORDER BY Rate) AS 'Danse Rank' FROM HumanResources.EmployeePayHistory;

--Rank

SELECT Rate, RANK() OVER(ORDER BY Rate) AS 'Rank' FROM HumanResources.EmployeePayHistory;

--Row Number

SELECT Rate, ROW_NUMBER() OVER(ORDER BY Rate) AS 'Rank' FROM HumanResources.EmployeePayHistory;

--NTILE

SELECT Rate, NTILE(50) OVER(ORDER BY Rate) AS 'Rank' FROM HumanResources.EmployeePayHistory;

--PARTITION BY

SELECT Gender,RANK() OVER(PARTITION BY Gender ORDER BY VacationHours) 'Result' FROM HumanResources.Employee;

--Aggrate Function

--SUM

SELECT SUM(Rate) AS 'Sum Of Rate' FROM HumanResources.EmployeePayHistory;

--COUNT

SELECT COUNT(Rate) AS 'Count Of Rate' FROM HumanResources.EmployeePayHistory;

--AVG

SELECT AVG(Rate) AS 'Avg Of Rate' FROM HumanResources.EmployeePayHistory;

--MAX

SELECT MAX(Rate) AS 'Max Of Rate' FROM HumanResources.EmployeePayHistory;

--MIN

SELECT MIN(Rate) AS 'Min Of Rate' FROM HumanResources.EmployeePayHistory;

--Group By

SELECT JobTitle,SickLeaveHours,SUM(SickLeaveHours) 'Total Sick Leave Hours' FROM HumanResources.Employee GROUP BY JobTitle,SickLeaveHours;

--Grup By Rollup

SELECT JobTitle,SickLeaveHours,SUM(SickLeaveHours) 'Total Sick Leave Hours' FROM HumanResources.Employee GROUP BY ROLLUP(JobTitle,SickLeaveHours);

--Grup By Cube

SELECT JobTitle,Gender,SUM(SickLeaveHours) 'Total Sick Leave Hours' FROM HumanResources.Employee GROUP BY CUBE(JobTitle,Gender);

--Grup By Grouping Sets

SELECT JobTitle,Gender,SUM(SickLeaveHours) 'Total Sick Leave Hours' FROM HumanResources.Employee GROUP BY GROUPING SETS(ROLLUP(JobTitle,Gender),CUBE(JobTitle,Gender));

--HAVING

SELECT JobTitle,Gender,SUM(SickLeaveHours) 'Total Sick Leave Hours' FROM HumanResources.Employee GROUP BY JobTitle,Gender HAVING SUM(SickLeaveHours) > 100 ORDER BY JobTitle;

--SELECT INTO

SELECT BusinessEntityID,Rate INTO TopEmployees FROM HumanResources.EmployeePayHistory WHERE Rate> 50;

