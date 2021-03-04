--1
UPDATE dbo.Employees set Email = 'not available';

--2
UPDATE dbo.Employees set Email = 'not available', CommissionPct = 0.10;

--3
UPDATE dbo.Employees set Email = 'not available', CommissionPct = 0.10 where DepartmentID = '110';

--4
UPDATE dbo.Employees set Email = 'not available', CommissionPct = 0.10 where DepartmentID = '80' and CommissionPct < 0.20;

--6
UPDATE dbo.Employees set Salary = 8000 where EmployeeID = '105' and Salary < 5000;

--7
UPDATE dbo.Employees set JobID = 'SH_CLERK' where EmployeeID = '118' and DepartmentID = '30' and JobID not like 'SH%';

--8
--UPDATE Statement with OUTPUT keyword and Cases
UPDATE X 
set Salary = CASE DepartmentID
	WHEN 40 THEN Salary * 1.25
	WHEN 90 THEN Salary * 1.15
	WHEN 110 THEN Salary * 1.10
	ELSE Salary END
OUTPUT INSERTED.* from dbo.Employees as X 

--9
UPDATE dbo.Employees set Salary = Salary * 1.2, CommissionPct = CommissionPct * 1.1 WHERE JobID = 'PU_CLERK';