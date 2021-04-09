USE Day9SQL;

--Banking As bank Dept
DECLARE @NAME varchar,@JOB_NAME varchar,@SALARY money
SELECT @NAME=e.FirstName+' '+e.LastName,@JOB_NAME= d.DepartmentName,@SALARY=e.Salary FROM 
Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE D.DepartmentName='BANKING';
IF @SALARY > 2000 
PRINT 'IT IS GOOD SALARY PER MONTH'
ELSE 
BEGIN
PRINT 'YOU CAN WORK HARD'
END
GO

 

--Insurance   As bank Dept
DECLARE @NAME varchar,@JOB_NAME varchar,@SALARY money
SELECT @NAME=e.FirstName+' '+e.LastName,@JOB_NAME= d.DepartmentName,@SALARY=e.Salary FROM 
Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE D.DepartmentName='Insurance';
IF @SALARY > 2000 
PRINT 'IT IS GOOD SALARY PER MONTH'
ELSE 
BEGIN
PRINT 'YOU CAN WORK HARD'
END
GO

 

--Banking As bank Dept
DECLARE @NAME varchar,@JOB_NAME varchar,@SALARY money
SELECT @NAME=e.FirstName+' '+e.LastName,@JOB_NAME= d.DepartmentName,@SALARY=e.Salary FROM 
Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE D.DepartmentName='Services';
IF @SALARY > 2000 
PRINT 'IT IS GOOD SALARY PER MONTH'
ELSE 
BEGIN
PRINT 'YOU CAN WORK HARD'
END
GO
 