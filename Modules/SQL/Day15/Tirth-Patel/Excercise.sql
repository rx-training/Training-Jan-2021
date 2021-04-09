--implicit transaction
USE TestData
	SET IMPLICIT_TRANSACTIONS ON
	INSERT INTO CourseEnrolled VALUES ( 2 , 4 )
	INSERT INTO CourseEnrolled VALUES ( 2 , 4 )
	COMMIT TRANSACTION
	SET IMPLICIT_TRANSACTIONS OFF
GO
USE AdventureWorks2012
BEGIN TRANSACTION TR1
BEGIN TRY
UPDATE Person.EmailAddress
SET EmailAddressID = 'jolyn@yahoo.com'
WHERE BusinessEntityID = 1070
--statement 1
UPDATE Person.ContactType SET ContactTypeID = 32533
WHERE ContactTypeID = 1 
COMMIT TRANSACTION TR1
--statement 2
SELECT 'transaction completed'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR1
	SELECT'Transaction failed Rolling-back'
	END CATCH

BEGIN TRANSACTION 
UPDATE Person.ContactType
SET Name = 'IT-ENG'
WHERE ContactTypeID  = 1
COMMIT TRANSACTION 

--IN another user or another query result will show old value
	SELECT Name
	FROM person.ContactType WHERE ContactTypeID = 1 --commited the transcation
	--Dirty Read
--IF you want newer data Commit the trasaction

--NOn repeatable read

BEGIN TRANSACTION TR1
SELECT NAME FROM person.ContactType
WHERE ContactTypeID  = 1
COMMIT TRAN TR1
BEGIN TRAN TR2
UPDATE PERSON.ContactType SET Name = 'It-Manger'
WHERE ContactTypeID = 1--concurrently other user cahnged the value then 
	--If i again read it I will have the update value from another user

COMMIT TRAN TR2
SELECT Name from person.ContactType WHERE ContactTypeID = 1

--Read non committed
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR_A ;
UPDATE person.ContactType
SET name = 'LEADER-13'
WHERE ContactTypeID = 1

--in ANOTHER QUERY
/*
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED ;

SELECT NAME FROM  PERSON.ContactType WHERE ContactTypeID =1 
*/
COMMIT TRANSACTION TR_A 
SET TRANSACTION ISOLATION LEVEL READ COMMITTED ;

SELECT NAME FROM  PERSON.ContactType WHERE ContactTypeID =1