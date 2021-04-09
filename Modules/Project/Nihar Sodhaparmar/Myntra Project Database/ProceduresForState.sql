
-- ---------------------------------------- STATES ----------------------------------------

-- ADD STATE
CREATE OR ALTER PROCEDURE AddState
	@StateName VARCHAR(25),
	@CountryName VARCHAR(25)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM States WHERE LOWER(StateName) = LOWER(@StateName)) != 0)
		BEGIN
			PRINT @StateName + ' is already in the database!';
			RETURN 1;
		END

		IF((SELECT COUNT(*) FROM Countries WHERE LOWER(CountryName) = LOWER(@CountryName)) = 0)
		BEGIN
			PRINT @CountryName + ' is not in the database! First insert country in the database.';
			RETURN 1;
		END

		DECLARE @CountryId INT;
		SELECT @CountryId = CountryId FROM Countries WHERE LOWER(CountryName) = LOWER(@CountryName);

		INSERT INTO States (StateName, CountryId) VALUES (UPPER(@StateName), @CountryId);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC AddState @StateName='Uttar Pradesh', @CountryName='India';

SELECT * FROM States;


-- UPDATE STATE
CREATE OR ALTER PROCEDURE UpdateState
	@Operation VARCHAR(25),
	@OldStateName VARCHAR(25),
	@NewStateName VARCHAR(25),
	@NewCountryName VARCHAR(25)
AS
BEGIN
	BEGIN TRY
		
		IF(LOWER(@Operation) = 'update state name')
		BEGIN
			IF((SELECT COUNT(*) FROM States WHERE LOWER(StateName) = LOWER(@OldStateName)) = 0)
			BEGIN
				PRINT @OldStateName + ' is not in the database!';
				RETURN 1;
			END

			UPDATE States 
			SET StateName = UPPER(@NewStateName)
			WHERE LOWER(StateName) = LOWER(@OldStateName);

			RETURN 0;
		END
		ELSE IF(LOWER(@Operation) = 'update country name')
		BEGIN
		
			IF((SELECT COUNT(*) FROM States WHERE LOWER(StateName) = LOWER(@OldStateName)) = 0)
			BEGIN
				PRINT @OldStateName + ' is not in the database!';
				RETURN 1;
			END

			IF((SELECT COUNT(*) FROM Countries WHERE LOWER(CountryName) = LOWER(@NewCountryName)) = 0)
			BEGIN
				PRINT @NewCountryName + ' is not in the database!';
				RETURN 1;
			END
		
			DECLARE @CountryId INT;
			SELECT @CountryId = CountryId FROM Countries WHERE LOWER(CountryName) = LOWER(@NewCountryName);

			UPDATE States
			SET CountryId = @CountryId
			WHERE LOWER(StateName) = LOWER(@OldStateName);

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


EXEC UpdateState @Operation = 'update state name', @OldStateName = 'Gujarat', @NewStateName = 'Gujarat1', @NewCountryName = '';

EXEC UpdateState @Operation = 'update country name', @OldStateName = 'Gujarat', @NewStateName = '', @NewCountryName = 'India';

SELECT * FROM States;


-- DELETE STATE
CREATE OR ALTER PROCEDURE DeleteState
	@StateName VARCHAR(25)
AS
BEGIN
	BEGIN TRY
		IF((SELECT COUNT(*) FROM States WHERE LOWER(StateName) = LOWER(@StateName)) = 0)
		BEGIN
			PRINT @StateName + 'is not in the database!';
			RETURN 1;
		END

		DELETE FROM States
		WHERE StateName = @StateName;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC DeleteState @StateName = 'Uttar Pradesh';

SELECT * FROM States;