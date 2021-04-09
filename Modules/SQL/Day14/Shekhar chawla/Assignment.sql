--Assignment:

--Student->StudentID, StudentName, TotalFees,RemainingAmt
CREATE TABLE Students (
	Id				INT NOT NULL IDENTITY(1,1) , 
	Name			VARCHAR(230) ,
	TotalFees		INT ,
	RemainingAmt	INT  ,
	PRIMARY KEY ( Id )
) ;
INSERT INTO Students( Name ) VALUES
	('A') , ('B') , ('C') , ('D') , ('E') , ('F') , ('G') , ('H') ;

--Course->CourseID,CourseName,TotalFees
CREATE TABLE Course	(
	Id				INT NOT NULL IDENTITY(1,1) ,
	Name			VARCHAR(50) ,
	Fees		INT , 
	PRIMARY KEY ( Id ) 
) ;
INSERT INTO Course( Name , Fees ) VALUES
	('C' , 1200 ) , ('C++' , 1500 ) , ('Java', 2500) , ('C#' , 2000) , ('Php' ,1000) ;

--CourseEnrolled->StudentID,CourseID
CREATE TABLE CourseEnrolled (
	Id				INT NOT NULL IDENTITY(1,1) ,
	StudentId		INT ,
	CourseId		INT ,
	PRIMARY KEY ( Id ) 
) ;
ALTER TABLE CourseEnrolled 
	ADD CONSTRAINT fk_sid FOREIGN KEY( StudentId  ) REFERENCES Students( Id )
	ON UPDATE CASCADE ;
ALTER TABLE CourseEnrolled 
	ADD CONSTRAINT fk_cid FOREIGN KEY( CourseId  ) REFERENCES Course( Id )
	ON UPDATE CASCADE ;


--FeePayment->StudentID,AmountPaid,DateofPayment
CREATE TABLE FeePayments (
	Id				INT NOT NULL IDENTITY(1,1) PRIMARY KEY ,
	StudentId		INT ,
	AmountPaid		INT ,
	DateofPayment	DATETIME DEFAULT GETDATE() ,
	FOREIGN KEY( StudentId ) REFERENCES Students( Id ) 
) ;

--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.
CREATE TRIGGER TR_INSERT 
	ON CourseEnrolled
	FOR INSERT 
AS
	DECLARE @fees INT , @sid INT , @cid INT , @totalFees INT ;
	SET @sid = ( SELECT StudentId FROM Inserted );
	SET @cid = ( SELECT CourseId FROM Inserted ) ;

	SET @fees = ( SELECT Fees FROM Course WHERE Id = @cid ) ;
	SET @totalFees = ( SELECT ISNULL( TotalFees,0 ) FROM Students WHERE Id = @sid ) ; 

	UPDATE Students SET TotalFees  = @totalFees + @fees FROM Students WHERE Id = @sid ;

	SELECT * FROM Students 
GO

INSERT INTO CourseEnrolled( StudentId , CourseId ) VALUES
	(3 , 4 ) ;


--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.
CREATE TRIGGER TR_PAYMENT
	ON FeePayments
	FOR INSERT
AS	
	DECLARE @sid INT , @amt INT , @payment INT , @totalFees INT ;
	SET @sid = ( SELECT StudentId FROM INSERTED ) ;
	SET @amt = ( SELECT AmountPaid FROM INSERTED ) ;

	SET @totalFees = ( SELECT TotalFees FROM Students WHERE Id = @sid ) ;

	UPDATE Students SET RemainingAmt = ISNULL( RemainingAmt, @totalFees) - @amt WHERE Id = @sid;

	SELECT * FROM Students ;
GO

INSERT INTO FeePayments( StudentId , AmountPaid ) VALUES
	( 2 , 100 ) ;
