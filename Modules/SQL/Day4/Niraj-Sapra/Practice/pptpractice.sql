CREATE DATABASE DAY4SQL;

USE AdventureWorks2012;

/*Aggregate Function*/
SELECT * FROM HumanResources.Employee ;

SELECT SUM(VacationHours) AS SUMDATA,AVG(VacationHours) AS AVERAGES,MIN(VacationHours) AS MinVacationHours,MAX(VacationHours) AS MaxVacationHours,COUNT(*) AS COUNTDATA FROM HumanResources.Employee;

 /*Rank,Dense_Rank,Row_number*/
SELECT * FROM HumanResources.Employee ORDER BY VacationHours;

SELECT DENSE_RANK() OVER (ORDER BY RATE ) 'DRates',RANK() OVER (ORDER BY RATE ) 'RankRates',ROW_NUMBER() OVER (ORDER BY RATE ) 'RownumRate',Rate FROM HumanResources.EmployeePayHistory ORDER BY Rate;

/*NTILE*/
SELECT p.FirstName, p.LastName  
    ,NTILE(4) OVER(ORDER BY SalesYTD DESC) AS Quartile  
    ,CONVERT(NVARCHAR(20),s.SalesYTD,1) AS SalesYTD  
    , a.PostalCode  
FROM Sales.SalesPerson AS s   
INNER JOIN Person.Person AS p   
    ON s.BusinessEntityID = p.BusinessEntityID  
INNER JOIN Person.Address AS a   
    ON a.AddressID = p.BusinessEntityID  
WHERE TerritoryID IS NOT NULL   
    AND SalesYTD <> 0

/*GROOP BY*/
SELECT JobTitle,GENDER,SUM(VacationHours) AS SUMDATA,AVG(VacationHours) AS AVERAGES,MIN(VacationHours) AS
MinVacationHours,MAX(VacationHours) AS MaxVacationHours,COUNT(*) AS COUNTDATA
FROM HumanResources.Employee GROUP BY GENDER,JobTitle ORDER BY JobTitle;

/*HAVING*/
SELECT JobTitle,GENDER,SUM(SICKLEAVEHOURS) AS SUMDATA,AVG(VacationHours) AS AVERAGES,MIN(VacationHours) AS
MinVacationHours,MAX(VacationHours) AS MaxVacationHours,COUNT(*) AS COUNTDATA
FROM HumanResources.Employee GROUP BY GENDER,JobTitle
HAVING SUM(SICKLEAVEHOURS)>100;

/*ROLLUP*/
SELECT JobTitle,GENDER,SUM(VacationHours) AS SUMDATA,AVG(VacationHours) AS AVERAGES,MIN(VacationHours) AS
MinVacationHours,MAX(VacationHours) AS MaxVacationHours,COUNT(*) AS COUNTDATA
FROM HumanResources.Employee GROUP BY GENDER,JobTitle ORDER BY JobTitle;





