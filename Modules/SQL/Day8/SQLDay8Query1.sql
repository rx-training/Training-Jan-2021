
/*
  1)
CREATE TABLE STUDENT (
	NAME NVARCHAR(20),
	ROLL_NO INT,
	MARKS INT
)
-- CLUSTERED INDEX

CLUSTERED INDEX IX_STU ON STUDENT (ROLL_NO) -- IT SHOUD PRIMARY KEY 

-- NON CLUSTERED INDEX
CREATE INDEX NIX_STU ON STUDENT (ROLL_NO) -- IT IS USE TO MAKE UNIQUE KEY 


SELECT * FROM STUDENT WHERE ROLL_NO = 1245

2)

CREATE TABLE student
(
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    DOB datetime NOT NULL,
    total_score INT NOT NULL,
    city VARCHAR(50) NOT NULL
 )
 

 EXECUTE sp_helpindex student

 INSERT INTO student
 
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
 
SELECT * FROM student

SELECT * FROM NonClusteredIndex-20210312-173542

select * FROM students WHERE  name = 'jon' 



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