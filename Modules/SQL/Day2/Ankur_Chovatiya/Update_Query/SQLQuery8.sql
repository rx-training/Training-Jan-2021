UPDATE Employees
SET  Salary = (
CASE
	WHEN DepartmentID = 40 THEN  Salary + Salary *.25
	WHEN DepartmentID = 90 THEN  Salary + Salary *.15
	WHEN DepartmentID = 110 THEN Salary + Salary * .10
	ELSE Salary + 0
END 
)



SELECT * FROM Employees WHERE DepartmentID IN (40,90,110) 