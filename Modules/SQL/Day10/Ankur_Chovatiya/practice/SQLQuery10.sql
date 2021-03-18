--Declare cursor

DECLARE vend_cursor CURSOR  
    FOR SELECT * FROM Purchasing.Vendor 
	
-- open cursor
OPEN vend_cursor  
-- fetch from cursor
FETCH NEXT FROM vend_cursor; 


WHILE @@FETCH_STATUS = 0
BEGIN 
	FETCH NEXT FROM vend_cursor
END

-- close cursor
CLOSE vend_cursor
-- deallocate cursor
DEALLOCATE vend_cursor

GO
