use CompanyTraining;
--select * from Employees;
----------------------String functions------------------
--     1)select ASCII('A');
--	   2)select	CHAR(98);
 
/*     3)Loop
Declare @start int
Set @start=97
while(@start<=122)
Begin 
	Print CHAR(@start)
	Set @start=@start+1
End
*/

/*
4) LTRIM and RTRIM is used to remove white spaces
select LTRIM('              Hello')
select RTRIM('   Hello              ')
select FirstName,LastName,Email,FirstName+'  '+LastName as FullName	 from Employees;
*/


/*
5) UPPER,LOWER and REVERSE
SELECT REVERSE(UPPER(FirstName)),LOWER(LastName) from Employees;
*/

/*
6) LENGTH
SELECT FirstName,LEN(FirstName) as TotalCharacters from Employees;
*/

/*
7)LEFT,RIGHT,CHARINDEX,SUBSTRING

SELECT LEFT('ABCDEFGHI',5)
SELECT RIGHT('ABCDEFGHI',5)
SELECT CHARINDEX('#','ABC#1234')--RETURNS POSITION OF #
SELECT SUBSTRING('sara@aaa.com',6,7)
SELECT SUBSTRING('pam@bbb.com',CHARINDEX('@','pam@bbb.com')+1,7)

*/

/*
8) REPLICATE(REPEAT),SPACE,PATINDEX,REPLACE,STUFF

1)   SELECT REPLICATE('pragim  ',3)
2)	 SELECT FirstName + SPACE(5) +LastName as FullName from Employees;
3)   SELECT Email,PATINDEX('%@aaa.com',Email) as FirstOccurence
	 from Employees
	 WHERE PATINDEX('%@aaa.com',Email) > 0

4)	SELECT Email,REPLACE(Email,'.com','.net') as ConvertedEmail
	from Employees;

5)  SELECT FirstName,LastName,Email,STUFF (Email,2,3,'*****') as StuffedEmail from Employees;

*/


----------------------------------------------DATE TIME FUNCTIONS-----------------------------------------------------------
--1)  SELECT GETDATE()
--2)  SELECT CURRENT_TIMESTAMP
--3)  SELECT SYSDATETIME()
--4)  SELECT SYSDATETIMEOFFSET()
--5)  SELECT GETUTCDATE()
--6)  SELECT DAY(GETDATE())
--7)  SELECT DAY('01/31/2012') --OUTPUT:-31
--8)  SELECT MONTH(GETDATE())
--9)  SELECT MONTH('01/31/2012')
--10) SELECT YEAR(GETDATE())
--11) SELECT YEAR('01/31/2012')
