-- GOTO statement 


DECLARE @Count AS INT
SET @Count = 1
WHILE @Count <3
	BEGIN
		PRINT @Count
		SET @Count = @Count + 1;
	END
Branch_One:  
    PRINT 'Jumping To Branch One.'  
    GOTO Branch_Three; --This will prevent Branch_Two from executing.  
Branch_Two:  
    PRINT 'Jumping To Branch Two.'  
Branch_Three:  
    PRINT 'Jumping To Branch Three.';