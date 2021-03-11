/*Select employee details from employee table if data exists in incentive table ?*/

SELECT * FROM Employees WHERE EXISTS (SELECT * FROM Incentives)

/*Find Salary of the employee whose salary is more than Roy Salary*/

SELECT Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName = 'Roy')

/*Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount*/

CREATE VIEW Emp AS
SELECT e.FirstName,e.LastName,e.Salary,e.JoiningDate,i.IncentiveDate,i.IncentiveAmount 
FROM Employees e JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId

/*Create a view to select Select first_name, incentive amount from employee and 
incentives table for those employees who have incentives and incentive amount greater than 3000*/


CREATE VIEW Emp2 AS
SELECT e.FirstName,i.IncentiveAmount 
FROM Employees e JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId WHERE i.IncentiveAmount>3000
