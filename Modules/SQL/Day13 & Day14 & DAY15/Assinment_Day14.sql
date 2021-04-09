Create DATABASE TRIGGERS
use TRIGGERS;

CREATE TABLE Student (StudentID int CONSTRAINT pkstudent PRIMARY KEY, StudentName VARCHAR(50), TotalFees MONEY,RemainingAmt MONEY)

CREATE TABLE Course (CourseID int CONSTRAINT pkcourse PRIMARY KEY,CourseName VARCHAR(50),TotalFees MONEY)

CREATE TABLE CourseEnrolled (StudentID INT CONSTRAINT fkstudents FOREIGN KEY REFERENCES Student(StudentID) ,
CourseID INT CONSTRAINT fkcourses FOREIGN KEY REFERENCES Course (CourseID)) 

CREATE TABLE FeePayment (StudentID int CONSTRAINT pkstudentfee PRIMARY KEY,AmountPaid Money ,DateofPayment Datetime)

INSERT INTO Student (StudentID, StudentName, TotalFees ,RemainingAmt) Values('1','NIRAJ','0','0'),
('2','NILL','0','0'),('3','RAJ','0','0'),('4','JAY','0','0'),('5','SURAJ','0','0')

INSERT INTO Course (CourseID ,CourseName ,TotalFees)Values('101','.NET Devlopment','10000'),
('102','HACKING ','14000'),
('103','FESHION DESINGING','15000'),
('104','PHOTO-GRAPHY','8000'),
('105','DANCE','12500')

INSERT INTO CourseEnrolled (StudentID ,CourseID) Values('1','101'),('2','102'), ('3','103'),('4','104'),('5','105')

INSERT INTO FeePayment (StudentID ,AmountPaid,DateofPayment) VALUES('1','19500','2020-03-20'),('2','25000','2021-03-22'),
('3','49000','2020-06-15'),('4','39500','2020-09-12'),('5','5000','2020-12-31')




/*ASSIGNMENT 1:-
Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the
Student table for the respective student.
*/


CREATE OR ALTER TRIGGER Triggerfirst on CourseEnrolled 
For INSERT
AS
BEGIN
DECLARE @totalfee Money
SELECT @totalfee = c.TotalFees from Course c join Inserted i on i.CourseID = c.CourseID 
UPDATE Student  SET TotalFees +=  @totalfee WHERE StudentID = (SELECT StudentID from Inserted ) 
END
INSERT INTO CourseEnrolled Values('1','103');
INSERT INTO CourseEnrolled (StudentID ,CourseID) Values('4','105');
INSERT INTO CourseEnrolled (StudentID ,CourseID) Values('3','103');
INSERT INTO CourseEnrolled (StudentID ,CourseID) Values('4','104');
INSERT INTO CourseEnrolled (StudentID ,CourseID) Values('3','105');


/*ASSIGNMENT 2
Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the 
Student Table for the respective student.
*/
Use TRIGGERS;
CREATE OR ALTER TRIGGER Triggerfeepay on FeePayment 
For INSERT
AS
BEGIN
DECLARE @remainamt Money
SELECT @remainamt = s.TotalFees - i.AmountPaid  from Student s join Inserted i on s.StudentID = i.StudentID 
UPDATE Student SET RemainingAmt = @remainamt WHERE StudentID = (SELECT StudentID from Inserted ) 
END
INSERT INTO FeePayment (StudentID ,AmountPaid,DateofPayment) Values('1','19500','2020-03-20');
INSERT INTO FeePayment (StudentID ,AmountPaid,DateofPayment) Values('2','25000','2021-03-22');
INSERT INTO FeePayment (StudentID ,AmountPaid,DateofPayment) Values('3','49000','2020-06-15');
INSERT INTO FeePayment (StudentID ,AmountPaid,DateofPayment) Values('4','39500','2020-09-12');
INSERT INTO FeePayment (StudentID ,AmountPaid,DateofPayment) Values('5','5000','2020-12-31');
SELECT * from Student
