USE Jobdb;
GO
CREATE TABLE Jobs
(
	JobId int PRIMARY KEY,
	JobTitle varchar(30) CONSTRAINT define_jobtitle DEFAULT 'TRAINEE SOFTWARE ENGINEER',
	MinSalary int CHECK(MinSalary BETWEEN 0 And 4000),
	MaxSalary int CHECK(MaxSalary BETWEEN 4000 And 8000)

);


INSERT INTO Jobs (JobId,JobTitle,MinSalary,MaxSalary) VALUES (1,DEFAULT,3500,7500);

INSERT INTO Jobs (JobId,JobTitle,MinSalary,MaxSalary) VALUES (2,'Graphics Designer',3500,7500);

INSERT INTO Jobs (JobId,JobTitle,MinSalary,MaxSalary) VALUES (3,DEFAULT,4500,7500);

INSERT INTO Jobs (JobId,JobTitle,MinSalary,MaxSalary) VALUES (3,DEFAULT,3500,3500);

SELECT * FROM Jobs;

DROP TABLE Jobs;