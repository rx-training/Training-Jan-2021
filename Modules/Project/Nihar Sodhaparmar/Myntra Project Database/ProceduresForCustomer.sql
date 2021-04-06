
-- ---------------------------------------- CUSTOMERS ----------------------------------------
USE MyntraDB;

-- ADD CUSTOMER
CREATE OR ALTER PROCEDURE AddCustomer
	@CustomerName VARCHAR(255),
	@Email VARCHAR(255),
	@ContactNumber VARCHAR(15),
	@DOB DATE,
	@Gender VARCHAR(6),
	@Password VARCHAR(50)
AS
BEGIN
	BEGIN TRY
		
		IF((SELECT COUNT(*) FROM Customers WHERE Email = @Email) != 0)
		BEGIN
			PRINT @Email + ' is already in database!';
			RETURN 1;
		END

		IF((SELECT COUNT(*) FROM Customers WHERE ContactNumber = @ContactNumber) != 0)
		BEGIN
			PRINT @Email + ' is already in database!';
			RETURN 1;
		END

		INSERT INTO Customers(CustomerName, Email, ContactNumber, DOB, Gender, Password) VALUES
			(@CustomerName, @Email, @ContactNumber, @DOB, @Gender, @Password);

		RETURN 0;

	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC AddCustomer @CustomerName = 'Nihar Sodha'
	, @Email = 'niharsodha@17'
	, @ContactNumber = '7202016399'
	, @DOB = '2000-05-21'
	, @Gender = 'Male'
	, @Password = '123456'

SELECT * FROM Customers;


-- ADD CUSTOMER ADDRESS
CREATE OR ALTER PROCEDURE AddCustomerAddress
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
	BEGIN TRAN AddCustomerAddressTran
	BEGIN TRY

		DECLARE @CustomerId INT = (SELECT CustomerId FROM Customers WHERE Email = @Email);
		IF(@CustomerId IS NULL)
		BEGIN
			PRINT 'Customer is not in the database.';
			ROLLBACK TRAN AddCustomerAddressTran;
			RETURN 1;
		END
		
		DECLARE @CityId INT = (SELECT CityId FROM Cities WHERE LOWER(CityName) = LOWER(@CityName));
		IF(@CityId IS NULL)
		BEGIN
			PRINT @CityName + ' is not in the database!';
			ROLLBACK TRAN AddCustomerAddressTran;
			RETURN 1;
		END
		
		INSERT INTO Addresses (AddressLine1, AddressLine2, Pincode, CityId) VALUES
			(@AddressLine1, @AddressLine2, @Pincode, @CityId);

		DECLARE @AddressId INT = @@IDENTITY;

		INSERT INTO CustomerAddress(CustomerId, AddressId) VALUES
			(@CustomerId, @AddressId);

		COMMIT TRAN AddCustomerAddressTran;

		RETURN 0;
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
		ROLLBACK TRAN AddCustomerAddressTran;
	END CATCH
	SET NOCOUNT OFF;
END


EXEC AddCustomerAddress @Email = 'niharsodha@17'
	, @AddressLine1 = 'Near School, Champajini Muvadi'
	, @AddressLine2 = 'Post Sanali'
	, @Pincode = '387001'
	, @CityName = 'Nadiad'

SELECT * FROM Customers;
SELECT * FROM Addresses;
SELECT * FROM CustomerAddress;


-- UPDATE CUSTOMER
CREATE OR ALTER PROCEDURE UpdateCustomer
	@Email VARCHAR(255),
	@CustomerName VARCHAR(255),
	@ContactNumber VARCHAR(15),
	@DOB DATE,
	@Gender VARCHAR(6),
	@Password VARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		DECLARE @CustomerId INT = (SELECT CustomerId FROM Customers WHERE Email = @Email)
		IF(@CustomerId IS NULL)
		BEGIN
			PRINT @Email + ' is not in database.';
			RETURN 1;
		END

		UPDATE Customers
		SET CustomerName = @CustomerName
			, ContactNumber = @ContactNumber
			, DOB = @DOB
			, Gender = @Gender
			, Password = @Password
		WHERE CustomerId = @CustomerId;

		RETURN 0;
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END


EXEC UpdateCustomer @Email = 'niharsodha@17'
	, @CustomerName = 'Nihar Sodhaparmar'
	, @ContactNumber = '7202016399'
	, @DOB = '2000-05-21'
	, @Gender = 'Male'
	, @Password = '123456';

SELECT * FROM Customers;


-- DELETE CUSTOMER
CREATE OR ALTER PROCEDURE DeleteCustomer
	@Email VARCHAR(255)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL
	READ COMMITTED
	BEGIN TRAN DeleteCustomerTran
	BEGIN TRY

		DECLARE @CustomerId INT = (SELECT CustomerId FROM Customers WHERE Email = @Email)
		IF(@CustomerId IS NULL)
		BEGIN
			PRINT @Email + ' is not in database.';
			ROLLBACK TRAN DeleteCustomerTran;
			RETURN 1;
		END

		DECLARE DeleteAddressesCursor CURSOR FOR
		SELECT AddressId FROM CustomerAddress WHERE CustomerId = @CustomerId;

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

		DELETE FROM CustomerAddress WHERE CustomerId = @CustomerId;

		DELETE FROM Addresses WHERE AddressId IN (SELECT AddressId FROM @AddressIdTable);

		DELETE FROM Customers WHERE CustomerId = @CustomerId

		COMMIT TRAN DeleteCustomerTran
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
		CLOSE DeleteAddressesCursor;
		DEALLOCATE DeleteAddressesCursor;
		ROLLBACK TRAN DeleteCustomerTran;
	END CATCH

	SET NOCOUNT OFF;
END

EXEC DeleteCustomer @Email = 'niharsodha@17';

SELECT * FROM Customers;
SELECT * FROM Addresses;
SELECT * FROM CustomerAddress;