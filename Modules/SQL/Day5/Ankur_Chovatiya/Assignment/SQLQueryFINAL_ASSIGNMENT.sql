SELECT EMP.FIRST_NAME,
CASE 
WHEN SAL.INCENTIVE_AMOUNT IS NULL THEN 0 
ELSE SAL.INCENTIVE_AMOUNT 
END AS INCENTIVE_AMOUNT
FROM Employee AS EMP
LEFT JOIN INCENTIVE AS SAL
ON EMP.EMPLOYEE_ID = SAL.EMPLOYEE_REF_ID