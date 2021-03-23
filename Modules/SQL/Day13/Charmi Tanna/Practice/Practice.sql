CREATE DATABASE PRACTICEDAY12
USE PRACTICEDAY12

SELECT SQUARE(3)
SELECT GETDATE()
-->Create User-defined Functions Scalar Function
CREATE FUNCTION CalculateAge(@DOB Date)
RETURNS INT 
AS
BEGIN
DECLARE @Age INT
SET @AGE = DATEDIFF(YEAR, @DOB, GETDATE())
RETURN @AGE
END
SELECT dbo.CalculateAge ('1998-01-01')

USE PRACTICE12
CREATE TABLE Branch
(
	Bname VARCHAR(18) CONSTRAINT PK_Branch_Bname PRIMARY KEY,
	City VARCHAR(18)
);
SELECT * FROM Branch
DROP TABLE Branch
INSERT INTO Branch VALUES('Vrce','Nagpur');
INSERT INTO Branch VALUES('Ajni','Nagpur');
INSERT INTO Branch VALUES('Karolbagh','Delhi');
INSERT INTO Branch VALUES('Chandni','Delhi');
INSERT INTO Branch VALUES('Dharampeth','Nagpur');
INSERT INTO Branch VALUES('M.G.ROAD','Banglore');
INSERT INTO Branch VALUES('Andheri','Mumbai');
INSERT INTO Branch VALUES('Virar','Mumbai');
INSERT INTO Branch VALUES('Nehru Place','Delhi');
INSERT INTO Branch VALUES('Powai','Mumbai');

-->Create User-defined Functions Table Valued Function(Inline)
CREATE FUNCTION Fn_BranchAsCity (@City VARCHAR(18))
RETURNS TABLE
AS 
RETURN (SELECT BName,City FROM Branch WHERE City = @City)
SELECT * FROM dbo.Fn_BranchAsCity('Mumbai')
-->Create User-defined Functions Table Valued Function(Multi Line)
CREATE FUNCTION Fn_InsertValues()
RETURNS @Table TABLE (BName VARCHAR(18), City VARCHAR(18))
AS
BEGIN 
INSERT INTO @Table
SELECT BName,City FROM Branch
RETURN
END
SELECT * FROM dbo.Fn_InsertValues()
-->ALTER FUNCTION
ALTER FUNCTION dbo.Fn_InsertValues()
RETURNS @Table TABLE (BName VARCHAR(18))
AS
BEGIN 
INSERT INTO @Table
SELECT BName FROM Branch
RETURN 
END
SELECT * FROM dbo.Fn_InsertValues()
-->Drop Function
DROP FUNCTION dbo.Fn_InsertValues

