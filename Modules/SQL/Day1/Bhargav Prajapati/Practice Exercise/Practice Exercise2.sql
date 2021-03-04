CREATE DATABASE JobDb;
CREATE TABLE Job_History(

JobId int Not Null,
departmentId int Not Null,
StartDate varchar(30) Not Null  CHECK(StartDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]') ,
EndDate varchar(30) Not Null CHECK(EndDate LIKE '[0-3][0-9]/[0-9][0-1]/[0-9][0-9][0-9][0-9]') 
)
INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'29/01/1780','12/10/1200');
INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'15/12/1780','17/10/1200');
/*INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'31/22/1780','17/10/1200');*/
/*INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (5,7,'/1780/01/24','1200/10/12');*/
/*Drop Table Job_History*/
