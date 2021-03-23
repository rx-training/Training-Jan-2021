USE Day2DB

CREATE TABLE Employees(
	EmployeeID INT CONSTRAINT pkEmpID PRIMARY KEY,
	FirstName VARCHAR(25) NOT NULL,
	LastName VARCHAR(25) NOT NULL,
	Salary INT,
	JoiningDate DATETIME NOT NULL,
	Department VARCHAR(50) NOT NULL,
	ManagerID INT
)

CREATE TABLE Incentives(
	EmpRefID INT CONSTRAINT fkEmpRefID FOREIGN KEY REFERENCES Employees(EmployeeID),
	IncentiveDate DATE NOT NULL,
	IncentiveAmount INT NOT NULL
)

SELECT * FROM Employees

SELECT * FROM Incentives

/*Q 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
Ans.*/
SELECT e.EmployeeID, DATEDIFF(DD, e.JoiningDate, i.IncentiveDate) AS 'TotalDays'
FROM Employees AS e INNER JOIN Incentives AS i
ON e.EmployeeID = i.EmpRefID

/*Q 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
Ans.*/
SELECT e.FirstName, i.IncentiveAmount
FROM Employees AS e INNER JOIN Incentives AS i
ON e.EmployeeID = i.EmpRefID
WHERE i.IncentiveAmount>3000

/*Q 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
Ans.*/
SELECT e.FirstName, i.IncentiveAmount
FROM Employees AS e LEFT OUTER JOIN Incentives AS i
ON e.EmployeeID = i.EmpRefID

/*Q 4. Select EmployeeName, ManagerName from the employee table.
Ans.*/
SELECT e1.FirstName AS 'EmployeeName', e2.FirstName AS 'ManagerName'
FROM Employees AS e1 JOIN Employees AS e2
ON e1.ManagerID = e2.EmployeeID

/*Q 5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive
amount as 0 for those employees who didn’t get incentives.
Ans.*/
SELECT e.FirstName, ISNULL(i.IncentiveAmount, 0)
FROM Employees AS e LEFT OUTER JOIN Incentives AS i
ON e.EmployeeID = i.EmpRefID




