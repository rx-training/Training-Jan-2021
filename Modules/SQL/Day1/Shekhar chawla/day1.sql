-- Practice 1
--Write a SQL statement to create a table named Countries including columns CountryId, CountryName and RegionId and make sure that no Countries except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId will be unique.

CREATE TABLE Countries(
    CountryId INT NOT NULL ,
    CountryName VARCHAR(20) NOT NULL , 
    RegionId FLOAT , 
    CONSTRAINT checkCountry 
        CHECK ( ( CountryName = 'Italy' ) OR ( CountryName = 'India' ) OR ( CountryName = 'China' ) ) , 
    PRIMARY KEY (CountryId), 
    UNIQUE (RegionId)
 );
 
INSERT INTO Countries VALUES (12, 'Italy', 54);

SELECT * FROM Countries;




-- Practice 2
--Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id and Department_Id and make sure that the value against column EndDate will be entered at the time of insertion to the format like ‘–/–/—-‘.

CREATE TABLE Job_History (
    EmployeeId int PRIMARY KEY NOT NULL,
    JobId INT     NOT NULL,
    StartDate DATE ,
    EndDate DATE NOT NULL DEFAULT GETDATE(),
    CONSTRAINT convert_Date CHECK( EndDate = CONVERT( DATE , GETDATE() , 105)) 

);

INSERT INTO Job_History (employeeid , jobid , startdate ) VALUES ( 1 , 101 , '1990-01-28' ) ;

SELECT * from Job_History ;



-- Practice 3
--Write a SQL statement to create a table named Jobs including columns JobId, JobTitle, MinSalary and MaxSalary, and make sure that, the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns.

CREATE TABLE Jobs(
	JobId INT NOT NULL , 
    JobTitle VARCHAR(30) DEFAULT '' , 
    MinSalary INT DEFAULT 8000 , 
    MaxSalary INT DEFAULT NULL
);

INSERT INTO Jobs (JobId) VALUES(5);
INSERT INTO Jobs (JobId) VALUES(6);
INSERT INTO Jobs (JobId) VALUES(7);

SELECT * FROM Jobs;



-- Practice 4
--Write a SQL statement to create a table Employees including columns Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that, the Employee_Id column does not contain any duplicate value at the time of insertion, and the foreign key column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those values which are exists in the Department table and another foreign key column JobId, referenced by the column JobId of Jobs table, can contain only those values which are exists in the Jobs table.

CREATE TABLE Employees (
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
    CONSTRAINT fkJobId FOREIGN KEY (JobId) REFERENCES Jobs(Id),
    CONSTRAINT fkDepartmentId FOREIGN KEY (DepartmentId) REFERENCES Departments(Id) 
);

INSERT INTO Employees VALUES (2, 'John', 'Doe', 'johnDoe@gmail.com', 54134545, '2021-12-1', 40, 25000, 3, 1, 99);
SELECT * FROM Employees;

CREATE TABLE Jobs (
    Id INT                       NOT NULL,
    JobName VARCHAR(20)   NOT NULL,
    JobType VARCHAR(20) ,
    
    PRIMARY KEY (Id)
);
INSERT INTO Jobs VALUES (40 , 'Dotnet', 'Development');
UPDATE Jobs SET JobName = 'Web developer' , JobType = 'Trainee Engineer' WHERE Id = 40;

CREATE TABLE Departments (
    Id INT                       NOT NULL,
    DepartmentName VARCHAR(20)   NOT NULL,
    DepartmentType VARCHAR(20) ,
    
    PRIMARY KEY (Id)
);
INSERT INTO Departments VALUES (99 , 'Dotnet', 'Development');



-- Practice 5
--Alter statement
--Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of Jobs table.

CREATE TABLE JobHistory (
    JobId INT     NOT NULL,
    StartDate DATE ,
    EndDate DATE ,
    
    CONSTRAINT fk_job_id FOREIGN KEY (JobId) REFERENCES Jobs(Id) 
);



--Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of Jobs table.
ALTER TABLE JobHistory 
	DROP CONSTRAINT fk_job_id ;



--Write a SQL statement to add a new column named location to the JobHistory table.
ALTER TABLE JobHistory 
    ADD Location text;



--Assignment:
--You have been hired to create a relational database to support a car sales business. You need to store information on the business’s Employees, inventory, and completed sales. You also need to account for the fact that each salesperson receives a different percentage of their sales in commission. What tables and columns would you create in your relational database, and how would you link the tables?

CREATE TABLE Business_Employees (
    Id          INT   ,
    Name        VARCHAR (200) NOT NULL UNIQUE,
    JoiningDate DATE,
    JobType     VARCHAR (100) NOT NULL, 
    Sales       INT, 
    Commision INT ,
    CarName VARCHAR(320) ,
    
    PRIMARY KEY (Id),
    CONSTRAINT fk_commision FOREIGN KEY (Commision) REFERENCES Cars_Sales(Commision),
    CONSTRAINT fk_car FOREIGN KEY (CarName) REFERENCES Cars_inventory(Name)
);
INSERT INTO Business_Employees VALUES (1,  'MohanLal', '2010-05-11', 'Salesman', 48, 3, 'Ferrari');
SELECT * FROM Business_Employees;

CREATE TABLE Cars_inventory (
    Id    INT NOT NULL,
    Name  VARCHAR(150)    PRIMARY KEY 
                          NOT NULL,
    Price INT DEFAULT (0) 
);
INSERT INTO Cars_inventory VALUES (4, 'Ferrari', 7800000);
SELECT * FROM Cars_inventory;

CREATE TABLE Cars_Sales (
    BookingDate DATE NOT NULL,
    Name      VARCHAR (200) NOT NULL,
    Commision INT PRIMARY KEY
);
INSERT INTO Cars_Sales VALUES ('2012-05-12', 'MohanLal', 3);
select * from Cars_Sales;