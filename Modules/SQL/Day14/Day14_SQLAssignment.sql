/*1.  Create an insert trigger on CourseEnrolled Table,
record should be updated in TotalFees Field on the Student table for the respective student.*/
CREATE TRIGGER trgInsertCourseEnrolled
ON CourseEnrolled
FOR INSERT
AS
	DECLARE @TotalFees INT
	DECLARE @CourseID INT 
	DECLARE @StudentID INT
	SELECT @CourseID = CourseID FROM Inserted
	SELECT @StudentID = StudentID FROM Inserted
	SELECT @TotalFees = TotalFess FROM Course WHERE CourseID = @CourseID
	UPDATE Student SET TotalFees = TotalFees + @TotalFees WHERE StudentID = @StudentID
GO
INSERT INTO CourseEnrolled VALUES (1,2)
GO


/* 2.Create an insert trigger on FeePayment,
record should be updated in RemainingAmt Field of the Student Table for the respective student.*/
CREATE TRIGGER trgInsertFeePayment
ON dbo.FeePayment
FOR INSERT
AS
	DECLARE @StudentID INT
	DECLARE @TotalFees INT
	DECLARE @AmountPaid INT
	DECLARE @amount INT 
	SELECT @StudentID = StudentID FROM Inserted
	SELECT @AmountPaid = AmountPaid  FROM Inserted	
	SELECT @TotalFees = TotalFees FROM Student WHERE StudentID = @StudentID
	UPDATE Student SET RemainingAmt = @TotalFees - @AmountPaid WHERE StudentID = @StudentID
GO

INSERT INTO FeePayment VALUES (1,1, '2021-01-01')
GO

SELECT * FROM Student
