--Assignment:
--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
CREATE TABLE Employee (
	Id			INT NOT NULL IDENTITY(1,1) , 
	Name		VARCHAR(23) ,
	Department	VARCHAR(23)
);
INSERT INTO Employee(Name , Department) VALUES ('A', 'Banking') , ('B', 'Insurance') , ('C' , 'Service') 
DECLARE @dept VARCHAR(34) = 'Dept' ;
SELECT Name , CASE Department 
				WHEN 'Banking' THEN 'Bank'+@dept
				WHEN 'Insurance' THEN 'Insurance '+@dept
				WHEN 'Services' THEN 'Services '+@dept
				ELSE Department 
			END AS DepartmentName
FROM Employee
GO

--5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format

DECLARE @myjson NVARCHAR(MAX) ;
SET @myjson = N'[
	{
        "name" 		: "A" ,	 
        "address"	: "lal-baug" ,
		 "city"		: "ahmedabad" ,
		 "dob"		: "12-12-1999" ,
		 "standard"	: "10"
    } ,
	{
        "name" 		: "B" ,	
        "address"	: "shahi-baug" ,
		 "city"		: "ahmedabad" ,
		 "dob"		: "12-11-1999" ,
		 "standard"	: "11"
    } ,
	{
        "name" 		: "C" ,	
        "address"	: "Nehru-baug" ,
		 "city"		: "ahmedabad" ,
		 "dob"		: "11-11-1999" ,
		 "standard"	: "10"
    } ,
	{
        "name" 		: "D" ,	
        "address"	: "Gandhi-baug" ,
		 "city"		: "ahmedabad" ,
		 "dob"		: "11-11-1999" ,
		 "standard"	: "10"
    } ,
	{
        "name" 		: "E" ,	
        "address"	: "Sardar-baug" ,
		 "city"		: "ahmedabad" ,
		 "dob"		: "12-10-2002" ,
		 "standard"	: "12"
    } 
]' ;

INSERT INTO Students
SELECT * INTO Person FROM OPENJSON( @myjson , N'$' ) 
WITH ( 
  	Name		VARCHAR(20)	'$.name' ,
  	Address		VARCHAR(20)	'$.address' ,
  	City		VARCHAR(20)	'$.city' ,
	Dob			DATE		'$.dob' ,
  	Standard	INT			'$.standard' 
 ) ;

 SELECT * FROM Students FOR JSON PATH, ROOT('Students') ;

 

--Online Reference:
--https://docs.microsoft.com/en-us/sql/relational-databases/json/json-data-sql-server?view=sql-server-ver15

