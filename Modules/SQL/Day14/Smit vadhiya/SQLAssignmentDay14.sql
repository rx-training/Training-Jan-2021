
CREATE TABLE Students
(
	StudentID INT CONSTRAINT pkStudents PRIMARY KEY,
	StudentName VARCHAR(30),
	TotalFees INT,
	RemainingAmt INT
)
CREATE TABLE Courses
(
	CourseID INT CONSTRAINT pkCourses PRIMARY KEY,
	CourseName VARCHAR(30),
	TotalFees INT,
)
CREATE TABLE CourseEnrolled
(
	StudentID INT CONSTRAINT fkCourseEnrolledOnStudents FOREIGN KEY REFERENCES Students(StudentID),
	CourseID INT CONSTRAINT fkCourseEnrolledOnCourses FOREIGN KEY REFERENCES Courses(CourseID)
)
CREATE TABLE FeePayment
(
	StudentID INT CONSTRAINT fkFeePaymentOnStudents FOREIGN KEY REFERENCES Students(StudentID),
	AmountPaid INT,
	DateofPayment DATE
)
TRUNCATE TABLE Students
INSERT INTO Students VALUES
	(1,'sahil',NULL,NULL),
	(2,'dhrumil',NULL,NULL),
	(3,'arpit',NULL,NULL),
	(4,'kathan',NULL,NULL)

TRUNCATE TABLE Courses
INSERT INTO Courses VALUES
	(1,'node',6000),
	(2,'.net',5000),
	(3,'react',7000),
	(4,'php',8000)



SELECT * FROM Students
SELECT * FROM Courses
SELECT * FROM CourseEnrolled
SELECT * FROM FeePayment


GO


/*Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.*/

--TRIGGER FOR ENTER TOTALFEE AND REMAINING AMOUNT INTO STUDENT TABLE WHILE INSERT INTO CourseEnrolled

CREATE TRIGGER TgCoursesInsert ON CourseEnrolled FOR INSERT
AS
BEGIN
	SET NOCOUNT ON
 	DECLARE @TotalFees INT
	DECLARE @RemainingAmt INT
	DECLARE @StudentID INT
	DECLARE @CourseID INT
	SELECT @StudentID = StudentID FROM INSERTED
	SELECT @CourseID = CourseID FROM INSERTED
	
	SELECT @TotalFees = TotalFees FROM Students WHERE StudentID = @StudentID
	SELECT @RemainingAmt = RemainingAmt FROM  Students WHERE StudentID = @StudentID

	IF (@TotalFees IS NULL)
		SET @TotalFees = 0
	
	IF (@RemainingAmt IS NULL)
		SET @RemainingAmt = 0

	SET @TotalFees = @TotalFees + (SELECT TotalFees FROM Courses WHERE CourseID = @CourseID)
	SET @RemainingAmt = @RemainingAmt + (SELECT TotalFees FROM Courses WHERE CourseID = @CourseID)
	UPDATE Students SET TotalFees = @TotalFees,RemainingAmt = @RemainingAmt WHERE StudentID = @StudentID
	SET NOCOUNT OFF
END
GO



TRUNCATE TABLE CourseEnrolled
INSERT INTO CourseEnrolled VALUES(1,1)
INSERT INTO CourseEnrolled VALUES(1,4)
INSERT INTO CourseEnrolled VALUES(3,2)
INSERT INTO CourseEnrolled VALUES(2,3)
INSERT INTO CourseEnrolled VALUES(4,2)
INSERT INTO CourseEnrolled VALUES(2,1)
INSERT INTO CourseEnrolled VALUES(1,3)
GO


/*Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.*/

CREATE TRIGGER TgFeePaymentOnInsert ON FeePayment FOR INSERT
AS BEGIN
	SET NOCOUNT ON
	DECLARE @StudentID INT
	DECLARE @AmountPaid INT
	DECLARE @RemainingAmt INT
	SELECT @StudentID = StudentID FROM INSERTED
	SELECT @AmountPaid = AmountPaid FROM INSERTED
	SELECT @RemainingAmt = RemainingAmt FROM  Students WHERE StudentID = @StudentID
	IF (@AmountPaid > @RemainingAmt)
	BEGIN
		PRINT 'AMOUNT IS GREATER THAN REMAINING AMOUNT REMAINING AMOINT IS ' + CONVERT( VARCHAR, @RemainingAmt)
		ROLLBACK TRANSACTION
	END
	ELSE 
	BEGIN
		SET @RemainingAmt = @RemainingAmt - @AmountPaid
		UPDATE Students SET RemainingAmt = @RemainingAmt WHERE StudentID = @StudentID
	END
	SET NOCOUNT OFF
END


INSERT INTO FeePayment VALUES(1,5000,'12-12-2020')
INSERT INTO FeePayment VALUES(2,1000,'12-12-2020')
INSERT INTO FeePayment VALUES(3,3500,'12-12-2020')
INSERT INTO FeePayment VALUES(4,6000,'12-12-2020') -- INVALID AMOUNT
INSERT INTO FeePayment VALUES(5,50,'12-12-2020') --INVALID STUDENTID
