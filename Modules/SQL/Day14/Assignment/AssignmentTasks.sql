USE Day6DB

CREATE TABLE Students(
	StudentId INT CONSTRAINT Students_StudentId_PK PRIMARY KEY,
	StudentName VARCHAR(50),
	TotalFees MONEY,
	RemainingAmt MONEY
)

CREATE TABLE Courses(
	CourseId INT CONSTRAINT Courses_CourseId_PK PRIMARY KEY,
	CourseName VARCHAR(50),
	TotalFees MONEY
)

CREATE TABLE CourseEnrolled(
	StudentId INT CONSTRAINT CourseEnrolled_Students_StudentId_FK FOREIGN KEY REFERENCES Students(StudentId),
	CourseId INT CONSTRAINT CourseEnrolled_Courses_CourseId_FK FOREIGN KEY REFERENCES Courses(CourseId)
)

CREATE TABLE FeePayment(
	StudentId INT CONSTRAINT FeePayment_Students_StudentId_FK FOREIGN KEY REFERENCES Students(StudentId),
	AmountPaid MONEY,
	DateOfPayment DATE
)

ALTER TABLE Students ADD CONSTRAINT Students_TotalFees_DF DEFAULT 0 FOR TotalFees 

ALTER TABLE Students ADD CONSTRAINT Students_RemainingAmt_DF DEFAULT 0 FOR RemainingAmt 

INSERT INTO Students (StudentId, StudentName) VALUES (1, 'Reena'),
													(2, 'Rita'),
													(3, 'Meena')

INSERT INTO Courses VALUES (1, 'DotNet', 5000),
							(2, 'PHP', 6000),
							(3, 'JAVA', 7000)

SELECT * FROM Students
SELECT * FROM Courses
SELECT * FROM CourseEnrolled
SELECT * FROM FeePayment

/*Q 1.Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the
respective student.
Ans.*/
CREATE TRIGGER trgInsertCourseEnrolled
ON CourseEnrolled
FOR INSERT
AS
BEGIN
	DECLARE @TotalFees MONEY, @RemainingAmt MONEY
	SELECT @TotalFees = TotalFees, @RemainingAmt = TotalFees
	FROM Courses
	WHERE CourseId = (SELECT CourseId FROM Inserted)

	PRINT @TotalFees

	UPDATE Students SET TotalFees=TotalFees + @TotalFees WHERE StudentId = (SELECT StudentId FROM Inserted)
	
	UPDATE Students SET RemainingAmt=RemainingAmt + @RemainingAmt WHERE StudentId = (SELECT StudentId FROM Inserted)
END


INSERT INTO CourseEnrolled VALUES (1, 1)
INSERT INTO CourseEnrolled VALUES (2, 3)
INSERT INTO CourseEnrolled VALUES (2, 3)
INSERT INTO CourseEnrolled VALUES (3, 1)


/*Q 2.Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.
Ans.*/
CREATE TRIGGER trgInsertFeePayment
ON FeePayment
FOR INSERT
AS
BEGIN
	DECLARE @AmountPaid MONEY
	SELECT @AmountPaid = AmountPaid
	FROM Inserted

	PRINT @AmountPaid

	UPDATE Students SET RemainingAmt=RemainingAmt-@AmountPaid WHERE StudentId = (SELECT StudentId FROM Inserted)
END

INSERT INTO FeePayment VALUES (1, 500, '12-12-2021')
INSERT INTO FeePayment VALUES (1, 1000, '12-10-2021')
INSERT INTO FeePayment VALUES (2, 1000, '12-9-2021')