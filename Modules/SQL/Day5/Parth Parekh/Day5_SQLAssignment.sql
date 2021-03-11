
/* Create Table EMPLOYEE*/
CREATE TABLE EMPLOYEE(
	EMPLOYEE_ID int PRIMARY KEY,
	FIRST_NAME varchar(50) NULL,
	LAST_NAME varchar(50) NULL,
	SALARY int NOT NULL,
	JOINING_DATE [date] NOT NULL,
	DEPARTMENT [varchar](50) NULL,
	MANAGER_ID [int] NULL,)

/* Create Table INCENTIVES */
CREATE TABLE INCENTIVES(
	EMPLOYEE_REF_ID int NOT NULL CONSTRAINT FkINCENTIVES FOREIGN KEY REFERENCES EMPLOYEE,
	INCENTIVE_DATE date NOT NULL,
	INCENTIVE_AMOUNT varchar(50) NOT NULL )

SELECT * FROM INCENTIVES

/* 1 . Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table */

SELECT  e.FIRST_NAME ,CONCAT( DATEPART(MM , i.INCENTIVE_DATE) - DATEPART(MM ,  e.JOINING_DATE),' Month') 
AS 'Differecne By Month'  ,  i.INCENTIVE_DATE ,i.INCENTIVE_DATE  FROM EMPLOYEE e INNER JOIN INCENTIVES i  ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID 

/* 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 */

SELECT e.FIRST_NAME , i.INCENTIVE_AMOUNT FROM EMPLOYEE e INNER JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID WHERE  i.INCENTIVE_AMOUNT > 3000

/* 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.  */

SELECT e.FIRST_NAME , i.INCENTIVE_AMOUNT   FROM EMPLOYEE e LEFT OUTER JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID  

/* 4. Select EmployeeName, ManagerName from the employee table. */

SELECT e.FIRST_NAME , s.MANAGER_ID FROM EMPLOYEE e , EMPLOYEE s  WHERE e.EMPLOYEE_ID = s.EMPLOYEE_ID



/* 5. Select first_name, incentive amount from employee and incentives table
for all employees even if they didn’t get incentives 
and set incentive amount as 0 for those employees who didn’t get incentives. */

SELECT FIRST_NAME ,  ISNULL(b.INCENTIVE_AMOUNT , 0) FROM EMPLOYEE a LEFT OUTER JOIN INCENTIVES b ON a.EMPLOYEE_ID = b.EMPLOYEE_REF_ID

