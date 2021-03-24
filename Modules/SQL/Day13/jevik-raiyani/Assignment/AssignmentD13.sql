--USE day5

--Create a scaler Function to compute PF which will accept parameter 
--basicsalary and compute PF. PF is 12% of the basic salary.
CREATE FUNCTION PfEm (@SALARY int)
RETURNS INT
AS
BEGIN
DECLARE  @PF int
SET @PF = @SALARY * 0.12
RETURN @PF 
END
 
DECLARE @sal int
SET @sal = dbo.PfEm(8000)
PRINT @sal
--or
CREATE FUNCTION dbo.PfEmp(@PF int)
RETURNS int
AS
BEGIN
	RETURN @PF*.12
END
SELECT dbo.PfEmp(500)
SELECT Salary,dbo.PfEmp(Salary) 'PF' FROM Employees1

--Create a scaler Function which will compute PT which will accept MontlyEarning. 
--Criteria as below.
CREATE FUNCTION dbo.Assignment2 (@new int) 
RETURNS CHAR(4)
BEGIN
  DECLARE @PF CHAR(4)
  SELECT @PF = CASE
		WHEN (@new < 6000 ) THEN NULL
        WHEN (@new > 6000 AND  @new < 9000) THEN 80
        WHEN (@new > 9000 AND  @new < 12000) THEN 150
        ELSE 200
  END
  RETURN @PF;
END

SELECT dbo.Assignment2(1000) AS ' PT '  

DECLARE @sala int
SET @sala= dbo.Assignment2(17500) 
PRINT @sala

--Create a table valued function which will accept JobTitle 
--which will return new table set based on jobtitle

ALTER FUNCTION dbo.Assi3(@title VARCHAR(30))
RETURNS TABLE
AS
RETURN(
	SELECT * FROM Employees1
	WHERE JobId=@title 
)
SELECT * FROM dbo.Assi3('AD_VP')
SELECT * FROM dbo.Assi3('Senior Tool Designer')
