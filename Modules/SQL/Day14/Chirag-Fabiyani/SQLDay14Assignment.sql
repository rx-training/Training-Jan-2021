

----Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.----

CREATE TRIGGER trgCourseEnrolled ON CourseEnrolled
FOR INSERT
AS
BEGIN
DECLARE @Amount int
SELECT @Amount=TotalFees FROM Courses WHERE CourseID=(
	SELECT CourseID FROM Inserted
)
UPDATE Students
SET TotalFees=TotalFees+@Amount,RemainingAmt=RemainingAmt+@Amount
WHERE StudentID=(SELECT StudentID FROM Inserted)
END

INSERT INTO CourseEnrolled VALUES (1,3)





----Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.----

CREATE TRIGGER trgFeePayment ON FeePayment
FOR INSERT
AS
BEGIN
DECLARE @Amount int
SET @Amount=(SELECT AmountPaid FROM Inserted)
UPDATE Students
SET RemainingAmt=RemainingAmt-@Amount
WHERE StudentID=(SELECT StudentID FROM Inserted)
END

INSERT INTO FeePayment VALUES (1,4000,'2021-03-23')
