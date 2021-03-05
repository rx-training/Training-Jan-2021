/*******practice Exercise 1 *****/
CREATE TABLE Countries
(
	CountryId INT NOT NULL UNIQUE,
	CountryName VARCHAR(25) CONSTRAINT CountryCheck CHECK (CountryName IN('Italy', 'India' ,'China')),
	RegionId INT NOT NULL UNIQUE,
	CONSTRAINT pkCountries PRIMARY KEY (CountryID , CountryName)
)

/*******practice Exercise 2 *****/
CREATE TABLE JobHistory
(
	EmployeeId INT ,
	StartDate VARCHAR(25) NOT NULL,
	End_Date varchar(20)  CHECK (End_Date LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]'), 
	Job_Id TINYINT PRIMARY KEY ,
	Department_Id INT NOT NULL 
)

/*******practice Exercise 3 ******/
USE [learningSQL]
GO

/****** Object:  Table [dbo].[jobs]    Script Date: 3/3/2021 4:47:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[jobs](
	[JobId] [tinyint] NOT NULL,
	[JobTitle] [varchar](50) NOT NULL,
	[MinSalary] [smallmoney] NOT NULL,
	[MaxSalary] [smallmoney] NULL,
 CONSTRAINT [PK_jobs] PRIMARY KEY CLUSTERED 
(
	[JobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[jobs] ADD  CONSTRAINT [DF_jobs_JobTitle]  DEFAULT ('blank') FOR [JobTitle]
GO

ALTER TABLE [dbo].[jobs] ADD  CONSTRAINT [DF_jobs_MinSalary]  DEFAULT ((8000)) FOR [MinSalary]
GO

ALTER TABLE [dbo].[jobs] ADD  CONSTRAINT [DF_jobs_MaxSalary]  DEFAULT (NULL) FOR [MaxSalary]
GO

/*******practice Exercise 4 *****/
CREATE TABLE Department(
	DepartmentID INT PRIMARY KEY ,
	Department VARCHAR(24) NOT NULL
)

CREATE TABLE Employees(
	Employee_Id	INT PRIMARY KEY ,
	FirstName VARCHAR(25) NOT NULL,
	LastName VARCHAR(25) NOT NULL,
	Email VARCHAR(25) NOT NULL,
	PhoneNumber INT NOT NULL,
	Hire_Date DATE,
	Job_Id TINYINT CONSTRAINT fkJObId FOREIGN KEY REFERENCES jobs(JobId),
	Salary INT NOT NULL,
	Commission INT NOT NULL,
	Manager_Id INT NOT NULL,
	Department_Id  INT CONSTRAINT fkDeparmentId FOREIGN KEY REFERENCES Department(DepartmentID) 
)

/****** Practice Exercise ******/
ALTER TABLE JobHistory ADD CONSTRAINT fk_job_id FOREIGN KEY (Job_Id) REFERENCES jobs(JobId)
ALTER TABLE JobHistory DROP CONSTRAINT fk_job_id 
ALTER TABLE JobHistory ADD Location VARCHAR(10)

/***** Assignment ****/
USE [learningSQL]
GO

/****** Object:  Table [dbo].[Employee]    Script Date: 3/3/2021 6:06:44 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] NOT NULL,
	[Empname] [varchar](24) NOT NULL,
	[Empcomission] [int] NOT NULL UNIQUE,
	[Empsalary] [int] NOT NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE Inventorys
(
	InvenotryId INT PRIMARY KEY,
	ProductName VARCHAR(25) NOT NULL
)

CREATE TABLE Sales
(
	SalesId INT PRIMARY KEY,
	InvenotryId INT CONSTRAINT fkInid FOREIGN KEY REFERENCES Inventorys(InvenotryId),
	ProductName VARCHAR(24) NOT NULL,
	EmpId INT CONSTRAINT fkEmpId FOREIGN KEY REFERENCES Employee(EmployeeId),
	Totalsales VARCHAR(23) NOT NULL
)


select * from Employees
use learningSQL
DROP TABLE JobHistory
DROP TABLE Sales
