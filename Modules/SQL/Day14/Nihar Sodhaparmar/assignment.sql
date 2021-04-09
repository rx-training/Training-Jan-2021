USE Day14;

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



/*	Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for
	the respective student.	*/

	CREATE TRIGGER trg1 
	ON CourseEnrolled
	FOR INSERT
	AS 
	BEGIN
		SET NOCOUNT ON

		DECLARE @studentID INT;
		SET @studentID = (SELECT StudentID FROM inserted);

		DECLARE @courseId INT;
		SET @courseId = (SELECT CourseId FROM inserted);

		DECLARE @courseFee MONEY;
		SET @courseFee = (SELECT TotalFees FROM Courses WHERE CourseID = @courseId);
		
		UPDATE Students 
		SET TotalFees = TotalFees + @courseFee,
			RemainingAmt = RemainingAmt + @courseFee
		WHERE StudentID = @studentID;

		SET NOCOUNT OFF
	END
	

	INSERT INTO CourseEnrolled (StudentID, CourseID) VALUES (1,1);

	SELECT * FROM Students;


/*	Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the 
	respective student.	*/
	
	CREATE TRIGGER trg2
	ON FeePayments 
	FOR INSERT 
	AS
	BEGIN
		SET NOCOUNT ON

		DECLARE @studentId INT;
		SET @studentId = (SELECT StudentId FROM inserted);

		DECLARE @amountPaid Money;
		SET @amountPaid = (SELECT AmountPaid FROM inserted);
		
		UPDATE Students
		SET RemainingAmt = RemainingAmt - @amountPaid
		WHERE StudentID = @studentId

		SET NOCOUNT OFF
	END


	INSERT INTO FeePayments (StudentID, AmountPaid, DateofPayment) VALUES
		(1,500,GETDATE());

	SELECT * FROM Students;