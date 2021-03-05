CREATE DATABASE PracticeExercisedb_Day1
USE PracticeExercisedb_Day1
------------------------Practice Exercise1---------------------------

/*Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and 
make sure that no countries except Italy, India and China will be entered in the table. and combination of columns CountryId 
and RegionId will be unique.*/
CREATE TABLE Country_Details
(
 Country_Id Int,
 Region_Id Int,
 CONSTRAINT pkContry_Details PRIMARY KEY(Country_id,Region_id),
 Country_Name Varchar(30) Not Null CONSTRAINT chkCountry_name CHECK(Country_Name IN('Italy','India','China'))
)
INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('1','2','India');
INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('3','4','Italy');
INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('3','5','China');
/*INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('3','5','India');*/
/*INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('2','80','JAPAN');*/
/*DROP TABLE Country_Details*/

------------------------Practice Exercise2---------------------------

/*Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id
and Department_Id and make sure that the value against column EndDate will be entered at the time of insertion to the 
format like ‘–/–/—-‘.*/
USE PracticeExercisedb_Day1
CREATE TABLE Job_History(

JobId Int Not Null ,
departmentId Int Not Null,
StartDate Varchar(30) Not Null  CHECK(StartDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]') ,
EndDate Varchar(30) Not Null CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]') 
)
INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'29/01/1780','12/10/1200');
INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'15/12/1780','17/10/1200');
/*INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'31/22/1780','17/10/1200');*/
/*INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (5,7,'/1780/01/24','1200/10/12');*/
/*Drop Table Job_History*/

------------------------Practice Exercise3---------------------------

/*Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, 
and make sure that, the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be 
entered automatically at the time of insertion if no value assigned for the specified columns.*/

CREATE TABLE JobDetails
(
Job_Id int PRIMARY KEY,
Department_Id Int,
JOb_Title varchar(30) CONSTRAINT defJob_Title DEFAULT 'TRAINEE SOFTWARE ENGINEER',
MinSalary Int CHECK(MinSalary BETWEEN 0 And 4000 ),
MaxSalary Int CHECK(MaxSalary BETWEEN 4000 And 8000 )
)
INSERT INTO JobDetails (Job_Id,JOb_Title,MinSalary,MaxSalary) VALUES (1,DEFAULT,2000,6000)
INSERT INTO JobDetails (Job_Id,MinSalary,MaxSalary) VALUES (2,3000,4000)
INSERT INTO JobDetails (Job_Id,JOb_Title,MinSalary,MaxSalary) VALUES (3,'PROJECT MANAGER',2500,7000)
INSERT INTO JobDetails (Job_Id,MinSalary,MaxSalary) VALUES (4,4000,8000)
/*INSERT INTO JobDetails (Job_Id,MinSalary,MaxSalary) VALUES (5,5000,9000)*/


--------------------------------------Practice Exercise4---------------------------

/*Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email,
PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that, the Employee_Id 
column does not contain any duplicate value at the time of insertion, and the foreign key column DepartmentId, 
reference by the column DepartmentId of Departments table, can contain only those values which are exists in the 
Department table and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only
those values which are exists in the jobs table*/
CREATE TABLE Departments(
DepartmentsID Int PRIMARY KEY,
Department_name varchar(50),
Department_mamber Int

)
INSERT INTO Departments(DepartmentsID,Department_name,Department_mamber) VALUES (1,'.NET',5)
INSERT INTO Departments(DepartmentsID,Department_name,Department_mamber) VALUES (2,'PHP',6)
INSERT INTO Departments(DepartmentsID,Department_name,Department_mamber) VALUES (3,'JAVA',7)

CREATE TABLE Employees_Details
(
	Employee_Id Int PRIMARY KEY  Not Null,
	FirtName Varchar(40) Not Null,
	LastName Varchar(40) Not Null,
	Email Varchar(60) Not Null,
	PhoneNumber Int  CONSTRAINT unPhonenumber UNIQUE (PhoneNumber) Not Null,
	
	JobId Int Not Null ,
	Salary Int Not Null,
	Commission Int Not Null,
	Manager_Id Int NOt Null,
	Department_ID Int,
	CONSTRAINT fkDepartment_ID FOREIGN KEY (Department_ID) REFERENCES  Departments(DepartmentsID),
	CONSTRAINT fkJobId1 FOREIGN KEY (JobId) REFERENCES  JobDetails(Job_Id)
)
INSERT INTO Employees_Details (Employee_Id,FirtName,LastName,Email,PhoneNumber,JobId,Salary,Commission,Manager_Id,Department_ID)VALUES(1,'abc','def','abc@gmail.com',5656565,1,5000,2000,501,1)
INSERT INTO Employees_Details (Employee_Id,FirtName,LastName,Email,PhoneNumber,JobId,Salary,Commission,Manager_Id,Department_ID)VALUES(2,'abc','def','abc@gmail.com',910683,2,5000,2000,501,2)

----------------Alter Statement----------------------
/*Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencingto the
primary key JobId of jobs table*/

ALTER TABLE JobHistory ADD CONSTRAINT fk_JobId FOREIGN KEY(JobId) REFERENCES Jobs(JobId)
/*Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing
to the JobId of jobs tabl*/

ALTER TABLE Job_History DROP CONSTRAINT  fk_job_id

/*Write a SQL statement to add a new column named location to the JobHistory table*/
ALTER TABLE Job_History ADD Location VARCHAR(20)