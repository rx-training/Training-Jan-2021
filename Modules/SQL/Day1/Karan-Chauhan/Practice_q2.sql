
CREATE DATABASE JobHistorydb;
CREATE TABLE JobHistory
(
	EmployeeId int,
	Job_Id int PRIMARY KEY,
	Department_Id int,
	StartDate varchar(30) NOT NULL CHECK(StartDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]'),
	End_Date varchar(30) NOT NULL CHECK(End_Date LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')	  
);


INSERT INTO JobHistory (EmployeeId,Job_Id,Department_Id,StartDate,End_Date) VALUES (1,2,1,'04/09/1999','08/09/1999');

INSERT INTO JobHistory (EmployeeId,Job_Id,Department_Id,StartDate,End_Date) VALUES (1,2,1,'0409/09/1999','08/09/1999');

SELECT * FROM JobHistory;

DROP TABLE JobHistory;