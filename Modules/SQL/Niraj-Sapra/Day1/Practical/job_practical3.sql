USE Day1SQl;
CREATE TABLE dbo.Jobs  
   (JobId INT PRIMARY KEY NOT NULL,
    JobTitle VARCHAR(25) DEFAULT ' ',
    MinSalary INT DEFAULT 8000,
    MaxSalary INT DEFAULT NULL
	)  
GO

INSERT INTO Jobs (JobId) values (1);
