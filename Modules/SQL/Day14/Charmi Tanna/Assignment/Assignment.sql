CREATE DATABASE TRIGGERASSIGNMENT
USE TRIGGERASSIGNMENT

SELECT * FROM Student
SELECT * FROM Course
SELECT * FROM CourseEnrolled
SELECT * FROM FeesPayment

DROP TABLE Student
DROP TABLE Course
DROP TABLE CourseEnrolled
DROP TABLE FeesPayment

CREATE TABLE Student
(
StudentID INT CONSTRAINT PK_Student_StudentID PRIMARY KEY, 
StudentName VARCHAR(10), 
TotalFees MONEY,
RemainingAmt MONEY
);

INSERT INTO Student VALUES(1,'Neha','0.00','0.00')
INSERT INTO Student VALUES(2,'Nimish','0.00','0.00')
INSERT INTO Student VALUES(3,'Mayank','0.00','0.00')
INSERT INTO Student VALUES(4,'Meena','0.00','0.00')
INSERT INTO Student VALUES(5,'Mukesh','0.00','0.00')

CREATE TABLE Course
(
CourseID INT CONSTRAINT PK_Course_CourseID PRIMARY KEY,
CourseName VARCHAR(10),
TotalFees MONEY
);

INSERT INTO Course VALUES(101,'MCA','50000.00')
INSERT INTO Course VALUES(102,'BTech','60000.00')
INSERT INTO Course VALUES(103,'BCA','50000.00')
INSERT INTO Course VALUES(104,'MSCIT','40000.00')

CREATE TABLE CourseEnrolled
(
StudentID INT CONSTRAINT FK_CourseEnrolled_StudentID FOREIGN KEY REFERENCES Student(StudentID),
CourseID INT CONSTRAINT FK_CourseEnrolled_CourseID FOREIGN KEY REFERENCES Course(CourseID)
);

INSERT INTO CourseEnrolled VALUES(1,101)
INSERT INTO CourseEnrolled VALUES(2,101)
INSERT INTO CourseEnrolled VALUES(3,104)
INSERT INTO CourseEnrolled VALUES(4,103)
INSERT INTO CourseEnrolled VALUES(5,102)

CREATE TABLE FeesPayment
(
StudentID INT CONSTRAINT FK_FeesPayment_StudentID FOREIGN KEY REFERENCES Student(StudentID),
AmountPaid MONEY,
DateofPayment DATE
);

INSERT INTO FeesPayment VALUES(1,'40000.00','2021-12-12')
INSERT INTO FeesPayment VALUES(2,'42000.00','2021-12-13')
INSERT INTO FeesPayment VALUES(3,'20000.00','2021-12-14')
INSERT INTO FeesPayment VALUES(4,'20000.00','2021-12-15')
INSERT INTO FeesPayment VALUES(5,'48000.00','2021-12-16')

-->Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.
CREATE OR ALTER TRIGGER FeesPayment1 ON CourseEnrolled
FOR INSERT
AS
BEGIN
DECLARE @Fees MONEY
SELECT @Fees = c.TotalFees FROM Course c JOIN inserted i ON i.CourseID = c.CourseID
UPDATE Student SET TotalFees = @Fees WHERE StudentID = (SELECT StudentID FROM inserted)
END
INSERT INTO CourseEnrolled VALUES(1,101);
INSERT INTO CourseEnrolled VALUES(2,101);
INSERT INTO CourseEnrolled VALUES(3,104)
INSERT INTO CourseEnrolled VALUES(4,103)
INSERT INTO CourseEnrolled VALUES(5,102)
-->Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.
CREATE OR ALTER TRIGGER RemainingFees ON FeesPayment
FOR INSERT
AS
BEGIN
DECLARE @Remg MONEY
SELECT @Remg = s.TotalFees-i.AmountPaid FROM Student s JOIN inserted i ON s.StudentID = i.StudentID
UPDATE Student SET RemainingAmt = @Remg WHERE StudentID = (Select StudentID FROM inserted)
END
INSERT INTO FeesPayment VALUES(1,'10000.00','2021-03-23');
INSERT INTO FeesPayment VALUES(2,'42000.00','2021-03-13')
INSERT INTO FeesPayment VALUES(3,'20000.00','2021-03-14')
INSERT INTO FeesPayment VALUES(4,'20000.00','2021-03-15')
INSERT INTO FeesPayment VALUES(5,'48000.00','2021-03-16')