-- Practice 1
--Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and make sure that no countries except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId will be unique.

CREATE TABLE countries(
    CountryId INT NOT NULL ,
    CountryName VARCHAR(20) NOT NULL , 
    RegionId DOUBLE , 
    CONSTRAINT checkCountry 
        CHECK ( ( CountryName == "Italy" ) || ( CountryName == "India" ) || ( CountryName == "China" ) ) , 
    PRIMARY KEY (CountryId), 
    UNIQUE (RegionId)
 );
 
INSERT INTO countries VALUES (12, "Italy", 54);

SELECT * FROM countries;





-- Practice 2
--Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id and Department_Id and make sure that the value against column EndDate will be entered at the time of insertion to the format like ‘–/–/—-‘.
--NOT WORKING IN SQLITE ...

CREATE TABLE Job_History (
    EmployeeId int PRIMARY KEY NOT NULL,
    JobId INT     NOT NULL,
    StartDate DATE ,
    EndDate DATE CHECK(EndDate == "") 

);
INSERT INTO Job_History VALUES(1, 23, '2012-12-12', '');





-- Practice 3
--Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, and make sure that, the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns.

CREATE TABLE jobs(JobId INT NOT NULL , 
    JobTitle VARCHAR(30) DEFAULT '' , 
    MinSalary INT DEFAULT 8000 , 
    MaxSalary INT DEFAULT NULL
);

INSERT INTO jobs (JobId) VALUES(5);
INSERT INTO jobs (JobId) VALUES(6);
INSERT INTO jobs (JobId) VALUES(7);

SELECT * FROM jobs;



-- Practice 4
--Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that, the Employee_Id column does not contain any duplicate value at the time of insertion, and the foreign key column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those values which are exists in the Department table and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only those values which are exists in the jobs table.
CREATE TABLE employees (
    EmployeeId INT         NOT NULL,
    FirstName VARCHAR(20)  NOT NULL ,
    LastName VARCHAR(20)   NOT NULL ,
    Email VARCHAR(50) ,
    PhoneNumber INT ,
    HireDate DATE , 
    JobId INT,
    Salary INT, 
    Commission INT ,
    ManagerId INT ,
    DepartmentId INT,
    
    PRIMARY KEY (EmployeeId),
    CONSTRAINT fkJobId FOREIGN KEY (JobId) REFERENCES jobs(Id),
    CONSTRAINT fkDepartmentId FOREIGN KEY (DepartmentId) REFERENCES departments(Id) 
);

INSERT INTO employees VALUES (2, 'John', 'Doe', 'johnDoe@gmail.com', 54134545, '2021-12-1', 40, 25000, 3, 1, 99);
SELECT * FROM employees;

CREATE TABLE jobs (
    Id INT                       NOT NULL,
    JobName VARCHAR(20)   NOT NULL,
    JobType VARCHAR(20) ,
    
    PRIMARY KEY (Id)
);
INSERT INTO jobs VALUES (40 , "Dotnet", "Development");
UPDATE jobs SET JobName = "Web developer" , JobType = "Trainee Engineer" WHERE Id = 40;

CREATE TABLE departments (
    Id INT                       NOT NULL,
    DepartmentName VARCHAR(20)   NOT NULL,
    DepartmentType VARCHAR(20) ,
    
    PRIMARY KEY (Id)
);
INSERT INTO departments VALUES (99 , "Dotnet", "Development");


-- Practice 5
--Alter statement

--Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.
CREATE TABLE JobHistory (
    JobId INT     NOT NULL,
    StartDate DATE ,
    EndDate DATE ,
    
    CONSTRAINT fk_job_id 
        FOREIGN KEY (JobId) REFERENCES jobs(Id) 
);
--Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table.
--SQLite doesn't support the ADD CONSTRAINT variant of the ALTER TABLE command (sqlite.org: SQL Features That SQLite Does Not Implement). 

PRAGMA foreign_keys=off;

BEGIN TRANSACTION;

ALTER TABLE JobHistory RENAME TO _JobHistory_old;

CREATE TABLE JobHistory (
    JobId INT     NOT NULL,
    StartDate DATE ,
    EndDate DATE 
);

INSERT INTO JobHistory SELECT * FROM _JobHistory_old;

COMMIT;

PRAGMA foreign_keys=on;


--Write a SQL statement to add a new column named location to the JobHistory table.
ALTER TABLE JobHistory 
    ADD COLUMN location text;

SELECT * FROM JobHistory;



--Assignment:
--You have been hired to create a relational database to support a car sales business. You need to store information on the business’s employees, inventory, and completed sales. You also need to account for the fact that each salesperson receives a different percentage of their sales in commission. What tables and columns would you create in your relational database, and how would you link the tables?
CREATE TABLE business_employees (
    Id          INT   ,
    Name        VARCHAR (200) NOT NULL
                           UNIQUE,
    JoiningDate DATE,
    JobType     VARCHAR (100) NOT NULL, 
    Sales       INT, 
    Commision INT ,
    CarName VARCHAR(320) ,
    
    PRIMARY KEY (Id),
    CONSTRAINT fk_commision FOREIGN KEY (Commision) REFERENCES cars_sales(Commision),
    CONSTRAINT fk_car FOREIGN KEY (CarName) REFERENCES cars_inventory(Name)
);
INSERT INTO business_employees VALUES (1,  'MohanLal', '2010-05-11', 'Salesman', 48, 3, 'Ferrari');
select * from business_employees;

CREATE TABLE cars_inventory (
    Id    INT NOT NULL,
    Name  VARCHAR(150)    PRIMARY KEY 
                          NOT NULL,
    Price INT DEFAULT (0) 
);
INSERT INTO cars_inventory VALUES (4, 'Ferrari', 7800000);
SELECT * FROM cars_inventory;

CREATE TABLE cars_sales (
    Date      DATE NOT NULL,
    Name      VARCHAR (200) NOT NULL,
    Commision INT PRIMARY KEY
);
INSERT INTO cars_sales VALUES ('2012-05-12', 'MohanLal', 3);
select * from cars_sales;