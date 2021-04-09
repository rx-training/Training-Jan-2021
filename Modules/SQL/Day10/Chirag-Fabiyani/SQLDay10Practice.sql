

DECLARE Employee_Cursor CURSOR FOR  
SELECT BusinessEntityID, JobTitle FROM HumanResources.Employee;  
OPEN Employee_Cursor;  
PRINT @@FETCH_STATUS
FETCH NEXT FROM Employee_Cursor;  
PRINT @@CURSOR_ROWS
WHILE @@FETCH_STATUS = 0  
   BEGIN  
      FETCH NEXT FROM Employee_Cursor;
	  PRINT @@FETCH_STATUS
   END;  
CLOSE Employee_Cursor;  
DEALLOCATE Employee_Cursor;  
GO 



DECLARE vend_cursor CURSOR LOCAL
    FOR SELECT * FROM Purchasing.Vendor  
OPEN vend_cursor



DECLARE vend_cursor CURSOR STATIC
    FOR SELECT * FROM Purchasing.Vendor  
OPEN vend_cursor
FETCH NEXT FROM vend_cursor;
PRINT @@CURSOR_ROWS
CLOSE vend_cursor;
DEALLOCATE vend_cursor;


DECLARE vend_cursor SCROLL CURSOR 
    FOR SELECT * FROM Purchasing.Vendor  
OPEN vend_cursor  
FETCH NEXT FROM vend_cursor; 
FETCH PRIOR FROM vend_cursor;
FETCH LAST FROM vend_cursor;
FETCH FIRST FROM vend_cursor;
FETCH ABSOLUTE 3 FROM vend_cursor;
FETCH RELATIVE -1 FROM vend_cursor;
CLOSE vend_cursor;
DEALLOCATE vend_cursor;



DECLARE vend_cursor CURSOR FAST_FORWARD
    FOR SELECT * FROM Purchasing.Vendor  
OPEN vend_cursor  
FETCH NEXT FROM vend_cursor;
FETCH NEXT FROM vend_cursor;
FETCH NEXT FROM vend_cursor;
CLOSE vend_cursor;
DEALLOCATE vend_cursor;