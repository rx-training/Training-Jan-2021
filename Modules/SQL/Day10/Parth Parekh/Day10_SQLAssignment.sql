/* Using cursor implement the following task employee

Update the salary of the employee using following condition

Salary between 30000 and 40000 — 5000 hike

Salary between 40000 and 55000 — 7000 hike

Salary between 55000 and 65000 — 9000 hike */

SET NOCOUNT ON 
DECLARE @Id int ,@Name varchar(50) , @Salary int ,@Temp int
DECLARE cur_emp CURSOR 
STATIC FOR 
SELECT   EMPLOYEE_ID , FIRST_NAME  , SALARY FROM EMPLOYEE
OPEN cur_emp

IF @@CURSOR_ROWS > 0
BEGIN 
FETCH NEXT FROM cur_emp INTO @Id , @Name , @Salary
WHILE @@FETCH_STATUS = 0
BEGIN 
	IF @Salary BETWEEN 30000 AND 40000
	BEGIN
		SET @Temp  =  @Salary + 5000	
		UPDATE EMPLOYEE SET SALARY = @Temp WHERE EMPLOYEE_ID = @Id
	END
	IF @Salary BETWEEN 40000 AND 55000
	BEGIN
		SET @Temp  =  @Salary + 7000	
		UPDATE EMPLOYEE SET SALARY = @Temp WHERE EMPLOYEE_ID = @Id
	END
	IF @Salary BETWEEN 55000 AND 65000
	BEGIN
		SET @Temp = @Salary + 9000
		UPDATE EMPLOYEE SET SALARY = @Temp  WHERE EMPLOYEE_ID = @Id
	END
	FETCH NEXT FROM cur_emp INTO @Id , @Name , @Salary
END
END
CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF

--SELECT * FROM EMPLOYEE
