

BEGIN TRY  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT  
        ERROR_NUMBER() AS ErrorNumber  
        ,ERROR_SEVERITY() AS ErrorSeverity  
        ,ERROR_STATE() AS ErrorState  
        ,ERROR_PROCEDURE() AS ErrorProcedure  
        ,ERROR_LINE() AS ErrorLine  
        ,ERROR_MESSAGE() AS ErrorMessage;  
END CATCH;  
GO  


CREATE PROCEDURE uspGetEmployeesTest2   
    @Number nvarchar(15)     
AS
    SET NOCOUNT ON;  
    SELECT *  
    FROM HumanResources.Employee  
    WHERE NationalIDNumber = @Number;  
GO


EXECUTE uspGetEmployeesTest2 N'295847284';


EXEC sp_HelpText uspGetEmployeesTest2


EXEC sp_Help uspGetEmployeesTest2


EXEC sp_depends uspGetEmployeesTest2



ALTER PROCEDURE uspGetEmployeesTest
	@Num nvarchar(15)
WITH ENCRYPTION      
AS
    SET NOCOUNT ON;  
    SELECT *  
    FROM HumanResources.Employee  
    WHERE NationalIDNumber = @Num;  
GO


EXECUTE uspGetEmployeesTest N'295847284';


EXEC sp_HelpText uspGetEmployeesTest;