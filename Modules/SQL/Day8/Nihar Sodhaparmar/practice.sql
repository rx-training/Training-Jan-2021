USE Day2;


SELECT FirstName
	, LastName
FROM Employees
WHERE LastName = 'Smith';


-- NONCLUSTERED INDEX
CREATE NONCLUSTERED INDEX IX_Employees_LastName ON [dbo].[Employees]
(
	[LastName] ASC
);


-- CLUSTERED INDEX
CREATE CLUSTERED INDEX IX_Employees_EmployeeId_CLUSTERED ON [dbo].[Employees]
(
	[EmployeeId] ASC
);


-- UNIQUE INDEX
CREATE UNIQUE INDEX IX_Employees_EmployeeId_Unique ON [dbo].[Employees]
(
	[EmployeeId] ASC
);


-- Dynamic Statements
DECLARE @sql NVARCHAR(500) = 'SELECT FirstName, LastName FROM Employees WHERE LastName = @LastName;'
DECLARE @parameterDefinations NVARCHAR(500) = '@LastName NVARCHAR(50)';
EXECUTE sp_executesql @sql, @parameterDefinations, @LastName = 'Smith';