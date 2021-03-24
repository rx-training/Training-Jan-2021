USE AdventureWorks2012;  
SET NOCOUNT ON;  

DECLARE @vendor_id INT, @vendor_name NVARCHAR(50),  
    @message VARCHAR(80), @product NVARCHAR(50);  
  
PRINT '-------- Vendor Products Report --------';  
  
DECLARE vendor_cursor CURSOR FOR   
SELECT BusinessEntityID, Name  
FROM Purchasing.Vendor  
WHERE PreferredVendorStatus = 1  
ORDER BY BusinessEntityID;  
  
OPEN vendor_cursor  
  
FETCH NEXT FROM vendor_cursor   
INTO @vendor_id, @vendor_name  
  
WHILE @@FETCH_STATUS = 0  
BEGIN  
    PRINT ' '  
    SELECT @message = '----- Products From Vendor: ' +   
        @vendor_name  
  
    PRINT @message  
  
    -- Declare an inner cursor based     
    -- on vendor_id from the outer cursor.  
  
    DECLARE product_cursor CURSOR FOR   
    SELECT v.Name  
    FROM Purchasing.ProductVendor pv, Production.Product v  
    WHERE pv.ProductID = v.ProductID AND  
    pv.BusinessEntityID = @vendor_id  -- Variable value from the outer cursor  
  
    OPEN product_cursor  
    FETCH NEXT FROM product_cursor INTO @product  
  
    IF @@FETCH_STATUS <> 0   
        PRINT '         <<None>>'       
  
    WHILE @@FETCH_STATUS = 0  
    BEGIN  
  
        SELECT @message = '         ' + @product  
        PRINT @message  
        FETCH NEXT FROM product_cursor INTO @product  
        END  
  
    CLOSE product_cursor  
    DEALLOCATE product_cursor  
        -- Get the next vendor.  
    FETCH NEXT FROM vendor_cursor   
    INTO @vendor_id, @vendor_name  
END   
CLOSE vendor_cursor;  
DEALLOCATE vendor_cursor;

--------------------------------------------------------------------------
USE AdventureWorks2012;  
GO  
SELECT @@CURSOR_ROWS;  
DECLARE Name_Cursor CURSOR FOR  
SELECT LastName ,@@CURSOR_ROWS FROM Person.Person;  
OPEN Name_Cursor;  
FETCH NEXT FROM Name_Cursor;  
SELECT @@CURSOR_ROWS;  
CLOSE Name_Cursor;  
DEALLOCATE Name_Cursor;  
GO


------------------------------------------------------------
USE DAY6
select * from Employees

SET NOCOUNT ON
DECLARE @Id int, @name Varchar(60), @salary int
DECLARE cur_emp CURSOR
STATIC FOR 
SELECT EmployeeID, FirstName, Salary 
FROM Employees

OPEN cur_emp
select @@CURSOR_ROWS
IF @@CURSOR_ROWS > 0
BEGIN
	FETCH NEXT FROM cur_emp INTO @Id, @name, @salary
	WHILE @@FETCH_STATUS = 0
	BEGIN
		PRINT 'ID : '+convert(varchar(20),@Id)+
		', Name : '+ @name +
		', Salary : '+convert(varchar(20),@salary)

		FETCH NEXT FROM cur_emp INTO @Id, @name, @salary
	END
END

CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF