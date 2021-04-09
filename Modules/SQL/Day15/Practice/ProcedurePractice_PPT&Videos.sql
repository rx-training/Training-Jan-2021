SELECT * FROM HumanResources.EmployeePayHistory

/*You are a database developer of AdventureWorks, Inc. The Human Resource department needs to revise the payment details of the employees.
You need to create a procedure that obtains the percentage value by which you need to increase the pay rate. In addition, you need to ensure
that the pay is revised for only those employees whose pay rate was not revised in the last six months.​
Ans.*/
CREATE PROCEDURE prcEmpPayHistory
    @RatePerc INT
AS
BEGIN
DECLARE @month INT
SELECT @month=DATEDIFF(MM, RateChangeDate, GETDATE())
FROM HumanResources.EmployeePayHistory
IF @month > 6
BEGIN
	SELECT Rate + (Rate * @RatePerc /100) AS 'Rate'
	FROM HumanResources.EmployeePayHistory
END
END

EXECUTE prcEmpPayHistory 10
 

--PROCEDURE EXAMPLE PRACTICE FROM VIDEOS
CREATE PROCEDURE Production.upCategoryInsert
	@Name VARCHAR(50)
AS
SELECT * FROM Production.ProductCategory

INSERT INTO Production.ProductCategory(Name) VALUES (@Name)
SELECT SCOPE_IDENTITY();

DECLARE @Name VARCHAR(50) = 'Created from Procedure'
EXEC Production.upCategoryInsert @Name

SELECT Name
FROM Production.ProductCategory
WHERE ProductCategoryID=5