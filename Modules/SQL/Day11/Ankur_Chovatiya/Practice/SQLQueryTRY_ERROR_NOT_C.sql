BEGIN TRY  
    -- Table does not exist; object name resolution  
    
    SELECT * FROM NonexistentTable;  
END TRY  
	-- error not caught.  
BEGIN CATCH  
PRINT 'IN CATCH' 
    SELECT   
        ERROR_NUMBER() AS ErrorNumber  
       ,ERROR_MESSAGE() AS ErrorMessage;  
END CATCH  


