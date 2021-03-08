USE Day1SQl

CREATE TABLE Departments
(
    DepartmentId INT CONSTRAINT pkDepartmentId PRIMARY KEY,
    DepartmentName VARCHAR(20)
);
INSERT INTO Departments VALUES(1,'Accounting');
DROP TABLE Departments;
CREATE TABLE JOBForEmployee
(
    JobId INT CONSTRAINT pkJobId PRIMARY KEY,
    JobName VARCHAR(20)
);
INSERT INTO JOBForEmployee VALUES(110,'Accountant');
DROP TABLE JOBForEmployee;

CREATE TABLE Employee
(
    EmployeeId INT CONSTRAINT pkEmployeeId PRIMARY KEY,
    ID INT FOREIGN KEY REFERENCES JOBForEmployee(JobId),
    dID INT FOREIGN KEY REFERENCES Departments(DepartmentId),
    FirstName VARCHAR(20), 
    LastName VARCHAR(20), 
    Email VARCHAR(20), 
    PhoneNumber NUMERIC, 
    Hire_Date VARCHAR, 
    Salary INT, 
    Commission INT, 
    Manager_Id INT,
);
Insert INTO Employee(ID,dID,FirstName,LastName,Email,PhoneNumber,Hire_Date,Salary,Commission,Manager_Id) VALUES(10,1,'niraj','sapra','nirajsapra21@gmail.com',7567564430,'12-12-2020',20000,2000,200);