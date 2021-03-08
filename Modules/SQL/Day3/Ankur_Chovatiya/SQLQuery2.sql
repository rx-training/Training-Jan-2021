
SELECT FirstName,RIGHT( '$$$$$$$$$$$$$$' +CAST( Salary as varchar ),10)
FROM employees;