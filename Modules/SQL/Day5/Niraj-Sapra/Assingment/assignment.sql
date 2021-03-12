CREATE DATABASE DAY5SQL;
 
USE DAY5SQL;

CREATE TABLE Employees(
EMPLOYEE_ID decimal(6,0) NOT NULL,
FIRST_NAME varchar(10) NOT NULL,
LAST_NAME varchar(10) NOT NULL,
SALARY decimal(10,0) NOT NULL,
JOINING_DATE date NOT NULL,
DEPARTMENT varchar(10) NOT NULL,
MANAGER_ID decimal(6,0) NULL
);

INSERT INTO Employees (EMPLOYEE_ID,FIRST_NAME,LAST_NAME ,SALARY,JOINING_DATE,DEPARTMENT, MANAGER_ID)
VALUES('1','John','Abraham','1000000','01-JAN-13','Banking',NULL),
('2','Michael','Clarke','800000','01-JAN-13','Insurance','1'),
('3','Roy','Thomas','700000','01-JAN-13','Banking','1'),
('4','Tom','Jose','600000','01-JAN-13','Insurance','2'),
('5','Jerry','Pinto','650000','01-JAN-13','Insurance','3'),
('6','Philip','Mathew','750000','01-JAN-13','Services','3'),
('7','TestName1','123','650000','01-JAN-13','Services','2'),
('8','TestName2','Lname%','600000','01-JAN-13','Insurance','2')
;

CREATE TABLE Incentives(
EMPLOYEE_REF_ID decimal(6,0) NOT NULL,
INCENTIVE_DATE date NOT NULL,
INCENTIVE_AMOUNT decimal(6,0) NULL
);

INSERT INTO Incentives(EMPLOYEE_REF_ID,INCENTIVE_DATE,INCENTIVE_AMOUNT) 
VALUES ('1','01-FEB-13','5000'),
('2','01-FEB-13','3000'),
('3','01-FEB-13','4000'),
('1','01-FEB-13','4500'),
('2','01-FEB-13','3500');  

/*Assignment 1:-Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/

SELECT FIRST_NAME, ABS(DATEDIFF( dd , INCENTIVE_DATE ,  JOINING_DATE)) As DIffrancedata FROM Employees a INNER JOIN 
Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID;

/*Assignment 2:-Select first_name, incentive amount from employee and incentives table for those employees who have
 incentives and incentive amount greater than 3000*/

SELECT FIRST_NAME,INCENTIVE_AMOUNT FROM Employees a INNER JOIN 
Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID Where B.INCENTIVE_AMOUNT > 3000;

/*Assignment 3:-Select first_name, incentive amount from employee and incentives table for all 
employees even if they didn’t get incentives.*/

SELECT FIRST_NAME,LAST_NAME,DEPARTMENT,INCENTIVE_AMOUNT FROM Employees a LEFT OUTER JOIN 
Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID

/*Assignment 4:-Select EmployeeName, ManagerName from the employee table.*/

SELECT FIRST_NAME,LAST_NAME,DEPARTMENT, MANAGER_ID FROM Employees;

/*Assignment 5:-Select first_name, incentive amount from employee and incentives table for all employees
even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

SELECT FIRST_NAME,ISNULL(INCENTIVE_AMOUNT,0) FROM Employees a FULL OUTER JOIN 
Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID;