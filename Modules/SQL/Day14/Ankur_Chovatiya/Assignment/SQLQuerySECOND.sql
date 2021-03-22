CREATE TRIGGER SECOND_TGR
ON FeePayment 
FOR INSERT 
AS
	DECLARE @MY_VAL MONEY
	SELECT @MY_VAL = AmountPaid FROM inserted
	UPDATE Student 
		SET RemainingAmt = TotalFees - @MY_VAL



SELECT * FROM Student
SELECT * FROM Course
SELECT * FROM CourseEnrolled
SELECT * FROM FeePayment
DELETE CourseEnrolled
DELETE Student
DELETE Course
DELETE FeePayment