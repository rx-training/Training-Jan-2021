CREATE TABLE Incentives ( 
	EmployeeId decimal( 6,0 ) NOT NULL ,
	IncentiveDate DATE , 
	IncentiveAmount INT NOT NULL ,
	FOREIGN KEY (EmployeeId) REFERENCES Employees(EmployeeID) 
) ;

SELECT * FROM Incentives ;
SELECT * FROM Employees ;



--Practice Exercise:
--Do the hands on the video provided in tutorial site.

--INNER JOIN 
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND MONTH(IncentiveDate) = 1 ;

--LEFT JOIN 
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees LEFT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND MONTH(IncentiveDate) = 1 ;

--RIGHT JOIN 
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees RIGHT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND MONTH(IncentiveDate) = 1 ;

--FULL JOIN 
SELECT  Incentives.EmployeeId , Employees.FirstName , CONVERT( VARCHAR,Incentives.IncentiveDate,107) IncentiveDate , Incentives.IncentiveAmount FROM Employees FULL JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND MONTH(IncentiveDate) = 1 ;



--Assignment:

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT Employees.EmployeeID, FirstName ,
		CAST( DATEDIFF(MM,HireDate,IncentiveDate) AS VARCHAR ) + ' months ' AS Diff
		FROM Employees JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId ;


--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT FirstName , IncentiveAmount FROM Employees 
	JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId 
	WHERE IncentiveAmount > 3000 AND MONTH(IncentiveDate) = 1;


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT FirstName , IncentiveAmount FROM Employees 
	JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND MONTH(IncentiveDate) = 1 ;



CREATE TABLE Manager (
	EmployeeId decimal( 6,0 ) NOT NULL ,
	EmployeeProject VARCHAR( 50 ) NOT NULL ,
	ManagerName VARCHAR( 50 ) NOT NULL ,
	FOREIGN KEY (EmployeeId) REFERENCES Employees( EmployeeID ) 
) ;
INSERT INTO Manager VALUES ( 100, 'E-commerce' , 'Sushant Sir' ) ;
INSERT INTO Manager VALUES ( 101, 'Blog Website' , 'Prashant Sir' ) ;
INSERT INTO Manager VALUES ( 102, 'Image Redefining Website' , 'Mishant Sir' ) ;
INSERT INTO Manager VALUES ( 103, 'Blockchain Integration' , 'Magan Sir' ) ;
INSERT INTO Manager VALUES ( 104, 'Chrome Extension development' , 'Chhagan Sir' ) ;
SELECT * FROM Manager ;

--Select EmployeeName, ManagerName from the employee table.
SELECT Employees.FirstName , Manager.ManagerName FROM Employees JOIN Manager ON Employees.EmployeeID = Manager.EmployeeId ;  


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
SELECT FirstName , 
	CASE
		WHEN IncentiveAmount IS NULL THEN 0
		ELSE IncentiveAmount
	END AS IncentiveAmount
	FROM Employees 
	LEFT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId AND MONTH(IncentiveDate) = 1 ;

