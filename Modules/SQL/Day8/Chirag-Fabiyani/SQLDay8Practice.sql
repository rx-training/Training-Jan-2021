
----CREATE INDEX----

CREATE NONCLUSTERED INDEX Dept_DepartmentName ON dbo.Departments (DepartmentName);

CREATE NONCLUSTERED INDEX Dept_ManagerID ON dbo.Departments (ManagerID);



----DELETE INDEX----

DROP INDEX Dept_ManagerID ON dbo.Departments;



----MODIFY INDEX----

ALTER INDEX Dept_DepartmentName ON dbo.Departments
SET(
	STATISTICS_NORECOMPUTE = ON
);



----RENAME INDEX----

EXEC sp_rename 'dbo.Departments.Dept_DepartmentName', 'Dept_DN', 'INDEX';