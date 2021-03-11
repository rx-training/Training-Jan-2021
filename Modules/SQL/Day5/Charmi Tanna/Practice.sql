CREATE DATABASE PRACTICE8;
USE PRACTICE8;
CREATE TABLE Employee
(
	EmployeeID INT PRIMARY KEY,
	FirstName VARCHAR(20) DEFAULT NULL,
	LastName VARCHAR(20) DEFAULT NULL,
	Salary NUMERIC DEFAULT NULL,
	JoiningDate DATETIME DEFAULT NULL,
	Department VARCHAR(20) DEFAULT NULL,
	ManagerID INT DEFAULT NULL
);
DROP TABLE Employee;
CREATE TABLE Incentives
(
	EmployeeRefID INT FOREIGN KEY REFERENCES Employee(EmployeeID),
	IncentiveDate DATE,
	IncentiveAmount NUMERIC
);
DROP TABLE Incentives;
INSERT INTO Employee VALUES(1,'John','Abraham',1000000,'2013-01-01 00:00:00','Banking',NULL);
INSERT INTO Employee VALUES(2,'Michale','Clarke',800000,'2013-01-01 00:00:00','Insurance',1);
INSERT INTO Employee VALUES(3,'Roy','Thomas',700000,'2013-02-01 00:00:00','Banking',1);
INSERT INTO Employee VALUES(4,'Tom','Jose',600000,'2013-02-01 00:00:00','Insurance',2);
INSERT INTO Employee VALUES(5,'Jerry','Pinto',650000,'2013-02-01 00:00:00','Insurance',3);
INSERT INTO Employee VALUES(6,'Philip','Mathew',750000,'2013-01-01 00:00:00','Service',3);
INSERT INTO Employee VALUES(7,'TestName1','123',650000,'2013-01-01 00:00:00','Service',2);
INSERT INTO Employee VALUES(8,'TestName2','Lname%',600000,'2013-02-01 00:00:00','Insurance',2);
SELECT * FROM Employee;
INSERT INTO Incentives VALUES(1,'2013-02-01',5000);
INSERT INTO Incentives VALUES(2,'2013-02-01',3000);
INSERT INTO Incentives VALUES(3,'2013-02-01',4000);
INSERT INTO Incentives VALUES(1,'2013-01-01',4500);
INSERT INTO Incentives VALUES(2,'2013-01-01',3500);
SELECT * FROM Incentives;
-->INNER JOIN
SELECT * FROM Employee e INNER JOIN Incentives i  ON e.EmployeeID =i.EmployeeRefID;
SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary,e.ManagerID,i.IncentiveAmount FROM Employee e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID;
-->LEFT OUTER JOIN
SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary,e.ManagerID,i.IncentiveAmount FROM Employee e LEFT OUTER JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID;
-->RIGHT OUTER JOIN
SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary,e.ManagerID,i.IncentiveAmount FROM Employee e RIGHT OUTER JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID;
-->FULL OUTER JOIN
SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary,e.ManagerID,i.IncentiveAmount FROM Employee e FULL OUTER JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID;
-->SELF JOIN
SELECT COUNT(l.EmployeeID) AS Employees ,k.ManagerID FROM Employee l JOIN Employee k ON l.EmployeeID = k.EmployeeID GROUP BY k.ManagerID;
