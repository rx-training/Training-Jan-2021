
-- ---------------------------------------- CATEGORIES ----------------------------------------
USE MyntraDB;

-- ADD CATEGORY
CREATE OR ALTER PROCEDURE AddCategory
	@CategoryName VARCHAR(255)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM Categories	WHERE CategoryName = @CategoryName) != 0)
		BEGIN
			PRINT @CategoryName + ' is already in database!';
			RETURN 1;
		END

		INSERT INTO Categories (CategoryName) VALUES (UPPER(@CategoryName));

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END


EXEC AddCategory @CategoryName = 'T-Shirt';

SELECT * FROM Categories;


-- UPDATE CATEGORY
CREATE OR ALTER PROCEDURE UpdateCategory
	@OldCategoryName VARCHAR(255),
	@NewCategoryName VARCHAR(255)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Categories WHERE LOWER(CategoryName) = LOWER(@OldCategoryName)) = 0)
		BEGIN
			PRINT @OldCategoryName + ' is not in the database! Provide Valid CategoryName.';
			RETURN 1;
		END

		UPDATE Categories
		SET CategoryName = UPPER(@NewCategoryName)
		WHERE LOWER(CategoryName) = LOWER(@OldCategoryName);

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateCategory @OldCategoryName = 'Shirt1', @NewCategoryName = 'Shirt';

SELECT * FROM Categories;


--DELETE CATEGORY
CREATE OR ALTER PROCEDURE DeleteCategory
	@CategoryName VARCHAR(255)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Categories WHERE LOWER(CategoryName) = LOWER(@CategoryName)) = 0)
		BEGIN
			PRINT @CategoryName + ' is not in the database! Provide valid CategoryName to delete.';
			RETURN 1;
		END

		DELETE FROM Categories WHERE CategoryName = @CategoryName;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END


EXEC DeleteCategory @CategoryName = 't-shirt';

SELECT * FROM Categories;