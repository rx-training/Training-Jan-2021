
-- ---------------------------------------- BRANDS ----------------------------------------
USE MyntraDB;

-- ADD BRAND
CREATE OR ALTER PROCEDURE AddBrand
	@BrandName VARCHAR(255)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM Brands	WHERE BrandName = @BrandName) != 0)
		BEGIN
			PRINT @BrandName + ' is already in database!';
			RETURN 1;
		END

		INSERT INTO Brands (BrandName) VALUES (UPPER(@BrandName));

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END

EXEC AddBrand @BrandName = 'hrx';

SELECT * FROM Brands;


-- UPDATE BRAND
CREATE OR ALTER PROCEDURE UpdateBrand
	@OldBradName VARCHAR(255),
	@NewBrandName VARCHAR(255)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Brands WHERE LOWER(BrandName) = LOWER(@OldBradName)) = 0)
		BEGIN
			PRINT @OldBradName + ' is not in the database! Provide Valid BrandName.';
			RETURN 1;
		END

		UPDATE Brands
		SET BrandName = UPPER(@NewBrandName)
		WHERE LOWER(BrandName) = LOWER(@OldBradName);

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateBrand @OldBradName = 'Levis1', @NewBrandName = 'Levis'

SELECT * FROM Brands;


-- DELETE BRAND
CREATE OR ALTER PROCEDURE DeleteBrand
	@BrandName VARCHAR(255)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Brands WHERE LOWER(BrandName) = LOWER(@BrandName)) = 0)
		BEGIN
			PRINT @BrandName + ' is not in the database! Provide valid BrandName to delete.';
			RETURN 1;
		END

		DELETE FROM Brands WHERE BrandName = @BrandName;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END


EXEC DeleteBrand @BrandName = 'hrx';

SELECT * FROM Brands;