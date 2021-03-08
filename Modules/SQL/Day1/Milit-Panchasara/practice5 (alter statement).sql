USE sqlTraining;

ALTER TABLE JobHistories
	ADD CONSTRAINT fkJobIDinJobHistories FOREIGN KEY (JobID) REFERENCES Jobs (JobID);

ALTER TABLE JobHistories
	DROP CONSTRAINT fkJobIDinJobHistories;

ALTER TABLE JobHistories
	ADD Location varchar(50) DEFAULT 'Ahmedabad';

ALTER TABLE JobHistories
	DROP COLUMN Location;