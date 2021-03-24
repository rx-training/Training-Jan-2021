 CREATE DATABASE AssignmentdbDay6
 USE AssignmentdbDay6
 CREATE TABLE Employees1(
EmployeeId int,
FirstName varchar(30),
LastName varchar(30),
Salary int,
DateOfJoining date,
Department varchar(30),
ManagerId int
)
INSERT INTO Employees1(EmployeeId,FirstName,LastName,Salary,DateOfJoining,Department,ManagerId) VALUES(1,'John','Abraham',1000000,'01-Jan-2013','Banking',NULL)
INSERT INTO Employees1(EmployeeId,FirstName,LastName,Salary,DateOfJoining,Department,ManagerId) VALUES(2,'Michael','Clarke',800000,'01-Jan-2013','INSURANCE',1),
																									 (3,'Roy','Thomas',700000,'1-Feb-2013','Banking',1),
																									 (4,'Tom','Josh',600000,'1-Feb-2013','Insurance',2),
																									 (5,'Jerry','Pinto',650000,'1-Feb-2013','Insurance',3),
																									 (6,'Phillip','Mathew',750000,'1-Jan-2013','Service',3),
																									 (7,'TestName1','123',650000,'1-Jan-2013','Service',2),
																									 (8,'TestName2','Lname',600000,'1-Feb-2013','Insurance',2)
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

/*Select employee details from employee table if data exists in incentive table ?*/
SELECT * FROM Employees1 WHERE EXISTS(SELECT * FROM Incentive)

/*Find Salary of the employee whose salary is more than Roy Salary*/
SELECT EmployeeId,FirstName,LastName,Salary FROM Employees1 WHERE Salary>(SELECT Salary FROM Employees1 WHERE FirstName='Roy')

/*Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount*/

CREATE VIEW DataView 
AS 
SELECT e.FirstName,e.LastName,e.Salary,e.DateOfJoining,i.IncentiveDate,i.IncentiveAmount FROM Employees1 AS e JOIN Incentive AS i ON e.EmployeeId=i.EmpRefID

SELECT * FROM DataView

/*Create a view to select Select first_name, incentive amount from employee and incentives table for
those employees who have incentives and incentive amount greater than 3000*/

CREATE VIEW  DATAVIEW1 AS
SELECT e.FirstName,i.IncentiveAmount FROM Employees1 e JOIN Incentive i ON e.EmployeeId=i.EmpRefID WHERE i.IncentiveAmount>3000
SELECT * FROM DATAVIEW1

