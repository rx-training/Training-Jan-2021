
DECLARE @bank NVARCHAR(50)
DECLARE @insurance NVARCHAR(50)
DECLARE @service NVARCHAR(50)

SET @bank = 'Bank Dept'
SET @insurance = 'Insurance Dept'
SET @service = 'Services Dept'

SELECT EmployeeID, EmployeeName,
	CASE DepartmentName
		WHEN 'Banking' THEN @bank
		WHEN 'Insurance' THEN @insurance
		WHEN 'Services' THEN @service
		ELSE DepartmentName
		END AS DepartmentName
FROM Employees

