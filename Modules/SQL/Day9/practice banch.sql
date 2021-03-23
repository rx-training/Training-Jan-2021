use Day9SQL;

CREATE TABLE  Emp(Id int, Firstname varchar(10), Salary  money);

--Declare Variable

DECLARE @empdatas int;

SELECT empdatas = max(Salary)  From Emp ;
-- print
DECLARE @printprac varchar(100) = 'Hello my name is niraj'; 
PRINT @printprac;

--if
DECLARE @working money,@name varchar(20)
SELECT @working = Salary,@name= Firstname From Emp where id=5;
IF @working >20000
PRINT ' Salary is more then 20000';
ELSE
BEGIN
PRINT ' Salary is Poor Salary 20000';
END

--case 
SELECT Id,Firstname ,'Stauts' =
CASE Salary
	WHEN 20000 THEN 'comman'
	WHEN 40000 THEN 'Good '
	WHEN 50000 THEN 'Best'
	WHEN 100000 THEN 'Highested'
	ELSE 'not applicable'
END
FROM Emp Where Id<6;


--while
 use Day9SQL;

WHILE (SELECT AVG(Salary) FROM Emp) > 40000
BEGIN
UPDATE Emp SET Firstname ='Arjun'
SELECT AVG(Salary) FROM Emp 
IF (SELECT AVG(Salary) FROM Emp) > 50000
BREAK
ELSE 
	CONTINUE
END
PRINT 'Finnally complete when loop'
GO
SELECT * from Emp;
