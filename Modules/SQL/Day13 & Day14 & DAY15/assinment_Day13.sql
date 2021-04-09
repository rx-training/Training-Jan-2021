/*
DAY 13
Assignment:1
Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.
*/

CREATE DATABASE SQLDAY13USE


USE AdventureWorks2012

CREATE FUNCTION  HumanResources.COUNTPF (@Salary float)
RETURNS float
AS 
BEGIN
RETURN (@Salary*0.12)
END

DECLARE @Salary float
SET @Salary=
HumanResources.COUNTPF (50000)
PRINT @Salary

/*
DAY 13
Assignment:2
Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/

USE SQLDAY13USE

CREATE FUNCTION dbo.COUNTPT(@MonthlyEarn MONEY)
    RETURNS INT
    AS
    BEGIN
        DECLARE @Tax INT ;
        SET @Tax = CASE
					    WHEN @MonthlyEarn <6000
                            THEN 0
                        WHEN @MonthlyEarn BETWEEN 6000 AND 8999
                            THEN 80
                        WHEN @MonthlyEarn BETWEEN 9000 AND 11999
                            THEN 150
                        WHEN @MonthlyEarn >=12000
                            THEN 200
                        ELSE 0
                    END;
        RETURN @Tax;
    END

SELECT dbo.COUNTPT(10000)