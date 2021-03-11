/* Day 5 Assignment */
CREATE TABLE Employees(
	Employee_Id INT NOT NULL CONSTRAINT pkEmployeeId PRIMARY KEY
	,First_Name VARCHAR(20) NOT NULL
	,Last_Name VARCHAR(20) NOT NULL
	,Salary INT NOT NULL
	,Joining_Date DATE NOT NULL
	,Department VARCHAR(20) NOT NULL
	,Manager_Id INT
);

CREATE TABLE Incentives(
	Employee_Ref_Id INT NOT NULL CONSTRAINT fkEmployee_Ref_Id FOREIGN KEY REFERENCES Employees
	,Incentive_Date	DATE
	,Incentive_Amount INT
);
SELECT * FROM Incentives;

-- 1 - Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table.

SELECT e.First_Name,e.Joining_Date , i.Incentive_Date,
	CONVERT(VARCHAR,(DATEPART(dd,i.Incentive_Date)-DATEPART(dd,e.Joining_Date)))+' Days '
	+CONVERT(VARCHAR,(DATEPART(mm,i.Incentive_Date)-DATEPART(mm,e.Joining_Date)))+' Months '
	+CONVERT(VARCHAR,(DATEPART(yy,i.Incentive_Date)-DATEPART(yy,e.Joining_Date)))+' Year' 
	AS 'Incintive After'
FROM Employees e
JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id;

-- 2 - Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000.

SELECT e.First_Name, i.Incentive_Amount
FROM Employees e
JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id
WHERE i.Incentive_Amount>3000;

-- 3 - Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

SELECT e.First_Name, i.Incentive_Amount
FROM Employees e
LEFT OUTER JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id;

-- 4 - Select EmployeeName, ManagerName from the employee table.

SELECT e.First_Name, b.Manager_Id
FROM Employees e,Employees b
WHERE e.Employee_Id= b.Employee_Id;

-- 5 - Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.

SELECT e.First_Name, ISNULL(i.Incentive_Amount,0)
FROM Employees e
LEFT OUTER JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id;
