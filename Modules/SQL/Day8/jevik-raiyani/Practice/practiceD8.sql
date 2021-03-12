
USE Jevik

ALTER  TABLE dbo.TestTable DROP COLUMN TestCol3 

CREATE TABLE dbo.TestTable  
    (TestCol1 int NOT NULL,  
     TestCol2 nchar(10) NULL,  
     TestCol3 nvarchar(50) NULL);  
DELETE  dbo.TestTable 

CREATE CLUSTERED INDEX Index_Testtable_testcol1
ON  dbo.TestTable(TestCol1 ,TestCol2 DESC)

DROP INDEX Index_Testtable_testcol1
ON  dbo.TestTable

DROP TABLE dbo.TestTable
USE AdventureWorks2012;  
GO  
-- Creates a nonclustered index on the Person.Address table with four included (nonkey) columns.   
-- index key column is PostalCode and the nonkey columns are  
-- AddressLine1, AddressLine2, City, and StateProvinceID.  
CREATE NONCLUSTERED INDEX IX_Address_PostalCode  
ON Person.Address (PostalCode)  
INCLUDE (AddressLine1, AddressLine2, City, StateProvinceID);  
GO

IF EXISTS (SELECT name from sys.indexes  
           WHERE name = N'IX_Address_PostalCode')   
   DROP INDEX AK_UnitMeasure_Name ON Production.UnitMeasure;

CREATE UNIQUE INDEX AK_UnitMeasure_Name   
ON Production.UnitMeasure (Name);  
   
 --we can see differnce in live query statistics
SELECT First_Name,Last_Name FROM Employees 

IF EXISTS (SELECT name FROM sys.indexes  
            WHERE name = N'IX_ProductVendor_VendorID')   
    DROP INDEX IX_ProductVendor_VendorID ON Purchasing.ProductVendor;  

CREATE NONCLUSTERED INDEX IX_ProductVendor_VendorID   
    ON Purchasing.ProductVendor (BusinessEntityID);

DROP INDEX IX_ProductVendor_VendorID ON Purchasing.ProductVendor

SELECT * FROM Purchasing.ProductVendor

IF EXISTS (SELECT name from sys.indexes  
           WHERE name = N'AK_UnitMeasure_Name')   
   DROP INDEX AK_UnitMeasure_Name ON Production.UnitMeasure;

   CREATE UNIQUE INDEX AK_UnitMeasure_Name   
   ON Production.UnitMeasure (Name);
   
DELETE TABLE student     
CREATE TABLE student1
(
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    DOB datetime NOT NULL,
    total_score INT NOT NULL,
    city VARCHAR(50) NOT NULL
 )
INSERT INTO student1
 VALUES  
(6, 'Kate', 'Female', '03-JAN-1985', 500, 'Liverpool'), 
(2, 'Jon', 'Male', '02-FEB-1974', 545, 'Manchester'),
(9, 'Wise', 'Male', '11-NOV-1987', 499, 'Manchester'), 
(3, 'Sara', 'Female', '07-MAR-1988', 600, 'Leeds'), 
(1, 'Jolly', 'Female', '12-JUN-1989', 500, 'London'),
(4, 'Laura', 'Female', '22-DEC-1981', 400, 'Liverpool'),
(7, 'Joseph', 'Male', '09-APR-1982', 643, 'London'),  
(5, 'Alan', 'Male', '29-JUL-1993', 500, 'London'), 
(8, 'Mice', 'Male', '16-AUG-1974', 543, 'Liverpool'),
(10, 'Elis', 'Female', '28-OCT-1990', 400, 'Leeds');

SELECT * FROM student1

CREATE CLUSTERED INDEX IX_tblStudent_Gender_Score
ON student(gender ASC, total_score DESC)

CREATE NONCLUSTERED INDEX IX_tblStudent_Name
ON student1(name ASC)

CREATE NONCLUSTERED INDEX secondNON__KEY
ON student1(name)

CREATE NONCLUSTERED INDEX THIRD_key
ON student1(name,gender)

CREATE NONCLUSTERED INDEX FORTH_key
ON student1(name,gender desc)

CREATE NONCLUSTERED INDEX Nth_key
ON student1(name desc,gender desc)

DROP INDEX Nth_key ON student1
DROP INDEX FORTH_key ON student1

CREATE NONCLUSTERED INDEX Nth_key
ON student1(name desc,gender desc)

CREATE UNIQUE INDEX UK_INDEX   
   ON student1 (Name);  

CREATE UNIQUE INDEX UK_INDEX2   
ON student1 (Name);

--- val must be unique to use unique index
CREATE UNIQUE INDEX UK_INDEX3   
ON student1 (gender);

SELECT * FROM student1
