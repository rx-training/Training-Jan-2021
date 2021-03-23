USE Day5;

SELECT * FROM Employees;

SELECT * FROM Incentives;

/* 1. Select employee details from employee table if data exists in incentive table ? */
SELECT e.*
FROM Employees e
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;


/* 2. Find Salary of the employee whose salary is more than Roy Salary */
SELECT EmployeeId, FirstName, LastName , Salary
FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName = 'Roy');

/* 3. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount */
CREATE VIEW EmployeeIncentives AS
SELECT e.FirstName, e.LastName, e.Salary, e.JoiningDate, i.IncentiveDate, i.IncentiveAmount
FROM Employees e 
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;

SELECT * FROM EmployeeIncentives;


/* 4. Create a view to select Select first_name, incentive amount from employee and incentives table 
for those employees who have incentives and incentive amount greater than 3000 */
CREATE VIEW EmpIncentives AS
SELECT e.FirstName, i.IncentiveAmount
FROM Employees e 
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId
WHERE i.IncentiveAmount > 3000;

SELECT * FROM EmpIncentives;