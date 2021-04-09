DECLARE @Json NVARCHAR(MAX)
SELECT @Json = BulkColumn
 FROM OPENROWSET (BULK 'C:\Users\Ankur Patel\Desktop\TrainingWork\Training-Jan-2021\Modules\SQL\Day9\Ankur_Chovatiya\Practices\JSON\demo.json', SINGLE_CLOB) as j;

 PRINT (@Json)

 SELECT JSON_VALUE(@Json , '$.info.FirstName[2]')



 SELECT BulkColumn
 INTO temps 
 FROM OPENROWSET (BULK 'C:\Users\Ankur Patel\Desktop\TrainingWork\Training-Jan-2021\Modules\SQL\Day9\Ankur_Chovatiya\Practices\JSON\demo.json', SINGLE_CLOB) as j

 select * from temps