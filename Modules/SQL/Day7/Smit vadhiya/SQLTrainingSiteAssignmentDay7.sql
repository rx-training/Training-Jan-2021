-------------------------------------------------DAY 5--------------------------------------------------------------

CREATE TABLE Employees
(
	EmployeeId INT NOT NULL CONSTRAINT pkEmployee PRIMARY KEY,
	FirstName VARCHAR(20),
	LastName VARCHAR(20),
	Salary MONEY,
	JoiningDate DATE,
	Department VARCHAR(20),
	ManagerId INT
)


INSERT INTO Employees (EmployeeId,FirstName,LastName,Salary,Department,ManagerId)VALUES 
(1,'John','Abraham',1000000,'Banking',NULL),
(2,'Michael','Clarke',800000,'Insurance',1),
(3,'Roy','Thomas',700000,'Banking',1),
(4,'Tom','Jose',600000,'Insurance',2),
(5,'Jerry','Pinto',650000,'Insurance',3),
(6,'Philip','Mathew',750000,'Services',3),
(7,'TestName1','123',650000,'Services',2),
(8,'TestName2','Lname%',600000,'Insurance',2)

CREATE TABLE  Incentives 
(
	EmployeeRefId INT NOT NULL,
	IncentiveDate DATE,
	IncentiveAmount MONEY
) 

INSERT INTO Incentives VALUES 
(1,'01-FEB-13',5000),
(2,'01-FEB-13',3000),
(3,'01-FEB-13',4000),
(1,'01-JAN-13',4500),
(2,'01-JAN-13',3500)


SELECT * FROM Employees
SELECT * FROM Incentives

-----------------------------------ASSIGNMENT 1----------------------------------

/*Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/

----------------DERIVED TABLE------------

SELECT EmployeeId,EmployeeRefId,JoiningDate,IncentiveDate,DATEDIFF(MM,JoiningDate,IncentiveDate) AS Diff
FROM Employees e JOIN Incentives i on e.EmployeeId = i.EmployeeRefId

--------------------CET------------------

WITH MyCTE(EmployeeId,EmployeeRefId,JoiningDate,IncentiveDate,Diff) AS
(
	SELECT EmployeeId,EmployeeRefId,JoiningDate,IncentiveDate,DATEDIFF(MM,JoiningDate,IncentiveDate)
	FROM Employees e JOIN Incentives i on e.EmployeeId = i.EmployeeRefId
)
SELECT * FROM MyCTE 


-----------------------------------ASSIGNMENT 2----------------------------------

/*Select first_name, incentive amount from employee and incentives table for those
employees who have incentives and incentive amount greater than 3000*/



SELECT e.FirstName, i.IncentiveAmount
FROM Employees e JOIN Incentives i on e.EmployeeId = i.EmployeeRefId WHERE I.IncentiveAmount>3000

-----------------------------------ASSIGNMENT 3----------------------------------

/*Select first_name, incentive amount from employee and incentives table for all 
employees even if they didn’t get incentives.*/

WITH MyCTA(FirstName,Incentive) AS
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM Employees e LEFT OUTER JOIN Incentives i on e.EmployeeId = i.EmployeeRefId 
)

SELECT * FROM MyCTA


-----------------------------------ASSIGNMENT 4----------------------------------

/*Select EmployeeName, ManagerName from the employee table.*/

WITH MyCTA(EmployeeName, ManagerName) AS
(
	SELECT i.FirstName , e.FirstName 
	FROM Employees e RIGHT OUTER JOIN Employees i on e.EmployeeId = i.ManagerId 
)

SELECT * FROM MyCTA

-----------------------------------ASSIGNMENT 5----------------------------------

/*Select first_name, incentive amount from employee and incentives table for all
employees even if they didn’t get incentives and set incentive amount as 0 for those 
employees who didn’t get incentives.*/

WITH MyCTA(FirstName, INcentiveAmount) AS
(
	SELECT e.FirstName, 
	ISNULL(i.IncentiveAmount,0)
	FROM Employees e LEFT OUTER JOIN Incentives i on e.EmployeeId = i.EmployeeRefId 
)
SELECT * FROM MyCTA
