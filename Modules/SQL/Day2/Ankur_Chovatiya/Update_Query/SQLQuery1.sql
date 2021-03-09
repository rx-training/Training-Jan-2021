ALTER TABLE Employees
DROP CONSTRAINT ukEmail


UPDATE Employees
SET Email = 'Not Available'

SELECT * FROM Employees