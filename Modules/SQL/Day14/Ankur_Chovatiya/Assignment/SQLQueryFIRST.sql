CREATE TRIGGER FIRST_TGR
ON CourseEnrolled
FOR INSERT
AS
	DECLARE @MY_VAL_id INT
	SELECT @MY_VAL_id = CourseID FROM inserted
	DECLARE @MY_VAL MONEY
	SELECT @MY_VAL = TotalFees FROM Course WHERE CourseID = @MY_VAL_id

	UPDATE Student
		SET TotalFees = TotalFees + @MY_VAL


select * from CourseEnrolled