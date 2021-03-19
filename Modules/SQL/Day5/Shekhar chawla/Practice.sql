-- Day5
--Practice Exercise:
--Do the hands on the video provided in tutorial site.

--INNER JOIN : ( A INTERSECTION B )
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND Incentives.IncentiveAmount > 15000;

--LEFT JOIN : (A UNION B - B[NULL] )
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees LEFT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND Incentives.IncentiveAmount > 15000;

--RIGHT JOIN : (A UNION B - A[NULL] )
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees RIGHT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND Incentives.IncentiveAmount > 15000 ;

--FULL JOIN : (A UNION B )
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees FULL OUTER JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND Incentives.IncentiveAmount > 15000 ;

-- CROSS JOIN : A*B
SELECT Employees.FirstName , Incentives.IncentiveAmount FROM Employees CROSS JOIN Incentives WHERE Incentives.IncentiveAmount > 16000 

-- SELF JOIN : A+A
-- EmployeeNames and their ManagerNames
SELECT a.EmployeeID , a.FirstName , b.EmployeeID AS 'ManagerID' , b.FirstName AS 'ManagerName' 
FROM Employees a
LEFT JOIN Employees b ON a.ManagerID = b.EmployeeID ;

