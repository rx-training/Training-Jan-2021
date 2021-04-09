--Day9

--Practice Exercise
--Implement the task explained on msdn site.


--What to Learn
--Declare Variable
DECLARE @name VARCHAR(34) , @dept VARCHAR(34) ;

--Setting values of the variable
SET @name = 'E' ;
SET @dept = 'G' ;

--Batch
INSERT INTO Employee( Name , Department)
SELECT @name , @dept 
UNION ALL
SELECT 'F' , 'IT' 
UNION ALL
SELECT 'G' , 'House' 
GO

SELECT * FROM Employee ;


--If-else
DECLARE @num INT = 2 ;
IF @num >= 2 BEGIN
	PRINT 'Greater than or equal to 2'
END
ELSE BEGIN
	PRINT 'Less than 2'
END

--Case Statement
DECLARE @number INT = 3 ;
SELECT CASE @number 
			WHEN 1 THEN 'ONE'
			WHEN 2 THEN 'TWO'
			WHEN 3 THEN 'THREE'
			ELSE  'Done' END 
		AS 'op' ;

--while
DECLARE @numb INT = 10 ;
WHILE @numb > 0 BEGIN
	SET NOCOUNT ON ;
	SET @numb = @numb - 1 ;
	PRINT @numb 
END


--Processing JSON
DECLARE @myjson NVARCHAR(MAX) = N'[
	{
    	"id" 		: 1 	, 
        "name" 		: "A" 	, 
        "salary"	: 23000 
    } , 
    {
    	"id" 		: 2 	, 
        "name" 		: "B" 	, 
        "salary"	: 26000 
    } , 
    {
    	"id" 		: 3 	, 
        "name" 		: "C" 	, 
        "salary"	: 2000 
    }
]' ;
INSERT INTO new
SELECT JsonTable.* 	FROM OPENJSON( @myjson , N'$' )
WITH (
  	EmployeeId	INT 			N'$.id' 	,
  	Name 		VARCHAR(200) 	N'$.name' 	,
  	Salary		INT 			N'$.salary' 
  ) AS JsonTable ;

-- ISJSON : Returns 1 , if data is in json format , else 0
SELECT ISJSON( @myjson ) AS 'IS JSON ?' ;

--JSON_VALUE
--JSON_QUERY
--JSON_MODIFY
SET @myjson = JSON_MODIFY(@myjson, '$', '');

--Convert JSON collections to a rowset
--OPENJSON
--Convert SQL Server data to JSON or export JSON

--FOR JSON PATH
SELECT * FROM Employee FOR JSON PATH ;

--FOR JSON AUTO
SELECT * FROM Employee FOR JSON AUTO ;
--WITHOUT_ARRAY_WRAPPER




