Day 2 Practice


USE JEVIK

INSERT INTO dbo.emloyees 
VALUES (10,'jevik','raiyani',NULL,7096240696,NULL,NULL,NULL,NULL,NULL,2)


INSERT INTO dbo.emloyees (Employee_Id,Department_Id)
VALUES (12,1)

INSERT INTO dbo.emloyees (Employee_Id,Department_Id)
VALUES (16,1),
(13,1),
(14,1),
(15,NULL)

SELECT * FROM dbo.emloyees

UPDATE dbo.emloyees
SET Manager_Id = 128

UPDATE dbo.emloyees
SET PhoneNumber = 123456845 WHERE Employee_Id = 15

DECLARE @Incriment_Salary INT = 2000
UPDATE dbo.emloyees
SET Salary+= @Incriment_Salary	

SELECT * FROM dbo.emloyees

SELECT Employee_Id, FirstName,LastName FROM dbo.emloyees

SELECT FirstName AS 'name' ,LastName AS 'Surname' FROM dbo.emloyees

SELECT FirstName  'name' ,LastName  'Surname' FROM dbo.emloyees

SELECT  'Name'=FirstName   ,'Surname'=LastName   FROM dbo.emloyees

SELECT Employee_Id,'Designation :' ,Salary FROM emloyees

SELECT 'snow'+ 'ball'


SELECT Employee_Id,'Designation :'+'trainee software engineer' DESIGNATION ,Salary FROM emloyees

SELECT 'JEVIK' + 'RAIYANI' NAME

SELECT * FROM dbo.emloyees

SELECT FirstName +'name'+LastName + 'fullname' AS new
FROM dbo.emloyees

SELECT FirstName, LastName , Salary/2
FROM dbo.emloyees


SELECT * FROM dbo.emloyees
SELECT * FROM dbo.emloyees WHERE Department_Id =2
SELECT * FROM dbo.emloyees WHERE Department_Id =2 OR Job_Id = 1
SELECT * FROM dbo.emloyees WHERE Salary > 45000 AND Job_Id = 2
SELECT * FROM dbo.emloyees WHERE Salary BETWEEN 5000 and 500000
SELECT * FROM dbo.emloyees WHERE Department_Id IN(12,1)
SELECT * FROM dbo.emloyees WHERE Department_Id NOT IN(12,1)
SELECT * FROM dbo.emloyees WHERE FirstName LIKE 'p%' 
SELECT * FROM dbo.emloyees WHERE FirstName LIKE 'p%' AND LastName lIKE '%a'
SELECT * FROM dbo.emloyees WHERE FirstName LIKE 'p%' AND LastName lIKE '%a%a'
SELECT * FROM dbo.emloyees WHERE FirstName LIKE '%i%' 
SELECT * FROM dbo.emloyees WHERE FirstName LIKE '%i%k' 
SELECT * FROM dbo.emloyees WHERE FirstName LIKE '_____' 
SELECT * FROM dbo.emloyees WHERE FirstName LIKE '_____%' 
SELECT * FROM dbo.emloyees WHERE FirstName LIKE '%' 

SELECT * FROM dbo.Employees WHERE FirstName LIKE '[a-f]%'
SELECT * FROM dbo.Employees WHERE FirstName LIKE '[adp]%'
SELECT * FROM dbo.Employees WHERE FirstName LIKE '[a]%'
SELECT * FROM dbo.Employees WHERE FirstName LIKE '[^a]%'
SELECT * FROM dbo.Employees WHERE FirstName LIKE '[^a-v]%'
SELECT * FROM dbo.Employees WHERE FirstName LIKE '[v]%'
SELECT * FROM dbo.Employees WHERE FirstName LIKE '[^a-o w-z]%' ORDER BY FirstName




UPDATE dbo.emloyees
SET Department_Id= 12 WHERE Department_Id IS NULL

SELECT FirstName FROM dbo.emloyees ORDER BY FirstName
SELECT FirstName FROM dbo.emloyees ORDER BY LastName

SELECT FirstName,LastName FROM dbo.emloyees ORDER BY FirstName, LastName
SELECT FirstName,LastName FROM dbo.emloyees ORDER BY  LastName,FirstName

SELECT * FROM dbo.emloyees
SELECT TOP 3* FROM dbo.emloyees

SELECT DISTINCT FirstName FROM dbo.emloyees
SELECT DISTINCT FirstName FROM dbo.emloyees WHERE FirstName LIKE '_____%'

SELECT * FROM Employees WHERE LastName IS NULL
SELECT * FROM Employees WHERE LastName IS NOT NULL

