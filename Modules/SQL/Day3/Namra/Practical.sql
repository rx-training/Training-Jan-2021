SELECT  * from String_Split('Lorem ipsum dolor sit amet.', ' ');

-- ASCII
	SELECT ASCII('A') 
	-- Output : 65

-- CHAR 
	SELECT CHAR(68)
	-- Output : D

-- CHARINDEX
	SELECT CHARINDEX('S', 'MICROSOFT SQL SERVER 2020',4) 
	-- Output : 6
	SELECT CHARINDEX('S', 'MICROSOFT SQL SERVER 2020',7) 
	-- Output : 11

-- Concat
	SELECT CONCAT ('John',' ','Smith');
	-- Output : John Smith

-- Format
	DECLARE @d DATETIME ='01/01/2077';SELECT FORMAT (@d, 'd', 'en-US')
	-- Output : 1/1/2077

-- Left 
	SELECT LEFT ('MICROSOFT SQL SERVER 2122',4)
	-- Output : MICR

-- Lower
	SELECT LOWER ('HELP EVERYONE')
	-- Output : help everyone

-- Len
	SELECT LEN('JOHN SMITH') 
	-- Output : 10

-- Ltrim
	SELECT LTRIM ('      JOHN SMITH')
	-- Output : JOHN SMITH

-- PatIndex
	SELECT PATINDEX ('%SER%','SQL SERVER')
	-- Output : 5

-- Replace
	SELECT REPLACE ('Dont Respect Girls','Dont','Always')
	-- Output : Always Respect Girls

-- RTRIM
	SELECT RTRIM ('SQL SERVER     ')
	-- OUTPUT : SQL SERVER

-- SOUNDEX
	SELECT SOUNDEX ('Smith'), SOUNDEX ('Smythe')
	-- OUTPUT : S530 S530

-- DIFFERENCE
	SELECT DIFFERENCE('SMITHERS','SMYTHERS')
	-- OUTPUT : 4

-- SPACE
	SELECT 'FirstName'+SPACE(3)+'LastName'
	-- OUTPUT : FirstName   LastName

-- STR
	SELECT STR (123.23 , 6,1)
	-- OUTPUT : 123.2
	SELECT STR (123.23 , 2,2)
	-- OUTPUT : **
	SELECT STR (123,8,3)
	-- OUTPUT : 123.000

-- STUFF
	SELECT STUFF('abcdef',2,3,'ijklmn')
	-- OUTPUT :aijklmnef[will replace bcd with ijklmn]

-- SUBSTRING
	SELECT SUBSTRING('MASTER',1,1), SUBSTRING ('MASTER',2,3)
	-- OUTPUT : M  AST

-- TRANSLATE
	SELECT TRANSLATE ('[112.4, 72.3]','[,]','( )')
	-- OUTPUT : (112.4 72.3)
	SELECT REPLACE(REPLACE(REPLACE('abcdef','a','b'),'b','c'),'c','d')
	-- OUTPUT : ddddef
	SELECT TRANSLATE('abcdef','abc','bcd') 
	-- OUTPUT : bcddef

-- TRIM
	SELECT TRIM(',.!' FROM '    #   test   .');
	-- OUTPUT :     #   test   [Completed here]

-- REPLICATE
	SELECT REPLICATE('0', 4) + 'Hello'
	-- OUTPUT : 0000Hello

-- REVERSE
	SELECT REVERSE('Hello')
	-- OUTPUT : olleH

-- RIGHT
	SELECT RIGHT('HELLOHOW',3)
	-- OUTPUT : HOW

-- DATE FUNCTIONS
-- DATEADD
	SELECT DATEADD(mm,3,'2009-01-01')
	-- OUTPUT : 2009-04-01 00:00:00.000

-- DATENAME
	SELECT DATENAME(MONTH, CONVERT (datetime,'2005-06-06'))
	-- Output : June

--GETDATE
	SELECT GETDATE()
	-- OUTPUT : 2021-03-05 15:52:47.810

--DAY
	SELECT DAY('2009-01-05')
	-- OUTPUT : 5

-- Month + Year 
	SELECT BusinessEntityID, DATENAME(mm, HireDate) + ', ' + CONVERT(VARCHAR , DATEPART(yyyy, HireDate)) as 'JOINING'  FROM HumanResources.Employee

-- 2021-03-05 INTO MARCH 5, 2021
	SELECT DATENAME(MM, GETDATE()) + SPACE(1) + CAST(DATEPART(DD, GETDATE()) AS VARCHAR) + ', ' +CAST( DATEPART(YYYY, GETDATE()) AS VARCHAR)
	-- OUTPUT : March 5, 2021

-- 
	SELECT JobTitle, HireDate FROM HumanResources.Employee WHERE HireDate >= '1987-06-01' AND HireDate <= '1987-07-30'

-- To get expierence of the employees
	SELECT BusinessEntityID, HireDate, DATEDIFF(YEAR, HireDate, GETDATE())[Experience] FROM HumanResources.Employee

-- Celling
	SELECT CEILING (14.45)
	-- OUTPUT : 15

-- EXP
	SELECT EXP(4.5)
	-- OUTPUT : 90.0171313005218

-- FLOOR
	SELECT FLOOR(14.45)
	-- OUTPUT : 14

-- POWER
	SELECT POWER(4,3)
	-- OUTPUT : 64

-- ROUND 
	SELECT ROUND(15.789,2)
	-- OUTPUT : 15.790

-- will round to 2 decimal 
	SELECT BusinessEntityID, 'Hourly Pay Rate'=ROUND(Rate,2) FROM HumanResources.EmployeePayHistory

-- ISNULL , COALESCE

	SELECT FirstName, LastName, ISNULL(MiddleName,'NOT AVAILABLE') AS 'IsNullMiddleName', COALESCE (MiddleName, 'NOT AVAILABLE') AS 'CoalesceMiddleName' FROM Person.Person

-- To get last date of the recent month
	SELECT EOMONTH(GETDATE());

-- TRY_PARSE or TRY_CONCAT
	SELECT PARSE('1/100/2021' AS DATE); -- Give an error

	SELECT TRY_PARSE('1/100/2021' AS DATE); -- Give an error
	-- OUTPUT : NULL

--CHOOSE FUNCTION
	SELECT CHOOSE(3,'1','2','3','4')
	-- Output : 3

-- IIF Function
	SELECT IIF(ListPrice > 0,'Normal Product', 'Internal Product') AS ProductInfo, Name FROM Production.Product;
