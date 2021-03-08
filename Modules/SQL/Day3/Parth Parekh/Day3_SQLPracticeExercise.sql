/*** String Function ***/

/*** ASCII Funtion ***/
SELECT ASCII('A') 
/*** CHAR Funtion ***/
SELECT CHAR(65)
/*** CHARINDEX Function ***/
SELECT CHARINDEX ('S' , 'MICROSOFT SQL SERVER 2012' , 4)

/*** CONCAT Function ***/
SELECT CONCAT ('Parth',' ','Parekh')

/*** FORMAT Function ***/
DECLARE @d DATETIME = '01/02/2021'
SELECT FORMAT (@d , 'd' , 'en-US')

/*** LEN Function ***/
SELECT LEN('MICROSOFT SQL SERVER 2021')

/*** LOWER Function ***/
SELECT LOWER('MICROSOFT SQL SERVER 2021')

/*** LTRIM Function***/
SELECT LTRIM('   MICROSOFT SQL SERVER 2021')

/*** RTRIM Function***/
SELECT RTRIM('MICROSOFT SQL SERVER 2021        ')

/*** PATINDEX Function***/
SELECT PATINDEX('%SER%','SQL SERVER')

/*** REPLACE  Function***/
SELECT REPLACE ('DONT RESPECT GIRLS', 'DONT' , 'ALWAYS') 

/*** STUFF  Function***/
SELECT STUFF('abcdef', 2, 3, 'ijklmn');  

/*** STRING_SPLIT Function***/
SELECT value FROM STRING_SPLIT('Lorem ipsum dolor sit amet.', ' ');

/*** SUBSTRING  Function***/
SELECT x =  SUBSTRING('abcdef', 2, 3);  

/*** TRANSLATE Function***/
SELECT TRANSLATE('2*[3+4]/{7-2}', '[]{}', '()()');

/*** Space Function***/
USE AdventureWorks2012;  
GO  
SELECT RTRIM(LastName) + ',' + SPACE(2) +  LTRIM(FirstName)  
FROM Person.Person  
ORDER BY LastName, FirstName;  
GO  

/*** REVERSE Function ***/
SELECT REVERSE(1234) AS Reversed  

SELECT * FROM HumanResources.Employee
SELECT NAME = JobTitle+' '+ LEFT(BirthDate,4) + '. '  FROM HumanResources.Employee

/***  DATE EXAMPLE PPT QUERIES ***/

SELECT BusinessEntityID, DATENAME(MM , HireDate) + ', ' +  CONVERT(varchar , DATEPART(YYYY , HireDate)) AS 'Joining' FROM HumanResources.Employee

SELECT DATENAME(MM, GETDATE()) + SPACE(1) + CAST ( DATEPART (dd ,GETDATE()) AS VARCHAR) + ', ' + CAST (DATEPART(YYYY,GETDATE()) AS varchar )

SELECT GETDATE()

SELECT FirstName , LastName  FROM Employees WHERE HireDate >= '1987-06-01' AND  HireDate <= '1987-07-30'

SELECT FirstName , HireDate , DATEDIFF(YEAR , HireDate , GETDATE()) Experience FROM Employees 

/*** MATH Function ***/

SELECT CEILING(14.45)
SELECT exp(14.45)
SELECT FLOOR(14.45)
SELECT POWER( 4 , 3)
SELECT ROUND(15.7894 , 1)

SELECT  BusinessEntityID , 'Hourly Pay Rate' = ROUND(Rate , 1) FROM HumanResources.EmployeePayHistory

/* System Function */
SELECT HOST_ID() AS 'HOST ID'

SELECT SYSDATETIME()
    ,SYSDATETIMEOFFSET()
    ,SYSUTCDATETIME()
    ,CURRENT_TIMESTAMP
    ,GETDATE()
    ,GETUTCDATE();