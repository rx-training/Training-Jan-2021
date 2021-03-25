CREATE DATABASE studentdb;

USE studentdb;
GO

CREATE TABLE COURSE_ENROLLED
(
	StudentID INT NOT NULL,
	FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
	CourseID INT NOT NULL,
	FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

CREATE TABLE FEE_PAYMENT
(
	StudentID INT NOT NULL,
	FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
	AmountPaid INT NOT NULL,
	DateOfPayment DATE
);


/* Create an insert trigger on CourseEnrolled Table, record should be updated 
in TotalFees Field on the Student table for the respective student. */
CREATE TRIGGER trgInsertCourse ON COURSE_ENROLLED FOR INSERT
AS
BEGIN
		DECLARE @ID INT, @CourseID INT, @TotalFees INT
		SELECT @ID = StudentID FROM INSERTED
		SELECT @CourseID = CourseID FROM COURSE_ENROLLED WHERE StudentID = @ID
		SELECT @TotalFees = TotalFees FROM Courses WHERE CourseID = @CourseID
		UPDATE Students SET TotalFees = TotalFees + @TotalFees WHERE StudentID = @ID
END

INSERT INTO COURSE_ENROLLED (StudentID, CourseID) VALUES (1, 12);

/* DROP TRIGGER trgInsertCourse */


/* Create an insert trigger on FeePayment, record should be updated in RemainingAmt 
Field of the Student Table for the respective student. */
CREATE TRIGGER trgInsertFeePayment ON FEE_PAYMENT FOR INSERT
AS
BEGIN
		DECLARE @ID INT, @AmountPaid INT
		SELECT @ID = StudentID, @AmountPaid = AmountPaid FROM INSERTED
		UPDATE Students SET RemainingAmt = RemainingAmt - @AmountPaid WHERE StudentID = @ID
END

INSERT INTO FEE_PAYMENT (StudentID,AmountPaid,DateOfPayment) VALUES (1,1000,'3-Mar-2021')

/* DROP TRIGGER trgInsertFeePayment */