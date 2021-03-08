CREATE DATABASE DAY3SQL;
/*ASCll*/
SELECT ASCII('A') AS A, ASCII('B') AS B,   
ASCII('a') AS a, ASCII('b') AS b,  
ASCII(1) AS [1], ASCII(2) AS [2],ASCII(3) AS [3];

SELECT ASCII('P') AS [ASCII], ASCII('æ') AS [Extended_ASCII];

/*charter function*/
SET TEXTSIZE 0;  
-- Create variables for the character string and for the current   
-- position in the string.  
DECLARE @position INT, @string CHAR(8);  
-- Initialize the current position and the string variables.  
SET @position = 1;  
SET @string = 'New Nill';  
WHILE @position <= DATALENGTH(@string)  
   BEGIN  
   SELECT ASCII(SUBSTRING(@string, @position, 1)),   
      CHAR(ASCII(SUBSTRING(@string, @position, 1)))  
   SET @position = @position + 1  
   END;  
GO


SELECT CHAR(65) AS [65], CHAR(66) AS [66],   
CHAR(97) AS [97], CHAR(98) AS [98],   
CHAR(49) AS [49], CHAR(50) AS [50];

SELECT CHAR(65) AS NumberCodeToCharacter;

/*charindex*/
DECLARE @document VARCHAR(64);  
SELECT @document = 'MY name is niraj sapra this is charindex pratice';  
SELECT CHARINDEX('niraj', @document);  
GO 

/*CONCAT:-This function returns a string resulting from the concatenation, or joining, of two or more string values in an end-to-end manner. (To add a separating value during concatenation, see CONCAT_WS.)*/
SELECT CONCAT ( 'Happy ', 'Birthday ', 21, '/', '08','/',1999 ) AS Result;

CREATE TABLE #temp (  
    emp_name NVARCHAR(200) NOT NULL,  
    emp_middlename NVARCHAR(200) NULL,  
    emp_lastname NVARCHAR(200) NOT NULL  
);  
INSERT INTO #temp VALUES( 'Name', NULL, 'Lastname' );  
SELECT CONCAT( emp_name, emp_middlename, emp_lastname ) AS Result  
FROM #temp;

/*Format*/
DECLARE @d DATETIME = '12/01/2018';
SELECT FORMAT (@d, 'd', 'en-US') AS 'US English Result';

 