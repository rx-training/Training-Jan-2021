CREATE DATABASE IRCTC
GO

USE IRCTC
GO

CREATE TABLE Users(
	[User_id] INT CONSTRAINT PK_Users_UserId PRIMARY KEY IDENTITY
	,[Email_id] VARCHAR(20) NOT NULL
	,[Password] VARCHAR(20) NOT NULL
);
GO

CREATE TABLE Trains(
	Train_id INT CONSTRAINT PK_Trains_TrainId PRIMARY KEY IDENTITY
	,T_Name VARCHAR(20) NOT NULL
	,Train_type VARCHAR(20) NOT NULL
	,[Days] VARCHAR(20) NOT NULL
)
GO

CREATE TABLE Stations(
	Station_id INT CONSTRAINT PK_Stations_StationId PRIMARY KEY IDENTITY
	,Station_name VARCHAR(20) NOT NULL
)
GO

CREATE TABLE Train_Status(
	Status_id INT CONSTRAINT PK_TrainStatus_StatusId PRIMARY KEY IDENTITY
	,Train_id INT CONSTRAINT FK_TrainStatus_TrainId FOREIGN KEY REFERENCES Trains NOT NULL
	,Station_id INT CONSTRAINT FK_TrainStatus_StationId FOREIGN KEY REFERENCES Stations NOT NULL
	,Class_type VARCHAR(10) NOT NULL
	,Avail_seat INT NOT NULL DEFAULT '0'
	,Wait_seat INT NOT NULL DEFAULT '0'
	,Booked_seat INT NOT NULL DEFAULT '0'
	,[Date] DATE NOT NULL
)
GO

CREATE TABLE Passengers(
	PNR INT CONSTRAINT PK_Passengers_PNR PRIMARY KEY IDENTITY
	,First_name VARCHAR(20) NOT NULL
	,Last_name VARCHAR(20) NOT NULL
	,Age TINYINT NOT NULL
	,Gender VARCHAR(10) NOT NULL
	,Seat_no VARCHAR(10) NOT NULL
	,Reserve_status VARCHAR(10) NOT NULL
	,[User_id] INT CONSTRAINT FK_Passengers_UserId FOREIGN KEY REFERENCES Users NOT NULL
	,[Status_id] INT CONSTRAINT FK_Passengers_StatusId FOREIGN KEY REFERENCES Train_Status NOT NULL
	,Train_id INT CONSTRAINT FK_Passengers_TrainId FOREIGN KEY REFERENCES Trains NOT NULL
)
GO

CREATE TABLE [Routes](
	Station_id INT CONSTRAINT FK_Routes_StationId FOREIGN KEY REFERENCES Stations NOT NULL
	,Train_id INT CONSTRAINT FK_Routes_TrainId FOREIGN KEY REFERENCES Trains NOT NULL
	,Arr_time TIME
	,Depart_time TIME
	,Stop_no INT NOT NULL
	,CONSTRAINT PK_Routes_StationId_TrainId_StopNo PRIMARY KEY(Station_id,Train_id,Stop_no)
)
GO

-- Views

/* Train Train Status View */

CREATE VIEW vTrainStatus
AS
SELECT t.T_Name,t.Days,s.Station_name,ts.Date,r.Arr_time,r.Depart_time,ts.Class_type,ts.Avail_seat FROM Trains t
JOIN Routes r ON r.Train_id = t.Train_id
JOIN Stations s ON r.Station_id = s.Station_id
JOIN Train_Status ts ON ts.Station_id= s.Station_id
GO

/* Passenger */

CREATE VIEW vPassenger
AS
SELECT p.First_name+' '+p.Last_name 'Name',p.Seat_no,t.T_Name,s.Station_name,r.Arr_time,r.Depart_time FROM Passengers p
JOIN Trains t ON t.Train_id = p.Train_id
JOIN Routes r ON r.Train_id = p.Train_id
JOIN Train_Status ts ON ts.Status_id = p.Status_id
JOIN Stations s ON s.Station_id = ts.Station_id;
GO

-- Procedures

/* Register User */

CREATE PROCEDURE uspRegisterUser
	@email VARCHAR(20),
	@password VARCHAR(20)
AS
	SET NOCOUNT ON;
	IF @email NOT IN (SELECT Email_id FROM Users)
	BEGIN
	INSERT INTO Users VALUES(@email,@password)
	PRINT 'User Registrartion Sucessfull'
	END
	ELSE
	BEGIN
	PRINT 'User already exists'
	END
	SET NOCOUNT OFF;
GO

/* LogIn */

CREATE PROCEDURE uspLogIn
	@email VARCHAR(20),
	@password VARCHAR(20)
AS
	SET NOCOUNT ON;
	IF @email IN (SELECT Email_id FROM Users)
	BEGIN
		IF @password = (SELECT Password FROM Users WHERE Email_id = @email)
		BEGIN
			PRINT 'Login Successfull'
		END
		ELSE
		BEGIN
			PRINT 'Wrong Password'
		END
	END
	ELSE
	BEGIN
	PRINT 'Wrong EmailId'
	END
	SET NOCOUNT OFF;
GO

/* Add Train */

CREATE PROCEDURE uspAddTrain
	@name VARCHAR(20),
	@type VARCHAR(20),
	@days VARCHAR(20)
AS
	SET NOCOUNT ON;
	IF @name NOT IN (SELECT T_Name FROM Trains)
	BEGIN
	INSERT INTO Trains VALUES(@name,@type,@days)
	PRINT 'Train added sucessfuly'
	END
	ELSE
	BEGIN
	PRINT 'Train already exists'
	END
	SET NOCOUNT OFF;
GO

/* Add Station */

CREATE PROCEDURE uspAddStation
	@name VARCHAR(20)
AS
	SET NOCOUNT ON;
	IF @name NOT IN (SELECT Station_name FROM Stations)
	BEGIN
	INSERT INTO Stations VALUES(@name)
	PRINT 'Station added sucessfuly'
	END
	ELSE
	BEGIN
	PRINT 'Station already exists'
	END
	SET NOCOUNT OFF;
GO

/* Add Train Details */

CREATE PROCEDURE uspAddTrainDetails
	@TrainId INT,
	@StationId INT,
	@Class VARCHAR(10),
	@AvailSeat INT,
	@Date DATE
AS
	SET NOCOUNT ON;
	IF @TrainId IN (SELECT Train_id FROM Trains)
	BEGIN
		IF @Class NOT IN (SELECT Class_type FROM Train_Status WHERE Train_id = @TrainId AND Station_id = @StationId)
		BEGIN
		INSERT INTO Train_Status(Train_id,Station_id,Class_type,Avail_seat,Date) 
		VALUES(@TrainId,@StationId,@Class,@AvailSeat,@Date)
		PRINT 'Train details added sucessfuly'
		END
		ELSE
		BEGIN
		PRINT 'Entered class already exists'
		END
	END
	ELSE
	BEGIN
	PRINT 'Entered train does not exist'
	END
	SET NOCOUNT OFF;
GO

/* Add Route */

CREATE PROCEDURE uspAddRoute
	@TrainId INT
	,@StationId INT
	,@Arr_time TIME
	,@Depart_time TIME
	,@Stop_no INT
AS
	SET NOCOUNT ON;
	IF @TrainId IN (SELECT Train_id FROM Trains) AND @StationId IN (SELECT Station_id FROM Stations)
	BEGIN
		IF @Stop_no NOT IN 
		(SELECT Station_id FROM Routes WHERE Train_id = @TrainId AND Station_id = @StationId AND Stop_no = @Stop_no)
		BEGIN
		INSERT INTO Routes(Station_id,Train_id,Arr_time,Depart_time,Stop_no) 
		VALUES(@StationId,@TrainId,@Arr_time,@Depart_time,@Stop_no)
		PRINT 'Rout added sucessfuly'
		END
		ELSE
		BEGIN
		PRINT 'Entered rout already exists'
		END
	END
	ELSE
	BEGIN
	PRINT 'Entered train OR station does not exists'
	END
	SET NOCOUNT OFF;
GO

/* Book Ticket */

CREATE PROCEDURE uspBookTicket
	@First_name VARCHAR(20)
	,@Last_name VARCHAR(20)
	,@Age TINYINT
	,@Gender VARCHAR(10)
	,@Seat_no VARCHAR(10)
	,@User_id INT
	,@Train_id INT
	,@From INT
	,@To INT
	,@Class VARCHAR(10)
	,@Date DATE
AS
	DECLARE @Reserve_status VARCHAR(10)
			,@Status_id INT
			,@avil_seat INT;
	SET NOCOUNT ON;
	IF @Train_id IN (SELECT Train_id FROM Trains) 
		AND @From IN (SELECT Station_id FROM Stations) 
		AND @To IN (SELECT Station_id FROM Stations)
	BEGIN
		SELECT @avil_seat = Avail_seat FROM Train_Status WHERE Train_id = @Train_id
		AND Station_id = @From AND Class_type = @Class AND [Date] = @Date
		IF @avil_seat > 0
		BEGIN
			SET @Reserve_status = 'Confirmed'
			SELECT @Status_id = Status_id FROM Train_Status WHERE Train_id = @Train_id AND Station_id = @From
			IF @First_name NOT IN (SELECT First_name FROM Passengers WHERE Train_id = @Train_id) 
			AND @Last_name NOT IN (SELECT Last_name FROM Passengers WHERE Train_id = @Train_id)
			BEGIN
				INSERT INTO Passengers(First_name,Last_name,Age,Gender,Seat_no,Reserve_status,User_id,Status_id,Train_id)
				VALUES(@First_name,@Last_name,@Age,@Gender,@Seat_no,@Reserve_status,@User_id,@Status_id,@Train_id);
				UPDATE Train_Status SET Avail_seat = Avail_seat - 1 ,Booked_seat = Booked_seat + 1 
				WHERE Train_id = @Train_id AND Class_type = @Class AND [Date] = @Date
				UPDATE Train_Status SET Avail_seat = Avail_seat + 1 ,Booked_seat = Booked_seat - 1 
				WHERE Train_id = @Train_id AND Station_id = @To AND Class_type = @Class AND [Date] = @Date
				PRINT 'Booking Confirmed'
			END
			ELSE
			BEGIN
				UPDATE Passengers SET Reserve_status = @Reserve_status WHERE PNR = 
				(SELECT PNR FROM Passengers WHERE First_name = @First_name AND Last_name = @Last_name AND Train_id = @Train_id)
				UPDATE Train_Status SET Avail_seat = Avail_seat - 1 ,Booked_seat = Booked_seat + 1 
				WHERE Train_id = @Train_id AND Class_type = @Class AND [Date] = @Date
				UPDATE Train_Status SET Avail_seat = Avail_seat + 1 ,Booked_seat = Booked_seat - 1 
				WHERE Train_id = @Train_id AND Station_id = @To AND Class_type = @Class AND [Date] = @Date
				PRINT 'Booking Confirmed'
			END
		END
		ELSE
			BEGIN
				IF @First_name NOT IN (SELECT First_name FROM Passengers WHERE Train_id = @Train_id) 
				AND @Last_name NOT IN (SELECT Last_name FROM Passengers WHERE Train_id = @Train_id)
				BEGIN
				SET @Reserve_status = 'Waiting'
				SELECT @Status_id = Status_id FROM Train_Status WHERE Train_id = @Train_id AND Station_id = @From
				INSERT INTO Passengers(First_name,Last_name,Age,Gender,Seat_no,Reserve_status,User_id,Status_id,Train_id)
				VALUES(@First_name,@Last_name,@Age,@Gender,@Seat_no,@Reserve_status,@User_id,@Status_id,@Train_id);
				UPDATE Train_Status SET Wait_seat = Wait_seat + 1 WHERE Train_id = @Train_id 
				AND Class_type = @Class AND [Date] = @Date
				UPDATE Train_Status SET Wait_seat = Wait_seat - 1 WHERE Train_id = @Train_id 
				AND Station_id = @To AND Class_type = @Class AND [Date] = @Date
				PRINT 'Booked In Waiting'
				END
			END
	END
	ELSE
	BEGIN
	PRINT 'Entered train OR station does not exists'
	END
	SET NOCOUNT OFF;
GO

/* Seacrh Train */

CREATE PROCEDURE uspSearchTrain
	@From VARCHAR(20)
	,@To VARCHAR(20)
AS
	SET NOCOUNT ON
	IF @From IN (SELECT Station_name FROM Stations) AND @To IN (SELECT Station_name FROM Stations)
	BEGIN
	SELECT t.T_Name,t.Train_type,t.Days,ts.Class_type,ts.Date,@From 'From',@To 'To' FROM Trains t 
	JOIN Train_Status ts ON t.Train_id = ts.Train_id
	WHERE ts.Train_id IN
	(SELECT Train_id FROM Routes WHERE Station_id IN 
	(SELECT Station_id FROM Stations WHERE Station_name = @From OR Station_name = @To) GROUP by Train_id)
	AND ts.Station_id = (SELECT Station_id FROM Stations WHERE Station_name = @From)
	END
	ELSE
	BEGIN
	PRINT 'Opps, Train Not Available'
	END
	SET NOCOUNT OFF
GO
