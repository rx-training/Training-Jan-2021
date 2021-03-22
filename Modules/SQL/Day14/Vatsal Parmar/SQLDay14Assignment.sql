/* Day 14 Assignment */

CREATE TABLE Students(
	StudentId INT NOT NULL CONSTRAINT PK_Students_StudentId PRIMARY KEY
	,StudentName VARCHAR(20) NOT NULL
	,TotalFees INT NOT NULL
	,RemainingAmt INT
)
GO

CREATE TABLE Courses(
	CourseId INT NOT NULL CONSTRAINT PK_Courses_CourseId PRIMARY KEY
	,CourseName VARCHAR(20) NOT NULL
	,TotalFees INT NOT NULL
)
GO

CREATE TABLE CourseEnrolled(
	StudentId INT NOT NULL CONSTRAINT FK_CourseEnrolled_StudentId FOREIGN KEY REFERENCES Students
	,CourseId INT NOT NULL CONSTRAINT FK_CourseEnrolled_CourseId FOREIGN KEY REFERENCES Courses
)
GO

CREATE TABLE FeePayments(
	StudentId INT NOT NULL CONSTRAINT FK_FeePayments_StudentId FOREIGN KEY REFERENCES Students
	,AmountPaid INT
	,DateOfPayment DATE
)
GO

/* 1 - Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student 
table for the respective student. */

CREATE TRIGGER trgInsertCourseEnrolled
ON CourseEnrolled
FOR INSERT
AS
	DECLARE @TotalFees INT;
	DECLARE @CourseId INT;
	DECLARE @StudentId INT;
	SELECT @CourseId = CourseId FROM Inserted;
	SELECT @StudentId = StudentId FROM Inserted;
	SELECT @TotalFees = TotalFees FROM Courses WHERE CourseId = @CourseId;
	UPDATE Students SET TotalFees = TotalFees + @TotalFees WHERE StudentId = @StudentId;
	UPDATE Students SET RemainingAmt = RemainingAmt + @TotalFees WHERE StudentId = @StudentId;
GO

DROP TRIGGER trgInsertCourseEnrolled
GO

/* 2 - Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table
for the respective student. */

CREATE TRIGGER trgInsertFeePayments
ON FeePayments
FOR INSERT
AS
	SET NOCOUNT ON;
	DECLARE @AmountPaid INT;
	DECLARE @StudentId INT;
	SELECT @StudentId = StudentId FROM Inserted;
	SELECT @AmountPaid = AmountPaid FROM Inserted;
	DECLARE @RemainingAmt INT;
	SELECT @RemainingAmt = RemainingAmt FROM Students WHERE StudentId = @StudentId;
	IF(@RemainingAmt = 0)
	BEGIN
	PRINT 'Enrole In Course First'
	ROLLBACK TRANSACTION
	END
	ELSE
	BEGIN
	UPDATE Students SET RemainingAmt = RemainingAmt - @AmountPaid WHERE StudentId = @StudentId;
	END
	SET NOCOUNT OFF;
GO

DROP TRIGGER trgInsertFeePayments
GO
