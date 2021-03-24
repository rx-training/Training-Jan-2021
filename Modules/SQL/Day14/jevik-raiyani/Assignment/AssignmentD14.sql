CREATE DATABASE day14
uSE day14

--Create an insert trigger on CourseEnrolled Table,
--record should be updated in TotalFees Field on the Student 
--table for the respective student.

ALTER TRIGGER insertCoursetbl
ON CourseEnrolled
FOR INSERT 
AS 
BEGIN
	DECLARE @val float
	SELECT @val = TotalFees FROM Course WHERE CourseID =
	(SELECT CourseID From inserted)

	UPDATE Student SET TotalFees +=  @val 
	WHERE StudentID=(SELECT StudentID from inserted)

	UPDATE Student SET RemainingAmt +=  @val 
	WHERE StudentID=(SELECT StudentID from inserted)
END

INSERT INTO CourseEnrolled Values(3,4)

--Create an insert trigger on FeePayment, record should be updated in
--RemainingAmt Field of the Student Table for the respective student.
ALTER TRIGGER insertFeepaymenttbl
ON Feepayment
FOR INSERT 
AS 
BEGIN
	DECLARE @val float
	SELECT @val = AmountPaid From inserted

	UPDATE Student SET RemainingAmt -= @val 
	WHERE StudentID=(SELECT StudentID from inserted)
END

INSERT INTO Feepayment Values(1,800,'22-mar-2021')

INSERT INTO Feepayment Values(4,100,'22-mar-2021')

SELECT * FROM Student
SELECT * FROM Course
SELECT * FROM CourseEnrolled
SELECT * FROM Feepayment