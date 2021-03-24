
/*
  --Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
DECLARE @BankDept varchar(50) = 'Finance'
DECLARE @HRDept varchar(50) = 'Human Resources'
DECLARE @SalesDept varchar(50) = 'Sales'
SELECT d.DepartmentID, CASE
	WHEN d.DepartmentName = @BankDept THEN 'Banking Dept'
	WHEN d.DepartmentName = @HRDept THEN 'HR Dept'
	WHEN d.DepartmentName = @SalesDept THEN 'Sales Dept'
	ELSE d.DepartmentName
END AS 'Department Name'
FROM Departments AS d
JOIN Employees AS e
ON d.DepartmentID = e.DepartmentID
GO


--5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format
DECLARE @json VARCHAR(MAX)
SET @json = '[
	{"Id" : "1", "Name" : "Aaa", "Address" : "Adalaj", "City" : "Ahmedabad", "DOB" : "1998-11-22", "Standard" : "12"},
	{"Id" : "2", "Name" : "Bbb", "Address" : "Maninagar", "City" : "Ahmedabad", "DOB" : "1999-11-25", "Standard" : "11"},
	{"Id" : "3", "Name" : "Ccc", "Address" : "Thaltej", "City" : "Ahmedabad", "DOB" : "2000-11-22", "Standard" : "10"},
	{"Id" : "4", "Name" : "Ddd", "Address" : "Katargam", "City" : "Surat", "DOB" : "1998-11-30", "Standard" : "12"},
	{"Id" : "5", "Name" : "Eee", "Address" : "Bhestan", "City" : "Surat", "DOB" : "2000-12-23", "Standard" : "10"}
	]'

SELECT * INTO Students
FROM OPENJSON(@json)
WITH
	(Id INT '$.Id',
	Name VARCHAR(50) '$.Name',
	Address VARCHAR(150) '$.Address',
	City VARCHAR(50) '$.City',
	DOB DATE '$.DOB',
	Standard INT '$.Standard')


SELECT *
FROM Students
FOR JSON PATH



-------------------------------------------MCQ'S----------------------------------------------------------
1. Which of the following is not a DDL statement?
a. CREATE
b. MERGE 
c. ALTER
d. DROP

Ans:-B)

2. Which of the following is not a column constraint?
a. Default
b. Check
c. Range
d. Unique

Ans:-B)


3. What are limitations or rules placed on a field or column to ensure that data that is 
considered invalid is not entered?
a. Primary key
b. index
c. Foreign key
d. constraint

Ans:-D)


4. Which of the following is not a DML statement?
a. REMOVE
b. INSERT
c. DELETE
d. TRUNCATE

Ans:-d)

5. Select all of the following statements that are true:
a. Indexes should only be created on columns that are frequently searched.
b. A self-reference arises when a foreign key constraint references a column in the 
same table.
c. A single INSERT statement can be used to add rows to multiple tables.
d. Multiple primary keys can be added to a table.

Ans:-A)

6. Which of the following actions is not supported by ALTER?
a. Adding a new column to a table.
b. Deleting multiple columns from an existing table.
c. Modifying the data type of an existing column.
d. Changing the identity constraint of an existing column.

And:-D)

7. Which of the following is not a constraint?
a. Null
b. Unique
c. Check
d. Primary

A)NULL

8. What does SQL stand for?
a. Structured Question Language
b. Structured Query Language
c. Strong Question Language
d. Specific Query Language

Ans:-A)

9. Which of the following SQL statements is used to extract data from a database?
a. SELECT
b. OPEN
c. EXTRACT
d. GET

A)SELECT

10. Which SQL statement is used to update data in a database?
a. SAVE
b. MODIFY
c. SAVE AS
d. UPDATE

D)UPDATE

------------------------------------------F/B---------------------------------------------------------

1. Database objects are divided into two categories: (Ans)STORAGE and PROGRAMABILITY .

2. Tables created using the CREATE TABLE statement are used to store data.

3. Constraints can define entity relationships between tables on a continual basis. They are 
also referred to as DATABASE constraints.

4. In order to use the views object to view a data set, you must use the 
STORAGE Transact-SQL statement to show data from underlying tables.

5. DDL influences , whereas influences actual data stored in 
tables.STORAGE and PROGRANABILIYTY

6. The Microsoft database server that hosts relational databases is called .AZURE SQL DATABASE

7. The core DDL statements are ALTER, TRUNCATE, COMMENT, CREATE, DESCRIBE;
 , and .

8. The core DML statements are INSERT,SELECT ,UPDATE ,DELETE,MERGE,
, and RANSACTIONS

9. System views belong to the INFORMATION SCHEMA SET

10. The foreign key constraint is PRIMARY KEY identifier.