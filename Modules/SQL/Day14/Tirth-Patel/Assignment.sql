--Create an insert trigger on CourseEnrolled Table, record should
--be updated in TotalFees Field on the Student table for the respective student.

CREATE TRIGGER Updatestudent  on courseenrolled 
AFTER INSERT AS
	DECLARE @courseId nchar(10), @studentId nchar(10),@corusefee int
	SET @courseId= (SELECT CourseId FROM inserted)
	SET @studentId= (SELECT StudentId FROM inserted)
	SET @corusefee=(SELECT Totalfees FROM Courses c join CourseEnrolled ce 
	ON c.CourseId = ce.CourseId JOIN inserted i ON i.CourseId = ce.CourseId
	WHERE ce.CourseId  = i.CourseId)
	UPDATE Students SET
	Totalfees = @corusefee + Totalfees 

	INSERT INTO CourseEnrolled VALUES
	(1 , 1)
	SELECT * FROM Students
	SELECT * FROM Courses

--Create an insert trigger on FeePayment, record should be updated in 
--RemainingAmt Field of the Student Table for the respective student.
ALTER TRIGGER UpdateFeeStatus ON FeePayments
AFTER INSERT AS
	DECLARE @paid int  ,  @remAmt int ,@id nchar(10)
	SET @id = (SELECT StudentId FROM inserted)
	SET @paid = (SELECT Amountpaid FROM inserted)
	SET @remAmt = ( SELECT [Remainig amount] FROM Students s 
		WHERE s.StudentID = @id)
	IF (@paid > @remAmt)
	BEGIN
	PRINT 'amount is greater then expected' 
	ROLLBACK TRANSACTION
	END
	ELSE
	BEGIN
	UPDATE Students SET
	[Remainig amount] = [Remainig amount] - amountpaid  FROM inserted
	WHERE Students.StudentID = inserted.StudentId
	END
	INSERT INTO FeePayments VALUES 
	( 2 , 50 ,GETDATE())

	SELECT * FROM Students