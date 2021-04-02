USE Uber;
GO

-- view for Riders data --
CREATE OR ALTER VIEW Riders.vRiders
AS
SELECT 
RiderID, 
FirstName,
LastName,
Email,
EmailVerified,
IsNew,
ContactNumber,
InviteCode,
Country,
IsBlocked,
IsLoggedIn,
SessionExpiresIn,
CreatedAt,
ModifiedAt
FROM Riders.Riders
GO

-- view for Drivers data --
CREATE OR ALTER VIEW Drivers.vDrivers
AS
SELECT 
DriverID, 
FirstName,
LastName,
Email,
EmailVerified,
ContactNumber,
TotalRidesDone,
TotalRidesCancelled,
Salary,
IsBlocked,
IsLoggedIn,
SessionExpiresIn,
CreatedAt,
ModifiedAt
FROM Drivers.Drivers
GO

-- view for current trips data --
CREATE OR ALTER VIEW vCurrentTrips
AS
SELECT 
TripID,
RiderID, 
DriverID, 
SourceLocationID, 
DestinationLocationID,
RideTypeID,
StartTime,
EndTime,
Status,
EstimatedFairAmount,
ActualFairAmount,
CancelledBy,
CreatedAt, 
ModifiedAt
FROM Trips WHERE Status='Current'
GO

-- view to access Credentials of Rider
CREATE OR ALTER VIEW Riders.RiderCredentials
AS
SELECT
RiderID,
Password,
IsBlocked,
IsLoggedIn,
SessionExpiresIn
FROM Riders.Riders;
GO

-- To Prevent this view to get updated by user
--REVOKE UPDATE,DELETE,INSERT ON Riders.RiderCredentials TO guest, public;

-- view to access Credentials of Driver
CREATE OR ALTER VIEW Drivers.DriverCredentials
AS
SELECT
DriverID,
Password,
IsBlocked,
IsLoggedIn,
SessionExpiresIn
FROM Drivers.Drivers;
GO

-- To Prevent this view to get updated by user
--REVOKE UPDATE,DELETE,INSERT ON Drivers.DriverCredentials TO guest, public;