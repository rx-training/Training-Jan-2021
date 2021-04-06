
-- ---------------------------------------- CATEGORIES ----------------------------------------
USE MyntraDB;

--ADD PRODUCT
CREATE OR ALTER PROCEDURE AddProduct
	@ProductName VARCHAR(255),
	@BrandName VARCHAR(255),
	@CategoryName VARCHAR(255),
	@Details VARCHAR(MAX),
	@Price MONEY,
	@Offer TINYINT,
	@Returnable VARCHAR(10),
	@Pincodes VARCHAR(MAX),
	@Sizes VARCHAR(255),
	@ImgUrls VARCHAR(MAX)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Products where LOWER(ProductName) = LOWER(@ProductName)) != 0)
		BEGIN
			PRINT @ProductName + ' is already in database!'
			RETURN 1;
		END

		DECLARE @BrandId INT = (SELECT BrandId FROM Brands WHERE LOWER(BrandName) = LOWER(@BrandName));
		IF(@BrandId IS NULL)
		BEGIN
			PRINT @BrandName + ' is not in the database!'
			RETURN 1;
		END

		DECLARE @CategoryId INT = (SELECT CategoryId FROM Categories WHERE LOWER(CategoryName) = LOWER(@CategoryName))
		IF(@CategoryId IS NULL)
		BEGIN
			PRINT @CategoryName + ' is not in the database!'
			RETURN 1;
		END

		INSERT INTO Products (ProductName, BrandId, CategoryId, Details, Price, Offer, Returnable, Pincodes, Sizes, ImgUrls) VALUES
			(@ProductName, @BrandId, @CategoryId, @Details, @Price, @Offer, @Returnable, @Pincodes, @Sizes, @ImgUrls);

		RETURN 0;
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC AddProduct @ProductName = 'Men Green Solid Polo T-shirt'
				, @BrandName = 'Levis'
				, @CategoryName = 'T-shirt'
				, @Details = 'Navy Blue and White printed T-shirt, has a polo collar, and short sleeves'
				, @Price = 849
				, @Offer = 25
				, @Returnable = 'true'
				, @Pincodes = '387330,387331,387001,387002'
				, @Sizes ='S,M,L,XL,XXL'
				, @ImgUrls = '/images/category/t-shirt/levis-polo-tshirt1.jpg,/images/category/t-shirt/levis-polo-tshirt2.jpg,/images/category/t-shirt/levis-polo-tshirt3.jpg,/images/category/t-shirt/levis-polo-tshirt4.jpg';

SELECT * FROM Products;


-- UPDATE PRODUCT
CREATE OR ALTER PROCEDURE UpdateProduct
	@ProductName VARCHAR(255),
	@BrandName VARCHAR(255),
	@CategoryName VARCHAR(255),
	@Details VARCHAR(MAX),
	@Price MONEY,
	@Offer TINYINT,
	@Returnable VARCHAR(10),
	@Pincodes VARCHAR(MAX),
	@Sizes VARCHAR(255),
	@ImgUrls VARCHAR(MAX)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM Products where LOWER(ProductName) = LOWER(@ProductName)) = 0)
		BEGIN
			PRINT @ProductName + ' is not in database!'
			RETURN 1;
		END

		DECLARE @BrandId INT = (SELECT BrandId FROM Brands WHERE LOWER(BrandName) = LOWER(@BrandName));
		IF(@BrandId IS NULL)
		BEGIN
			PRINT @BrandName + ' is not in the database!'
			RETURN 1;
		END

		DECLARE @CategoryId INT = (SELECT CategoryId FROM Categories WHERE LOWER(CategoryName) = LOWER(@CategoryName))
		IF(@CategoryId IS NULL)
		BEGIN
			PRINT @CategoryName + ' is not in the database!'
			RETURN 1;
		END

		UPDATE Products
		SET BrandId = @BrandId
			, CategoryId = @CategoryId
			, Details = @Details
			, Price = @Price
			, Offer = @Offer
			, Returnable = @Returnable
			, Pincodes = @Pincodes
			, Sizes = @Sizes
			, ImgUrls = @ImgUrls
		WHERE ProductName = @ProductName

		RETURN 0;
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateProduct @ProductName = 'Men Green Solid Polo T-shirt'
				, @BrandName = 'Levis'
				, @CategoryName = 'T-shirt'
				, @Details = 'Navy Blue and White printed T-shirt, has a polo collar, and short sleeves'
				, @Price = 849
				, @Offer = 50
				, @Returnable = 'true'
				, @Pincodes = '387330,387331,387001,387002'
				, @Sizes ='S,M,L,XL,XXL'
				, @ImgUrls = '/images/category/t-shirt/levis-polo-tshirt1.jpg,/images/category/t-shirt/levis-polo-tshirt2.jpg,/images/category/t-shirt/levis-polo-tshirt3.jpg,/images/category/t-shirt/levis-polo-tshirt4.jpg';

SELECT * FROM Products;


-- DELETE PRODUCT
CREATE OR ALTER PROCEDURE DeleteProduct
	@ProductName VARCHAR(255)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM Products where LOWER(ProductName) = LOWER(@ProductName)) = 0)
		BEGIN
			PRINT @ProductName + ' is not in database!'
			RETURN 1;
		END

		DELETE FROM Products WHERE ProductName = @ProductName;
		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC DeleteProduct @ProductName = 'Men Green Solid Polo T-shirt';

SELECT * FROM Products;