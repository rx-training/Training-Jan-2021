CREATE DATABASE PracticeExercisedbDay1
USE PracticeExercisedbDay1
------------------------Practice Exercise1---------------------------

/*Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and 
make sure that no countries except Italy, India and China will be entered in the table. and combination of columns CountryId 
and RegionId will be unique.*/
CREATE TABLE CountryDetails
(
 CountryId INT,
 RegionId INT,
 CONSTRAINT pkContryDetails PRIMARY KEY(Countryid,Regionid),
 CountryName VARCHAR(30) Not Null CONSTRAINT chkCountryname CHECK(CountryName IN('Italy','India','China'))
)
INSERT  INTO  CountryDetails (CountryId,RegionId,CountryName) VALUES ('1','2','India');
INSERT  INTO  CountryDetails (CountryId,RegionId,CountryName) VALUES ('3','4','Italy');
INSERT  INTO  CountryDetails (CountryId,RegionId,CountryName) VALUES ('3','5','China');
/*INSERT  INTO  Country_Details (CountryId,RegionId,CountryName) VALUES ('3','5','India');*/
/*INSERT  INTO  Country_Details (CountryId,RegionId,CountryName) VALUES ('2','80','JAPAN');*/
/*DROP TABLE Country_Details*/

------------------------Practice Exercise2---------------------------

/*Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id
and Department_Id and make sure that the value against column EndDate will be entered at the time of insertion to the 
format like ‘–/–/—-‘.*/
USE PracticeExercisedbDay1
CREATE TABLE JobHistory(

JobId INT Not Null ,
departmentId INT Not Null,
StartDate VARCHAR(30) Not Null  CHECK(StartDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]') ,
EndDate VARCHAR(30) Not Null CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]') 
)
INSERT INTO JobHistory (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'29/01/1780','12/10/1200');
INSERT INTO JobHistory (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'15/12/1780','17/10/1200');
/*INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (1,2,'31/22/1780','17/10/1200');*/
/*INSERT INTO Job_History (JobId,departmentId,StartDate,EndDate) VALUES (5,7,'/1780/01/24','1200/10/12');*/
/*Drop Table JobHistory*/

------------------------Practice Exercise3---------------------------

/*Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, 
and make sure that, the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be 
entered automatically at the time of insertion if no value assigned for the specified columns.*/

CREATE TABLE JobDetails
(
JobId INT PRIMARY KEY,
DepartmentId INT,
JObTitle VARCHAR(30) CONSTRAINT defJobTitle DEFAULT 'TRAINEE SOFTWARE ENGINEER',
MinSalary INT CHECK(MinSalary BETWEEN 0 And 4000 ),
MaxSalary INT CHECK(MaxSalary BETWEEN 4000 And 8000 )
)
INSERT INTO JobDetails (JobId,JObTitle,MinSalary,MaxSalary) VALUES (1,DEFAULT,2000,6000)
INSERT INTO JobDetails (JobId,MinSalary,MaxSalary) VALUES (2,3000,4000)
INSERT INTO JobDetails (JobId,JObTitle,MinSalary,MaxSalary) VALUES (3,'PROJECT MANAGER',2500,7000)
INSERT INTO JobDetails (JobId,MinSalary,MaxSalary) VALUES (4,4000,8000)
/*INSERT INTO JobDetails (JobId,MinSalary,MaxSalary) VALUES (5,5000,9000)*/


--------------------------------------Practice Exercise4---------------------------

/*Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email,
PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that, the Employee_Id 
column does not contain any duplicate value at the time of insertion, and the foreign key column DepartmentId, 
reference by the column DepartmentId of Departments table, can contain only those values which are exists in the 
Department table and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only
those values which are exists in the jobs table*/
CREATE TABLE Departments(
DepartmentsID INT PRIMARY KEY,
Departmentname VARCHAR(50),
Departmentmamber INT

)
INSERT INTO Departments(DepartmentsID,Departmentname,Departmentmamber) VALUES (1,'.NET',5)
INSERT INTO Departments(DepartmentsID,Departmentname,Departmentmamber) VALUES (2,'PHP',6)
INSERT INTO Departments(DepartmentsID,Departmentname,Departmentmamber) VALUES (3,'JAVA',7)

CREATE TABLE Employees_Details
(
	EmployeeId INT PRIMARY KEY  Not Null,
	FirtName VARCHAR(40) Not Null,
	LastName VARCHAR(40) Not Null,
	Email VARCHAR(60) Not Null,
	PhoneNumber INT  CONSTRAINT unPhonenumber UNIQUE (PhoneNumber) Not Null,
	
	JobId INT Not Null ,
	Salary INT Not Null,
	Commission INT Not Null,
	ManagerId INT NOt Null,
	DepartmentID INT,
	CONSTRAINT fkDepartmentID FOREIGN KEY (DepartmentID) REFERENCES  Departments(DepartmentsID),
	CONSTRAINT fkJobId1 FOREIGN KEY (JobId) REFERENCES  JobDetails(JobId)
)
INSERT INTO Employees_Details (EmployeeId,FirtName,LastName,Email,PhoneNumber,JobId,Salary,Commission,ManagerId,DepartmentID)VALUES(1,'abc','def','abc@gmail.com',5656565,1,5000,2000,501,1)
INSERT INTO Employees_Details (EmployeeId,FirtName,LastName,Email,PhoneNumber,JobId,Salary,Commission,ManagerId,DepartmentID)VALUES(2,'abc','def','abc@gmail.com',910683,2,5000,2000,501,2)

----------------Alter Statement----------------------
/*Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencingto the
primary key JobId of jobs table*/

ALTER TABLE JobHistory ADD CONSTRAINT fkJobId FOREIGN KEY(JobId) REFERENCES Jobs(JobId)
/*Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing
to the JobId of jobs tabl*/

ALTER TABLE JobHistory DROP CONSTRAINT  fkjobid

/*Write a SQL statement to add a new column named location to the JobHistory table*/
ALTER TABLE JobHistory ADD Location VARCHAR(20)