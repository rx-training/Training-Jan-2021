--Assignment:
--Using cursor implement the following task employee
--Update the salary of the employee using following condition

DECLARE @name VARCHAR(255)
DECLARE @sal INT

DECLARE hike_cursor CURSOR FOR
	SELECT FirstName  , Salary FROM Employees

OPEN hike_cursor
FETCH NEXT FROM hike_cursor INTO @name , @sal 

WHILE @@FETCH_STATUS = 0
BEGIN
	DECLARE @t1 INT 
	DECLARE @t2 INT 
	DECLARE @t3 INT 
	DECLARE @t4 INT 

	--Salary between 30000 and 40000 — 5000 hike
	IF @sal > 3000 AND  @sal < 4000
		BEGIN
			SET @sal = @sal + 5000 ;
			SET @t2 = 1 ;
		END
	ELSE 
		BEGIN 
			SET @t2 = 0 ;
		END

	--Salary between 40000 and 55000 — 7000 hike
	IF @sal > 4000  AND @sal < 5500
		BEGIN
			SET @sal = @sal  + 7000 ;
			SET @t3 = 1 ;
		END
	ELSE 
		BEGIN 
			SET @t3 = 0 ;
		END
	
	--Salary between 55000 and 65000 — 9000 hike
	IF @sal	> 5500 AND @sal < 6500
		BEGIN
			SET @sal = @sal + 9000 ;
			SET @t4 = 1 ;
		END
	ELSE 
		BEGIN 
			SET @t4 = 0 ;
		END


	IF (@t2 = 1) OR (@t3 =1 ) OR (@t4=1)
		BEGIN
			PRINT @name + ' salary hikes to '  + CAST( @sal AS VARCHAR )
		END
	ELSE
		BEGIN
			PRINT @name + ' salary remains same ' + CAST( @sal AS VARCHAR )
		END

	PRINT ' '

	FETCH NEXT FROM hike_cursor INTO @name ,  @sal
END

CLOSE hike_cursor
DEALLOCATE hike_cursor



--Online Reference:

--https://docs.microsoft.com/en-us/sql/t-sql/language-elements/cursors-transact-sql?view=sql-server-ver15