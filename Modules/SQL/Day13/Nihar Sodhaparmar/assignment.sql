USE Day5;

/*	Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary. */

	--Function
	CREATE FUNCTION Function1(@basicSalary MONEY)
	RETURNS MONEY AS
	BEGIN
		RETURN @basicSalary * 0.12;
	END

	--Execute
	SELECT EmployeeId, Salary, dbo.Function1(Salary) AS 'PF'
	FROM Employees


/*	Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.
	Monthly Earnings		Profession Tax Payable
	Below Rs. 5999			Nil
	Rs. 6000 to Rs. 8999	Rs. 80/month
	Rs. 9000 to Rs. 11999	Rs. 150/month
	Rs 12000 and above		Rs. 200/month */

	-- Function
	CREATE FUNCTION dbo.Function2(@MonthlyEarning MONEY)
	RETURNS INT 
	AS
	BEGIN
		DECLARE @Tax INT ;
		SET @Tax = CASE 
						WHEN @MonthlyEarning BETWEEN 6000 AND 8999
							THEN 80
						WHEN @MonthlyEarning BETWEEN 9000 AND 11999
							THEN 150
						WHEN @MonthlyEarning >=12000
							THEN 200
						ELSE 0
					END;
		RETURN @Tax;
	END
	
	--Execute
	SELECT EmployeeId
		, Salary
		, dbo.Function2(Salary) AS 'Tax' 
	FROM Employees;


/*	Create a table valued function which will accept incentive percentage and calculate salary with incentive. 
	incentive dependent on amount of sale, if sales is more than 10 */

	CREATE TABLE Sales
	(
		SalesID INT PRIMARY KEY IDENTITY(1,1),
		EmployeeId INT CONSTRAINT fkEmployeeID FOREIGN KEY REFERENCES Employees(EmployeeId) NOT NULL,
		NumberOfSales TINYINT NOT NULL
	)

	INSERT INTO Sales (EmployeeId, NumberOfSales) VALUES
		(1, 15),
		(2, 20),
		(3, 5),
		(4, 10),
		(5, 1);

	--Function
	ALTER FUNCTION dbo.Function3(@IncentivePercentage INT)
	RETURNS TABLE 
	AS
	RETURN(	SELECT e.EmployeeId
				, e.FirstName + ' ' +e.LastName 'Name'
				, e.Salary
				, e.Salary + (i.IncentiveAmount * @IncentivePercentage /100) 'Total salary'
			FROM Employees e
				JOIN Incentives i ON i.EmployeeRefId = e.EmployeeId
				JOIN Sales s ON s.EmployeeId = e.EmployeeId
			WHERE s.NumberOfSales > 10
	);
	
	--Execute
	SELECT * FROM dbo.Function3(10);


/*	Create a table valued function which will accept JobTitle which will return new table set based on jobtitle */
	
	USE AdventureWorks2012;

	SELECT * FROM HumanResources.Employee;

	CREATE FUNCTION dbo.Function4(@JobTitle VARCHAR(100))
	RETURNS TABLE
	RETURN(
			SELECT * 
			FROM HumanResources.Employee
			WHERE JobTitle = @JobTitle
	);

	SELECT * FROM dbo.Function4('Senior Tool Designer')