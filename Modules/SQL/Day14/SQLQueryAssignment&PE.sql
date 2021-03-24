--Student->StudentID, StudentName, TotalFees,RemainingAmt
CREATE TABLE Students (
	StudentID INT NOT NULL PRIMARY KEY,
	StudentName VARCHAR(30) NOT NULL,
	TotalFees MONEY,
	RemainingAmt MONEY
)
--Course->CourseID,CourseName,TotalFees
CREATE TABLE Courses (
	CourseID INT NOT NULL PRIMARY KEY,
	CourseName VARCHAR(30) NOT NULL,
	TotalFess MONEY NOT NULL
)

--CourseEnrolled->StudentID,CourseID
CREATE TABLE CourseEnrolled (
	StudentID INT CONSTRAINT fkStudentID FOREIGN KEY REFERENCES dbo.Students(StudentID),
	CourseID INT CONSTRAINT fkCourseID FOREIGN KEY REFERENCES dbo.Courses(CourseID)
)

--FeePayment->StudentID,AmountPaid,DateofPayment
CREATE TABLE FeePayments (
	StundentID INT CONSTRAINT fkStudentIDf FOREIGN KEY REFERENCES dbo.Students(StudentID),
	AmountPaid MONEY NOT NULL,
	DateOfPayment DATE NOT NULL
)

--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.
GO
ALTER TRIGGER trgFees ON dbo.CourseEnrolled FOR INSERT
AS 
BEGIN
	DECLARE @studentId INT, @courseId INT, @fees MONEY
	SELECT @studentId = StudentID, @courseId = CourseID FROM inserted
	SELECT @fees = TotalFess FROM Courses WHERE CourseID = @courseId
	UPDATE Students SET TotalFees = @fees WHERE StudentID = @studentId
END
GO

INSERT INTO CourseEnrolled(StudentID, CourseID) VALUES (1,6)

INSERT INTO CourseEnrolled(StudentID, CourseID) VALUES (2,3)

SELECT * FROM Students
SELECT * FROM CourseEnrolled

--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.
GO
ALTER TRIGGER tgrPayments ON dbo.FeePayments AFTER INSERT
AS
BEGIN
	DECLARE @deduct MONEY, @id INT
	SELECT @id= StundentID FROM inserted 
	SELECT @deduct = (s.TotalFees-i.AmountPaid) FROM Students s JOIN inserted i ON s.StudentID=i.StundentID
	UPDATE Students SET RemainingAmt = @deduct
		WHERE StudentID = @id
END
GO

INSERT INTO FeePayments VALUES (1,1600,'1998-05-23')
INSERT INTO FeePayments VALUES (2,100,'2000-02-29')
SELECT * FROM Students

--CURSOR WITH TRIGGERS
GO
ALTER TRIGGER ctrgFees ON dbo.CourseEnrolled FOR INSERT 
AS 
BEGIN
	SET NOCOUNT ON
	DECLARE @studentId INT, @courseId INT, @fees MONEY
	DECLARE csr CURSOR FOR 
		SELECT StudentID, CourseID FROM inserted
		OPEN csr
		FETCH NEXT FROM crs INTO @studentId, @courseId
		WHILE @@FETCH_STATUS = 0
		BEGIN
			SELECT @fees = TotalFess FROM Courses WHERE CourseID = @courseId
			UPDATE Students SET TotalFees = @fees WHERE StudentID = @studentId
		END
		FETCH NEXT FROM crs INTO @studentId, @courseId
	CLOSE csr
	DEALLOCATE csr
	SET NOCOUNT OFF
END
GO

INSERT INTO CourseEnrolled(StudentID,CourseID) VALUES (3,6), (4,4), (5,1)