CREATE DATABASE AssignmentdbDay5
USE AssignmentdbDay5
CREATE TABLE Employees(
EmployeeId int,
FirstName varchar(30),
LastName varchar(30),
Salary int,
DateOfJoining date,
Department varchar(30),
ManagerId int
)
INSERT INTO Employees(EmployeeId,FirstName,LastName,Salary,DateOfJoining,Department,ManagerId) VALUES(1,'John','Abraham',1000000,'01-Jan-2013','Banking',NULL)
INSERT INTO Employees(EmployeeId,FirstName,LastName,Salary,DateOfJoining,Department,ManagerId) VALUES(2,'Michael','Clarke',800000,'01-Jan-2013','INSURANCE',1),
																									 (3,'Roy','Thomas',700000,'1-Feb-2013','Banking',1),
																									 (4,'Tom','Josh',600000,'1-Feb-2013','Insurance',2),
																									 (5,'Jerry','Pinto',650000,'1-Feb-2013','Insurance',3),
																									 (6,'Phillip','Mathew',750000,'1-Jan-2013','Service',3),
																									 (7,'TestName1','123',650000,'1-Jan-2013','Service',2),
																									 (8,'TestName2','Lname',600000,'1-Feb-2013','Insurance',2)
SELECT * FROM Employees	
Drop Table Employees

CREATE TABLE Incentive(

EmpRefID int,
IncentiveDate date,
IncentiveAmount int

)
INSERT INTO Incentive(EmpRefID,IncentiveDate,IncentiveAmount) VALUES (1,'1-Feb-2013',5000),
																	 (2,'01-FEB-2013',3000),
																	 (3,'01-Feb-2013',4000),
																	 (1,'01-Jan-2013',4500),
																	 (2,'01-Jan-2013',3500)
SELECT * FROM Incentive

/*Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/
SELECT e.EmployeeId,e.FirstName,e.LastName,e.DateOfJoining,i.IncentiveDate, DATEDIFF(MONTH,e.DateOfJoining,i.IncentiveDate)AS 'Difference' FROM Employees e JOIN Incentive i ON e.EmployeeId=i.EmpRefID 

/*Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/
SELECT emp.FirstName,inc.IncentiveAmount  FROM Employees emp JOIN Incentive inc ON emp.EmployeeId=inc.EmpRefID WHERE inc.IncentiveAmount>3000

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives*/
SELECT emp.FirstName,inc.IncentiveAmount FROM Employees emp LEFT OUTER JOIN Incentive inc ON emp.EmployeeId=inc.EmpRefID

/*Select EmployeeName, ManagerName from the employee table*/
SELECT emp.FirstName AS 'ManagerName',emp1.FirstName AS 'EmployeeName' FROM Employees emp JOIN Employees emp1 ON emp.EmployeeId=emp1.ManagerId

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get 
incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

SELECT emp.FirstName,ISNULL(inc.IncentiveAmount,0)  FROM Employees emp LEFT OUTER JOIN Incentive inc ON emp.EmployeeId=inc.EmpRefID 
