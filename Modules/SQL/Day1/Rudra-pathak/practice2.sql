USE DayOne;

CREATE TABLE JobHistory(
	EmployeeId INT NOT NULL PRIMARY KEY,
	JobId INT NOT NULL,
	DepartmentId INT NOT NULL,
	StartDate VARCHAR(10) NOT NULL CONSTRAINT chkJoBStartDate CHECK(StartDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
	EndDate VARCHAR(10) NOT NULL CONSTRAINT chkJobEndDate CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
);

--DROP TABLE JobHistory;