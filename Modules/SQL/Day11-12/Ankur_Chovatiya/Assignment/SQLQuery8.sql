-- List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer�s Name.

-- 1

CREATE PROCEDURE same_branch_city_procedure
			@name varchar(10)
AS
	SET NOCOUNT ON 
	SELECT * FROM Deposit AS D JOIN Branch AS B ON D.Bname = B.BNAME
	WHERE B.CITY = (SELECT B.CITY FROM Deposit AS D JOIN Branch AS B ON D.Bname = B.BNAME WHERE D.Cname = @Name)
GO

EXECUTE same_branch_city_procedure N'SUNIL'



--========= 2 


CREATE PROCEDURE SP_SECOND 
	@NAME VARCHAR(20) 

AS
	SELECT * FROM Deposit WHERE Bname IN (SELECT Bname FROM Deposit WHERE Cname = @NAME)
GO

EXECUTE SP_SECOND N'SUNIL'

--========== 3 

CREATE PROCEDURE SP_THIRD
	@CITY VARCHAR(20)
AS
	SELECT COUNT(CNAME) FROM Customer WHERE CITY = @CITY
GO

EXECUTE SP_THIRD N'MUMBAI'


-- ==========  4
CREATE PROCEDURE SP_FOURTH 
	@CITY VARCHAR(20)
AS
	SELECT * FROM (SELECT Cname , Bname FROM Deposit UNION  SELECT CNAME , BNAME   FROM Borrow as tbl) 
	AS D JOIN Branch AS B ON D.Bname = B.BNAME join CUSTOMER AS C ON C.CNAME = D.CNAME
	WHERE B.BNAME IN (SELECT BNAME FROM Branch WHERE CITY IN ('MUMBAI' , 'DELHI')) AND c.CITY = @CITY
GO

EXECUTE SP_FOURTH 'MUMBAI'


--========= 5
CREATE PROCEDURE SP_FIVE
AS
	SELECT * FROM (SELECT Cname , Bname FROM Deposit UNION  SELECT CNAME , BNAME   FROM Borrow as tbl)	
	AS D join Branch as B ON D.Bname = B.BNAME  JOIN Customer AS C ON C.CNAME = D.Cname WHERE C.CITY = B.CITY
GO

EXECUTE SP_FIVE


-- =========== 6

DECLARE @json NVARCHAR(MAX)
SET @json = '[
	{
		"ActNo":1546510,
		"CName":"Ankur patel",
		"BName":"CG road",
		"Amount":8000,
		"ADate":"2020-03-24"
	}
]'
EXECUTE SP_SIXTH @json



CREATE PROCEDURE SP_SIXTH
	@json NVARCHAR(MAX)
AS
BEGIN
SET NOCOUNT ON
ALTER TABLE DEPOSIT	
	ADD CONSTRAINT amount_C CHECK (Amount >10) 
ALTER TABLE DEPOSIT	
	ADD CONSTRAINT date_cons DEFAULT GETDATE() FOR Adate

DECLARE @actno VARCHAR(12), @cname VARCHAR(18), @bname VARCHAR(18), @amount INT, @adate DATE
		DECLARE ReadJson Cursor
		FOR
			SELECT * FROM OPENJSON(@json)
			WITH(
				ActNo VARCHAR(12) '$.ActNo',
				CName VARCHAR(18) '$.CName',
				BName VARCHAR(18) '$.BName',
				Amount INT '$.Amount',
				ADate DATE '$.ADate'
			)
		OPEN ReadJson
		FETCH NEXT FROM ReadJson INTO @actno,@cname,@bname,@amount,@adate
			BEGIN
			INSERT INTO Deposit VALUES(@actno,@cname,@bname,@amount,CONVERT(DATE,@adate))
		END

		CLOSE ReadJson
		DEALLOCATE ReadJson
		
SET NOCOUNT OFF
END


	

SELECT * FROM DEPOSIT
SELECT * FROM BORROW
SELECT * FROM Branch
SELECT * FROM CUSTOMER

