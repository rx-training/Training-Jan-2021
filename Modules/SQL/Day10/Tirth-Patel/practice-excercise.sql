USE AdventureWorks2012;  
GO  
--fetch 
	DECLARE contact_cursor CURSOR FOR 
		SELECT LastName 
			FROM  Person.Person
				WHERE LastName LIKE 'Bi%'
				ORDER BY LastName
	OPEN contact_cursor 

	FETCH NEXT FROM contact_cursor 

	WHILE @@FETCH_STATUS = 0 
	BEGIN
		FETCH NEXT FROM contact_cursor 
	END

	CLOSE contact_cursor 
	DEALLOCATE contact_cursor
	GO
	--storing data of fetch to variable
	DECLARE @lastname varchar(50) ,@firstname varchar(50)
	DECLARE contact_cursor CURSOR FOR
		SELECT lastname , firstname FROM Person.Person
		WHERE LastName LIKE 'BI%'
		ORDER BY LastName

	OPEN contact_cursor
	FETCH NEXT FROM contact_cursor
	INTO @lastname , @firstname

	WHILE @@FETCH_STATUS = 0 
	BEGIN 
		PRINT 'CONTACT NAME: ' + @firstname +' ' + @lastname
			FETCH NEXT FROM contact_cursor
			INTO @lastname , @firstname
	END
	CLOSE contact_cursor
	DEALLOCATE contact_cursor
GO
 --scroll cursor
	SELECT FirstName , LastName
	FROM PERSON.Person 
	WHERE LASTNAME LIKE 'BI%'	ORDER BY LastName

	DECLARE contact_cursor SCROLL CURSOR FOR 
	SELECT  Firstname, lastname FROM PERSON.Person 
		WHERE LASTNAME LIKE 'BI%'	ORDER BY LastName

	OPEN Contact_cursor

	FETCH LAST FROM contact_cursor

	FETCH Prior FROM contact_cursor

	FETCH ABSOLUTE 2 FROM contact_cursor

	FETCH RELATIVE 4 FROM contact_cursor

	FETCH RELATIVE -2 FROM contact_cursor

	CLOSE contact_cursor
	DEALLOCATE contact_cursor
GO
 
-- Display the count message.
SET NOCOUNT OFF; 
SELECT TOP(5)LastName  
FROM Person.Person  
WHERE LastName LIKE 'A%';  
GO  
-- SET NOCOUNT to ON to no longer display the count message.  
SET NOCOUNT ON;  
 
SELECT TOP(5) LastName  
FROM Person.Person  
WHERE LastName LIKE 'A%';  
GO  
-- Reset SET NOCOUNT to OFF  
SET NOCOUNT OFF;  
GO
CLOSE vend_cursor
DEALLOCATE vend_cursor
DECLARE vend_cursor CURSOR
	FOR SELECT * FROM Purchasing.Vendor

	OPEN vend_cursor	
	FETCH NEXT FROM vend_cursor
GO
SET NOCOUNT ON

DECLARE @vendor_id int ,
		@vendor_name  varchar(50),
		@message varchar(80),
		@product varchar(50)

PRINT '_____________ Vendor products Report_____________'

DECLARE vendor_cursor CURSOR FOR 
SELECT BusinessEntityID , Name 
FROM Purchasing.Vendor
WHERE PreferredVendorStatus = 1
Order by BusinessEntityID;

Open Vendor_cursor	
	FETCH NEXT FROM Vendor_cursor INTO @vendor_id , @vendor_name
	WHILE @@FETCH_STATUS = 0 
	BEGIN
		PRINT ' '
		SELECT @message = '----- Prodcuts from vendor:' + @vendor_name
		PRINT @message
		DECLARE product_cursor CURSOR FOR
		SELECT v.name FROM Purchasing.ProductVendor pv , Production.Product v
		WHERE pv.ProductID = v.ProductID AND pv.BusinessEntityID =@vendor_id

		OPEN product_cursor 
		FETCH NEXT FROM product_cursor INTO @product
		IF @@FETCH_STATUS <> 0 
		PRINT '            <none>>'

		WHILE @@FETCH_STATUS = 0
		BEGIN
			SELECT @message = '          ' +@product
			PRINT @message
			FETCH NEXT FROM product_cursor INTO @product
			END
		CLOSE Product_cursor
		DEALLOCATE product_cursor
		FETCH NEXT FROM vendor_cursor
		INTO @vendor_id , @vendor_name
	END
	CLOSE vendor_cursor
	DEALLOCATE vendor_cursor;
	GO
