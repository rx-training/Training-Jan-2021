--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table 
--for the respective student.
CREATE OR ALTER TRIGGER trgInsertCoursesEnrolled
ON CoursesEnrolled
FOR INSERT
AS
BEGIN
	UPDATE Students
	SET TotalFees = 5000
	WHERE StudentID IN
		(SELECT StudentID
		FROM CoursesEnrolled)
END


--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table 
--for the respective student.
CREATE OR ALTER TRIGGER trgInsertFeePayments
ON FeePayments
FOR INSERT
AS
BEGIN
	--DECLARE @AmountPaid INT
	--SET @AmountPaid = (SELECT AmountPaid FROM FeePayments)
	UPDATE Students
	SET RemainingAmt = RemainingAmt - (SELECT AmountPaid FROM inserted)
	WHERE StudentID IN
		(SELECT StudentID
		FROM inserted)
END