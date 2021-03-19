CREATE TABLE TestRethrow  
	(    
		ID INT PRIMARY KEY  
	);  
BEGIN TRY  
    INSERT TestRethrow VALUES(1);    
    INSERT TestRethrow VALUES(1);  
END TRY  
BEGIN CATCH  
  
    PRINT 'In catch block.';  
    THROW;  
END CATCH;  