USE Assignment

CREATE TABLE Student1(
StdentId int PRIMARY KEY,
StudentName varchar(50),
TotalFees int,
RemaningFees int
)
INSERT INTO Student1(StdentId,StudentName,TotalFees,RemaningFees) VALUES(1,'abc',5000,2000),
																		(2,'def',6000,1000),
																		(3,'ghi',5000,500)
CREATE TABLE Course(
CourseId int PRIMARY KEY,
CourseName varchar(50),
TotelFees int
)

INSERT INTO Course(CourseId,CourseName,TotelFees) VALUES(1,'c',2000),
														(2,'c++',3000),
														(3,'java',2000)
CREATE TABLE CourseEnrolled(
StudentId int FOREIGN KEY REFERENCES Student1(StdentId),
CourseId int FOREIGN KEY REFERENCES Course(CourseId)
)
INSERT INTO CourseEnrolled(StudentId,CourseId) VALUES(1,1),
													 (1,2),
													 (2,2),
													 (2,3),
													 (3,1),
													 (3,3)
CREATE TABLE FeePayment
(
StudentId int FOREIGN KEY REFERENCES Student1(StdentId) ,
AmountPaid int,
DateOfPayment date
)
INSERT INTO FeePayment VALUES (1,5000,GETDATE()),
							  (2,6000,GETDATE()),
							  (3,5000,GETDATE())


/*Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees 
Field on the Student table for the respective student.*/
CREATE TRIGGER triggrtforinsert1
ON CourseEnrolled
AFTER INSERT
AS
BEGIN
	
	 DECLARE @calulate int  
	 SET @calulate= (SELECT TotelFees FROM Course WHERE CourseId=(SELECT TOP 1 CourseId FROM inserted 
	 ORDER BY CourseId DESC) )
	UPDATE Student1 SET TotalFees =TotalFees + @calulate WHERE StdentId=(SELECT TOP 1  StudentId FROM inserted 
	ORDER BY StudentId DESC)
END

INSERT INTO CourseEnrolled(StudentId,CourseId) VALUES (2,3)
INSERT INTO CourseEnrolled(StudentId,CourseId) VALUES (1,3)
SELECT * FROM Student1




/*Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table 
for the respective student.*/

ALTER TRIGGER  triggrtforinsert2
ON FeePayment
AFTER INSERT
AS
BEGIN
DECLARE @StudentId int 
DECLARE @TotelFees int
DECLARE @AmountPaid int
DECLARE @Amount int
SELECT @TotelFees= TotalFees FROM Student1 WHERE StdentId=@StudentId
SELECT @StudentId= StudentId FROM inserted
SELECT @AmountPaid=AmountPaid FROM inserted
 UPDATE Student1 SET RemaningFees=@TotelFees-@AmountPaid WHERE StdentId=@StudentId
END

INSERT INTO FeePayment (StudentId,AmountPaid,DateOfPayment) VALUES (2,5000,'2021-05-07')
SELECT * FROM Student1