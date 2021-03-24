USE Day14
CREATE TABLE Students
(
	StudentID INT NOT NULL CONSTRAINT pkStudents PRIMARY KEY IDENTITY(1,1),
	StudentName VARCHAR(50) NOT NULL,
	TotalFees MONEY NOT NULL,
	RemainingAmt MONEY NOT NULL
);

CREATE TABLE Courses
(
	CourseID INT NOT NULL CONSTRAINT pkCourses PRIMARY KEY IDENTITY(1,1),
	CourseName VARCHAR(50) NOT NULL,
	TotalFees MONEY NOT NULL
);

CREATE TABLE CourseEnrolled
(
	StudentID INT NOT NULL CONSTRAINT fkCourseEnrolledStudentId FOREIGN KEY REFERENCES Students(StudentID),
	CourseID INT NOT NULL CONSTRAINT fkCourseEnrolledCourseId FOREIGN KEY REFERENCES Courses(CourseID)
);

CREATE TABLE FeePayments
(
	StudentID INT NOT NULL CONSTRAINT fkFeePayments FOREIGN KEY REFERENCES Students(StudentId),
	AmountPaid MONEY DEFAULT NULL,
	DateofPayment DATE 
);

/* Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for
	the respective student.*/

	CREATE TRIGGER trg1 
	ON CourseEnrolled
	FOR INSERT
	AS 
	BEGIN 
		DECLARE @studentID INT;
		SET @studentID = (SELECT StudentID FROM inserted);
		DECLARE @CourseId INT;
		SET @CourseId = (SELECT CourseId FROM inserted);
		DECLARE @Fee MONEY = (SELECT TotalFees FROM Courses WHERE CourseID = @CourseId);
		UPDATE Students 
			SET TotalFees = TotalFees + @Fee,
				RemainingAmt = RemainingAmt +@Fee
			WHERE StudentID = @studentID;
	END
	
	SELECT * FROM CourseEnrolled

	INSERT INTO CourseEnrolled (StudentID, CourseID) VALUES(3,1);
	
	SELECT * FROM Students
-- Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.
	
	CREATE TRIGGER trg2 
	ON FeePayments 
	FOR INSERT 
	AS
	BEGIN
		DECLARE @studentId INT = (SELECT StudentId FROM inserted);
		DECLARE @amountPaid Money = (SELECT AmountPaid FROM inserted);
		
		UPDATE Students
		SET RemainingAmt = RemainingAmt - @amountPaid
		WHERE StudentID = @studentId
	END

	INSERT INTO FeePayments (StudentID, AmountPaid, DateofPayment)
		VALUES(3,200,GETDATE());

	SELECT * FROM Students