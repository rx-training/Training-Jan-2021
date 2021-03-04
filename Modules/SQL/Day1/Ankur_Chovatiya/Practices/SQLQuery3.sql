CREATE TABLE dbo.jobs 
(
JobId int NOT NULL,
JobTitle char(20) NOT NULL DEFAULT '' ,
MinSalary  money NOT NULL DEFAULT '8000',
MaxSalary Money NULL,

)

SELECT * FROM dbo.jobs

DROP TABLE dbo.jobs