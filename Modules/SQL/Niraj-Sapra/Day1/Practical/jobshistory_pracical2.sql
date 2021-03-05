USE Day1SQl	

CREATE TABLE dbo.JobHistory  
   (EmployeeId INT PRIMARY KEY NOT NULL,
    StartDate DATETIME NOT NULL,
	EndDate VARCHAR(20) CONSTRAINT chkDate CHECK(EndDate LIKE'[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]'),
	Job_Id  INT NOT NULL,
    Department_Id  INT NOT NULL,
	JobId INT CONSTRAINT fkJobs FOREIGN KEY REFERENCES Jobs(JobId));  
GO


INSERT INTO dbo.JobHistory(EmployeeId,StartDate,EndDate,Job_Id,Department_Id) VALUES (1,'2017-06-10','12-12-2020',100,1),(2,'2018-04-22','15-10-2019',101,2),(3,'2019-09-10','12-12-2020',102,3);

ALTER TABLE dbo.JobHistory Add price money;
Go

ALTER TABLE dbo.JobHistory 
Alter COLUMN price int;
Go

ALTER TABLE dbo.JobHistory
DROP COLUMN price;

