USE Uber;

CREATE TABLE RideTypes (
	RideTypeID bigint PRIMARY KEY IDENTITY,
	RideName varchar(50) NOT NULL, 
	PricePerKm float NOT NULL, 
	SeatingCapacity int NOT NULL, 
	CreatedAt datetime, 
	ModifiedAt datetime
);

CREATE TABLE Locations (
	LocationID bigint PRIMARY KEY IDENTITY,
	LocationName varchar(MAX) NOT NULL, 
	Longitude float NOT NULL,
	Latitude float NOT NULL,
	CONSTRAINT uk_Locations_Coordinates UNIQUE (Longitude, Latitude),
	CreatedAt datetime,
	ModifiedAt datetime
);

CREATE TABLE Riders.Riders (
	RiderID bigint PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL, 
	LastName varchar(50) NOT NULL, 
	Email varchar(50) NOT NULL, 
	EmailVerified bit NOT NULL DEFAULT 0,
	IsNew bit NOT NULL DEFAULT 1,
	ContactNumber decimal(10,0) NOT NULL,
	Password varchar(100) NOT NULL,
	Country varchar(50),
	InviteCode varchar(20) NOT NULL,
	IsBlocked bit DEFAULT 0, 
	IsLoggedIn  bit DEFAULT 0, 
	SessionExpiresIn datetime,
	CreatedAt datetime, 
	ModifiedAt datetime,
	CONSTRAINT uk_Riders_ContactNumber UNIQUE (ContactNumber),
	CONSTRAINT uk_Riders_InviteCode UNIQUE (InviteCode)
);

CREATE TABLE Riders.Offers (
	OfferID bigint PRIMARY KEY IDENTITY,
	OfferCode varchar(50) NOT NULL,
	Description varchar(MAX) NOT NULL,
	StartDate datetime NOT NULL,
	EndDate datetime,
	CreatedAt datetime,
	ModifiedAt datetime
);

CREATE TABLE Riders.SavedPaymentModes (
	RiderID bigint,
	PaymentMode varchar(20) NOT NULL,
	CardNumber decimal(16,0) NOT NULL,
	CardDate datetime NOT NULL,
	CardName varchar(100) NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_SavedPaymentModes_RiderID FOREIGN KEY (RiderID) REFERENCES Riders.Riders (RiderID)
);

CREATE TABLE Riders.ApplicableOffers (
	RiderID bigint NOT NULL,
	OfferID bigint NOT NULL,
	IsDisabled bit NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_ApplicableOffers_RiderID FOREIGN KEY (RiderID) REFERENCES Riders.Riders (RiderID),
	CONSTRAINT fk_ApplicableOffers_OfferID FOREIGN KEY (OfferID) REFERENCES Riders.Offers (OfferID)
);


CREATE TABLE Drivers.Drivers (
	DriverID bigint PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL, 
	LastName varchar(50) NOT NULL, 
	Email varchar(50) NOT NULL, 
	EmailVerified bit NOT NULL DEFAULT 0,
	ContactNumber decimal(10,0) NOT NULL,
	TotalRidesDone int NOT NULL DEFAULT 0,
	TotalRidesCancelled int NOT NULL DEFAULT 0,
	Salary float,
	IsBlocked bit DEFAULT 0, 
	IsLoggedIn  bit DEFAULT 0, 
	SessionExpiresIn datetime,
	Password varchar(100) NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT uk_Drivers_ContactNumber UNIQUE (ContactNumber)
);

CREATE TABLE Drivers.DriverDetails  (
	DriverID bigint,
	DrivingLicense varchar(MAX), 
	AadharCard varchar(MAX), `
	PanCard varchar(MAX), 
	OtherDocument varchar(MAX),
	CurrentAddress varchar(MAX),
	PermenantAddress varchar(MAX),
	Country varchar(20),
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_DriverDetails_DriverID FOREIGN KEY (DriverID) REFERENCES Drivers.Drivers (DriverID)
);

CREATE TABLE Drivers.Vehicles (
	VehicleID bigint PRIMARY KEY IDENTITY,
	DriverID bigint NOT NULL,
	CurrentRideTypeID bigint,
	VehicleBrand varchar(MAX) NOT NULL, 
	VehicleName varchar(MAX) NOT NULL, 
	RegistrationNo varchar(MAX) NOT NULL, 
	VehicleDocument varchar(MAX) NOT NULL,
	VehicleType varchar(MAX) NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_Vehicles_DriverID FOREIGN KEY (DriverID) REFERENCES Drivers.Drivers (DriverID),
	CONSTRAINT fk_Vehicles_CurrentRideTypeID FOREIGN KEY (CurrentRideTypeID) REFERENCES RideTypes (RideTypeID)
);

CREATE TABLE Drivers.Incentives (
	IncentiveID bigint PRIMARY KEY IDENTITY,
	Description varchar(MAX) NOT NULL,
	StartDate datetime NOT NULL,
	EndDate datetime,
	CreatedAt datetime,
	ModifiedAt datetime
);

CREATE TABLE Drivers.ApplicableIncentives (
	DriverID bigint NOT NULL,
	IncentiveID bigint NOT NULL,
	IsDisabled bit NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_ApplicableIncentives_DriverID FOREIGN KEY (DriverID) REFERENCES Drivers.Drivers (DriverID),
	CONSTRAINT fk_ApplicableIncentives_IncentiveID FOREIGN KEY (IncentiveID) REFERENCES Drivers.Incentives (IncentiveID)
);

CREATE TABLE Trips (
	TripID bigint PRIMARY KEY IDENTITY,
	RiderID bigint NOT NULL,
	DriverID bigint NOT NULL,
	SourceLocationID bigint NOT NULL,
	DestinationLocationID bigint NOT NULL,
	RideTypeID bigint NOT NULL,
	StartTime datetime,
	EndTime datetime,
	Status varchar(20) NOT NULL,
	EstimatedFairAmount float,
	ActualFairAmount float,
	PaymentMethod varchar(50),
	CancelledBy varchar(20),
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_Trips_DriverID FOREIGN KEY (DriverID) REFERENCES Drivers.Drivers (DriverID),
	CONSTRAINT fk_Trips_RiderID FOREIGN KEY (RiderID) REFERENCES Riders.Riders (RiderID),
	CONSTRAINT fk_Trips_SourceLocationID FOREIGN KEY (SourceLocationID) REFERENCES Locations (LocationID),
	CONSTRAINT fk_Trips_DestinationLocationID FOREIGN KEY (DestinationLocationID) REFERENCES Locations (LocationID),
	CONSTRAINT fk_Trips_RideTypeID FOREIGN KEY (RideTypeID) REFERENCES RideTypes (RideTypeID)
);

CREATE TABLE Riders.Ratings (
	RatingID bigint PRIMARY KEY IDENTITY,
	RiderID bigint NOT NULL,
	DriverID bigint NOT NULL,
	TripID bigint NOT NULL,
	Comments varchar(MAX),
	MediaAttached varchar(MAX),
	Rating float NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_Ratings_RiderID FOREIGN KEY (RiderID) REFERENCES Riders.Riders (RiderID),
	CONSTRAINT fk_Ratings_DriverID FOREIGN KEY (DriverID) REFERENCES Drivers.Drivers (DriverID),
	CONSTRAINT fk_Ratings_TripID FOREIGN KEY (TripID) REFERENCES Trips (TripID)
);

CREATE TABLE Drivers.Ratings (
	RatingID bigint PRIMARY KEY IDENTITY,
	RiderID bigint NOT NULL,
	DriverID bigint NOT NULL,
	TripID bigint NOT NULL,
	Comments varchar(MAX),
	MediaAttached varchar(MAX),
	Rating float NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime,
	CONSTRAINT fk_Ratings_RiderID FOREIGN KEY (RiderID) REFERENCES Riders.Riders (RiderID),
	CONSTRAINT fk_Ratings_DriverID FOREIGN KEY (DriverID) REFERENCES Drivers.Drivers (DriverID),
	CONSTRAINT fk_Ratings_TripID FOREIGN KEY (TripID) REFERENCES Trips (TripID)
);

CREATE TABLE Admins.Admins (
	ID bigint PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL, 
	LastName varchar(50) NOT NULL, 
	Email varchar(50) NOT NULL,
	ContactNumber decimal(10,0) NOT NULL,
	Password varchar(100) NOT NULL,
	CreatedAt datetime,
	ModifiedAt datetime
);

GO


--DROP TABLE Drivers.Ratings;
--DROP TABLE Riders.Ratings;
--DROP TABLE Trips;
--DROP TABLE Drivers.ApplicableIncentives;
--DROP TABLE Drivers.Incentives;
--DROP TABLE Drivers.Vehicles;
--DROP TABLE Drivers.DriverDetails;
--DROP TABLE Drivers.Drivers;
--DROP TABLE Riders.SavedPaymentModes;
--DROP TABLE Riders.ApplicableOffers;
--DROP TABLE Riders.Offers;
--DROP TABLE Riders.Riders;
--DROP TABLE Locations;
--DROP TABLE RideTypes;
--DROP TABLE Admins.Admins;
--GO