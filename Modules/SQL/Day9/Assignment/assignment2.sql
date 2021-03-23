/*ASSIGNMENT 2*/
CREATE TABLE Student(Id int,Name varchar(10),Address varchar(100),City varchar(15),Dob date,Standard varchar(2));


DECLARE @studentjson NVARCHAR(MAX)
SET @studentjson =N'[
{"Id":1,"Name":"NIRAJ","Address":"NIRMALNAGER,KESERBUG,STREET NO:7,PLOT NO:2/B" , 
"City":"BHAVNAGAR", "DOB":"1999-08-21","Standard":"1"},
{"Id":2,"Name":"JAY","Address":"NIRMALNAGER,KESERBUG,STREET NO:7,PLOT NO:2/B" , 
"City":"BHAVNAGAR", "DOB":"2002-04-11","Standard":"2"},
{"Id":3,"Name":"Nill","Address":"NIRMALNAGER,KESERBUG,STREET NO:7,PLOT NO:2/B" , 
"City":"BHAVNAGAR", "DOB":"2004-01-16","Standard":"3"},
{"Id":4,"Name":"Priya","Address":"NIRMALNAGER,KESERBUG,STREET NO:7,PLOT NO:2/B" , 
"City":"BHAVNAGAR", "DOB":"2009-03-31","Standard":"4"},
{"Id":5,"Name":"Raj","Address":"NIRMALNAGER,KESERBUG,STREET NO:7,PLOT NO:2/B" , 
"City":"BHAVNAGAR", "DOB":"2016-12-29","Standard":"5" }
]';

INSERT into Student  SELECT * FROM OPENJSON(@studentjson) 
WITH (
Id INT  '$.Id',
Name NVARCHAR(50) '$.Name',
Address varchar(100)  '$.Address',
City varchar(15) '$.City',
Dob date  '$.Dob',
Standard varchar(2) '$.Standard'
);
 
SELECT *  From Student for json path,Root('Student'),INCLUDE_NULL_VALUES; 





DECLARE @json NVARCHAR(MAX)
SET @json =N'[
{"Id":1,"Name":"NIRAJ"},
{"Id":2,"Name":"JAY"},
{"Id":3,"Name":"Nill"},
{"Id":4,"Name":"Priya"},
{"Id":5,"Name":"Raj"}
]';

SELECT * FROM OPENJSON(@json) 
WITH (
Id INT  '$.Id',
Name NVARCHAR(50) '$.Name'
)

DROP TABLE Customer;
CREATE TABLE Customer(Id int,Names varchar(10));
INSERT into Customer(Id , Names) VALUES ('1','Niraj'),
('2','Kemi'),
('3','Prapti'),
('4','Rutu'),
('5','Divy');

SELECT Id AS 'No' ,Names As Name From Customer FOR JSON PATH;




