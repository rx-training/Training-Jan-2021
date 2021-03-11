USE Day5;

-- EMPLOYEE TABLE
CREATE TABLE Employees
(
	EmployeeId INT CONSTRAINT pkEmployees PRIMARY KEY IDENTITY,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Salary MONEY NOT NULL,
	JoiningDate DATE NOT NULL,
	Department VARCHAR(20) NOT NULL,
	ManagerId INT NULL
)

INSERT INTO Employees (FirstName, LastName, Salary, JoiningDate, Department, ManagerId) VALUES
						('John', 'Abraham', 1000000, '01-JAN-13', 'Banking', NULL),
						('Michael', 'Clarke', 800000, '01-JAN-13', 'Insurance', 1),
						('Roy', 'Thomas', 700000, '01-FEB-13', 'Banking', 1),
						('Tom', 'Jose', 600000, '01-FEB-13', 'Insurance', 2),
						('Jerry', 'Pinto', 650000, '01-FEB-13', 'Insurance', 3),
						('Philip', 'Mathew', 750000, '01-JAN-13', 'Services', 3),
						('TestName1', '123', 650000, '01-JAN-13', 'Services', 2),
						('TestName2', 'Lname%', 600000, '01-FEB-13', 'Insurance', 2);


-- INCENTIVES TABLE
CREATE TABLE Incentives
(
	EmployeeRefId INT CONSTRAINT fkIncentives FOREIGN KEY REFERENCES Employees(EmployeeId),
	IncentiveDate DATE NOT NULL,
	IncentiveAmount MONEY NOT NULL
)

INSERT INTO Incentives (EmployeeRefId, IncentiveDate, IncentiveAmount) VALUES
						(1, '01-FEB-13', 5000),
						(2, '01-FEB-13', 3000),
						(3, '01-FEB-13', 4000);


/* 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table */
SELECT e.EmployeeId AS 'EmployeeID', CONCAT(DATEDIFF(DAY, e.JoiningDate, i.IncentiveDate), ' Days ')  AS 'DateDiff'
FROM Employees e
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;


/* 2. Select first_name, incentive amount from employee and incentives table for those employees 
who have incentives and incentive amount greater than 3000*/
SELECT e.FirstName, i.IncentiveAmount
FROM Employees e
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId AND i.IncentiveAmount > 3000;


/* 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives */
SELECT e.FirstName, i.IncentiveAmount
FROM Employees e
	LEFT OUTER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;


/* 4. Select EmployeeName, ManagerName from the employee table*/
SELECT e.FirstName AS 'EmployeeName', m.FirstName AS 'ManagerName'
FROM Employees e
	INNER JOIN Employees m ON e.ManagerId = m.EmployeeId;


/* 5. Select first_name, incentive amount from employee and incentives table for all employees even if 
they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives*/
SELECT e.FirstName, ISNULL(i.IncentiveAmount, 0) AS 'IncentiveAmount'
FROM Employees e
	LEFT OUTER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;