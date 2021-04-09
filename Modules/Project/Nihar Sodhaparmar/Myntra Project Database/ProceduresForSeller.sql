
-- ---------------------------------------- SELLERS ----------------------------------------
USE MyntraDB;

-- ADD SELLER
CREATE OR ALTER PROCEDURE AddSeller
	@SellerName VARCHAR(255),
	@Email VARCHAR(255),
	@ContactNumber VARCHAR(15),
	@DOB DATE,
	@Gender VARCHAR(6),
	@Password VARCHAR(50)
AS
BEGIN
	BEGIN TRY
		
		IF((SELECT COUNT(*) FROM Sellers WHERE Email = @Email) != 0)
		BEGIN
			PRINT @Email + ' is already in database!';
			RETURN 1;
		END

		IF((SELECT COUNT(*) FROM Sellers WHERE ContactNumber = @ContactNumber) != 0)
		BEGIN
			PRINT @Email + ' is already in database!';
			RETURN 1;
		END

		INSERT INTO Sellers (SellerName, Email, ContactNumber, DOB, Gender, Password) VALUES
			(@SellerName, @Email, @ContactNumber, @DOB, @Gender, @Password);

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC AddSeller @SellerName = 'Nihar Sodhaparmar'
	, @Email = 'niharsodha@17'
	, @ContactNumber = '7202016399'
	, @DOB = '2000-05-21'
	, @Gender = 'Male'
	, @Password = '123456'

SELECT * FROM Sellers
SELECT * FROM Addresses
SELECT * FROM SellerAddress
GO


-- ADD SELLER ADDRESS
CREATE OR ALTER PROCEDURE AddSellerAddress
	@Email VARCHAR(255),
	@AddressLine1 VARCHAR(255),
	@AddressLine2 VARCHAR(255),
	@Pincode VARCHAR(10),
	@CityName VARCHAR(25)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL
	READ COMMITTED
	BEGIN TRAN AddSellerAddressTran
	BEGIN TRY

		DECLARE @SellerId INT = (SELECT SellerId FROM Sellers WHERE Email = @Email);
		IF(@SellerId IS NULL)
		BEGIN
			PRINT 'Seller is not in the database.';
			ROLLBACK TRAN AddSellerAddressTran;
			RETURN 1;
		END
		
		DECLARE @CityId INT = (SELECT CityId FROM Cities WHERE LOWER(CityName) = LOWER(@CityName));
		IF(@CityId IS NULL)
		BEGIN
			PRINT @CityName + ' is not in the database!';
			ROLLBACK TRAN AddSellerAddressTran;
			RETURN 1;
		END
		
		INSERT INTO Addresses (AddressLine1, AddressLine2, Pincode, CityId) VALUES
			(@AddressLine1, @AddressLine2, @Pincode, @CityId);

		DECLARE @AddressId INT = @@IDENTITY;

		INSERT INTO SellerAddress (SellerId, AddressId) VALUES
			(@SellerId, @AddressId);

		COMMIT TRAN AddSellerAddressTran;

		RETURN 0;
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
		ROLLBACK TRAN AddSellerAddressTran;
	END CATCH
	SET NOCOUNT OFF;
END


EXEC AddSellerAddress @Email = 'niharsodha@17'
	, @AddressLine1 = '6, Puneshwar Park'
	, @AddressLine2 = 'Kapadvanj Road'
	, @Pincode = '387001'
	, @CityName = 'Nadiad'


-- UPDATE SELLER
CREATE OR ALTER PROCEDURE UpdateSeller
	@Email VARCHAR(255),
	@SellerName VARCHAR(255),
	@ContactNumber VARCHAR(15),
	@DOB DATE,
	@Gender VARCHAR(6),
	@Password VARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		DECLARE @SellerId INT = (SELECT SellerId FROM Sellers WHERE Email = @Email)
		IF(@SellerId IS NULL)
		BEGIN
			PRINT @Email + ' is not in database.';
			RETURN 1;
		END

		UPDATE Sellers
		SET SellerName = @SellerName
			, ContactNumber = @ContactNumber
			, DOB = @DOB
			, Gender = @Gender
			, Password = @Password
		WHERE SellerId = @SellerId;

		RETURN 0;
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateSeller @Email = 'niharsodha@17'
	, @SellerName = 'Nihar Sodhaparmar'
	, @ContactNumber = '7202016399'
	, @DOB = '2000-05-21'
	, @Gender = 'Male'
	, @Password = '123456';

SELECT * FROM Sellers;


-- DELETE SELLER
CREATE OR ALTER PROCEDURE DeleteSeller
	@Email VARCHAR(255)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL
	READ COMMITTED
	BEGIN TRAN DeleteSellerTran
	BEGIN TRY

		DECLARE @SellerId INT = (SELECT SellerId FROM Sellers WHERE Email = @Email)
		IF(@SellerId IS NULL)
		BEGIN
			PRINT @Email + ' is not in database.';
			ROLLBACK TRAN DeleteSellerTran;
			RETURN 1;
		END

		DECLARE DeleteAddressesCursor CURSOR FOR
		SELECT AddressId FROM SellerAddress WHERE SellerId = @SellerId;

		DECLARE @AddressIdTable TABLE(AddressId INT);
		DECLARE @AddressId INT;

		OPEN DeleteAddressesCursor;

			FETCH NEXT FROM DeleteAddressesCursor INTO @AddressId 
			WHILE @@FETCH_STATUS = 0
			BEGIN
				INSERT INTO @AddressIdTable (AddressId) VALUES (@AddressId);
				FETCH NEXT FROM DeleteAddressesCursor INTO @AddressId
			END

		CLOSE DeleteAddressesCursor;
		DEALLOCATE DeleteAddressesCursor;

		DELETE FROM SellerAddress WHERE SellerId = @SellerId;

		DELETE FROM Addresses WHERE AddressId IN (SELECT AddressId FROM @AddressIdTable);

		DELETE FROM Sellers WHERE SellerId = @SellerId

		COMMIT TRAN DeleteSellerTran
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
		CLOSE DeleteAddressesCursor;
		DEALLOCATE DeleteAddressesCursor;
		ROLLBACK TRAN DeleteSellerTran;
	END CATCH

	SET NOCOUNT OFF;
END

EXEC DeleteSeller @Email = 'niharsodha@17';

SELECT * FROM Sellers
SELECT * FROM Addresses
SELECT * FROM SellerAddress
GO	