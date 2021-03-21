DECLARE @json NVARCHAR(MAX) = N'[{  
  "id" : 2,  
  "firstName": "John",  
  "lastName": "Smith",  
  "isAlive": true,  
  "age": 25,  
  "dateOfBirth": "2015-03-25T12:00:00",  
  "spouse": null  
  }]'  
   
 
  SELECT *   
  FROM OPENJSON(@json)  
  WITH (
        id int '$.id',  
        firstName nvarchar(50) '$.firstName', 
		lastName nvarchar(50) '$.lastName',   
        isAlive bit '$.isAlive', 
		age int '$.age',  
        dateOfBirth datetime2 '$.dateOfBirth', 
		spouse nvarchar(50) '$.spouse'
		)