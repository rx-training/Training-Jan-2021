CREATE TABLE Employees 
(
Employee_Id int NOT NULL PRIMARY KEY,
FirstName varchar(20) NOT NULL,
LastName varchar(20) NOT NULL,
Email varchar(50) NOT NULL,
PhoneNumber int NOT NULL,
Hire_Date date NOT NULL,
JobId int NOT NULL ,
CONSTRAINT fk_department FOREIGN KEY(JobId) REFERENCES jobs(JobId) ,
Salary money NOT NULL,
Commission int NOT NULL,
Manager_Id int NOT NULL,
DepartmentId int NOT NULL FOREIGN KEY REFERENCES Departments(DepartmentId),
)