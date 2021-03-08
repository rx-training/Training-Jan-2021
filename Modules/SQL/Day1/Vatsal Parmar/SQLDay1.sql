/*Day 1*/
/*Practice Exercise 1*/
CREATE TABLE Countries(
CountryId INT NOT NULL UNIQUE,
CountryName VARCHAR(20) CONSTRAINT chkCountryName CHECK(CountryName IN ('Italy','India','China')),
RegionId INT NOT NULL UNIQUE,
CONSTRAINT pkCountries PRIMARY KEY(CountryId,RegionId),
)

/*Practice Exercise 2*/
CREATE TABLE JobHistories(
EmployeeId INT NOT NULL CONSTRAINT pkEmployeeId PRIMARY KEY IDENTITY,
JobId INT NOT NULL,
DepartmentId INT NOT NULL,
StartDate DATE NOT NULL,
EndDate VARCHAR(20) NOT NULL CONSTRAINT chkEndDate CHECK(EndDate like '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')
)

/*Practice Exercise 3 Using GUI*/
CREATE TABLE [dbo].[Jobs](
	[JobId] [int] NOT NULL,
	[JobTitle] [varchar](50) NOT NULL,
	[MinSalary] [money] NOT NULL,
	[MaxSalary] [money] NULL,
 CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED 
(
	[JobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Jobs] ADD  CONSTRAINT [DF_Jobs_JobTitle]  DEFAULT ('Blank') FOR [JobTitle]
GO

ALTER TABLE [dbo].[Jobs] ADD  CONSTRAINT [DF_Jobs_MinSalary]  DEFAULT ((8000)) FOR [MinSalary]
GO

ALTER TABLE [dbo].[Jobs] ADD  CONSTRAINT [DF_Jobs_MaxSalary]  DEFAULT (NULL) FOR [MaxSalary]
GO

/*Practice Exercise 4*/
CREATE TABLE Departments(
DepartmentId INT NOT NULL CONSTRAINT pkDeoartmentId PRIMARY KEY IDENTITY,
DepartmentName VARCHAR(20) NOT NULL
)
CREATE TABLE Employees(
EmployeeId INT NOT NULL CONSTRAINT pkEmoloyeeId PRIMARY KEY,
FirstName VARCHAR(20) NOT NULL,
LastName VARCHAR(20) NOT NULL,
Email VARCHAR(20) NOT NULL,
PhoneNumber INT NOT NULL,
HireDate DATE NOT NULL,
JobId INT NOT NULL CONSTRAINT fkJobId FOREIGN KEY REFERENCES dbo.Jobs(JobId),
Salary INT NOT NULL,
Commission INT NOT NULL,
ManagerId INT NOT NULL,
DepartmentId INT NOT NULL CONSTRAINT fkDepartmentId FOREIGN KEY REFERENCES dbo.Departments(DepartmentId),
)

/* Alter statement Practice */
ALTER TABLE dbo.JobHistories ADD CONSTRAINT fk_job_id FOREIGN KEY (JobId) REFERENCES dbo.Jobs(JobId);

ALTER TABLE dbo.JobHistories DROP CONSTRAINT fk_job_id;

ALTER TABLE dbo.JobHistories ADD Location VARCHAR(20);

/* Assignment: */
CREATE TABLE CarEmployees(
EmployeeId INT NOT NULL CONSTRAINT pk_EmployeeId PRIMARY KEY IDENTITY,
EmployeeName VARCHAR(20) NOT NULL,
Commission INT NOT NULL UNIQUE,
)
CREATE TABLE Inventories(
InvetoryId INT NOT NULL CONSTRAINT pk_InventoryId PRIMARY KEY,
InvetoryName VARCHAR(20) NOT NULL,
NumberOfInventoryLeft INT NOT NULL,
Price INT NOT NULL,
)
CREATE TABLE Sales(
EmployeeId INT NOT NULL CONSTRAINT fk_EmployeeId FOREIGN KEY REFERENCES dbo.CarEmployees(EmployeeId),
InventoryId INT NOT NULL CONSTRAINT fk_InventoryId FOREIGN KEY REFERENCES dbo.Inventories(InvetoryId),
NumberOfItemsSold INT NOT NULL,
)
