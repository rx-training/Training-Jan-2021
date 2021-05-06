
use AdventureWorks2012;
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
select * from dbo.Employee
select * from HumanResources.Employee;


CREATE PROCEDURE upDatwData
AS	
BEGIN
BEGIN TRY  
BEGIN TRANSACTION 
UPDATE dbo.Employee
SET  Employee.id=13 

UPDATE HumanResources.Employee
SET JobTitle='Production Technician WC-10' 
COMMIT TRANSACTION
print('Transaction committed')
END TRY
BEGIN CATCH 
Rollback Transaction
END Catch
End


Select * from HumanResources.Employee