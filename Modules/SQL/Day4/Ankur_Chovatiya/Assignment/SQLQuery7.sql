SELECT SUM(Salary) sum_of_dpt_salary,DepartmentID
FROM Employees
GROUP BY (DepartmentID)
HAVING SUM(Salary) > 5000
ORDER BY sum_of_dpt_salary DESC