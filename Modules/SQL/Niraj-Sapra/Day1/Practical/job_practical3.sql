USE Day1SQl;
CREATE TABLE dbo.Jobs  
   (JobId int PRIMARY KEY NOT NULL,
    JobTitle varchar(25) DEFAULT ' ',
    MinSalary int DEFAULT 8000,
    MaxSalary int DEFAULT NULL
	)  
GO

INSERT INTO Jobs (JobId) values (1);
