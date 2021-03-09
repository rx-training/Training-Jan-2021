SELECT MAX(Salary) max_department_salary , DepartmentID FROM Employees
GROUP BY (DepartmentID)
ORDER BY max_department_salary
