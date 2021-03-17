-- RETURN SATATUMENT
CREATE PROCEDURE checkstate @param VARCHAR(11)  
AS  
IF (SELECT StateProvince FROM Person.vAdditionalContactInfo WHERE StateProvince = @param) = 'WA'  
    RETURN 1  
ELSE  
    RETURN 2;  
GO  



-- PROCEDURE 
CREATE PROCEDURE findjob @nm sysname = NULL  
AS   
IF @nm IS NULL  
    BEGIN  
        PRINT 'You must give a user name'  
        RETURN  
    END  
ELSE  
    BEGIN  
	
        SELECT o.name, o.id, o.uid  
        FROM sysobjects o INNER JOIN master..syslogins l  
            ON o.uid = l.sid  
        WHERE l.name = @nm  
    END;  

	----- SIMPLE COUNT


DECLARE @Count AS INT
SET @Count = 1
WHILE @Count <3
	BEGIN
		PRINT @Count
		SET @Count = @Count + 1;
		RETURN 1
	END
