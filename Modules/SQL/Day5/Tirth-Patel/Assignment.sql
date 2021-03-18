USE CarSales

SELECT * FROM Employees
SELECT * FROM incentives
--Get difference between JOINING_DATE and INCENTIVE_DATE from
--employee and incentives table
SELECT e.Employee_ID,
DATEDIFF(day,Joining_Date,Incentive_Date) AS 'date diffrence' 
FROM Employees e JOIN incentives i on e.Employee_ID = i.Employee_Ref_Id

--Select first_name, incentive amount from employee and incentives table for
--those employees who have incentives and incentive amount greater than 3000

SELECT e.First_Name AS 'NAME',
		i.Incentive_Amount AS 'Amount'
	FROM Employees e JOIN incentives i ON e.Employee_ID = i.Employee_Ref_Id
		WHERE i.Incentive_Amount > 3000

--Select first_name, incentive amount from
--employee and incentives table for all employees even if they didn’t get incentives.
	SELECT e.First_Name AS 'NAME',
		i.Incentive_Amount AS 'Amount'
	FROM Employees e FULL OUTER JOIN incentives i ON e.Employee_ID = i.Employee_Ref_Id


--Select EmployeeName, ManagerName from the employee table.
	SELECT  M.Manager_ID ,
			M.First_Name + M.Last_Name AS 'Manger-Name',
			E.Employee_ID,
			E.First_Name + E.Last_Name AS 'Employee-Name'
	FROM Employees M INNER JOIN Employees E ON M.Employee_ID = E.Manager_ID

--Select first_name, incentive amount from employee and incentives table for 
--all employees even if they didn’t get incentives and set incentive amount as 0
--for those employees who didn’t get incentives.
	
	SELECT e.First_Name,
			ISNULL(Incentive_Amount,0)
	FROM Employees e LEFT JOIN incentives i ON e.Employee_ID = i.Employee_Ref_Id
	



