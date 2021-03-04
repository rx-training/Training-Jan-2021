-- select into
select * INTO Emp FROM Employees where FirstName like 'M%';

--update query
update Emp set Salary = 8000;

--Merge Statement
MERGE Employees AS TARGET
USING Emp AS SOURCE
ON TARGET.EmployeeID = SOURCE.EmployeeID
WHEN MATCHED AND TARGET.Salary <> SOURCE.Salary THEN UPDATE SET TARGET.Salary = SOURCE.Salary 
WHEN NOT MATCHED BY TARGET THEN INSERT VALUES 
(SOURCE.EmployeeID,
SOURCE.FirstName,
SOURCE.LastName,
SOURCE.Email,
SOURCE.PhoneNumber,
SOURCE.HireDate,
SOURCE.JobId, 
SOURCE.Salary,
SOURCE.CommissionPct,
SOURCE.ManagerID,
SOURCE.DepartmentID)
WHEN NOT MATCHED BY SOURCE THEN DELETE;

--Concate fields and alias
SELECT (FirstName + ' ' + LastName) AS FullName FROM Employees;

--Wildcard characters in like
SELECT * FROM Employees WHERE Salary like '3_00.00' -- '_' any character at that place

-- NULL/NOT NULL
SELECT * FROM Employees WHERE Email IS NOT NULL;