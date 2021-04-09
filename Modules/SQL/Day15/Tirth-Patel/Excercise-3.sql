BEGIN TRANSACTION tr4
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE--depending upon indexes if you  have indexes on cloumn you want to select then sql will only lock that column
	--If you dopnt ave any indexes sql will lock whole table so you wont be able to update it by outside of this query
SELECT Salary FROM Employees WHERE EmployeeID = 108
--The below statement will excute in a miunte
SELECT Salary FROM Employees WHERE EmployeeID = 108
COMMIT TRANSACTION tr4
GO