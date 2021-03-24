
use CompanyTraining;
Declare @Salary int

Declare SalaryCursor CURSOR FOR
SELECT Salary from Employees

Open SalaryCursor

Fetch Next	from SalaryCursor into @Salary
while(@@FETCH_STATUS=0)
BEGIN
		SELECT  from Employees where Id=@Salary

		if(Salary>30000 and Salary<40000)
				BEGIN 
					UPDATE Employees set Salary+=5000 where  Salary BETWEEN 30000 and 40000  
				END

		else-if(Salary>40000 and Salary<55000)
				BEGIN
					UPDATE Employees set Salary+=7000 where  Salary BETWEEN 40000 and 55000 
				END

		else-if(Salary>55000 and Salary<65000)
				BEGIN
					UPDATE Employees set Salary+=9000 where  Salary BETWEEN 30000 and 40000 
				END
		
		Fetch Next from SalaryCursor into @Salary

END

CLOSE ProductCursor
DEALLOCATE ProductCursor
