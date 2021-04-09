USE Uber;

-- EXAMPLE WITH INSERT --
EXEC Riders.usp_SaveRiderData 
@action = 'INSERT',
@first_name = 'Milit',
@last_name = 'P',
@email = 'milit@gmail.com',
@email_verified = 0,
@is_new = 1,
@contact_number = 7990349033,
@password = 'milit',
@invite_code = 'militue17',
@country = 'India'
GO

--	EXAMPLE WITH UPDATE --
EXEC Riders.usp_SaveRiderData 
@action = 'UPDATE',
@rider_id = 5,
@first_name = 'Milit',
@last_name = 'Panchasara',
@email = 'milit@gmail.com',
@email_verified = 0,
@is_new = 1,
@country = 'India'
GO

-- EXAMPLE OF usp_GetRiderData --
EXEC Riders.usp_GetRiderData 
@rider_id = 5
GO

-- EXAMPLE OF usp_SaveLocationData --
EXEC usp_SaveLocationData
@location_name = 'DA-IICT, Gandhinagar, Gujarat',
@longitude = '72.6279837718273',
@latitude = '23.18899005518514'
GO
EXEC usp_SaveLocationData
@location_name = 'Radixweb, S. G. Highway, Ahmedabad',
@longitude = '72.54718866147493',
@latitude = '23.120455827022017'
GO

-- EXAMPLE OF usp_GetLocationData --
EXEC usp_GetLocationData
@location_id = 6
GO

-- EXAMPLE OF usp_GetRideTypesData --
EXEC usp_GetRideTypesData
GO

-- EXAMPLE OF usp_SaveRideTypesData --
EXEC usp_SaveRideTypesData
	@action = 'INSERT',
	@ride_name = 'UberMoto',
	@price = 10.0,
	@seating_capacity = 1

-- EXAMPLE OF usp_SaveRideTypesData --
EXEC usp_SaveRideTypesData
	@action = 'UPDATE',
	@ridetype_id = 3,
	@ride_name = 'UberMoto',
	@price = 12.0,
	@seating_capacity = 1

-- EXAMPLE OF usp_DeleteRideTypesData --
EXEC usp_DeleteRideTypesData
	@ridetype_id = 3

-- EXEC OF usp_SaveNewTripData --
EXEC usp_SaveNewTripData
	@RiderID = 12,
	@DriverID = 1,
	@SourceLocationID = 1,
	@DestinationLocationID = 6,
	@RideTypeID = 3,
	@Status = 'Current',
	@EstimatedFairAmount = 150.00

-- EXEC OF usp_UpdateTripData (TripCancelled) --
EXEC usp_UpdateTripData
	@Action = 'TripCancelled',
	@TripID = 4,
	@Status = 'Cancelled',
	@ActualFairAmount = NULL,
	@PaymentMethod = NULL,
	@CancelledBy = 'Rider'

-- EXEC OF usp_UpdateTripData (TripCompleted)--
EXEC usp_UpdateTripData
	@Action = 'TripCompleted',
	@TripID = 5,
	@Status = 'Completed',
	@ActualFairAmount = 155.50,
	@PaymentMethod = 'Cash',
	@CancelledBy = NULL

-- EXEC OF usp_UpdateTripData (TripStarted)--
EXEC usp_UpdateTripData
	@Action = 'TripStarted',
	@TripID = 5,
	@Status = 'Current',
	@ActualFairAmount = NULL,
	@PaymentMethod = NULL,
	@CancelledBy = NULL

-- EXAMPLE OF Riders.usp_GetTripsData --
EXEC Riders.usp_GetTripsData
	@RiderID = 12

-- EXAMPLE OF Riders.usp_GetCurrentTripData --
EXEC Riders.usp_GetCurrentTripData
	@RiderID = 12

-- EXAMPLE OF Riders.usp_SaveRatingData --
EXEC Riders.usp_SaveRatingData
	@RiderID = 12,
	@DriverID = 1,
	@TripID = 5,
	@Comments = 'A nice ride',
	@MediaAttached = NULL,
	@Rating = 4

-- EXAMPLE OF Admins.usp_GetAllUsersData for RIDER & DRIVER --
EXEC Admins.usp_GetAllUsersData
	@UserType = 'RIDER'

EXEC Admins.usp_GetAllUsersData
	@UserType = 'DRIVER'

-- EXAMPLE OF Admins.usp_BlockUnblockUser for RIDER & DRIVER WITH BLOCK ACTION--
EXEC Admins.usp_BlockUnblockUser
	@Action = 'BLOCK',
	@UserType = 'RIDER',
	@UserID = 12

EXEC Admins.usp_BlockUnblockUser
	@Action = 'BLOCK',
	@UserType = 'DRIVER',
	@UserID = 1

-- EXAMPLE OF Admins.usp_BlockUnblockUser for RIDER & DRIVER WITH UNBLOCK ACTION--
EXEC Admins.usp_BlockUnblockUser
	@Action = 'UNBLOCK',
	@UserType = 'RIDER',
	@UserID = 12

EXEC Admins.usp_BlockUnblockUser
	@Action = 'UNBLOCK',
	@UserType = 'DRIVER',
	@UserID = 1

-- EXAMPLE OF INSERT WITH Drivers.usp_SaveDriverData --
EXEC Drivers.usp_SaveDriverData 
@action = 'INSERT',
@first_name = 'John',
@last_name = 'P',
@email = 'john@gmail.com',
@email_verified = 0,
@contact_number = 7990349033,
@password = 'john'
GO

--	EXAMPLE OF UPDATE WITH Drivers.usp_SaveDriverData--
EXEC Drivers.usp_SaveDriverData 
@action = 'UPDATE',
@driver_id = 1,
@first_name = 'John',
@last_name = 'K',
@email = 'johnk@gmail.com',
@email_verified = 0
GO

-- EXAMPLE OF Drivers.usp_GetDriverData --
EXEC Drivers.usp_GetDriverData 
@driver_id = 1
GO
