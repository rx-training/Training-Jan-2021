----------- Database -------------
CREATE TABLE Students (
	StudentID int PRIMARY KEY IDENTITY, 
	StudentName varchar(50), 
	TotalFees float, 
	RemainingAmt float
);

CREATE TABLE Courses (
	CourseID int PRIMARY KEY IDENTITY, 
	CourseName varchar(50),
	TotalFees float
);

CREATE TABLE CourseEnrolled (
	StudentID int,
	CourseID int,
	CONSTRAINT fk_CourseID FOREIGN KEY (CourseID) REFERENCES Courses (CourseID),
	CONSTRAINT fk_StudentID FOREIGN KEY (StudentID) REFERENCES Students (StudentID),
);

CREATE TABLE FeePayment (
	StudentID int, 
	AmountPaid float, 
	DateofPayment date,
	CONSTRAINT fk_StudentID_FeePayment FOREIGN KEY (StudentID) REFERENCES Students (StudentID),
);
GO

--DROP TABLE FeePayment;
--DROP TABLE CourseEnrolled;
--DROP TABLE Courses;
--DROP TABLE Students;
--GO

INSERT INTO Students VALUES ('Milit', 0, 0),('John', 0, 0);
INSERT INTO Courses VALUES ('PHP', 5000), ('DOTNET',6000);
GO

--------------------------- ASSIGNMENT 1 ---------------------------
CREATE OR ALTER TRIGGER trg_assignment1 
ON CourseEnrolled
AFTER INSERT
AS
--SELECT * FROM inserted
DECLARE @fees float
SET @fees = (SELECT TotalFees FROM Courses WHERE CourseID = (SELECT CourseID FROM inserted)	)
UPDATE Students SET TotalFees = TotalFees + @fees, RemainingAmt = RemainingAmt + @fees WHERE StudentID = ( SELECT StudentID FROM inserted)
GO

INSERT INTO CourseEnrolled Values (1,1)
INSERT INTO CourseEnrolled Values (1,2)
INSERT INTO CourseEnrolled Values (2,2)
GO

SELECT * FROM Students;
GO

--------------------------- ASSIGNMENT 2 ---------------------------
CREATE OR ALTER TRIGGER trg_assignment2
ON FeePayment
AFTER INSERT
AS
SET NOCOUNT ON
DECLARE @fees float
SET @fees = (SELECT AmountPaid FROM inserted)
UPDATE Students SET RemainingAmt = RemainingAmt - @fees WHERE StudentID = ( SELECT StudentID FROM inserted)
PRINT 'Remaining amount has been updated'
GO

INSERT INTO FeePayment Values (1,5000, GETDATE());
INSERT INTO FeePayment Values (1,4000, GETDATE());
INSERT INTO FeePayment Values (2,1500, GETDATE());
GO

SELECT * FROM Students;
GO