--Assignment:

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT 	Employees.EmployeeID, FirstName ,
		CAST( DATEDIFF(MM,HireDate,IncentiveDate) AS VARCHAR ) + ' months ' AS Diff
FROM Employees JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId ;



--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT FirstName , IncentiveAmount FROM Employees 
JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId 
WHERE IncentiveAmount > 3000 ;



--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT FirstName , IncentiveAmount FROM Employees 
LEFT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId ;



--Select EmployeeName, ManagerName from the employee table.
SELECT e.FirstName AS 'Employee Name' , m.FirstName AS 'Manager Name'
FROM Employees e
LEFT JOIN Employees m ON e.ManagerID = m.EmployeeID ;  



--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
SELECT FirstName , ISNULL( Incentives.IncentiveAmount , 0 ) AS Incentive
FROM Employees 
LEFT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId ;





-- CREATE TABLE Manager (
-- 	EmployeeId decimal( 6,0 ) NOT NULL ,
-- 	EmployeeProject VARCHAR( 50 ) NOT NULL ,
-- 	ManagerName VARCHAR( 50 ) NOT NULL ,
-- 	FOREIGN KEY (EmployeeId) REFERENCES Employees( EmployeeID ) 
-- ) ;
-- INSERT INTO Manager VALUES ( 100, 'E-commerce' , 'Sushant Sir' ) ;
-- INSERT INTO Manager VALUES ( 101, 'Blog Website' , 'Prashant Sir' ) ;
-- INSERT INTO Manager VALUES ( 102, 'Image Redefining Website' , 'Mishant Sir' ) ;
-- INSERT INTO Manager VALUES ( 103, 'Blockchain Integration' , 'Magan Sir' ) ;
-- INSERT INTO Manager VALUES ( 104, 'Chrome Extension development' , 'Chhagan Sir' ) ;
-- SELECT * FROM Manager ;


-- CREATE TABLE Incentives ( 
-- 	EmployeeId decimal( 6,0 ) NOT NULL ,
-- 	IncentiveDate DATE , 
-- 	IncentiveAmount INT NOT NULL ,
-- 	FOREIGN KEY (EmployeeId) REFERENCES Employees(EmployeeID) 
-- ) ;

-- SELECT * FROM Incentives ;
-- SELECT * FROM Employees ;

