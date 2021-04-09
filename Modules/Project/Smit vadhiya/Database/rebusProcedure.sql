
-----------------SIGNUP PROCEDURE-------------------
/*--||ARGUMENTS||
		SIGNUP => FIRSTNAME, LASTNAME, EMAILID, GENDER(m,f), DATE OF BIRTH, PASSWORD, PHONENUMBER, CITY

	||TAS DONE BY PROCEDURE||
		VALUES ENTER IN USER TABLE
		VALUES ENTER IN LOGIN STATUS TABLE
*/						
CREATE PROCEDURE Signup 
	@FirstName VARCHAR(30),
	@LastName VARCHAR(30),
	@Email VARCHAR(30),
	@Gender VARCHAR(30),
	@DOB varchar(30),
	@Password VARCHAR(30),
	@PhoneNumber VARCHAR(30),
	@City VARCHAR(30)
AS BEGIN
	IF(@Email IN (SELECT Email FROM Users))
		BEGIN
			PRINT 'EmailID already exist'
		END
	ELSE
		BEGIN
			IF(@CITY NOT IN (SELECT CityName FROM Cities))
			BEGIN
				PRINT 'CityName Is Wrong'
			END
			ELSE
			BEGIN
				DECLARE @CityID INT,@UserID INT
				SELECT @CityID=CityID FROM Cities WHERE CityName = @CITY
				INSERT INTO Users VALUES(@FirstName,@LastName,@Email,@Gender,@DOB,@Password,@PhoneNumber,@CityID,GETDATE())
				SELECT @UserID = UserID FROM Users WHERE Email = @Email
				INSERT INTO LoginStatus VALUES (@UserID ,GETDATE(),NULL)
			END

		END
END
EXEC Signup 'bhavesh','seth','bhaveshbhavesh@gmail.com','m','02-04-2000','pass','2345678921','ahmedabad'
GO

-----------------------LOGOUT-------------------------------
/*--||ARGUMENTS||
		LOGOUT => USERID

	||TAS DONE BY PROCEDURE||
		VALUE ENTER IN LOGIN STATUS OF PERTICULAR USER 
*/	

CREATE PROCEDURE Logout @UserID INT
AS BEGIN
	IF EXISTS (SELECT * FROM LoginStatus WHERE LogoutDateTime IS NULL AND UserID = @UserID)
	BEGIN
		UPDATE LoginStatus SET LogoutDateTime = GETDATE() WHERE LogoutDateTime IS NULL AND UserID = @UserID 
	END
	ELSE 
	BEGIN
		PRINT 'PLEASE LOGIN FIRST'
	END
END

EXEC Logout 2
GO


------------------------------LOGIN---------------------------------
/*--||ARGUMENTS||
		LOGIN => EMAILID, PASSWORD

	||TAS DONE BY PROCEDURE||
		VERIFY EMAIL ID AND PASSWORD IF CORECT THEN 
		VALUE ENTER IN LOGINSTATUS TABLE
*/	

CREATE PROCEDURE Login @MyEmail VARCHAR(30),@Password varchar(30)
AS BEGIN
	DECLARE @UserID INT,@Email varchar(30)
	SET @Email = LOWER(@MyEmail)
	PRINT @Email
	IF EXISTS (SELECT * FROM Users WHERE Email = @Email)
	BEGIN
		SELECT @UserID = UserID FROM Users WHERE Email = @Email
		IF @Password = (SELECT Password COLLATE SQL_Latin1_General_CP1_CS_AS FROM  Users WHERE UserID = @UserID)
		BEGIN
			INSERT INTO LoginStatus VALUES (@UserID ,GETDATE(),NULL)
		END
		ELSE
		BEGIN
			PRINT 'Wrong Password'
		END
	END
	ELSE 
	BEGIN
		PRINT 'User Dose not exist!!!'
	END
END

EXEC Login 'hinakhaH@gmail.com','pass'
GO


-------------------------ADDTOSUBROUTE------------------------
/*--||ARGUMENTS||
		ADDTOSUBROUTE => ROUTEID, CITYID

	||TAS DONE BY PROCEDURE||
		IT WILL ADD CITY BETWEEN MAIN ROUTE 
		FOR EXAMPLE MAIN ROUTE IS AHMEDABAD TO JUNAGADH 
		THEN RAJKOT IS BETWWEN THIS CITIES
		SO WE WILL ADD THIS ALL CITYID WITH ROUTE ID
*/	

CREATE PROCEDURE AddToSubroute @RouteID INT,@CityID INT
AS BEGIN
	DECLARE @StartCity INT, @Dis FLOAT, 
			@sourceLatitude FLOAT, @sourceLongitude FLOAT, 
			@destinationLatitude FLOAT, @destinationLongitude FLOAT,
			@StartTime TIME
	SELECT @StartTime = FromTime FROM MainRoute WHERE RouteID = @RouteID
	SELECT @StartCity = CityID FROM Cities WHERE CityName = (SELECT CityName FROM Cities WHERE CityID = (SELECT FromCity FROM MainRoute WHERE RouteID = @RouteID))

	SET @Dis = dbo.Distance(@StartCity,@CityID)
	
	INSERT INTO SubRoutes VALUES (@RouteID,@CityID,@Dis,dbo.CalculateTime(@StartTime,@Dis))

END
GO
EXEC AddToSubroute 3,6
EXEC AddToSubroute 3,2
EXEC AddToSubroute 3,1

EXEC AddToSubroute 4,4
EXEC AddToSubroute 4,1
EXEC AddToSubroute 4,2



go


-------------------------------MAIN ROUTE---------------------
/*--||ARGUMENTS||
		InsertMainRoute => FROM CIY, TOCITY, BUSNUMBER, FROMTIME

	||TAS DONE BY PROCEDURE||
		ADD DATA INTO MAIN ROUTE IN WHICH IT ADDS
		BOTH CITIES,TIME OF DEPARCHER AND DESTINATION AND
		BUSNUMBER OF BUS WHICH WILL TRAVEL
*/	

CREATE PROCEDURE InsertMainRoute @FromCity VARCHAR(20),@ToCity VARCHAR(20),@BusNumber VARCHAR(20),@FromTime TIME
AS BEGIN
	DECLARE @FromCityID INT,@ToCityID INT,@ToTime TIME
	SELECT  @FromCityID = CityID FROM Cities WHERE CityName = @FromCity
	SELECT  @ToCityID = CityID FROM Cities WHERE CityName = @ToCity
	SET @ToTime = dbo.CalculateTime(@FromTime,dbo.Distance(@FromCityID,@ToCityID))
	INSERT INTO MainRoute  VALUES (@BusNumber,@FromCityID,@ToCityID,@FromTime,DEFAULT,@ToTime)
	
	
END
GO
EXEC InsertMainRoute 'rajkot','AHMEDABAD','GJ01MH3737','10:00:00'
GO


----------------------------FIND ROUTE---------------------------
/*--||ARGUMENTS||
		FindMyBus => FROM CIY, TOCITY, DATE OF TRAVELING

	||TAS DONE BY PROCEDURE||
	FIND ALL BUSES, THEIR TIMING AND ALL DTAILS
	WHICH ARE RUNNING ON PERTICULAR USER'S ROUTE
*/

CREATE VIEW  RouteWithRank AS 
SELECT *,DENSE_RANK() OVER (PARTITION BY RouteID ORDER BY DistanceFromStartCity) AS 'RANK'  FROM SubRoutes
GO

CREATE VIEW RouteFullDetail AS
SELECT r.* ,b.BusName,b.BusType,b.Rating FROM 
	MainRoute m JOIN Buses b ON m.BusNumber = b.BusNumber 
	JOIN RouteWithRank r ON r.RouteId = m.RouteID where m.ActiveStatus = 1
GO

CREATE PROCEDURE FindMyBus @FromCity varchar(20),@ToCity varchar(20),@MyDate DATE
AS BEGIN
	DECLARE @FromCityID INT,@ToCityID INT
	SELECT  @FromCityID = CityID FROM Cities WHERE CityName = @FromCity
	SELECT  @ToCityID = CityID FROM Cities WHERE CityName = @ToCity
	
	SELECT	r1.RouteId,
			(SELECT CityName FROM Cities WHERE CityID = r1.CityId) 'From',
			(SELECT CityName FROM Cities WHERE CityID = r2.CityId) 'To',
			r2.DistanceFromStartCity - r1.DistanceFromStartCity AS 'Distance',
			r1.ArivalTime 'ArivalTime',
			r2.ArivalTime 'DestinationTime' ,
			r1.BusName,
			r1.BusType,
			r1.Rating

			FROM 
			RouteFullDetail r1 JOIN RouteFullDetail r2 
			ON 
			r1.CityId = @FromCityID 
			AND r2.CityId = @ToCityID 
			AND r1.RouteId = r2.RouteId 
			AND r1.RANK < r2.RANK
END
GO


EXEC FindMyBus 'porbandar','ahmedabad','12-12-2020'
GO

--------------------ADD TRIP-----------------------
/*--||ARGUMENTS||
		AddToTrip => USERID, FROM CIY, TOCITY, BUSNUMBER, TRIPDATE
					 TOTAL SEAT,SEAT NUMBERS

	||TAS DONE BY PROCEDURE||
	AFTER USER'S BOOKING IS CONFIRM THIS WILL ADD ALL DETAIL
	RELATED TO TRIP  INNTO  TTRIP TABLE
*/

CREATE PROCEDURE AddToTrip @UserID INT,
						   @FromCity INT,
						   @ToCity INT,
						   @BusNumber VARCHAR(10),
						   @TripDate DATE,
						   @TotalSeat TINYINT,
						   @SeatNo VARCHAR(30)
AS BEGIN
	INSERT INTO Trip VALUES(@FromCity,@ToCity,@UserID,
							@BusNumber,GETDATE(),@TripDate,
							'confirm',FLOOR(dbo.Distance(1,2)*1.2),@TotalSeat,@SeatNo)

END

EXEC AddToTrip 1,2,3,'GJ01MH3737','12-12-2021',3,'3,5,6'





