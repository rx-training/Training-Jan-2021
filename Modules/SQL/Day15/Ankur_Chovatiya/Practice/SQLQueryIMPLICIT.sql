SET IMPLICIT_TRANSACTIONS ON;

INSERT INTO Student VALUES (2 , 'ANKUR' , 10000 , 0)
COMMIT TRANSACTION 

SELECT * FROM Student
