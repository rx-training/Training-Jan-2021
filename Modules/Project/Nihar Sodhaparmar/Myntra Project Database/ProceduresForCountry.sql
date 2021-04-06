
-- ---------------------------------------- COUNTRIES ----------------------------------------
USE MyntraDB;

-- ADD COUNTRY
CREATE OR ALTER PROCEDURE AddCountry
	@CountryName VARCHAR(25)
AS
BEGIN

	BEGIN TRY

		IF((SELECT COUNT(*) FROM Countries WHERE LOWER(CountryName) = LOWER(@CountryName)) != 0)
		BEGIN
			PRINT @CountryName + ' is already in the database!';
			RETURN 1;
		END

		INSERT INTO Countries (CountryName) VALUES (UPPER(@CountryName));

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC AddCountry 'America';

SELECT * FROM Countries;


-- UPDATE COUNTRY
CREATE OR ALTER PROCEDURE UpdateCountry
	@OldCountryName VARCHAR(25),
	@NewCountryName VARCHAR(25)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Countries WHERE LOWER(CountryName) = LOWER(@OldCountryName)) = 0)
		BEGIN
			PRINT @OldCountryName + ' is not in the database! Povide Valid CountryName.';
			RETURN 1;
		END

		UPDATE Countries
		SET CountryName = UPPER(@NewCountryName)
		WHERE LOWER(CountryName) = LOWER(@OldCountryName);

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateCountry @OldCountryName = 'America', @NewCountryName = 'America1';

SELECT * FROM Countries;


-- DELETE COUNTRY
CREATE OR ALTER PROCEDURE DeleteCountry
	@CountryName VARCHAR(25)
AS
BEGIN
	BEGIN TRY

		IF((SELECT COUNT(*) FROM Countries WHERE LOWER(CountryName) = LOWER(@CountryName)) = 0)
		BEGIN
			PRINT @CountryName + ' is not in the database! Provide valid CountryName to delete.';
			RETURN 1;
		END

		DELETE FROM Countries WHERE CountryName = @CountryName;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END

EXEC DeleteCountry 'India';

SELECT * FROM Countries;