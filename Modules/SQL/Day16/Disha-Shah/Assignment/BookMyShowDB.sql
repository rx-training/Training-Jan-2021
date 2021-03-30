CREATE DATABASE BookMyShowDB

USE BookMyShowDB

CREATE TABLE Admins(
	AdminId INT CONSTRAINT Admins_AdminId_PK PRIMARY KEY IDENTITY(1,1),
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	ContactNo CHAR(10) CONSTRAINT Chk_Admins_ContactNo CHECK(ContactNo LIKE '[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]') NOT NULL,
	Password VARCHAR(10) NOT NULL
)

CREATE TABLE Users(
	UserId INT CONSTRAINT Users_UserId_PK PRIMARY KEY IDENTITY(1,1),
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	ContactNo CHAR(10) CONSTRAINT Chk_Users_ContactNo CHECK(ContactNo LIKE '[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]') NOT NULL,
	Password VARCHAR(10) NOT NULL
)

CREATE TABLE Regions(
	RegionId INT CONSTRAINT Regions_RegionId_PK PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL CONSTRAINT Chk_Regions_Name CHECK(Name IN('North', 'South', 'East', 'West'))
)


CREATE TABLE Cities(
	CityId INT CONSTRAINT Cities_CityId_PK PRIMARY KEY IDENTITY(1,1),
	RegionId INT CONSTRAINT Regions_RegionID_FK FOREIGN KEY REFERENCES Regions(RegionId),
	Name VARCHAR(50) NOT NULL
)

CREATE TABLE Theatres(
	TheatreId INT CONSTRAINT Theatres_TheatreId_PK PRIMARY KEY IDENTITY(1, 1),
	Name VARCHAR(50) NOT NULL,
	CityId INT CONSTRAINT Cities_CityId_FK FOREIGN KEY REFERENCES Cities(CityId) NOT NULL,
	Address VARCHAR(50) NOT NULL
)

CREATE TABLE ShowTimings(
	ShowTimingId INT CONSTRAINT ShowTimings_ShowTimingId_PK PRIMARY KEY IDENTITY(1, 1),
	StartDate DATE NOT NULL,
	EndDate DATE NOT NULL,
	ShowTime TIME NOT NULL
)

CREATE TABLE SeatsCategories(
	SeatsCategoryId INT CONSTRAINT SeatsCategories_SeatsCategoryID_PK PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL,
	Price MONEY NOT NULL
)

CREATE TABLE Seats(
	SeatsId INT CONSTRAINT Seats_SeatsId_PK PRIMARY KEY IDENTITY(1,1),
	RowNo CHAR(1) NOT NULL,
	SeatNo INT NOT NULL,
	SeatsCategoryId INT CONSTRAINT SeatsCategories_SeatsCategoryID_FK FOREIGN KEY REFERENCES SeatsCategories(SeatsCategoryId),
	CONSTRAINT RowNo_SeatNo_UK UNIQUE(RowNo, SeatNo)
)

CREATE TABLE Languages(
	LanguageId INT CONSTRAINT Languages_LanguageId_PK PRIMARY KEY IDENTITY(1,1),
	Language VARCHAR(50) NOT NULL
)

CREATE TABLE FilmCategories(
	FilmCategoryId INT CONSTRAINT FilmCategories_FilmCategoryId_PK PRIMARY KEY IDENTITY(1,1),
	FilmCategory VARCHAR(50) NOT NULL
)

CREATE TABLE Genres(
	GenreId INT CONSTRAINT Genres_GenreId_PK PRIMARY KEY IDENTITY(1,1),
	Genre VARCHAR(50) NOT NULL
)

CREATE TABLE Certifications(
	CertificationId INT CONSTRAINT Certifications_CertificationId_PK PRIMARY KEY IDENTITY(1,1),
	Certification VARCHAR(50) NOT NULL
)

CREATE TABLE Movies(
	MovieId INT CONSTRAINT Movies_MovieId_PK PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL,
	Time TIME NOT NULL,
	Image VARBINARY(MAX) NOT NULL,
	DateOfRelease DATE NOT NULL,
	About VARCHAR(100) NOT NULL,
	CertificationId INT CONSTRAINT Certifications_CertificationId_FK FOREIGN KEY REFERENCES Certifications(CertificationId) NOT NULL
)

CREATE TABLE Screens(
	ScreenId INT CONSTRAINT Screens_ScreenId_PK PRIMARY KEY IDENTITY(1,1),
	TheatreId INT CONSTRAINT Theatres_TheatreId_FK FOREIGN KEY REFERENCES Theatres(TheatreId) NOT NULL
)

CREATE TABLE EventVenues(
	EventVenueId INT CONSTRAINT EventVenues_EventVenueId_PK PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL,
	Address VARCHAR(50) NOT NULL,
	TotalTickets INT NOT NULL,
	CityId INT CONSTRAINT EventVenues_Cities_CityId_FK FOREIGN KEY REFERENCES Cities(CityId) NOT NULL
)

CREATE TABLE TheatreShowTimings(
	TheatreShowTimingId INT CONSTRAINT TheatreShowTimings_TheatreShowTimingId_PK PRIMARY KEY IDENTITY(1,1),
	TheatreId INT CONSTRAINT TheatreShowTimings_Theatres_TheatreId_FK FOREIGN KEY REFERENCES Theatres(TheatreId) NOT NULL,
	ShowTimingId INT CONSTRAINT TheatreShowTimings_ShowTimings_ShowTimingId_FK FOREIGN KEY REFERENCES ShowTimings(ShowTimingId) NOT NULL
)

CREATE TABLE EventVenueShowTimings(
	EventVenueShowTimingId INT CONSTRAINT EventVenueShowTimings_EventVenueShowTimingId_PK PRIMARY KEY IDENTITY(1,1),
	EventVenueId INT CONSTRAINT EventvenueShowTimings_EventVenues_EventVenueId_FK FOREIGN KEY REFERENCES EventVenues(EventVenueId) NOT NULL,
	ShowTimingId INT CONSTRAINT EventVenueShowTimings_ShowTimings_ShowTimingId_FK FOREIGN KEY REFERENCES ShowTimings(ShowTimingId) NOT NULL
)

CREATE TABLE ScreenShowTimings(
	ScreenShowTimingsId INT CONSTRAINT ScreenShowTimings_ScreenShowTimingsId_PK PRIMARY KEY IDENTITY(1,1),
	ScreenId INT CONSTRAINT ScreenShowTimings_Screens_ScreenId_FK FOREIGN KEY REFERENCES Screens(ScreenId) NOT NULL,
	ShowTimingId INT CONSTRAINT ScreenShowTimings_ShowTimings_ShowTimingId_FK FOREIGN KEY REFERENCES ShowTimings(ShowTimingId) NOT NULL
)

CREATE TABLE ScreenSeatsCategories(
	ScreenSeatsCategoryId INT CONSTRAINT ScreenSeatsCategories_ScreenSeatsCategoryId_PK PRIMARY KEY IDENTITY(1,1),
	ScreenId INT CONSTRAINT ScreenSeatsCategories_Screens_ScreenId_FK FOREIGN KEY REFERENCES Screens(ScreenId) NOT NULL,
	SeatsCategoryId INT CONSTRAINT ScreenSeatsCategories_SeatsCategories_SeatsCategoryId_FK FOREIGN KEY REFERENCES SeatsCategories(SeatsCategoryId) NOT NULL
)

CREATE TABLE ScreensMovies(
	ScreenMovieId INT CONSTRAINT ScreensMovies_ScreenMovieId_PK PRIMARY KEY IDENTITY(1,1),
	ScreenId INT CONSTRAINT ScreensMovies_Screens_ScreenId_FK FOREIGN KEY REFERENCES Screens(ScreenId) NOT NULL,
	MovieId INT CONSTRAINT ScreensMovies_MOvies_MovieId_FK FOREIGN KEY REFERENCES Movies(MovieId) NOT NULL
)

CREATE TABLE MovieLanguages(
	MovieLanguage INT CONSTRAINT MovieLanguages_MovieLanguage_PK PRIMARY KEY IDENTITY(1,1),
	MovieId INT CONSTRAINT MovieLanguages_Movies_MovieId_FK FOREIGN KEY REFERENCES Movies(MovieId) NOT NULL,
	LanguageId INT CONSTRAINT MovieLanguages_Languages_LanguageId_FK FOREIGN KEY REFERENCES Languages(LanguageId) NOT NULL
)

CREATE TABLE MovieFilmCategories(
	MovieFilmcategory INT CONSTRAINT MovieFilmCategories_MovieFilmCategory_PK PRIMARY KEY IDENTITY(1,1),
	MovieId INT CONSTRAINT MovieFilmCategories_Movies_MovieId_FK FOREIGN KEY REFERENCES Movies(MovieId) NOT NULL,
	FilmCategoryId INT CONSTRAINT MovieFilmCategories_FilmCategories_FilmCategoryId_FK FOREIGN KEY REFERENCES FilmCategories(FilmCategoryId) NOT NULL
)

CREATE TABLE MovieGenres(
	MovieGenre INT CONSTRAINT MovieGenres_MovieGenre_PK PRIMARY KEY IDENTITY(1,1),
	MovieId INT CONSTRAINT MovieGenres_Movies_MovieId_FK FOREIGN KEY REFERENCES Movies(MovieId) NOT NULL,
	GenreId INT CONSTRAINT MovieGenres_Genres_GenreId_FK FOREIGN KEY REFERENCES Genres(GenreId) NOT NULL
)

CREATE TABLE EventTypes(
	EventTypeId INT CONSTRAINT EventTypes_EventTypeId_PK PRIMARY KEY IDENTITY(1,1),
	EventType VARCHAR(50) NOT NULL
)

CREATE TABLE Events(
	EventId INT CONSTRAINT Events_EventId_PK PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL,
	TicketPrice MONEY NOT NULL,
	Image VARBINARY(MAX) NOT NULL,
	Time TIME NOT NULL,
	DateOfEvent DATE NOT NULL,
	EventVenueShowTimingId INT CONSTRAINT EventVenueShowTimings_EventVenueShowTimingId_FK FOREIGN KEY REFERENCES EventVenueShowTimings(EventVenueShowTimingId) NOT NULL,
	EventTypeId INT CONSTRAINT EventTypes_EventTypeId_FK FOREIGN KEY REFERENCES EventTypes(EventTypeId) NOT NULL
)

CREATE TABLE EventLanguages(
	EventLanguage INT CONSTRAINT EventLanguages_EventLanguageId_PK PRIMARY KEY IDENTITY(1,1),
	EventId INT CONSTRAINT EventLanguages_Events_EventId_FK FOREIGN KEY REFERENCES Events(EventId),
	LanguageId INT CONSTRAINT EventLanguages_Languages_LanguageID_FK FOREIGN KEY REFERENCES Languages(LanguageId)
)

CREATE TABLE MovieBookings(
	MovieBookingId INT CONSTRAINT MovieBookings_MovieBookingId_PK PRIMARY KEY IDENTITY(1,1),
	BookingDate DATE CONSTRAINT MovieBookings_BookingDate_DF DEFAULT GETDATE() NOT NULL,
	Movie VARCHAR(50) NOT NULL,
	UserContact CHAR(10) NOT NULL,
	SeatNo VARCHAR(50) NOT NULL,
	Theatre VARCHAR(50) NOT NULL,
	ShowTiming TIME NOT NULL,
	TotalAmount MONEY CONSTRAINT MovieBookings_TotalAmount_DF DEFAULT 0
)

CREATE TABLE EventBookings(
	EventBookingId INT CONSTRAINT EventBookings_EventBookingId_PK PRIMARY KEY IDENTITY(1,1),
	BookingDate DATE CONSTRAINT EventBookings_BookingDate_DF DEFAULT GETDATE() NOT NULL,
	TicketCount TINYINT NOT NULL,
	Event VARCHAR(50) NOT NULL,
	UserContact CHAR(10) NOT NULL,
	EventVenue VARCHAR(50) NOT NULL,
	ShowTiming TIME NOT NULL,
	TotalAmount MONEY CONSTRAINT EventBookings_TotalAmount_DF DEFAULT 0
)

ALTER TABLE ShowTimings DROP COLUMN StartDate
ALTER TABLE ShowTimings DROP COLUMN EndDate

ALTER TABLE Movies ADD IsRecommended BIT
ALTER TABLE Movies ADD IsPremiere BIT
ALTER TABLE Movies ALTER COLUMN Time VARCHAR(20) NOT NULL
ALTER TABLE Movies ALTER COLUMN Image VARCHAR(1000)

ALTER TABLE Events ALTER COLUMN Time VARCHAR(20) NOT NULL
ALTER TABLE Events ALTER COLUMN Image VARCHAR(1000)

ALTER TABLE MovieBookings ADD Screen INT

