CREATE DATABASE INDEXES;
USE INDEXES;
CREATE TABLE Employee
(
	EmployeeID INT  ,
	FirstName VARCHAR(20) DEFAULT NULL,
	LastName VARCHAR(20) DEFAULT NULL,
	Salary NUMERIC DEFAULT NULL,
	JoiningDate DATETIME DEFAULT NULL,
	Department VARCHAR(20) DEFAULT NULL,
	ManagerID INT DEFAULT NULL
);

INSERT INTO Employee VALUES(3,'Roy','Thomas',700000,'2013-02-01 00:00:00','Banking',1);
INSERT INTO Employee VALUES(6,'Philip','Mathew',750000,'2013-01-01 00:00:00','Service',3);
INSERT INTO Employee VALUES(1,'John','Abraham',1000000,'2013-01-01 00:00:00','Banking',NULL);
INSERT INTO Employee VALUES(2,'Michale','Clarke',800000,'2013-01-01 00:00:00','Insurance',1);
INSERT INTO Employee VALUES(4,'Tom','Jose',600000,'2013-02-01 00:00:00','Insurance',2);
INSERT INTO Employee VALUES(5,'Jerry','Pinto',650000,'2013-02-01 00:00:00','Insurance',3);
INSERT INTO Employee VALUES(7,'TestName1','123',650000,'2013-01-01 00:00:00','Service',2);
INSERT INTO Employee VALUES(8,'TestName2','Lname%',600000,'2013-02-01 00:00:00','Insurance',2);

DROP TABLE Employee;

SELECT * FROM Employee;

-->CLUSTERED INDEX
CREATE CLUSTERED INDEX IK_Employee_Fname_Lname
ON Employee (FirstName ASC)

-->NONCLUSTERED INDEX
CREATE NONCLUSTERED INDEX IK_Employee_Fname ON Employee(LastName DESC)


-->Creating Index
CREATE INDEX IX_Employee_Salary ON Employee (Salary ASC)

DROP INDEX IX_Employee_Salary ON Employee 

CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]
GO
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)
SELECT * FROM PlanetsID

-->CLUSTERED INDEX
CREATE CLUSTERED INDEX IK_PlanetsID_ID ON PlanetsID(ID ASC)

USE AdventureWorks2012
SELECT ContactTypeID,Name,ModifiedDate FROM Person.ContactType WHERE Name='Accounting Manager';
SELECT* FROM Person.ContactType