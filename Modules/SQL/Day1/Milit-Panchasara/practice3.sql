USE sqlTraining;

CREATE TABLE Jobs (
	JobID int PRIMARY KEY NOT NULL,
	JobTitle varchar(50) DEFAULT '',
	MinSalary int NOT NULL DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);

--inserts default values if not given
INSERT INTO Jobs (JobID,JobTitle) VALUES (1,DEFAULT),(2,'Trainee');