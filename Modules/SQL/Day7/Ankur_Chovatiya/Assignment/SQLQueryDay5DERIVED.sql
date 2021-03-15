---- Day 7 assignment 


-- ==================   (day5 query to convert into derived table)    =================================================

-- 1

SELECT EMPLOYEE_ID,diffendence FROM(
SELECT e.EMPLOYEE_ID,DATEDIFF(DAY,e.Joining_Date,i.Incentive_Date)  'diffendence'
FROM Employee e JOIN Incentive i 
ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID  ) D_table


-- 2 

SELECT First_Name, i.Incentive_Amount
FROM Employee 
INNER JOIN(
SELECT Incentive_Amount,EMPLOYEE_REF_ID
FROM  Incentive) AS i
ON i.EMPLOYEE_REF_ID = EMPLOYEE_ID


-- 3 


SELECT First_Name, SUM(i.Incentive_Amount) 'IAmount' FROM Employee
LEFT OUTER JOIN(
SELECT Incentive_Amount,EMPLOYEE_REF_ID  FROM Incentive ) AS i
ON EMPLOYEE_ID =i.EMPLOYEE_REF_ID
GROUP BY First_Name,Last_Name


-- 4


SELECT Employee.FIRST_NAME 'EmpFname', e.FIRST_NAME 'FIRST_NAME'
FROM Employee INNER JOIN(
SELECT EMPLOYEE_ID,First_Name  FROM Employee ) AS e
ON  MANAGER_ID =e.EMPLOYEE_ID

-- 5 


SELECT First_Name ,ISNULL(i.Incentive_Amount,0)
FROM Employee LEFT JOIN(
SELECT EMPLOYEE_REF_ID,Incentive_Amount  FROM Incentive ) AS i
ON  EMPLOYEE_ID = i.EMPLOYEE_REF_ID

