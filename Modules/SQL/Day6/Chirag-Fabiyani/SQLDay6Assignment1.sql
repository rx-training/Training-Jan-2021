

----Select employee details from employee table if data exists in incentive table ?----

SELECT * FROM Employees WHERE EmployeeID IN (SELECT EmployeeRefID FROM Incentives)




----Find Salary of the employee whose salary is more than Roy Salary----

SELECT Salary FROM Employees Where Salary>(SELECT Salary FROM Employees WHERE FirstName='Roy');




----Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount----

CREATE VIEW p3
AS
SELECT *
FROM Employees e JOIN Incentives i
ON e.EmployeeID=i.EmployeeRefID;

SELECT FirstName,LastName,Salary,JoiningDate,IncentiveDate,IncentiveAmount FROM p3;




----Create a view to select Select first_name, incentive amount from employee and incentives table for those employees----
----who have incentives and incentive amount greater than 3000----

SELECT FirstName,IncentiveAmount FROM p3 WHERE IncentiveAmount>3000;