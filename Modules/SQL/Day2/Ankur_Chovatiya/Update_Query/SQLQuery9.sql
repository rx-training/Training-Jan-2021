UPDATE Employees
SET Salary = Salary + (Salary * 0.20), CommissionPct = CommissionPct + (CommissionPct * 0.10)
WHERE JobId = 'PU_CLERK' AND Salary NOT NULL 