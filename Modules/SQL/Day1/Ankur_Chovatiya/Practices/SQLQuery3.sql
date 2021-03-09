CREATE TABLE dbo.jobs 
(
JobId INT NOT NULL,
JobTitle char(20) NOT NULL DEFAULT '' ,
MinSalary  MONEY NOT NULL DEFAULT '8000',
MaxSalary MONEY NULL,

)

SELECT * FROM dbo.jobs

DROP TABLE dbo.jobs