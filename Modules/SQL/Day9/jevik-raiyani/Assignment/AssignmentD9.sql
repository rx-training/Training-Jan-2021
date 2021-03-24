--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’
--and Services as ‘Services Dept’ from employee table

SELECT *   FROM Employees1 e
INNER JOIN Departments1 d
ON e.DepartmentID =d.DepartmentID
INNER JOIN Locations1 l
ON d.LocationID = l.LocationID
GO

--5 Students Name, Address, City, DOB, Standard need to be inserted in 
--the student table, need to fetch these result from json variable. 
--and select output in the json format
CREATE TABLE STUDENT2
(
	Name varchar(20),
	Address varchar(30),
	City varchar(10),
	DOB date,
	Standard int
)
INSERT INTO student2
VALUES ('jevik','222/22 bhojarrajpaara','Rajkot','1999-12-12',1),
	('pratik','22/22 bhojarrajpaara','Rajkot','2010-12-5',10),
	('Dev','2222 bhojarrajpaara','Patan','2011-5-12',8),
	('Poonam','22 Nehrunagar','Somnath','2014-2-2',9),
	('Nehal','22/2 Prahladnagar','Jamnagar','2010-10-12',6)
DECLARE @json NVARCHAR(MAX)
SET @json = (SELECT *  FROM STUDENT2 FOR JSON PATH)
PRINT @json 
SElECT @json 'JSON_FORMET' FOR JSON PATH

--SELECT * FROM STUDENT2
--FOR JSON PATH


 


SELECT * FROM Employees1
SELECT * FROM Departments1
