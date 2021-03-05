USE SampleDB

/* Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and make sure that no countries
except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId will be unique. */
CREATE TABLE Countries(
	CountryId INT NOT NULL,
	CountryName VARCHAR(50) CONSTRAINT chkCountryName CHECK(CountryName IN('Italy', 'India', 'China')),
	RegionId INT NOT NULL,
	CONSTRAINT pkCountry PRIMARY KEY(CountryId, RegionId)
)

INSERT INTO Countries VALUES (1, 'India', 1)

INSERT INTO Countries VALUES (1, 'China', 2)


/* Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id and Department_Id and
make sure that the value against column EndDate will be entered at the time of insertion to the format like ‘–/–/—-‘. */
CREATE TABLE JobHistorys(
	EmployeeId INT CONSTRAINT pkEmployeeId PRIMARY KEY,
	StartDate DATE,
	EndDate VARCHAR(25) CONSTRAINT chkEndDate CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'),
	Job_Id INT,
	Department_Id INT
)


/* Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, and make sure that, the default
value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be entered automatically at the time of insertion if no value assigned
for the specified columns. */
CREATE TABLE Jobs(
	JobId INT CONSTRAINT pkJobId PRIMARY KEY,
	JobTitle VARCHAR(50) CONSTRAINT DefJobTitle DEFAULT '',
	MinSalary INT CONSTRAINT DefMinSalary DEFAULT 8000,
	MaxSalary INT CONSTRAINT DefMaxSalary DEFAULT NULL
)

SELECT * FROM Jobs

INSERT Jobs (JobId) VALUES (3)

INSERT Jobs (JobId, JobTitle, MinSalary, MaxSalary) VALUES (4, 'PU_CLERK', 5000, 7000)

INSERT Jobs (JobId, JobTitle, MinSalary, MaxSalary) VALUES (5, 'PU_CLERK', 3000, 5000)

CREATE TABLE Departments(
	DepartmentId INT CONSTRAINT pkDepartmentId PRIMARY KEY
)


INSERT Departments (DepartmentId) VALUES (1)

INSERT Departments (DepartmentId) VALUES (2)

SELECT * FROM Departments

/* Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary,
Commission, Manager_Id and Department_Id and make sure that, the Employee_Id column does not contain any duplicate value at the time of insertion, and
the foreign key column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those values which are exists in the
Department table and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only those values which are exists in
the jobs table. */
CREATE TABLE Employees(
	EmployeesId INT CONSTRAINT pkEmployeesId PRIMARY KEY,
	FirstName VARCHAR(25),
	LastName VARCHAR(25),
	Email VARCHAR(50),
	PhoneNumber INT,
	HireDate DATE,
	JobId INT CONSTRAINT fkJobId FOREIGN KEY REFERENCES Jobs(JobId),
	Salary INT,
	Commision INT,
	ManagerId INT,
	DepartmentId INT CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES Departments(DepartmentId)
)

/* Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId
of jobs table. */
ALTER TABLE JobHistorys ADD JobId INT CONSTRAINT fk_Job_Id FOREIGN KEY REFERENCES Jobs(JobId)

/* Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table. */
ALTER TABLE JobHistorys DROP CONSTRAINT fk_Job_Id

SELECT * FROM JobHistorys

/*Write a SQL statement to add a new column named location to the JobHistory table.*/
ALTER TABLE JobHistorys ADD Locations VARCHAR(50)


