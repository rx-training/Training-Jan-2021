-- List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.

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
CREATE PROCEDURE SP_SIX
AS	 
	ALTER TABLE DEPOSIT	
	ADD CONSTRAINT amount_C CHECK (Amount >10) 
	ALTER TABLE DEPOSIT	
	ADD CONSTRAINT date_cons DEFAULT GETDATE() FOR Adate
GO
EXECUTE SP_SIX

DECLARE @JSON_DATA VARCHAR(MAX)
SET @JSON_DATA = N'[
	{
    "Cname": "ANKUR",
	"ACTNO": 114, 
	"Bname": "JETPUR",
	"Amount": 8000
   
  },
  {
   "Cname": "RAJ",
	"ACTNO": 115, 
	"Bname": "JETPUR",
	"Amount": 5000
  }]'

  select * from tbl openjson(@JSON_DATA)

--CREATE PROCEDURE sp_json
	--@json VARCHAR(MAX)
--AS
	SELECT * INTO DEPOSITs OPENJSON (@JSON_DATA)
		WITH 
			(
			Cname varchar(20),
			ACTNO INT (8),
			Bname VARCHAR(20),
			Amount money() 
			)
		
	

SELECT * FROM DEPOSIT
SELECT * FROM BORROW
SELECT * FROM Branch
SELECT * FROM CUSTOMER

