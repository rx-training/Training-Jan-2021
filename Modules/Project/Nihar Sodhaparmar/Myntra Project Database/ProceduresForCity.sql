
-- ---------------------------------------- CITIES ----------------------------------------

-- ADD CITY
CREATE OR ALTER PROCEDURE AddCity
	@CityName VARCHAR(25),
	@StateName VARCHAR(25)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM Cities WHERE LOWER(CityName) = LOWER(@CityName)) != 0)
		BEGIN
			PRINT @CityName + ' is already in the database!';
			RETURN 1;
		END

		IF((SELECT COUNT(*) FROM States WHERE LOWER(StateName) = LOWER(@StateName)) = 0)
		BEGIN
			PRINT @StateName + ' is not in the database! First insert state in the database.';
			RETURN 1;
		END

		DECLARE @StateId INT;
		SELECT @StateId = StateId FROM States WHERE LOWER(StateName) = LOWER(@StateName);

		INSERT INTO Cities(CityName, StateId) VALUES (UPPER(@CityName), @StateId);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END

EXEC AddCity @CityName = 'Ahmedabad', @StateName = 'Gujarat';

SELECT * FROM Cities;


-- UPDATE CITIES
CREATE OR ALTER PROCEDURE UpdateCity
	@Operation VARCHAR(25),
	@OldCityName VARCHAR(25),
	@NewCityName VARCHAR(25),
	@NewStateName VARCHAR(25)
AS
BEGIN
	BEGIN TRY
		
		IF(LOWER(@Operation) = 'update city name')
		BEGIN
			IF((SELECT COUNT(*) FROM Cities WHERE LOWER(CityName) = LOWER(@OldCityName)) = 0)
			BEGIN
				PRINT @OldCityName + ' is not in the database!';
				RETURN 1;
			END

			UPDATE Cities 
			SET CityName = UPPER(@NewCityName)
			WHERE LOWER(CityName) = LOWER(@OldCityName);

			RETURN 0;
		END
		ELSE IF(LOWER(@Operation) = 'update state name')
		BEGIN
		
			IF((SELECT COUNT(*) FROM Cities WHERE LOWER(CityName) = LOWER(@OldCityName)) = 0)
			BEGIN
				PRINT @OldCityName + ' is not in the database!';
				RETURN 1;
			END

			IF((SELECT COUNT(*) FROM States WHERE LOWER(StateName) = LOWER(@NewStateName)) = 0)
			BEGIN
				PRINT @NewStateName + ' is not in the database!';
				RETURN 1;
			END
		
			DECLARE @StateId INT;
			SELECT @StateId = StateId FROM States WHERE LOWER(StateName) = LOWER(@NewStateName);

			UPDATE Cities
			SET StateId = @StateId
			WHERE LOWER(CityName) = LOWER(@OldCityName);

			RETURN 0;
		END
		ELSE
		BEGIN
			PRINT 'Provide valid operation for update';
			RETURN 1;
		END
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateCity @Operation = 'update city name', @OldCityName = 'Nadiad1', @NewCityName = 'Nadiad', @NewStateName = '';

EXEC UpdateCity @Operation = 'update state name', @OldCityName = 'Nadiad', @NewCityName = '', @NewStateName = 'Gujarat';

SELECT * FROM Cities;


-- DELETE CITY
CREATE OR ALTER PROCEDURE DeleteCity
	@CityName VARCHAR(25)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM Cities WHERE LOWER(CityName) = LOWER(@CityName)) = 0)
		BEGIN
			PRINT @CityName + 'is not in the database!';
			RETURN 1;
		END

		DELETE FROM Cities
		WHERE CityName = @CityName;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC DeleteCity @CityName = 'Ahmedabad';

SELECT * FROM Cities;