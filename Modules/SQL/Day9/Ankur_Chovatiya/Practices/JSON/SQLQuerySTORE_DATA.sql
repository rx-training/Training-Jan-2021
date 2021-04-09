SELECT BULKCOLUMN FROM OPENROWSET 
(BULK 'C:\Users\Ankur Patel\Desktop\TrainingWork\Training-Jan-2021\Modules\SQL\Day9\Ankur_Chovatiya\Practices\JSON\DATA.JSON' ,SINGLE_CLOB ) AS J;



-- IN VARIABLE 


DECLARE @JSON NVARCHAR(MAX)
SELECT @JSON =  BulkColumn
 FROM OPENROWSET (BULK 'C:\Users\Ankur Patel\Desktop\TrainingWork\Training-Jan-2021\Modules\SQL\Day9\Ankur_Chovatiya\Practices\JSON\DATA.JSON',SINGLE_CLOB) AS J;

 PRINT @JSON


 -- IN TEMPARARY TABLE

 SELECT BULKCOLUMN INTO TEMP_TABLE
 FROM OPENROWSET( BULK 'C:\Users\Ankur Patel\Desktop\TrainingWork\Training-Jan-2021\Modules\SQL\Day9\Ankur_Chovatiya\Practices\JSON\DATA.JSON' , SINGLE_CLOB) AS J;


 SELECT * FROM TEMP_TABLE