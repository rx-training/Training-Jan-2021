
--Idea to add related category or extraDescription
DECLARE @ij NVARCHAR(MAX)
SET @ij = N'{"na":"b","na":"[a,b,c]"}';
SELECT * FROM OPENJSON(@ij) 
--------------------------------------------------------- Tables ---------------------------------------------------------------------
--1. Table for countries
CREATE TABLE Countries
(
	CountryId INT NOT NULL CONSTRAINT pkCountry PRIMARY KEY,
	CountryName VARCHAR(50) NOT NULL
);
INSERT INTO Countries(CountryId,CountryName) VALUES
	(1,'India'),
	(2,'USA')

--2. Table for states

CREATE TABLE States(
	StateId INT NOT NULL CONSTRAINT pkStates PRIMARY KEY IDENTITY(1,1),
	StateName VARCHAR(50) NOT NULL,
	CountryId INT NOT NULL CONSTRAINT fkStatesCountry FOREIGN KEY REFERENCES dbo.Countries(CountryId)
);

--3. Table for cities

CREATE TABLE Cities 
(
	CityId INT NOT NULL CONSTRAINT pkCities PRIMARY KEY IDENTITY(1,1),
	CityName VARCHAR(50) NOT NULL,
	StateId INT NOT NULL CONSTRAINT fkCitiesState FOREIGN KEY REFERENCES dbo.States(StateId)
);

--4. Table for users

CREATE TABLE Users
(
	UserId INT NOT NULL CONSTRAINT pkUsers PRIMARY KEY IDENTITY(1,1),
	UserFirstName VARCHAR(50) NOT NULL,
	UserMiddleName VARCHAR(50) NOT NULL, 
	UserLastName VARCHAR(50) NOT NULL, 
	UserLogIn VARCHAR(50) NOT NULL, 
	UserPassword VARCHAR(50) NOT NULL, 
	UserContactNo VARCHAR(13) NOT NULL CONSTRAINT chkUserContactNo CHECK(UserContactNo LIKE '[+][0-9][0-9][1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'), 
	UserEmail VARCHAR(50) NOT NULL, 
	UserBirthDate DATE NOT NULL, 
	UserDate DATETIME DEFAULT CURRENT_TIMESTAMP
)
SELECT * FROM Users
INSERT INTO Users(UserFirstName, UserMiddleName, UserLastName, UserLogIn, UserPassword, UserContactNo, UserEmail, UserBirthDate) VALUES
		('Namra','Jitendrabhai','Patel','Namra22799$','namra22799$','+919776661234','patel@gmail.com','1999-07-22')

--5. Table for userAddress

CREATE TABLE UserAddress
(
	UserAddressId INT NOT NULL CONSTRAINT pkAddress PRIMARY KEY IDENTITY(1,1),
	UserId INT NOT NULL CONSTRAINT fkUserAddressUserId FOREIGN KEY REFERENCES Users(UserId),
	UserAddressFullName VARCHAR(200) NOT NULL,
	UserAdressContact VARCHAR(13) NOT NULL  CONSTRAINT chkuserAddressContact CHECK(UserAdressContact LIKE '[+][0-9][0-9][1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	AddressType VARCHAR(6) NOT NULL DEFAULT 'Home',
	UserAddressDetail VARCHAR(100) NOT NULL,
	UserCityId INT NOT NULL CONSTRAINT fkUserAddressCityId FOREIGN KEY REFERENCES Cities(CityId)
)
INSERT INTO UserAddress(UserId,UserAddressFullName,UserAdressContact,AddressType,UserAddressDetail,UserCityId)VALUES
	(1,'Namra Jitendrabhai Patel','+911223456789','Home','"Gokul",Nandanvan Society',1)

--6. Create table for Brands

CREATE TABLE Brands(
	BrandId INT NOT NULL CONSTRAINT pkBrands PRIMARY KEY IDENTITY(1,1),
	BrandName VARCHAR(50)
)
INSERT INTO Brands(BrandName) VALUES ('Apple')
SELECT * FROM Brands

--7. Create table for Category

CREATE TABLE Categories(
	CategoryID INT NOT NULL CONSTRAINT pkCategories PRIMARY KEY IDENTITY(1,1),
	CategoryName VARCHAR(50)
)
INSERT INTO Categories (CategoryName) VALUES('Laptop'),('Mobile')
SELECT * FROM Categories

--8. Create table for products

CREATE TABLE Products(
	ProductId INT NOT NULL CONSTRAINT pkProducts PRIMARY KEY IDENTITY(1,1),
	ProductName VARCHAR(100) NOT NULL,
	ProductPrice MONEY NOT NULL,
	ProdutValidity TINYINT NOT NULL DEFAULT 0,
	CategoryId INT NOT NULL CONSTRAINT fkproductCategory FOREIGN KEY REFERENCES Categories(CategoryId),
	BrandId INT NOT NULL CONSTRAINT fkProductBrand FOREIGN KEY REFERENCES Brands(BrandId),
	Offer TINYINT NOT NULL DEFAULT 0,
	ProductDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	ImgPath VARCHAR(MAX) DEFAULT NULL
)
INSERT INTO Products(ProductName,ProductPrice, CategoryId, BrandId)VALUES('Apple Air Laptop',149999,1,1)
SELECT * FROM Products

--9. creating table of product description

CREATE TABLE ProductDescription
(
	ProductDescriptionId INT NOT NULL CONSTRAINT pkProductDescription PRIMARY KEY IDENTITY(1,1),
	ProductId INT NOT NULL CONSTRAINT fkDescriptionProductId FOREIGN KEY REFERENCES Products(ProductId),
	ProductDescription NVARCHAR(MAX) NOT NULL,
	ExtraDescription NVARCHAR(MAX),
	RelatedCategory NVARCHAR(MAX),
	DescriptionDate DATETIME DEFAULT CURRENT_TIMESTAMP
);

--10. Creating table of usercart

CREATE TABLE Carts
(
	CartId BIGINT NOT NULL CONSTRAINT pkCart PRIMARY KEY IDENTITY(1,1),
	UserId INT NOT NULL CONSTRAINT fkCartUserId FOREIGN KEY REFERENCES Users(UserId),
	ProductId INT NOT NULL CONSTRAINT fkProductsCart FOREIGN KEY REFERENCES Products(ProductId) 
)

--11. Creating table of user orders

CREATE TABLE Orders
(
	OrderId BIGINT NOT NULL CONSTRAINT pkOrder PRIMARY KEY IDENTITY(1,1),
	UserId INT NOT NULL CONSTRAINT fkOrderUserId FOREIGN KEY REFERENCES Users(UserId),
	ProductId INT NOT NULL CONSTRAINT fkOrderProductId FOREIGN KEY REFERENCES Products(ProductId),
	Quantity INT NOT NULL DEFAULT 1,
	OrderedDate DATETIME DEFAULT CURRENT_TIMESTAMP
)

--12. Creating table of user placed order

CREATE TABLE PlacedOrder
(
	PlacedOrderID BIGINT NOT NULL CONSTRAINT pkPlacedOrder PRIMARY KEY IDENTITY(1,1),
	UserId INT NOT NULL CONSTRAINT fkplacedUser FOREIGN KEY REFERENCES Users(UserID),
	ProductID INT NOT NULL CONSTRAINT fkPlacedProduct FOREIGN KEY REFERENCES Products(ProductId),
	Quantity INT NOT NULL DEFAULT 1,
	PlacedStatus VARCHAR(20) NOT NULL DEFAULT 'Delivered',
	PlacedDate DATETIME DEFAULT CURRENT_TIMESTAMP
)

--13. Creating table for seller

CREATE TABLE Sellers
(
	SellerID INT NOT NULL CONSTRAINT pkSeller PRIMARY KEY IDENTITY(1,1),
	SellerName VARCHAR(100) NOT NULL,
	SellerContactNo VARCHAR(13) NOT NULL CONSTRAINT chkSellerContactNo CHECK(SellerContactNo LIKE '[+][0-9][0-9][1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'), 
	SellerEmail VARCHAR(50) NOT NULL,
	SellerCompanyName VARCHAR(100) NOT NULL,
	SellerDate DATETIME DEFAULT CURRENT_TIMESTAMP
)

--14. Creating table for sellerProduct

CREATE TABLE SellerProducts
(
	SellerProductId BIGINT NOT NULL CONSTRAINT pkSellerProduct PRIMARY KEY IDENTITY(1,1),
	SellerId INT NOT NULL CONSTRAINT fkSellerProductSellerId FOREIGN KEY REFERENCES Sellers(SellerId),
	ProductId INT NOT NULL CONSTRAINT fkSellerProductProductID FOREIGN KEY REFERENCES Products(ProductId),
	SellerProductDate DATETIME DEFAULT CURRENT_TIMESTAMP
)

--15. Creating table for seller deliverable

CREATE TABLE SellerDeliverable
(
	SellerDeliverableId BIGINT NOT NULL CONSTRAINT pkSellerDeliverable PRIMARY KEY IDENTITY(1,1),
	SellerId INT NOT NULL CONSTRAINT fkSellerDeliverableSellerId FOREIGN KEY REFERENCES Sellers(SellerId),
	CityId INT NOT NULL CONSTRAINT fkSellerDeliverableCity FOREIGN KEY REFERENCES Cities(CityId),
	DeliverableDate DATETIME DEFAULT CURRENT_TIMESTAMP
)

--16. Creating Table for seller address

CREATE TABLE SellerAddress
(
	SellerAddressId INT NOT NULL CONSTRAINT pkSellerAddress PRIMARY KEY IDENTITY(1,1),
	SellerId INT NOT NULL CONSTRAINT fkSellerAddressSellerId FOREIGN KEY REFERENCES Sellers(SellerId),
	SellerAddress VARCHAR(MAX),
	SellerCityID INT NOT NULL CONSTRAINT SellerAddressCity FOREIGN KEY REFERENCES Cities(CityId) 
);

--17. Creating table for admin

CREATE TABLE Admin
(
	AdminId INT NOT NULL CONSTRAINT pkAdminId PRIMARY KEY IDENTITY(1,1),
	AdminLoginId VARCHAR(15) NOT NULL,
	AdminPassword VARCHAR(15) NOT NULL,
	AdminFullName VARCHAR(100) NOT NULL,
	AdminContactNumber VARCHAR(13) NOT NULL CONSTRAINT chkAdminContactNo CHECK(AdminContactNumber LIKE '[+][0-9][0-9][1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'), 
	AdminAddress VARCHAR(MAX) NOT NULL,
	AdminEmail VARCHAR(100) NOT NULL,
	AdminAuthority VARCHAR(20) DEFAULT 'Nothing',
	AdminDate DATETIME DEFAULT CURRENT_TIMESTAMP
);
-------------------------------------------- [Countries]Procedure for adding Country --------------------------------------------------
CREATE PROCEDURE spCountry
	(
		@operation VARCHAR(10),
		@CountryId INT , 
		@CountryName VARCHAR(50),
		@updateName VARCHAR(50)
	)
AS 
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		IF LOWER(@operation) in ('insert','add') 
			BEGIN
				IF(@CountryName NOT IN (SELECT CountryName FROM Countries) AND @CountryId NOT IN (SELECT CountryId FROM Countries))
					INSERT INTO Countries(CountryId, CountryName) VALUES(@CountryId, @CountryName)
				ELSE
					RAISERROR('Country is already there OR Country ID is not available',16,1)
			END
		ELSE IF LOWER(@operation) = 'update'
			BEGIN
				IF @CountryName IN (SELECT CountryName FROM Countries) OR @CountryId IN (SELECT CountryId FROM Countries)
					IF Lower(@CountryName) = 'dummy' OR @CountryId = (SELECT CountryId FROM Countries WHERE CountryName= 'Dummy')
						RAISERROR('Can''t update dummy country',16,1);
					ELSE
						UPDATE Countries
							SET CountryName = @updateName
							WHERE CountryName = @CountryName OR CountryId = @CountryId
				ELSE
					RAISERROR('Country is not there OR Country ID is not found',16,1)
			END
		ELSE IF LOWER(@operation) = 'delete'
			BEGIN
				IF @CountryName IN (SELECT CountryName FROM Countries) OR @CountryId IN (SELECT CountryId FROM Countries)
					IF Lower(@CountryName) = 'dummy' OR @CountryId = (SELECT CountryId FROM Countries WHERE CountryName= 'Dummy')
						RAISERROR('Can''t delete dummy country',16,1);
					ELSE
						BEGIN
							UPDATE Cities
								SET StateId = (SELECT StateId 
											   FROM States 
											   WHERE LOWER(StateName) = 'dummy')
								WHERE StateId IN (SELECT StateId 
												  FROM States 
												  WHERE CountryId = (SELECT CountryId 
																	 FROM Countries 
																	 WHERE LOWER(CountryName) = LOWER(@CountryName) OR CountryId = @CountryId))
							UPDATE States 
								SET CountryId = (SELECT CountryId 
												 FROM Countries 
												 WHERE Lower(CountryName)='dummy')
							WHERE CountryId IN ((SELECT CountryId FROM Countries WHERE LOWER(CountryName) = LOWER(@CountryName)),@CountryId)
							DELETE Countries
							WHERE CountryName = @CountryName OR CountryId = @CountryId
						END
				ELSE
					RAISERROR('Country is not found..',16,1);
			END
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END
EXEC spCountry 'insert',10,'Dummy',''
EXEC spCountry 'update',NULL,'','pakistan'
EXEC spCountry 'delete',NULL,'pakistan',''
SELECT * FROM Countries
-------------------------------------------- [States]Procedure for adding states -----------------------------------------------------
ALTER PROCEDURE spStates
	(
		@operation VARCHAR(10), 
		@StateName VARCHAR(50),
		@CountryName VARCHAR(50),
		@updateName VARCHAR(50)
	) 
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		IF LOWER(@operation) IN ('insert','add')
			BEGIN
				IF LOWER(@CountryName) IN(SELECT LOWER(CountryName) FROM Countries) AND LOWER(@StateName) NOT IN (SELECT LOWER(StateName) FROM States)
					INSERT INTO States (StateName,CountryId) VALUES
						(@StateName, (SELECT CountryId FROM Countries WHERE CountryName = @CountryName))
				ELSE
					RAISERROR('Country is not found OR State is already in the databases',16,1)
			END
		ELSE IF LOWER(@operation) = 'update'
			IF LOWER(@StateName) IN (SELECT LOWER(StateName) FROM States)
				IF LOWER(@StateName) = 'dummy'
					RAISERROR('Can not perform on dummy state',16,1);
				ELSE
					UPDATE States 
					SET StateName = @updateName
					WHERE StateName = @StateName
			ELSE
				RAISERROR('State is not found...',16,1);
		ELSE IF LOWER(@operation) = 'delete'
			IF LOWER(@StateName) IN (SELECT LOWER(StateName) FROM States)
				IF LOWER(@StateName) = 'dummy'
					RAISERROR('Can not delete dummy state',16,1);
				ELSE
					BEGIN
					UPDATE UserAddress
						SET UserCityId = (SELECT CityId 
										  FROM Cities 
										  WHERE LOWER(CityName) = 'dummy')
						WHERE UserCityId IN (SELECT CityId 
						                     FROM Cities 
											 WHERE StateId = (SELECT StateId 
															  FROM States 
															  WHERE LOWER(StateName) = LOWER(@StateName)))
					UPDATE Cities
						SET StateId = (SELECT StateID	
									   FROM States 
									   WHERE LOWER(StateName) = 'dummy')
						WHERE StateId = (SELECT StateId 
										 FROM States 
										 WHERE LOWER(StateName) = LOWER(@StateName))
					DELETE States
					WHERE LOWER(StateName) = LOWER(@StateName)
					END
			ELSE
				RAISERROR('State is not found...',16,1);
		ELSE
			RAISERROR('Please choose correct operation..',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END
EXEC spStates 'add','Dummy','India',''
EXEC spStates 'delete','kerala','',''
SELECT * FROM States


---------------------------------------- [Cities] Procedure for adding cities --------------------------------------------------------
ALTER PROCEDURE SpCity
	(	
		@operation VARCHAR(10),
		@CityName VARCHAR(50),
		@StateName VARCHAR(50),
		@UpdateName VARCHAR(50),
		@updateState VARCHAR(50)
	) 
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		IF LOWER(@operation) IN ('insert','add')
			IF @StateName IN(SELECT StateName FROM States) AND @CityName NOT IN (SELECT CityName FROM Cities)
				INSERT INTO Cities (CityName,StateId) VALUES
					(@CityName, (SELECT StateId FROM States WHERE StateName = @StateName))
			ELSE
				RAISERROR('State is not found OR City is already there',16,1)
		ELSE IF LOWER(@operation) = 'update'
			IF @UpdateName != '' AND @updateState != '' 
				IF @CityName NOT IN (SELECT CityName FROM Cities) OR @updateState NOT IN (SELECT StateName FROM States)
					RAISERROR('Please enter valid city or state',16,1);
				ELSE
					UPDATE Cities
						SET CityName = @UpdateName,
							StateId = (SELECT StateId FROM States WHERE StateName = @updateState)
							WHERE CityName = @CityName
			ELSE IF @updateState = ''
					IF @CityName NOT IN (SELECT CityName FROM Cities)
						RAISERROR('Please enter valid city',16,1);
					ELSE
						UPDATE Cities
						SET CityName = @UpdateName
						WHERE CityName = @CityName
			ELSE IF @UpdateName = ''
				IF @updateState NOT IN (SELECT StateName FROM States)
					RAISERROR('Please enter valid state..',16,1);
				ELSE	
					UPDATE Cities
					SET StateId = (SELECT StateId FROM States WHERE StateName = @updateState)
					WHERE CityName = @CityName
			ELSE 
				RAISERROR('PLEASE ENTET VALUE/S..',16,1);

		ELSE IF LOWER(@operation) = 'delete'
			IF LOWER(@CityName) = 'dummy'
				RAISERROR('Can not delete dummy city',16,1);
			ELSE
				BEGIN
				UPDATE UserAddress
				SET UserCityId = (SELECT CityId FROM Cities WHERE LOWER(CityName)='dummy')
				WHERE UserCityId = (SELECT CityId FROM Cities WHERE LOWER(CityName) = LOWER(@CityName))
				
				DELETE Cities
				WHERE CityName = @CityName
				END
		ELSE
			RAISERROR('Choose correct operation to perform...',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END
EXEC SpCity 'add','Unjha','Gujarat','',''
EXEC SpCity 'update','Unjha','','Abu','Rajasthan'
EXEC SpCity 'update','Abu','','Unjha','Gujarat'
EXEC SpCity 'DELETE','UNJHA','','',''
SELECT * FROM Cities

---------------------------------------- [Users] Procedure for adding users --------------------------------------------------------

CREATE PROCEDURE addUser(
	@FirstName VARCHAR(50), 
	@MiddleName VARCHAR(50),
	@LastName VARCHAR(50),
	@LoginId VARCHAR(50),
	@Password VARCHAR(50),
	@ContactNo VARCHAR(13),
	@Email VARCHAR(50),
	@BirthDate DATE
	)
AS
BEGIN
	BEGIN TRY
		IF (@FirstName+@MiddleName+@LastName+CONVERT(VARCHAR(50),@BirthDate)+@ContactNo) NOT IN (SELECT UserFirstName+UserMiddleName+UserLastName+CONVERT(VARCHAR(50),UserBirthDate)+UserContactNo FROM Users)
			IF @LoginId NOT IN (SELECT UserLogIn FROM Users)
				INSERT INTO Users (UserFirstName, UserMiddleName, UserLastName, UserLogIn, UserPassword, UserContactNo, UserEmail, UserBirthDate)VALUES
							(@FirstName, @MiddleName, @LastName, @LoginId, @Password, @ContactNo, @Email, @BirthDate)

			ELSE
				RAISERROR('Login ID is not available',16,1)
		ELSE
			RAISERROR('User is already exist',16,1)			
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END

EXEC addUser 'Suchi','Jitendrabhai','Patel','Suchi2310$','Suchi2231011','+919776661202','abc@gmail.com','1996-10-23'
SELECT * FROM Users

---------------------------------------- [UserAddresses] Procedure for adding userAddress --------------------------------------------------------
CREATE PROCEDURE addUserAddress(
	@UserLogIn VARCHAR(50),
	@FullName VARCHAR(100),
	@ContactNo VARCHAR(13),
	@AddressType VARCHAR(6), 
	@AddressDetail VARCHAR(155),
	@CityName VARCHAR(50)
)
AS 
BEGIN
	BEGIN TRY
		IF @UserLogIn IN (SELECT UserLogIn FROM Users)
			IF @FullName NOT IN(SELECT UserAddressFullName FROM UserAddress WHERE UserId = (SELECT UserId FROM Users WHERE UserLogIn = @UserLogIn))
				IF @CityName IN(SELECT CityName FROM Cities)
					INSERT INTO UserAddress (UserId,UserAddressFullName, UserAdressContact,AddressType,UserAddressDetail, UserCityId) VALUES
						((SELECT UserId FROM Users WHERE UserLogIn = @UserLogIn), @FullName,@ContactNo,@AddressType,@AddressDetail,(SELECT CityId FROM Cities WHERE CityName = @CityName))
				ELSE
					RAISERROR('City is entered wrong',16,1)
			ELSE
				RAISERROR('User Address is already there',16,1)
		ELSE
			RAISERROR('User does''nt exist',16,1)
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END

EXEC addUserAddress 'Suchi2310$','Suchi Patel','+911234566789','Home','"Gokul",Ramabag Road','Ahmedabad'
SELECT * FROM UserAddress
------------------------------------------------- [Products] Procedure to add or update product --------------------------------------------------------

ALTER PROCEDURE spProduct(
	@Update VARCHAR(3),
	@ProductName VARCHAR(100),
	@updateName VARCHAR(100),
	@Price MONEY, 
	@Validity TINYINT, 
	@CategoryName VARCHAR(50), 
	@BrandName VARCHAR(50),
	@Offer TINYINT,
	@IMG VARCHAR(MAX)
	
)
AS 
BEGIN
	BEGIN TRY
		IF LOWER(@Update) = 'yes'
			IF @ProductName IN (SELECT ProductName FROM Products)
				BEGIN
					IF @Price = 0	
						SET @Price = (SELECT ProductPrice FROM Products WHERE ProductName = @ProductName) 
					
					IF @updateName = ''	
						SET @updateName = (SELECT ProductName FROM Products WHERE ProductName = @ProductName)
					
					IF @Validity = 0	
						SET @Validity = (SELECT ProdutValidity FROM Products WHERE ProductName = @ProductName)
					
					IF @CategoryName = ''	
						SET @CategoryName =(SELECT CategoryName FROM Categories WHERE CategoryId=(SELECT CategoryId FROM Products WHERE ProductName = @ProductName))
					ELSE IF LOWER(@CategoryName) NOT IN (SELECT CategoryName FROM Categories)
						RAISERROR('Category isn''t found..',16,1);

					IF @BrandName = ''	
						SET @BrandName =(SELECT BrandName FROM Brands WHERE BrandId=(SELECT BrandId FROM Products WHERE ProductName = @ProductName))
					ELSE IF LOWER(@BrandName) NOT IN (SELECT BrandName FROM Brands)
						RAISERROR('Brand isn''t found..',16,1);

					IF @Offer = 0	
						SET @Offer = (SELECT Offer FROM Products WHERE ProductName = @ProductName) 

					IF @IMG = ''	
						SET @IMG = (SELECT ImgPath FROM Products WHERE ProductName = @ProductName) 

					UPDATE Products 
					SET ProductPrice = @Price ,
						ProdutValidity = @Validity,
						CategoryId = (SELECT CategoryId FROM Categories WHERE CategoryName = @CategoryName),
						BrandId = (SELECT BrandId FROM Brands WHERE BrandName = @BrandName),
						Offer = @Offer
					WHERE ProductName = @ProductName
					
				END
			ELSE
				RAISERROR('Product isn''t there',16,1);
		ELSE
			IF LOWER(@ProductName) NOT IN (SELECT LOWER(ProductName) FROM Products)
			BEGIN
				IF @Offer IS NULL 
					SET @Offer = 0
				IF @CategoryName NOT IN (SELECT CategoryName FROM Categories)
					RAISERROR('Category isn''t found',16,1)
				ELSE IF @BrandName NOT IN (SELECT BrandName FROM Brands)
					RAISERROR('Brand is''t found',16,1)
				ELSE
					BEGIN
						INSERT INTO Products (ProductName,ProductPrice, ProdutValidity, CategoryId, BrandId, Offer,ImgPath)VALUES
							(@ProductName, @Price, @Validity, (SELECT CategoryID FROM Categories WHERE CategoryName = @CategoryName),(SELECT BrandId FROM Brands WHERE BrandName = @BrandName),@Offer,@IMG)
					END				
			END
			ELSE
				RAISERROR('Product is already exist',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END
EXEC spProduct 'yes','Apple Iphone 11','',0,0,'','',30,''
EXEC spProduct 'no','Apple Iphone 12','',89999,2,'Mobile','Apple',0,NULL
SELECT * FROM Products

------------------------------------------------------ [Products] Procedure to delete product --------------------------------------------------------
CREATE PROCEDURE spDeleteProduct
	(
		@ProductName VARCHAR(100)
	)
AS 
BEGIN 
	BEGIN TRY
		IF @ProductName IN (SELECT ProductName FROM Products)
		BEGIN
			DELETE Carts
			WHERE ProductId = (SELECT ProductId FROM Products WHERE ProductName = @ProductName)
			DELETE Orders
			WHERE ProductId = (SELECT ProductId FROM Products WHERE ProductName = @ProductName)
			DELETE Products WHERE ProductName = @ProductName
		END		
		ELSE
			RAISERROR('Product doesn''t exist',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
END
EXEC spDeleteProduct 'apple'
------------------------------------------------------ [Products] Procedure to search product --------------------------------------------------------
CREATE PROCEDURE searchProduct
	(
		@product VARCHAR(100)
	)
AS
BEGIN
	BEGIN TRY
		IF UPPER(@product) IN (SELECT UPPER(ProductName) FROM Products)
			SELECT * 
			FROM Products 
			WHERE ProductName LIKE '%'+@product+'%'
		ELSE IF UPPER(@product) IN (SELECT UPPER(BrandName) FROM Brands)
			SELECT * 
			FROM Products 
			WHERE BrandId = (SELECT BrandId 
							FROM Brands 
							WHERE BrandName = @product)
		ELSE IF UPPER(@product) IN (SELECT UPPER(CategoryName) FROM Categories)
			SELECT * 
			FROM Products
			WHERE CategoryId = (SELECT CategoryID
								FROM Categories
								WHERE CategoryName = @product)
		ELSE
			RAISERROR('Your search doesn''t match to any product',16,1)
	END TRY
	BEGIN CATCH
		SELECT ERROR_MESSAGE()'Error'
	END CATCH
END
EXEC searchProduct 'Apple'
EXEC searchProduct 'Apple iphone 11'
EXEC searchProduct 'Mobile'

------------------------------------------------------ [Brands] Procedure to add/delete/update brand -------------------------------------------------

CREATE PROCEDURE spBrands
	(
		@operation VARCHAR(10),
		@BrandName VARCHAR(50),
		@UpdatedName VARCHAR(50)
	)
AS 
BEGIN
	BEGIN TRY
		SET NOCOUNT ON;
		IF LOWER(@operation) = 'update'
		BEGIN 
			IF @BrandName IN (SELECT BrandName FROM Brands)
				IF LOWER(@BrandName) = 'dummy'
					RAISERROR('Can not be updated',16,1)
				ELSE
					UPDATE Brands 
					SET BrandName = @UpdatedName
					WHERE BrandName = @BrandName
			ELSE
				RAISERROR('Entered brand is not there..',16,1);
		END
		ELSE IF LOWER(@operation) = 'insert' OR LOWER(@operation) = 'add'
		BEGIN
			IF @BrandName NOT IN (SELECT BrandName FROM Brands)
				INSERT INTO Brands(BrandName)VALUES(@BrandName);
			ELSE
				RAISERROR('Brand is already added..',16,1)
		END
		ELSE IF LOWER(@operation) = 'delete'
		BEGIN
			IF @BrandName IN (SELECT BrandName FROM Brands)
				BEGIN
				IF LOWER(@BrandName) = 'dummy'
					RAISERROR('You can''t delete it',16,1)
				ELSE
					BEGIN
					UPDATE Products 
					SET BrandId = (SELECT BrandId FROM Brands WHERE LOWER(BrandName) = 'dummy')
					WHERE BrandId = (SELECT BrandId FROM Brands WHERE BrandName = @BrandName)
					DELETE Brands WHERE BrandName = @BrandName
					END
				END
			ELSE
				RAISERROR('Entered brand is not there..',16,1);
		END
		ELSE
			RAISERROR('Please choose required operation',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END

EXEC spBrands 'Update','Apple','Apple'
EXEC spBrands 'add','Samsung',''
EXEC spBrands 'Insert','Oneplus',''
EXEC spBrands 'Insert','Apple',''
EXEC spBrands 'delete','Apple',''
select * from Brands
SELECT * FROM Products

------------------------------------------------- [Categories] Procedure to add/delete/update category -----------------------------------------------

CREATE PROCEDURE spCategory
	(
		@operation VARCHAR(10),
		@CategoryName VARCHAR(50),
		@UpdatedName VARCHAR(50)
	)
AS 
BEGIN
	BEGIN TRY
		SET NOCOUNT ON;
		IF LOWER(@operation) = 'update'
		BEGIN 
			IF @CategoryName IN (SELECT CategoryName FROM Categories)
				IF LOWER(@CategoryName) = 'dummy'
					RAISERROR('Can not be updated',16,1);
				ELSE
					UPDATE Categories 
					SET CategoryName = @UpdatedName
					WHERE CategoryName = @CategoryName
			ELSE
				RAISERROR('Entered Category is not there..',16,1);
		END
		ELSE IF LOWER(@operation) = 'insert' OR LOWER(@operation) = 'add'
		BEGIN
			IF @CategoryName NOT IN (SELECT CategoryName FROM Categories)
				INSERT INTO Categories(CategoryName)VALUES(@CategoryName);
			ELSE
				RAISERROR('Category is already added..',16,1)
		END
		ELSE IF LOWER(@operation) = 'delete'
		BEGIN
			IF @CategoryName IN (SELECT CategoryName FROM Categories)
				BEGIN
				IF LOWER(@CategoryName) = 'dummy'
					RAISERROR ('You can''t delete it.',16,1)
				ELSE
					BEGIN
						UPDATE Products 
						SET CategoryId = (SELECT CategoryID FROM Categories WHERE CategoryName = 'Dummy') 
						WHERE CategoryId = (SELECT CategoryID FROM Categories WHERE CategoryName = @CategoryName)
						DELETE Categories WHERE CategoryName = @CategoryName
					END
				END
			ELSE
				RAISERROR('Entered Category is not there..',16,1);
		END
		ELSE
			RAISERROR('Please choose required operation',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END

EXEC spCategory 'INSERT','Brush',''
EXEC spCategory 'delete','Brush',''
EXEC spCategory 'Delete','Mobile',''
EXEC spCategory 'Insert','Dummy',''
SELECT * FROM Categories
SELECT * FROM Products

---------------------------------------------------------- To update brandId or CategoryId in Products------------------------------------------------

ALTER PROCEDURE spUpdateBrandCategory
	(
		@operation VARCHAR(10),
		@ProductName VARCHAR(100),
		@UpdateName VARCHAR(50)
	)
AS 
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		IF LOWER(@operation) = 'brand'
			BEGIN
				IF LOWER(@ProductName) IN (SELECT LOWER(ProductName) FROM Products)
					IF LOWER(@UpdateName) IN (SELECT LOWER(BrandName) FROM Brands)
						UPDATE Products
						SET BrandId = (SELECT BrandId FROM Brands WHERE BrandName = @UpdateName)
						WHERE ProductName = @ProductName
					ELSE
						RAISERROR('Brand is not found..',16,1);
				ELSE
					RAISERROR('Product is not found...',16,1)
			END
		ELSE IF LOWER(@operation)='category'
			BEGIN
				IF LOWER(@ProductName) IN (SELECT LOWER(ProductName) FROM Products)
					IF LOWER(@UpdateName) IN (SELECT LOWER(CategoryName) FROM Categories)
						UPDATE Products
						SET CategoryId = (SELECT CategoryID FROM Categories WHERE CategoryName = @UpdateName)
						WHERE ProductName = @UpdateName
					ELSE
						RAISERROR('Category is not found...',16,1);
				ELSE
					RAISERROR('Product is not found..',16,1);
			END
		ELSE
			RAISERROR('Please choose valid operation',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END
SELECT * FROM Products
SELECT * FROM Brands

EXEC spUpdateBrandCategory 'BRAND','Apple Iphone 11','apple'
EXEC spUpdateBrandCategory 'Category','Apple Iphone 11 pro','mobile'
EXEC spUpdateBrandCategory 'Category','Apple Iphone 11 ','mobile'
EXEC spUpdateBrandCategory 'Category','Apple Air Laptop','laptop'

---------------------------------------------------------------[cart] to add and delete a product from cart------------------------------------------

ALTER PROCEDURE spCartAddDelete 
	(
		@Operation VARCHAR(10),
		@ProductName VARCHAR(100),
		@UserId INT
	)
AS 
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		IF @UserId IN (SELECT UserId FROM Users) AND @ProductName IN (SELECT ProductName FROM Products)
			IF LOWER(@Operation) IN ('add','insert') 
				IF @UserId IN (SELECT UserId FROM Carts) AND @ProductName IN (SELECT p.ProductName FROM Products p INNER JOIN Carts c ON p.ProductId = c.ProductId WHERE c.UserId = @UserId)
					RAISERROR('Product is already in your cart',16,1);
				ELSE
					INSERT INTO Carts (UserId,ProductId)
						VALUES (@UserId, (SELECT ProductId FROM Products WHERE ProductName = @ProductName))
			ELSE IF LOWER(@Operation) = 'delete'
				DELETE Carts
				WHERE UserId = @UserId AND ProductId = (SELECT ProductId FROM Products WHERE ProductName = @ProductName)
			ELSE	
				RAISERROR('Please choose an appropriate operation',16,1);
		ELSE
			RAISERROR('Either product name is wrong or userId is wrong',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE()
	END CATCH
	SET NOCOUNT OFF;
END
EXEC spCartAddDelete 'add','Apple Air Laptop',1
SELECT * FROM Carts
EXEC spCartAddDelete 'add','Apple Air Laptop',1 -- raise an error

-----------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------Views-------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------

-- 1. product and seller info
	CREATE VIEW sellerProductCity
	AS
		SELECT s.SellerName,p.ProductName,c.CityName
		FROM dbo.Products p
			INNER JOIN dbo.SellerProducts sp ON sp.ProductId = p.ProductId 
			INNER JOIN dbo.Sellers s ON s.SellerID = sp.SellerId
			INNER JOIN dbo.SellerDeliverable sd ON sd.SellerId = s.SellerID
			INNER JOIN dbo.Cities c ON c.CityId = sd.CityId

--2. product placed , prodoct detail, ordered date, placed to customer date, seller name, username, user contact number, userId
	CREATE VIEW placedProductDetail
	AS
		SELECT u.UserId, 
			u.UserFirstName+u.UserMiddleName+u.UserLastName 'Full Name',
			p.ProductName,
			p.ProductPrice,
			p.Offer,
			o.OrderedDate 'ordered date',
			po.PlacedDate 'placed date',
			po.Quantity,
			s.SellerCompanyName,
			s.SellerContactNo,
			s.SellerEmail
		FROM dbo.Products p
			INNER JOIN dbo.PlacedOrder po ON p.ProductId = po.ProductID
			INNER JOIN dbo.Users u ON u.UserId = po.UserId
			INNER JOIN dbo.UserAddress ua ON ua.UserId = u.UserId
			INNER JOIN dbo.Cities c ON c.CityId = ua.UserCityId
			INNER JOIN dbo.sellerProductCity spc ON spc.CityName = c.CityName AND p.ProductName = spc.ProductName
			INNER JOIN dbo.Sellers s ON s.SellerName = spc.SellerName
			INNER JOIN dbo.Orders o ON po.UserId = o.UserId AND o.ProductId = po.ProductID

--3. orders,product, userid, sellerid,ordereddate
CREATE VIEW productOrderedDetail
AS
	SELECT u.UserId,
		p.ProductName,
		s.SellerID,
		o.OrderId,
		o.Quantity,
		o.OrderedDate
	FROM 
		Products p
		INNER JOIN Orders o ON p.ProductId = o.ProductId
		INNER JOIN Users u ON o.UserId = u.UserId
		INNER JOIN UserAddress ua ON ua.UserId = u.UserId
		INNER JOIN Cities c ON c.CityId = ua.UserCityId
		INNER JOIN sellerProductCity spc ON spc.ProductName = p.ProductName AND spc.CityName = c.CityName
		INNER JOIN Sellers s ON s.SellerName = spc.SellerName

--4. brand * product * category
CREATE VIEW brandCategoryProduct
AS
	SELECT p.ProductId,p.ProductName, b.BrandId, b.BrandName, c.CategoryID, c.CategoryName,p.ProductDate
	FROM 
		Products p 
		INNER JOIN Brands b ON b.BrandId = p.BrandId
		INNER JOIN Categories c ON c.CategoryID = p.CategoryId
