USE Day1SQl

CREATE TABLE Departments
(
    DepartmentId int CONSTRAINT pkDepartmentId PRIMARY KEY,
    DepartmentName varchar(20)
);
INSERT INTO Departments VALUES(1,'Accounting');
DROP TABLE Departments;
CREATE TABLE JOBForEmployee
(
    JobId int CONSTRAINT pkJobId PRIMARY KEY,
    JobName varchar(20)
);
INSERT INTO JOBForEmployee VALUES(110,'Accountant');
DROP TABLE JOBForEmployee;

CREATE TABLE Employee
(
    EmployeeId int CONSTRAINT pkEmployeeId PRIMARY KEY,
    ID int FOREIGN KEY REFERENCES JOBForEmployee(JobId),
    dID int FOREIGN KEY REFERENCES Departments(DepartmentId),
    FirstName varchar(20), 
    LastName varchar(20), 
    Email varchar(20), 
    PhoneNumber numeric, 
    Hire_Date varchar, 
    Salary int, 
    Commission int, 
    Manager_Id int,
);
Insert INTO Employee(ID,dID,FirstName,LastName,Email,PhoneNumber,Hire_Date,Salary,Commission,Manager_Id) VALUES(10,1,'niraj','sapra','nirajsapra21@gmail.com',7567564430,'12-12-2020',20000,2000,200);