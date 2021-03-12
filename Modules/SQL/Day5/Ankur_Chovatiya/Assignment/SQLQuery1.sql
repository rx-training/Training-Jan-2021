USE Day5

SELECT DATEDIFF(DAY,Emp.JOINING_DATE , sal.Incentive_date  ) DIFF_DAY
FROM Employee as Emp
JOIN  INCENTIVE as sal
ON Emp.EMPLOYEE_ID = sal.Employee_ref_ID
