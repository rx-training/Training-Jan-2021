USE Uber;
GO

-- Riders.usp_SaveRiderData --
CREATE OR ALTER PROCEDURE Riders.usp_SaveRiderData
	@action varchar(10),
	@rider_id bigint = NULL,
	@first_name varchar(50),
	@last_name varchar(50),
	@email varchar(50),
	@email_verified bit = 0,
	@is_new bit = 1,
	@contact_number decimal(10,0) = NULL,
	@password varchar(100) = NULL,
	@invite_code varchar(50) = NULL,
	@country varchar(50)
AS
	BEGIN TRY
	IF @action = 'INSERT'
	BEGIN
		IF @contact_number IS NULL OR @password IS NULL OR @invite_code IS NULL
		BEGIN
			SELECT 0 AS 'Response', 'ContactNumber, Password, InviteCode cannot be NULL' AS Message
			RETURN
		END
		INSERT INTO Riders.Riders 
		(FirstName, LastName, Email, EmailVerified, IsNew, ContactNumber, Password, InviteCode, Country, IsBlocked, IsLoggedIn, SessionExpiresIn, CreatedAt, ModifiedAt) 
		VALUES 
		(@first_name, @last_name, @email, @email_verified, @is_new, @contact_number, @password, @invite_code, @country, 0, 1, DATEADD(HOUR,3,GETDATE()), GETDATE(), NULL);
		SELECT 1 AS Response, 'Success' AS Message
	END

	IF @action = 'UPDATE' AND @rider_id IS NOT NULL
	BEGIN
		UPDATE Riders.vRiders SET  -- uses view to update
		FirstName = @first_name,
		LastName = @last_name,
		Email = @email,
		EmailVerified = @email_verified,
		IsNew = @is_new,
		ModifiedAt = GETDATE()
		WHERE RiderID = @rider_id;
		SELECT 1 AS Response, 'Success' AS Message
	END
	END TRY
	BEGIN CATCH
		SELECT 0 AS Response, ERROR_MESSAGE() AS Message
	END CATCH
GO

-- Riders.usp_GetRiderData --
CREATE OR ALTER PROCEDURE Riders.usp_GetRiderData
	@rider_id bigint
AS
	SELECT RiderID, FirstName, LastName, Email, EmailVerified, IsNew, ContactNumber, InviteCode, Country, CreatedAt, ModifiedAt
	FROM Riders.vRiders WHERE RiderID = @rider_id
GO

-- usp_SaveLocationData --
CREATE OR ALTER PROCEDURE usp_SaveLocationData
	@location_name varchar(50),
	@longitude float,
	@latitude float
AS
BEGIN TRY
	INSERT INTO Locations (LocationName, Latitude, Longitude, CreatedAt)
	VALUES (@location_name, @latitude, @longitude, GETDATE())
	SELECT 1 AS Response, 'Success' AS Message
END TRY
BEGIN CATCH
	SELECT 0 AS Response, ERROR_MESSAGE() AS Message
END CATCH
GO

-- usp_GetLocationData --
CREATE OR ALTER PROCEDURE usp_GetLocationData
	@location_id bigint
AS
	SELECT LocationID, LocationName, Longitude, Latitude, CreatedAt, ModifiedAt FROM Locations WHERE LocationID = @location_id;
GO

-- usp_GetRideTypesData --
CREATE OR ALTER PROCEDURE usp_GetRideTypesData
AS
	SELECT RideTypeID, RideName, PricePerKm, SeatingCapacity, CreatedAt, ModifiedAt FROM RideTypes;
GO

-- usp_SaveRideTypesData --
CREATE OR ALTER PROCEDURE usp_SaveRideTypesData
	@action varchar(10),
	@ridetype_id bigint = NULL,
	@ride_name varchar(50) = NULL,
	@price float = NULL,
	@seating_capacity int = NULL
AS
	BEGIN TRY
	IF @action = 'INSERT'
	BEGIN
		IF @ride_name IS NULL OR @price IS NULL OR @seating_capacity IS NULL
		BEGIN
		SELECT 0 AS Response, 'RideName, PricePerKm, SeatingCapacity cannot be NULL' AS Message
		RETURN
		END

		IF EXISTS (SELECT RideName FROM RideTypes WHERE RideName = @ride_name)
		BEGIN
		SELECT 0 AS Response, 'RideName already exists' AS Message
		RETURN
		END

		INSERT INTO RideTypes 
		(RideName, PricePerKm, SeatingCapacity, CreatedAt, ModifiedAt) 
		VALUES 
		(@ride_name, @price, @seating_capacity, GETDATE(), NULL);
		SELECT 1 AS Response, 'Success' AS Message
	END

	IF @action = 'UPDATE'
	BEGIN
		IF @ridetype_id IS NULL OR @ride_name IS NULL OR @price IS NULL OR @seating_capacity IS NULL
		BEGIN
		SELECT 0 AS Response, 'RideTypeID, RideName, PricePerKm, SeatingCapacity cannot be NULL' AS Message
		RETURN
		END

		UPDATE RideTypes SET 
		RideName = @ride_name,
		PricePerKm = @price,
		SeatingCapacity = @seating_capacity,
		ModifiedAt = GETDATE()
		WHERE RideTypeID = @ridetype_id;
		SELECT 1 AS Response, 'Success' AS Message
	END	

	END TRY
	BEGIN CATCH
		SELECT 0 AS Response, ERROR_MESSAGE() AS Message
	END CATCH
GO

-- usp_DeleteRideTypesData --
CREATE OR ALTER PROCEDURE usp_DeleteRideTypesData
	@ridetype_id bigint
AS
BEGIN TRY
	IF @ridetype_id IS NULL
	BEGIN
		SELECT 0 AS Response, 'RideTypeID cannot be NULL' AS Message
		RETURN
	END
	DELETE FROM RideTypes WHERE RideTypeID = @ridetype_id;
	SELECT 1 AS Response, 'Success' AS Message
END TRY
BEGIN CATCH
	SELECT 0 AS Response, ERROR_MESSAGE() AS Message
END CATCH
GO

-- usp_SaveNewTripData --
CREATE OR ALTER PROCEDURE usp_SaveNewTripData
	@RiderID bigint,
	@DriverID bigint,
	@SourceLocationID bigint,
	@DestinationLocationID bigint,
	@RideTypeID bigint,
	@Status varchar(20),
	@EstimatedFairAmount float
AS
BEGIN TRY
	INSERT INTO Trips 
	(RiderID, 
	DriverID, 
	SourceLocationID, 
	DestinationLocationID,
	RideTypeID,
	Status,
	EstimatedFairAmount,
	CreatedAt, 
	ModifiedAt) 
	VALUES 
	(@RiderID,
	@DriverID,
	@SourceLocationID,
	@DestinationLocationID,
	@RideTypeID, 
	@Status, 
	@EstimatedFairAmount,
	GETDATE(),
	NULL);
	SELECT 1 AS Response, 'Success' AS Message

END TRY
BEGIN CATCH
	SELECT 0 AS Response, ERROR_MESSAGE() AS Message
END CATCH
GO

-- usp_UpdateTripData --
CREATE OR ALTER PROCEDURE usp_UpdateTripData
	@Action varchar(20),
	@TripID bigint,
	@Status varchar(20),
	@ActualFairAmount float,
	@PaymentMethod varchar(50),
	@CancelledBy varchar(20) = NULL
AS

BEGIN TRY

	IF @Action = 'TripCancelled'
	BEGIN
		UPDATE Trips SET 
		EndTime = GETDATE(),
		Status = @Status,
		ActualFairAmount = @ActualFairAmount,
		PaymentMethod = @PaymentMethod,
		CancelledBy = @CancelledBy,
		ModifiedAt = GETDATE()
		WHERE TripID = @TripID;
		SELECT 1 AS Response, 'Success' AS Message

		UPDATE Drivers.Drivers
		SET TotalRidesCancelled = TotalRidesCancelled + 1 
		WHERE DriverID = (SELECT DriverID FROM Trips WHERE TripID = @TripID)
			
	END

	IF @Action = 'TripCompleted'
	BEGIN
		UPDATE Trips SET 
		EndTime = GETDATE(),
		Status = @Status,
		ActualFairAmount = @ActualFairAmount,
		PaymentMethod = @PaymentMethod,
		CancelledBy = NULL,
		ModifiedAt = GETDATE()
		WHERE TripID = @TripID;
		SELECT 1 AS Response, 'Success' AS Message;

		UPDATE Drivers.Drivers
		SET TotalRidesDone = TotalRidesDone + 1 
		WHERE DriverID = (SELECT DriverID FROM Trips WHERE TripID = @TripID)
	END

	IF @Action = 'TripStarted'
	BEGIN
		UPDATE Trips SET 
		Status = @Status,
		StartTime = GETDATE(),
		ModifiedAt = GETDATE()
		WHERE TripID = @TripID;
		SELECT 1 AS Response, 'Success' AS Message
	END

END TRY
BEGIN CATCH
	SELECT 0 AS Response, ERROR_MESSAGE() AS Message
END CATCH
GO 

-- Riders.usp_GetTripsData --
CREATE OR ALTER PROCEDURE Riders.usp_GetTripsData
	@RiderID bigint
AS
	SET NOCOUNT ON;
	SELECT 
		DR.FirstName + ' ' + DR.LastName AS DriverName,
		S.LocationName AS Source,
		D.LocationName AS Destination,
		V.VehicleBrand,
		V.VehicleName,
		V.RegistrationNo,
		T.StartTime,
		T.EndTime,
		T.Status,
		T.EstimatedFairAmount,
		T.ActualFairAmount,
		T.PaymentMethod,
		T.CancelledBy

	FROM Trips T 
	JOIN Locations S ON S.LocationID = T.SourceLocationID
	JOIN Locations D ON D.LocationID = T.DestinationLocationID
	JOIN Drivers.Drivers DR ON DR.DriverID = T.DriverID
	JOIN RideTypes RT ON RT.RideTypeID = T.RideTypeID
	JOIN Drivers.Vehicles V ON V.DriverID = DR.DriverID
	WHERE T.RiderID = @RiderID
	SET NOCOUNT OFF;
GO

-- Riders.usp_GetCurrentTripData --
CREATE OR ALTER PROCEDURE Riders.usp_GetCurrentTripData
	@RiderID bigint
AS
SET NOCOUNT OFF
	SELECT 
		DR.FirstName + ' ' + DR.LastName AS DriverName,
		S.LocationName AS Source,
		D.LocationName AS Destination,
		V.VehicleBrand,
		V.VehicleName,
		V.RegistrationNo,
		T.StartTime,
		T.EndTime,
		T.Status,
		T.EstimatedFairAmount

	FROM vCurrentTrips T 
	JOIN Locations S ON S.LocationID = T.SourceLocationID
	JOIN Locations D ON D.LocationID = T.DestinationLocationID
	JOIN Drivers.Drivers DR ON DR.DriverID = T.DriverID
	JOIN RideTypes RT ON RT.RideTypeID = T.RideTypeID
	JOIN Drivers.Vehicles V ON V.DriverID = DR.DriverID
	WHERE T.RiderID = @RiderID
SET NOCOUNT ON
GO

-- Riders.usp_SaveRatingData --
CREATE OR ALTER PROCEDURE Riders.usp_SaveRatingData
	@RiderID bigint,
	@DriverID bigint,
	@TripID bigint,
	@Comments varchar(MAX) = NULL,
	@MediaAttached varchar(MAX) = NULL,
	@Rating float
AS
BEGIN TRY
	INSERT INTO Riders.Ratings 
	(RiderID, 
	DriverID, 
	TripID, 
	Comments,
	MediaAttached,
	Rating,
	CreatedAt, 
	ModifiedAt) 
	VALUES 
	(@RiderID,
	@DriverID,
	@TripID,
	@Comments,
	@MediaAttached, 
	@Rating, 
	GETDATE(),
	NULL);
	SELECT 1 AS Response, 'Success' AS Message

END TRY
BEGIN CATCH
	SELECT 0 AS Response, ERROR_MESSAGE() AS Message
END CATCH
GO



-- Admins.usp_GetAllUsersData --
CREATE OR ALTER PROCEDURE Admins.usp_GetAllUsersData
	@UserType varchar(10)
AS
	SET NOCOUNT ON;
	IF @UserType = 'RIDER'
	BEGIN
		SELECT 
			RiderID,
			FirstName,
			LastName,
			Email,
			EmailVerified,
			IsNew,
			ContactNumber,
			Country,
			InviteCode,
			IsBlocked,
			CreatedAt
		FROM Riders.vRiders;
	END
	ELSE IF @UserType = 'DRIVER'
	BEGIN
		SELECT 
			DriverID,
			FirstName,
			LastName,
			Email,
			EmailVerified,
			ContactNumber,
			TotalRidesDone,
			TotalRidesCancelled,
			IsBlocked,
			CreatedAt
		FROM Drivers.vDrivers;
	END
	
	SET NOCOUNT OFF;
GO

-- Admins.usp_BlockUnblockUser --
CREATE OR ALTER PROCEDURE Admins.usp_BlockUnblockUser
	@Action varchar(20),
	@UserType varchar(10),
	@UserID bigint
AS
SET NOCOUNT ON;
BEGIN TRY
	IF @Action = 'BLOCK'
	BEGIN
		IF(  @UserType = 'RIDER')
		BEGIN
			UPDATE Riders.vRiders SET IsBlocked = 1 WHERE RiderID = @UserID
		END
		ELSE IF @UserType = 'DRIVER'
		BEGIN
			UPDATE Drivers.vDrivers SET IsBlocked = 1 WHERE DriverID = @UserID
		END
		SELECT 1 AS Response, 'Success' AS Message
		RETURN
	END

	IF @Action = 'UNBLOCK'
	BEGIN
		IF(  @UserType = 'RIDER')
		BEGIN
			UPDATE Riders.vRiders SET IsBlocked = 0 WHERE RiderID = @UserID
		END
		ELSE IF @UserType = 'DRIVER'
		BEGIN
			UPDATE Drivers.vDrivers SET IsBlocked = 0 WHERE DriverID = @UserID
		END
		SELECT 1 AS Response, 'Success' AS Message
		RETURN
	END
END TRY
BEGIN CATCH
	SELECT 0 AS Response, ERROR_MESSAGE() AS Message
END CATCH
	SET NOCOUNT OFF;
GO

-- Drivers.usp_SaveDriverData --
CREATE OR ALTER PROCEDURE Drivers.usp_SaveDriverData
	@action varchar(10),
	@driver_id bigint = NULL,
	@first_name varchar(50),
	@last_name varchar(50),
	@email varchar(50),
	@email_verified bit = 0,
	@contact_number decimal(10,0) = NULL,
	@password varchar(100) = NULL
AS
	BEGIN TRY
	IF @action = 'INSERT'
	BEGIN
		IF @contact_number IS NULL OR @password IS NULL
		BEGIN
			SELECT 0 AS 'Response', 'ContactNumber,Password cannot be NULL' AS Message
			RETURN
		END
		INSERT INTO Drivers.Drivers 
		(FirstName, LastName, Email, EmailVerified, ContactNumber, TotalRidesCancelled, TotalRidesDone, Salary, Password, IsBlocked, IsLoggedIn, SessionExpiresIn, CreatedAt, ModifiedAt) 
		VALUES 
		(@first_name, @last_name, @email, @email_verified, @contact_number, 0, 0, NULL, @password, 0, 1, DATEADD(HOUR,3,GETDATE()), GETDATE(), NULL);
		SELECT 1 AS Response, 'Success' AS Message
	END

	IF @action = 'UPDATE' AND @driver_id IS NOT NULL
	BEGIN
		UPDATE Drivers.vDrivers SET 
		FirstName = @first_name,
		LastName = @last_name,
		Email = @email,
		EmailVerified = @email_verified,
		ModifiedAt = GETDATE()
		WHERE DriverID = @driver_id;
		SELECT 1 AS Response, 'Success' AS Message
	END
	END TRY
	BEGIN CATCH
		SELECT 0 AS Response, ERROR_MESSAGE() AS Message
	END CATCH
GO

-- Drivers.usp_GetDriverData --
CREATE OR ALTER PROCEDURE Drivers.usp_GetDriverData
	@driver_id bigint
AS
	SELECT DriverID, FirstName, LastName, Email, EmailVerified, ContactNumber, TotalRidesCancelled, TotalRidesDone, Salary, CreatedAt, ModifiedAt
	FROM Drivers.vDrivers WHERE DriverID = @driver_id
GO

-- Drivers.usp_SaveVehicleData --
CREATE OR ALTER PROCEDURE Drivers.usp_SaveVehicleData
	@driver_id bigint,
	@vehicle_name varchar(50),
	@vehicle_brand varchar(50),
	@reg_no varchar(50),
	@ride_type varchar(10),
	@vehicle_type varchar(20),
	@documents varchar(MAX)
AS
	BEGIN TRY

		INSERT INTO Drivers.Vehicles 
		(DriverID, 
		CurrentRideTypeID,
		VehicleBrand,
		VehicleName,
		VehicleType,
		RegistrationNo,
		VehicleDocument,
		CreatedAt,
		ModifiedAt) 
		VALUES 
		(@driver_id,
		(SELECT RideTypeID FROM RideTypes WHERE RideName = @ride_type), 
		@vehicle_brand,
		@vehicle_name, 
		@vehicle_type,
		@reg_no,
		@documents,
		GETDATE(), 
		NULL);
		SELECT 1 AS Response, 'Success' AS Message

	END TRY
	BEGIN CATCH
		SELECT 0 AS Response, ERROR_MESSAGE() AS Message
	END CATCH
GO
