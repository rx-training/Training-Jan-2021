SELECT SUM(Salary) Total_salary , DepartmentID FROM Employees
GROUP BY (DepartmentID) ORDER BY Total_salary DESC