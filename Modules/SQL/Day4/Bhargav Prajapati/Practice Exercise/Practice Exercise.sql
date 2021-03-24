USE AdventureWorks2012
SELECT * From HumanResources.EmployeePayHistory
---------------Ranking Function--------------------
/*1. DENSE_RANK() Function */
SELECT *,DENSE_RANK() OVER(ORDER BY Rate) AS 'DENSE_RANK() Function' FROM HumanResources.EmployeePayHistory
/*2.RANK() Function*/
SELECT *,RANK() OVER (ORDER BY Rate) AS 'RANK() Function' FROM HumanResources.EmployeePayHistory

/*3.Row Number() Function*/
SELECT *,ROW_NUMBER() OVER(ORDER BY RATE) AS 'ROW_NUMBER() Function '  FROM HumanResources.EmployeePayHistory

/*4. COMBINE All The  Ranking Function*/
SELECT *, DENSE_RANK() OVER (ORDER BY RATE) AS 'DENSE_RANK() Function',RANK() OVER (ORDER BY Rate) AS 'RANK() Function',ROW_NUMBER() OVER(ORDER BY RATE) AS 'ROW_NUMBER() Function ' FROM HumanResources.EmployeePayHistory

/*5. Partition Clause*/
SELECT * FROM HumanResources.Employee
SELECT JobTitle,SickLeaveHours, DENSE_RANK() OVER(PARTITION BY JobTitle ORDER BY SickLeaveHours) AS'Partition Example' FROM HumanResources.Employee

/*6. NTILE */
SELECT JobTitle,SickLeaveHours,NTILE(10) OVER(ORDER BY JobTitle) AS 'NTILE() FUNCTION' FROM HumanResources.Employee

/*7. NTILE  WITH PARTITION*/
SELECT JobTitle,SickLeaveHours,NTILE(10) OVER(PARTITION BY JobTitle ORDER BY SickLeaveHours) AS 'NTILE() FUNCTION' FROM HumanResources.Employee


---------------Aggrigate Function--------------------

/*1. Sum Function*/
SELECT * FROM HumanResources.Employee
SELECT SUM(SickLeaveHours) AS 'SUM FUNCTION' FROM HumanResources.Employee

/*2. COUNT Function*/
SELECT * FROM HumanResources.Employee
SELECT COUNT(OrganizationNode) AS 'COUNT FUNCTION' FROM HumanResources.Employee

/*3. AVG Function*/
SELECT AVG(SickLeaveHours) AS 'COUNT FUNCTION' FROM HumanResources.Employee

/*4. Min Function*/
SELECT MIN(SickLeaveHours) AS 'MIN Function' FROM HumanResources.Employee

/*5. Max Function*/
SELECT MAX(SickLeaveHours) AS 'MAX Function' FROM HumanResources.Employee

/*Aggrigate Function Using Grop By*/
SELECT * FROM HumanResources.Employee
SELECT JobTitle,Gender,SUM(SickLeaveHours) AS'SUM OF SickLeaveHours' FROM HumanResources.Employee GROUP BY  Gender,JobTitle 

/*Aggrigate Function Using  Roll Up*/
SELECT JobTitle,Gender,SUM(SickLeaveHours) AS'SUM OF SickLeaveHours' FROM HumanResources.Employee GROUP BY ROLLUP (JobTitle,Gender) 

/*Aggrigate Function Using  GROP BY CUBE*/
SELECT JobTitle,Gender,SUM(SickLeaveHours) AS'SUM OF SickLeaveHours' FROM HumanResources.Employee GROUP BY CUBE (JobTitle,Gender) 

/*Aggrigate Function Using  GROP BY GROPING SETS*/
SELECT JobTitle,Gender,SUM(SickLeaveHours) AS'SUM OF SickLeaveHours' FROM HumanResources.Employee GROUP BY GROUPING SETS( ROLLUP(JobTitle,Gender),CUBE(JobTitle,Gender)) 

/*Having Clause*/
SELECT JobTitle,Gender,SUM(SickLeaveHours) AS'SUM OF SickLeaveHours' FROM HumanResources.Employee GROUP BY  Gender,JobTitle HAVING SUM(SickLeaveHours)>100


