/*Write a SQL statement to create a table named jobs including columns JobId, 
JobTitle, MinSalary and MaxSalary, and make sure that, the default value for JobTitle 
is blank and MinSalary is 8000 and MaxSalary is NULL will be entered automatically
at the time of insertion if no value assigned for the specified columns.*/
CREATE DATABASE JObSalarydb
CREATE TABLE JobDetails
(
Job_Id int,
Department_Id int,
JOb_Title varchar(30) CONSTRAINT defJob_Title DEFAULT 'TRAINEE SOFTWARE ENGINEER',
MinSalary int CHECK(MinSalary BETWEEN 0 And 4000 ),
MaxSalary int CHECK(MaxSalary BETWEEN 4000 And 8000 )
)
INSERT INTO JobDetails (Job_Id,JOb_Title,MinSalary,MaxSalary) VALUES (1,DEFAULT,2000,6000)
INSERT INTO JobDetails (Job_Id,MinSalary,MaxSalary) VALUES (2,3000,4000)
INSERT INTO JobDetails (Job_Id,JOb_Title,MinSalary,MaxSalary) VALUES (3,'PROJECT MANAGER',2500,7000)
INSERT INTO JobDetails (Job_Id,MinSalary,MaxSalary) VALUES (4,4000,8000)
/*INSERT INTO JobDetails (Job_Id,MinSalary,MaxSalary) VALUES (5,5000,9000)*/
