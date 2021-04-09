/************************************************ DAY 10 ****************************************************/

DECLARE @Salary money
DECLARE @EmployeeID INT
DECLARE CurSalary CURSOR 
FOR SELECT  Salary FROM Employees

OPEN CurSalary

FETCH NEXT FROM CurSalary INTO @Salary
WHILE @@FETCH_STATUS = 0 
	BEGIN
		SET @Salary = CASE 
			WHEN @Salary BETWEEN 30000 AND 40000 THEN @Salary+5000
			WHEN @Salary BETWEEN 40000 AND 55000 THEN @salary+7000
			WHEN @Salary BETWEEN 55000 AND 65000 THEN @salary+9000
			ELSE @salary END
		
		UPDATE Employees SET Salary = @Salary
		WHERE CURRENT OF CurSalary
			
		FETCH NEXT FROM CurSalary INTO @Salary
	END
CLOSE CurSalary
DEALLOCATE CurSalary
