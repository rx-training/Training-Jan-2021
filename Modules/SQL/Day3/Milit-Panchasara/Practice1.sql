------------------------------DateTime-------------------------------

-- ISNULL() function
SELECT ISNULL(NULL, 'SOMETHING NOT AVAILABLE');

-- COALESCE() function
SELECT COALESCE(NULL, NULL,  'SOMETHING NOT AVAILABLE');
SELECT COALESCE(NULL,  'SOMETHING NOT AVAILABLE');

-- EOMONTH() function
SELECT(EOMONTH(GETDATE()));

-- DATEADD() function
SELECT DATEADD(YYYY, 2, GETDATE());

--ISDATE() function
SELECT ISDATE('12/10/2020'), 'ISDATE' AS Result UNION SELECT ISDATE('abc'), 'ISNOTDATE' AS Result;

------------------------------String-------------------------------

--LTRIM()/RTRIM() function
SELECT '        abcd        ', LTRIM('        abcd        '), RTRIM('        abcd        ');

--PATINDEX() function (Similar to CHARINDEX())
SELECT PATINDEX('%abab%','abcdmolniunefababab');

--PARSE()/TRY_PARSE() function
SELECT PARSE('12/10/2020' AS date); -- date value
SELECT PARSE('12/100/2020' AS date); -- error if not possible
SELECT TRY_PARSE('12/100/2020' AS date); --null if not possible

--CHOOSE() function
SELECT CHOOSE(1,'X','Y','Z') as Test;
SELECT CHOOSE(2,'X','Y','Z') as Test;
SELECT CHOOSE(3,'X','Y','Z') as Test;
SELECT CHOOSE(4,'X','Y','Z') as Test; -- null if item not found

--IIF() function
SELECT IIF(4 > 0 , 'POSITIVE', 'NEGATIVE') as NumberType;
SELECT IIF(-4 > 0 , 'POSITIVE', 'NEGATIVE') as NumberType;

------------------------------Math-------------------------------

SELECT ROUND(12.55474578, 4);
SELECT CEILING(12.55474578);
SELECT FLOOR(12.55474578);
SELECT EXP(2);

SELECT RAND(2), RAND(), RAND();