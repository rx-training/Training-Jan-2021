
USE JobHistorydb;
GO


ALTER TABLE JobHistory ADD CONSTRAINT fk_job_id FOREIGN KEY(Job_Id) REFERENCES Jobs(JobId);

ALTER TABLE JobHistory DROP CONSTRAINT fk_job_id;

DROP TABLE JobHistory;


ALTER TABLE JobHistory ADD Location varchar(40);
SELECT * FROM JobHistory;