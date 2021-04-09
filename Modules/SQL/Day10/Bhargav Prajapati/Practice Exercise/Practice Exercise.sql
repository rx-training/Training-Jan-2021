USE AdventureWorks2012
SELECT* FROM Person.Person
-------------------------------Example 1-----------------------------------------------------
DECLARE @FirstName varchar(50),@LastName varchar(50)

DECLARE  FullName CURSOR FOR 
SELECT FirstName,LastName  FROM Person.Person WHERE LastName LIKE 'B%' ORDER BY LastName,FirstName

OPEN FullName;

FETCH NEXT FROM FullName INTO @FirstName  ,@LastName
WHILE @@FETCH_STATUS=0
BEGIN
	PRINT 'FullName :-' + @FirstName+SPACE(3) + @LastName
	FETCH NEXT FROM FullName INTO @FirstName , @LastName
	PRINT '============================================='
END

CLOSE FullName
DEALLOCATE FullName
GO

-------------------------------Example2------------------------------------------
SELECT * FROM HumanResources.Employee

DECLARE @VacationHours int ,@SickLeaveHours int 

DECLARE Updateemployee CURSOR  FOR
SELECT VacationHours,SickLeaveHours FROM HumanResources.Employee

OPEN Updateemployee

FETCH NEXT FROM Updateemployee INTO @VacationHours,@SickLeaveHours

WHILE @@FETCH_STATUS=0
BEGIN
	IF(@VacationHours BETWEEN 21 AND 50 )
	BEGIN
		SET	@VacationHours=150
		SET @SickLeaveHours=150
		
		
	END	
	ELSE
	BEGIN
	IF(@VacationHours BETWEEN 51 AND 70)
	BEGIN
	SET @VacationHours=500
	SET @SickLeaveHours=500
	END
	ELSE 
	PRINT 'Not Updated'
	END
	FETCH NEXT FROM Updateemployee INTO @VacationHours,@SickLeaveHours	

END

CLOSE Updateemployee
DEALLOCATE Updateemployee

SELECT * FROM  HumanResources.Employee








