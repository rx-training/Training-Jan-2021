USE AdventureWorks2012
CREATE TABLE EmployeeData
(
Id int,
Name varchar(50),
Department varchar(50)
)
INSERT INTO EmployeeData (Id,Name,Department) VALUES (1,'ABC','HR DEPARTENT'),
													 (2,'DEF','.NET DEPARTMENT'),
													 (3,'GHI','JAVA DEPARTMENT')

------------------IMPLICIT TRANSACTION---------------------------
SET IMPLICIT_TRANSACTIONS ON
INSERT INTO EmployeeData (Id ,Name,Department) VALUES (4,'JKL','NODE/REACT DEPARTMENT')
INSERT INTO EmployeeData (Id ,Name,Department) VALUES (4,'MNO','NODE/REACT DEPARTMENT')
COMMIT TRANSACTION
SET IMPLICIT_TRANSACTIONS OFF

SELECT * FROM EmployeeData

------------------EXPLICIT TRANSACTION---------------------------
BEGIN TRANSACTION mytransaction
UPDATE EmployeeData SET Department='.NET DEPARTMENT' WHERE Id=5

UPDATE EmployeeData SET Department='.NET DEPARTMENT' WHERE Id=4
COMMIT TRANSACTION mytransaction

SELECT * FROM EmployeeData

-----------------EXample with roallback-------------------
SELECT* FROM Person.ContactType
SELECT * FROM HumanResources.Department

BEGIN TRANSACTION mytr
BEGIN TRY
UPDATE EmployeeData SET Name='SUDIP' WHERE Id='5'
UPDATE EmployeeData SET Name='DARSHAN' WHERE Id='2'
COMMIT TRANSACTION mytr
PRINT 'TRANSACTION SUCCESSFULLY COMMITED'
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION mytr
PRINT 'TRANSACTION NOT COMMITED'
END CATCH

---------------------------EXample with ISOLATION LAVEL--------------
SELECT * FROM Person.EmailAddress
SELECT * FROM HumanResources.EmployeeDepartmentHistory
BEGIN TRANSACTION TR1
BEGIN TRY
UPDATE Person.EmailAddress SET EmailAddress='robertoq0sd@adventure-works.com' WHERE EmailAddress=1
COMMIT TRANSACTION TR1
PRINT 'COMMITED'
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION TR1
PRINT 'NOT COMMITED'
END CATCH

/*TRY NEW QUERY WINDOW

SET TRANSACTION ISOLATION LEVEL
READ UNCOMMITTED
UPDATE Person.EmailAddress SET EmailAddress='robertoq0sd@adventure-works.com' WHERE EmailAddress=8

*/
----------------Video Practice Of Isolation Level-------------------------------
USE AdventureWorks2012

SELECT * FROM Person.ContactType


BEGIN TRANSACTION mytr2
	UPDATE Person.ContactType SET Name='ABC' WHERE ContactTypeID=4
COMMIT	TRANSACTION  mytr2

SELECT * FROM Person.ContactType



	                            ----------------------TRY IN NEW QUERY WINDOW--------------
	
	           ---------------------- READ UNCOMMITED -------------------------
	/*   IN READ UNCOMMINTED ISOLATION LEVEL  WE CAN READ THE DATA THAT IS NOT COMMITED BY TRANSATION  */
	   
	      SET TRANSACTION ISOLATION LEVEL 
	      READ UNCOMMITTED;
	      SELECT Name FROM Person.ContactType WHERE ContactTypeID=4
		

				---------------------- READ COMMITED -------------------------
				/*
				IN THE READ COMMITED ISOLATION LEVEL WE ARE WAITING  WHEN OTHER TRANSCATION IS EXECUTED 
				WHEN THE TRANSCATION IS COMMETED THEN WE EXECUTE DATA
				*/
			
			  SET TRANSACTION ISOLATION LEVEL 
			  READ COMMITTED;
              SELECT Name FROM Person.ContactType WHERE ContactTypeID=4
			


			------------------------REPEATABLE READ-----------------------------
			
			/*When we Update the statement  by one transaction so We does not update  same data when first transction 
			are uppdated and other transaction can only insert the data*/
			
			SET TRANSACTION ISOLATION LEVEL 
				REPEATABLE READ;
				BEGIN TRAN tr3
						UPDATE Person.ContactType SET Name='DEF' WHERE ContactTypeID=4
				COMMIT TRAN tr3


				SET TRANSACTION ISOLATION LEVEL 
				REPEATABLE READ;
				BEGIN TRAN tr3
					INSERT INTO Person.ContactType(ContactTypeID,ModifiedDate,Name) VALUES (222,'12-Mar-2021','xcv')
				COMMIT TRAN tr3

				------------------------SERIALIZABLE-----------------------------

			/*IN SERIALIZABLE Isolation level we can not Updata Or read the 
			data when one transation are executing*/
						
						SET TRAN ISOLATION LEVEL
						SERIALIZABLE

						BEGIN TRAN tr45
							UPDATE Person.ContactType SET Name='dsdsds' WHERE ContactTypeID=4
						COMMIT TRAN tr45


						SET TRAN ISOLATION LEVEL	
						SERIALIZABLE
							BEGIN TRAN tr45
								SELECT * FROM Person.ContactType
							COMMIT TRAN tr45

							-----------------------------Snapshot--------------------------------------
							/*IN THE SNAPSHOT Isolation  LEVEL THE Seprate copy are generated per transcation*/
										ALTER DATABASE AdventureWorks2012
										SET ALLOW_SNAPSHOT_ISOLATION ON
								SET TRAN ISOLATION LEVEL
									SNAPSHOT
									BEGIN TRAN tr45
										UPDATE Person.ContactType SET Name='sfdffd' WHERE ContactTypeID=4
									COMMIT TRAN tr45


/*
At AdventureWorks, Inc., an employee named Sidney Higa, who is currently 
working as Production Technician – WC10 has been promoted as Marketing Manager.
The employee ID of Sidney is 13. As a database developer, you need to update his records.
This involves updating the title in the Employee table and updating the department history details.
You need to ensure that all the changes take effect. In addition, you need to ensure that no other 
transaction should be able to view the data being modified by the current transaction.
*/

SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.EmployeeDepartmentHistory
SET TRAN ISOLATION LEVEL
READ COMMITTED
BEGIN TRAN trw
 
 BEGIN TRY
 UPDATE HumanResources.Employee SET JobTitle='Marketing Manager' WHERE BusinessEntityID=13
 UPDATE HumanResources.EmployeeDepartmentHistory SET DepartmentID=4 WHERE BusinessEntityID=13
 COMMIT TRAN trw
 PRINT 'SUCCESS'
END TRY
 BEGIN CATCH
 ROLLBACK TRAN trw
 PRINT 'UNSUCCESS'
 END CATCH
