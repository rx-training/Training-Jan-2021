CREATE DATABASE TRANSACTIONPRACTICE
USE TRANSACTIONPRACTICE
CREATE TABLE Product
(
ProductID INT,
ProductName VARCHAR(40),
ProductPrice MONEY,
ProductQuantity INT
);

INSERT INTO Product VALUES(1,'Pen','1000.00',200)
INSERT INTO Product VALUES(2,'Notebook','4000.00',200)

SELECT * FROM Product

SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED

SET TRANSACTION ISOLATION LEVEL READ COMMITTED

BEGIN TRANSACTION
UPDATE Product SET ProductQuantity =300 WHERE ProductID = 1
COMMIT TRANSACTION

CREATE TABLE Sale
(
CustomerName  VARCHAR(40),
ProductID INT,
ProductName VARCHAR(40),
ProductQuantity INT,
ProductPrice MONEY
);

-->IMPLICIT TRANSACTION
SET IMPLICIT_TRANSACTIONS ON;
INSERT INTO Product VALUES(3,'Pencils','5000.00',500);
INSERT INTO Product VALUES(4,'Files','6000.00',500);
COMMIT TRANSACTION

-->EXPLICIT TRANSACTION
BEGIN TRANSACTION
INSERT INTO Sale VALUES('Naina',1,'Pen',10,'200.00')
UPDATE Product SET ProductQuantity = 290 WHERE ProductID = 1
COMMIT TRANSACTION

-->ROLLBACK TRANSCTION
BEGIN TRANSACTION
UPDATE Product SET ProductQuantity =300 WHERE ProductID = 1
ROLLBACK TRANSACTION

USE AdventureWorks2012
SELECT * FROM Person.ContactType
-->ISOLATION

-->READ UNCOMMITTED DATA
BEGIN TRANSACTION
UPDATE Person.ContactType SET Name = 'Accounting Administrator' WHERE Name='Accounting Manager' 

-->READ COMMITTED DATA
BEGIN TRANSACTION
UPDATE Person.ContactType SET Name = 'Accounting Administrator' WHERE Name='Accounting Manager' 
COMMIT TRANSACTION

-->REPEATBLE READ
BEGIN TRANSACTION
UPDATE Person.ContactType SET Name = 'Insurance Agent' WHERE ContactTypeID = 3 
COMMIT TRANSACTION

-->SNAPSHOT
BEGIN TRANSACTION
UPDATE Person.ContactType SET Name = 'Owner' WHERE ContactTypeID = 10 
COMMIT TRANSACTION
SELECT Name FROM Person.ContactType WHERE Name='Owner'
SELECT * FROM B
SELECT * FROM A
USE Emp
-->DEADLOCK
BEGIN TRANSACTION
UPDATE B SET Name='Neha' WHERE Name='Meena'
BEGIN TRANSACTION
UPDATE A SET Name='Bansari' WHERE Name='Riya'

CREATE TABLE DETROIT (DETROIT INT ,ACCOUNT_NO INT,AMOUNT MONEY)
 

