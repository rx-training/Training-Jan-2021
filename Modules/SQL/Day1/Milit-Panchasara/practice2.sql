USE sqlTraining;

CREATE TABLE JobHistories (
	EmployeeID int PRIMARY KEY NOT NULL,
	StartDate date NOT NULL,
	EndDate date NOT NULL DEFAULT GETDATE(),
	JobID int NOT NULL,
	DepartmentID int NOT NULL,
	CONSTRAINT chkEndDate CHECK(EndDate = CONVERT(date, getdate(),103))
);
