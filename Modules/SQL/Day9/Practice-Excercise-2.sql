--JSON DATA
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
]';

SELECT *
FROM OPENJSON(@json)
  WITH (
    id INT 'strict $.id',
    firstName NVARCHAR(50) 'lax $.info.name',
    lastName NVARCHAR(50) 'lax $.info.lastname',--lax returns null withiou error
    age INT,
    dateOfBirth DATETIME2 '$.dob'
  );
GO
DECLARE @json varchar(max)
SET @json= N' {
"string-Value":"tirth",
"boolean":"true",
"array":[{"a":"y"},"r","a","y"],
"obj":{"key": "value"}
}'
 SELECT * FROM OPENJSON(@json)
 SELECT * FROM OPENJSON(@json,'$.obj')
 SELECT  JSON_VALUE(@json, 'strict $.array[1]')
 GO

DECLARE @json nvarchar(max)
SET @json =N' [
	{ "id" : 1,"Name" :"jhon"},
	{ "id" : 2,"Name" :"juven"}
			]'

SELECT * FROM OPENJSON(@json)
WITH (	Name Varchar(50) 'strict $.Name' ,
		ID int '$.id' 
	 )

	SELECT CarID AS 'ID' , Vin AS 'vin' 
	FROM Cars

	FOR JSON PATH

DECLARE @json1 varchar(max)
SET @json1 = N'[
	{
		"id":1 ,
		"name":"Tirth",
		"hobbies":["reading","gaming","coding"]},
		{
		"id":2 ,
		"name":"Milan",
		"hobbies":["Dancing","gaming","swimming"]}
	]'
	PRINT ISJSON(@json1)
	IF (ISJSON(@json1) > 0)
	PRINT 'VALID JSON DATA'
	ELSE
	PRINT 'INVALID JSON DATA'
	
GO
USE AdventureWorks2012
DECLARE @jsoninfo nvarchar(max)
SET @jsoninfo = N'{  
     "info":{    
       "type":1,  
       "address":{    
         "town":"Bristol",  
         "county":"Avon",  
         "country":"England"  
       },  
       "tags":["Sport", "Water polo"]  
    },  
    "type":"Basic"  
 }'
 --this wont work because person.person dont ahve jsoninfo column of json data type

 SELECT FirstName , 
		LastName,
		
		JSON_VALUE(jsoninfo , '$.info.address[0].town') AS Town
 FROM PERSON.Person 
	WHERE JSON_VALUE(jsoninfo, '$.info.address[0].state') NOT LIKE 'U%' 
	ORDER BY JSON_VALUE(jsoninfo,'$.info.address[0].town')
GO

DECLARE @jsonInfo varchar(max) , @town nvarchar(max)
SET @jsonInfo = N'  {
			"info" :{"address":[{"town":"paris"},{"town":"london"}]}}'
SET @town = JSON_VALUE(@jsonInfo,'$.info.address[0].town')
SET @town = JSON_VALUE(@jsonInfo,'$.info.address[1].town')
SELECT @town
GO
 

 CREATE TABLE dbo.Stores 
 (
	StoreId INT NOT NULL,
	Address Varchar(500),
	Jsoncontent Nvarchar(4000),
	longitude AS JSON_VALUE (Jsoncontent ,'$.address[0].longitude'),
	Latitude AS JSON_VALUE (Jsoncontent ,'$.address[0].latitude')
)
--INSERT INTO Dbo.Stores (StoreId,Jsoncontent)
--VALUES
--(1,N'"address" : [{"longitude" : "23.231.32 N"} , {"latitude" : "232.e.32.32 W"}]')

--SELECT longitude FROM dbo.Stores

SELECT * FROM AdventureWorks2012.Person.Person
DECLARE @json NVARCHAR(MAX);
SET @json=N'{"person":{"info":{"name":"John", "name":"John"}}}';

SELECT value
  FROM OPENJSON(@json,'$.person.info');
  --open json only return values with duplicate entries

GO
DECLARE @json varchar(4000)
SET @json = N'{
		"a" :"[1,2]",
		"b" : [1,2],
		"c" : "hello"
		}'
SELECT JSON_QUERY(@json,'$.a')
SELECT JSON_VALUE(@json,'$.a')
GO

--Convert Json array to a temparary Table

DECLARE @option nvarchar(4000)
SET @option =N'[1,2,3,4]'

SELECT * FROM  Production.Product p INNER JOIN OPENJSON(@option)  pt on p.ProductID= pt.value
GO
--Mrege 2 json
DECLARE @json1 nvarchar(max) ,@json2 nvarchar(max)
SET @json1 = N' {
					"Name":"jhon" ,"surname" : "Doe" } '
SET @json2 = N' {
					"Name":"jhon" ,"age" : 45 } '

SELECT * FROM OPENJSON(@json1) UNION ALL
SELECT * FROM OPENJSON(@json2) 
	WHERE [key] NOT IN (SELECT [KEY] FROM OPENJSON(@json1))--removed duplciate column
GO
DECLARE @json1 nvarchar(max) ,@json2 nvarchar(max)
SET @json1 = N' {
					"Name":"jhon" ,"surname" : "Doe" } '
SET @json2 = N' {
					"Name":"jhon" ,"age" : 45 } '

SELECT * FROM OPENJSON(@json1) CROSS APPLY
OPENJSON(@json2) 
	
GO
DECLARE @salesReasons nvarchar(max)
SET @salesReasons  = '{ "salesorderReasons" : ["abcd","defg","ghij" , "klmnop"]}'
SELECT * FROM OPENJSON(@salesReasons)
SELECT SalesOrderID,OrderDate,value AS Reason
FROM Sales.SalesOrderHeader
CROSS APPLY OPENJSON(@SalesReasons) 

USE AdventureWorks2012
SELECT * FROM Stores