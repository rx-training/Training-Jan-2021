CREATE DATABASE Alter_Statementdb
/*Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.*/
CREATE TABLE JobDetails
(
Job_Id int PRIMARY KEY,
Department_Id int,
JOb_Title varchar(30) CONSTRAINT defJob_Title DEFAULT 'TRAINEE SOFTWARE ENGINEER',
MinSalary int CHECK(MinSalary BETWEEN 0 And 4000 ),
MaxSalary int CHECK(MaxSalary BETWEEN 4000 And 8000 )
)
CREATE TABLE Job_History(

JobId int Not Null CONSTRAINT  fk_job_id  FOREIGN KEY (JobId) REFERENCES JobDetails(Job_Id), 
departmentId int Not Null,
StartDate varchar(30) Not Null  CHECK(StartDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]') ,
EndDate varchar(30) Not Null CHECK(EndDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]') 
)
INSERT INTO  JobDetails (Job_Id,Department_Id,JOb_Title,MinSalary,MaxSalary) VALUES (1,2,'Project Manager',2000,5000)
INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'08/07/1980','12/02/1530')
/*Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table*/
ALTER TABLE Job_History DROP CONSTRAINT  fk_job_id
/*Write a SQL statement to add a new column named location to the JobHistory table*/
ALTER TABLE Job_History ADD Location VARCHAR(20)