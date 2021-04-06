CREATE DATABASE SPICEJET
USE SPICEJET
CREATE TABLE SPICEJETINFO
(
COMPONY_ID int  NOT NULL,
NetworthSpicejet varchar(50) NOT NULL,
Yearinmarket int NOT NULL,
NumberOfEmployee int NOT NULL
)
/*Inserting data into SPICEJETINFO table*/
INSERT INTO SPICEJETINFO VALUES (213,'2.3 MILLION INR',DATEDIFF(YEAR,'01-Jan-2004',GETDATE()),2015)
INSERT INTO SPICEJETINFO VALUES (213,'2.5 MILLION INR',DATEDIFF(YEAR,'01-Jan-2004',GETDATE()),2000)
INSERT INTO SPICEJETINFO VALUES (213,'2.9 MILLION INR',DATEDIFF(YEAR,'01-Jan-2004',GETDATE()),1500)

CREATE TABLE AIRPLANE
(
AirplaneId int PRIMARY KEY NOT NULL,
AirplaneName varchar(50) NOT NULL,
SittingCapacity int NOT NULL,
LastMentananceDate date NOT NULL,
Modal varchar(50) NOT NULL,
Make date NOT NULL
)

/*PROCEDURE FOR INSERTING AIRPLANE  TABLE*/
CREATE PROCEDURE procAirPLane 
@AirPlaneId int,@AirPlaneName varchar(50),@SittingCapacity int
,@LastMentanancedate date,@Modal varchar(50),@Make date
AS
BEGIN
	INSERT INTO AIRPLANE(AirplaneId,AirplaneName,SittingCapacity,LastMentananceDate,Modal,Make)VALUES(@AirPlaneId,@AirPlaneName,@SittingCapacity,@LastMentanancedate,@Modal,@Make)
END

EXECUTE procAirPLane 1,'AIRBUS 292',260,'2008-11-11','AIRBUS','01-Jan-2004'
EXECUTE procAirPLane 2,'AIRBUS 150',210,'2020-Feb-11','AIRBUS','01-Jun-2009'
EXECUTE procAirPLane 3,'AIRBUS 320',210,'2020-Mar-11','AIRBUS','01-Jun-2010'
GO


CREATE TABLE ADDRESSOFAIRPORT(

AddressId int PRIMARY KEY NOT NULL,
ZipCode int NOT NULL,
State varchar(50) NOT NULL,
City varchar(50) NOT NULL,
Country varchar(50) NOT NULL

)
/*CREATE PROCEDURE FOR INSERTING THE DATA INTO  ADDRESSOFAIRPORT*/
CREATE PROCEDURE  procAddressofairport 
@AddressId int,@ZipCode int,@State varchar(50),@City varchar(50),@Country varchar(50)
AS
BEGIN
	INSERT INTO ADDRESSOFAIRPORT(AddressId,ZipCode,State,City,Country) VALUES(@AddressId,@ZipCode,@State,@City,@Country)
END
EXECUTE procAddressofairport 1,1593,'Gujarat','Ahmedabad','India'
EXECUTE procAddressofairport 2,2563,'Tx','Texas','USA'
EXECUTE procAddressofairport 3,5648,'TR','Torento','Cenada'
GO

CREATE TABLE AIRPORT(

AirPortCode int   UNIQUE  NOT NULL,
AirportName varchar(50) PRIMARY KEY NOT NULL,
AirPlaneId int FOREIGN KEY REFERENCES  AIRPLANE(AirplaneId) NOT NULL,
AddressId int NOT NULL,
CONSTRAINT  fkAddressId FOREIGN KEY (AddressId) REFERENCES ADDRESSOFAIRPORT(AddressId),

)
/*CREATE PROCEDURE FOR INSERTING THE DATA INTO AIRPORT*/
CREATE PROCEDURE procAirport 
@AirPortCode int,@Airporname varchar(50),@AirPlaneId int,@AddressId int 
AS
BEGIN 
	INSERT INTO AIRPORT(AirPortCode,AirportName,AirPlaneId,AddressId) VALUES(@AirPortCode,@Airporname,@AirPlaneId,@AddressId)
END

EXECUTE procAirport 153,'SARDAR VALLABHBHI AIRPORT',1,1
EXECUTE procAirport 155,'TEXAS INTERNATIONAL AIR PORT',2,2
EXECUTE procAirport 157,'TORENTO INTERNATIONAL AIRPORT',3,3
GO

CREATE TABLE USERFORBOOKING
(
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Email varchar(50) NOT NULL CONSTRAINT uqEmail UNIQUE ,
	UserType varchar(50) NOT NULL,
	Gender varchar(20) NOT NULL,
	MobliNo int NOT NULL,
	UserId int PRIMARY KEY NOT NULL,
)
/*CREATE PROCEDURE FOR INSERTING THE DATA INTO USERFORBOOKING*/
CREATE PROCEDURE Procforuserbooking 
@FirstName varchar(50),@LastName varchar(20),@Email varchar(50),@UserType varchar
(50),@Gender varchar(50),@MoblieNO varchar(50),@UserId int
AS
BEGIN
	IF(@MoblieNO NOT IN (SELECT MobliNo FROM USERFORBOOKING))
		BEGIN
			 INSERT INTO USERFORBOOKING(FirstName,LastName,Email,UserType,Gender,MobliNo,UserId)
			 VALUES(@FirstName,@LastName,@Email,@UserType,@Gender,@MoblieNO,@UserId)
		END
	ELSE
		BEGIN
			PRINT 'YOU Are AlReady Part Of The Spicejet You Does Not Need To Shre The Details Again'
		END
END
 
EXECUTE Procforuserbooking 'Bhargav','Prajapati','bhargav123@gmail.com','AGENT','MALE','1234567890',1
EXECUTE Procforuserbooking 'Parth','Prajapati','Parth123@gmail.com','NORMAL','MALE','2022335588',2
GO
CREATE TABLE TOTELCOSTOFTRIP
(
CostId int PRIMARY KEY NOT NULL,
TAX float NOT NULL,
Amount float NOT NULL,
DiscountOffer float NOT NULL,
Currency varchar(20) NOT NULL,
FinalAmount float /*Calculated by above parameter*/
)

/*CREATE PROCEDURE FOR INSERTING THE DATA INTO AIRPORT AND CALULATE THE TOTEL COST*/
CREATE PROCEDURE Procfortotelcostoftrip 
@CostId int,@Tax float,@Amount float,@DiscountOffer float,@Currency varchar(50)
AS
BEGIN
	 	DECLARE @FinalAmount float
		SET @FinalAmount=@Amount+(@Amount*@Tax)-(@Amount*@DiscountOffer)
		INSERT INTO TOTELCOSTOFTRIP(CostId,TAX,Amount,DiscountOffer,Currency,FinalAmount) VALUES (@CostId,@Tax,@Amount,@DiscountOffer,@Currency,@FinalAmount)
END
EXECUTE Procfortotelcostoftrip 1,.50,5000,0.60,'DOLLER'
EXECUTE Procfortotelcostoftrip 2,.60,5000,0.80,'INR'
GO

CREATE TABLE FLIGHTTRIP
(
TripId int PRIMARY KEY NOT NULL,
UserId int NOT NULL CONSTRAINT fkUserId FOREIGN KEY  (UserId) REFERENCES USERFORBOOKING(UserId),
Airplaneno int NOT NULL FOREIGN KEY  REFERENCES AIRPLANE(AirplaneId),
Passenger int NOT NULL,
Departdate date NOT NULL,
ArriveDate date NOT NULL,
DepartAirportName varchar(50) NOT NULL CONSTRAINT fkDepartAirportName FOREIGN KEY (DepartAirportName) REFERENCES  AIRPORT(AirportName),
ArriveAirportName varchar(50) NOT NULL CONSTRAINT fkDepartAirportName1 FOREIGN KEY (ArriveAirportName) REFERENCES  AIRPORT(AirportName), 
CostId int  NOT NULL CONSTRAINT fkCostId FOREIGN KEY (CostId) REFERENCES TOTELCOSTOFTRIP(CostId)   
)
/*CREATE PROCEDURE FOR INSERTING THE DATA INTO FLIGHTRIP*/
CREATE PROCEDURE procflighttrip
@TripId int,@UserId int,@AirPlaneNO int,@Passenger int,@DePartDate date,@ArriveDate date,
@DepartAirPortName varchar(50),@ArriveAirPortName varchar(50),@CostId int
AS
BEGIN
	INSERT INTO FLIGHTTRIP(TripId,UserId,Airplaneno,Passenger,Departdate,ArriveDate,DepartAirportName,ArriveAirportName,CostId)
	VALUES (@TripId,@UserId,@AirPlaneNO,@Passenger,@DePartDate,@ArriveDate,@DepartAirPortName,@ArriveAirPortName,@CostId)
END

EXECUTE procflighttrip 1,1,1,5,'30-Mar-2021','2-Apr-2021','SARDAR VALLABHBHI AIRPORT','TEXAS INTERNATIONAL AIR PORT',1
EXECUTE procflighttrip 2,2,2,1,'30-Mar-2021','2-Apr-2021','TEXAS INTERNATIONAL AIR PORT','TORENTO INTERNATIONAL AIRPORT',2
EXECUTE procflighttrip 3,1,3,3,'30-Mar-2021','2-Apr-2021','TORENTO INTERNATIONAL AIRPORT','SARDAR VALLABHBHI AIRPORT',1
GO
CREATE TABLE SEAT(
SeatNo int PRIMARY KEY NOT NULL,
StatusOfSit bit  NOT NULL,
Location varchar(50) NOT NULL,
Class varchar(50) NOT NULL
)
/*CREATE PROCEDURE FOR INSERTING THE DATA INTO SEAT*/
CREATE PROCEDURE procSeat
@SeatNo int,@StatusOfSit bit,@Location varchar(50),@Class varchar(50)
AS
BEGIN
	INSERT INTO SEAT(SeatNo,StatusOfSit,Location,Class)VALUES(@SeatNo,@StatusOfSit,@Location,@Class)
END
EXECUTE procSeat 1,1,'CENTER','ECONOMY'
EXECUTE procSeat 2,0,'WINDOW SIDE','BUSINESS'
EXECUTE procSeat 3,0,'LEFT','ECHONOMY'
GO

CREATE TABLE TRAVELLLER 
(
TripId  int NOT NULL  FOREIGN KEY REFERENCES FLIGHTTRIP(TripId),
FirstName varchar(50) NOT NULL,
LastName varchar(50) NOT NULL,
PassportNo varchar(50)  UNIQUE NOT NULL,
MoblileNo varchar(50) UNIQUE NOT NULL,
Email varchar(50) UNIQUE NOT NULL,
PNRNO  varchar(50) PRIMARY KEY NOT NULL,
Statusofflight Bit NOT NULL,
PaymentStatus Bit NOT NULL,
SeatNo int NOT NULL CONSTRAINT fkSeatNo FOREIGN KEY (SeatNo) REFERENCES SEAT(SeatNo),
BookingDate date NOT NULL,
CheckInDatetime datetime NOT NULL,
Triptype varchar(20) NOT NULL,
AirplaneId int NOT NULL FOREIGN KEY REFERENCES AIRPLANE(AirplaneId),
Arrivefrom varchar(50) NOT NULL FOREIGN KEY REFERENCES AIRPORT(AirportName),
DepartFrom varchar(50) NOT NULL FOREIGN KEY REFERENCES AIRPORT(AirportName),
CostId int  NOT NULL FOREIGN KEY (CostId) REFERENCES TOTELCOSTOFTRIP(CostId)   

)

/*CREATE PROCEDURE FOR INSERTING THE DATA INTO TRAVELLER*/
CREATE OR ALTER PROCEDURE forTraveller
@TripId int,@FirstName varchar(50),@LastName varchar(50),@PassPortNo varchar(50),
@MoblieNo varchar(50),@Email varchar(50),@PNRNO varchar(50),@StatusOfFlight Bit,@PayMentStatus Bit,@SeatNo int,@BookingDate date,
@CheckInDateTime Datetime,@TripType varchar(50),@ArrviveFrom varchar(50),@DepartFrom varchar(50),@CostId int,@AirPlaneId int
AS
BEGIN
	IF(@StatusOfFlight=1)
		BEGIN
			IF(@PassPortNo NOT IN (SELECT PassportNo FROM TRAVELLLER))
				BEGIN
					INSERT INTO TRAVELLLER(TripId,FirstName,LastName,PassportNo,MoblileNo,Email,PNRNO,Statusofflight,PaymentStatus,SeatNo,BookingDate,CheckInDatetime,Triptype,Arrivefrom,DepartFrom,CostId,AirplaneId) VALUES(@TripId,@FirstName,@LastName,@PassPortNo,@MoblieNo,@Email,
					@PNRNO,@StatusOfFlight,@PayMentStatus,@SeatNo
					,@BookingDate,@CheckInDateTime,@TripType,@ArrviveFrom,@DepartFrom,@CostId,@AirPlaneId)
				END
			ELSE
				PRINT 'YOU ARE ALREADY BOOKIN THE ONE FLIGHT'
		END
		ELSE
			PRINT 'SORRY FLIGHT IS NOT AVAILABLE'
END

EXECUTE forTraveller 1,'abc','def','1555dfdd','156874223','abc@gmail.com','adsdsa12',1,1,1,'28-Mar-2021','30-Mar-2021','ONE WAY','SARDAR VALLABHBHI AIRPORT','TEXAS INTERNATIONAL AIR PORT',1,1
GO

CREATE TABLE CheckIn(
PNRNO  varchar(50) PRIMARY KEY NOT NULL,
Email varchar(50) UNIQUE NOT NULL,
FirstName varchar(50) NOT NULL

)
CREATE TABLE BOOKINGMANAGER
(
PNRNO  varchar(50) NOT NULL,
Email varchar(50) UNIQUE NOT NULL,
FirstName varchar(50) NOT NULL
)
/*CREATE THE TRIGGER FOR INSERTING THE DATA INTO CheckIn AND BOOKINGMANAGER*/
CREATE TRIGGER trTraveller ON TRAVELLLER
AFTER INSERT
AS
BEGIN
DECLARE @PNRNumber varchar(50),@FirstName1 varchar(50),@Email varchar(50)
SET @PNRNumber= (SELECT PNRNO FROM inserted WHERE PNRNO=(SELECT TOP 1 PNRNO FROM inserted ORDER BY  PNRNO DESC ))
SET @FirstName1= (SELECT FirstName FROM inserted WHERE PNRNO=(SELECT TOP 1 PNRNO FROM inserted ORDER BY  PNRNO DESC ))
SET @Email= (SELECT Email FROM inserted WHERE PNRNO=(SELECT TOP 1 PNRNO FROM inserted ORDER BY  PNRNO DESC ))
	
	INSERT INTO CheckIn(PNRNO,FirstName,Email) VALUES (@PNRNumber,@FirstName1,@Email)
	INSERT  INTO  BOOKINGMANAGER (PNRNO,FirstName,Email) VALUES (@PNRNumber,@FirstName1,@Email)
	
END

/*CREATE THE VIEW FOR THE SHOW THE DETAILS FOR THE CheckInDealis*/
CREATE OR ALTER VIEW CheckinDetails
AS	
SELECT chk.FirstName,tr.LastName,chk.Email,tr.SeatNo,tr.BookingDate,chk.PNRNO,tr.CheckInDatetime,tr.Triptype,tr.Arrivefrom ,tr.DepartFrom,tc.FinalAmount 
FROM TRAVELLLER tr JOIN CheckIn chk ON tr.PNRNO =chk.PNRNO JOIN TOTELCOSTOFTRIP tc ON tr.CostId=tc.CostId  
GO
/*CREATE THE VIEW FOR THE SHOW THE DETAILS FOR THE Bookingdetils*/
CREATE OR ALTER VIEW BookingDetails  
AS
SELECT bkm.FirstName,tr.LastName,tr.MoblileNO,tr.PassportNo,tr.Statusofflight,tr.SeatNo,tr.BookingDate,bkm.PNRNO,tr.Triptype,tr.Arrivefrom ,tr.DepartFrom,tc.FinalAmount 
FROM TRAVELLLER tr 
JOIN BOOKINGMANAGER bkm ON tr.PNRNO=bkm.PNRNO  JOIN TOTELCOSTOFTRIP tc ON tr.CostId=tc.CostId
GO
/*CREATE PROCEDURE FOR THE  VALIDATION OF CheckIn Details */
CREATE PROCEDURE viewCheckIn @PNRNO varchar(50)
AS 
BEGIN
	IF(@PNRNO NOT IN(SELECT PNRNO FROM CheckIn))
		BEGIN
			PRINT 'PNR NUMBER IS NOT AVAILABLE PLESE CHECK YOUR PNR NUMBER'
		END
	ELSE
		BEGIN
			SELECT * FROM CheckinDetails WHERE PNRNO=@PNRNO
		END
END


EXECUTE viewCheckIn 'adsdsa12'
--EXECUTE viewCheckIn 'sfdsfdf'
GO
/*CREATE THE VIEW FOR THE VALIDATION OF Booking DETAILS*/
CREATE PROCEDURE viewManageBooking @PNRNO varchar(50)
AS 
BEGIN
	IF(@PNRNO NOT IN(SELECT PNRNO FROM BOOKINGMANAGER))
		BEGIN
			PRINT 'PNR NUMBER IS NOT AVAILABLE PLESE CHECK YOUR PNR NUMBER'
		END
	ELSE
		BEGIN
			SELECT * FROM BookingDetails WHERE PNRNO=@PNRNO
		END
	END

EXECUTE viewCheckIn 'adsdsa12'
--EXECUTE viewCheckIn 'sfdsfdf'
GO


/*CREATE PROCDURE CANCEL BOOKING TICKET */

CREATE PROCEDURE  clbooking @PNRNO varchar(50)
AS
BEGIN
	IF(@PNRNO IN (SELECT PNRNO FROM TRAVELLLER))
		BEGIN
			DELETE FROM TRAVELLLER WHERE PNRNO=@PNRNO
			DELETE FROM CheckIn WHERE PNRNO=@PNRNO
			DELETE FROM BOOKINGMANAGER WHERE PNRNO=@PNRNO
			PRINT 'SUCCESSFULLY CANCEL FLIGHT'
		END
	ELSE
		BEGIN
			PRINT 'PNR NUMBER  IS NOT FOUNTD'
		END
END

EXECUTE clbooking 'adsdsa12'



------------------------Hotel Booking system---------------------------------

CREATE TABLE ADDRESS 
(
	AddressId int PRIMARY KEY NOT NULL,
	COUNTRY varchar(50) NOT NULL,
	Zip int NOT NULL,
	State varchar(50) NOT NULL,
	City varchar(50) NOT NULL
)

/* PROCEDURE FOR INSERTING THE DATA INTO ADDRESS*/
CREATE PROCEDURE ProcAddress
@AddressId int ,@Country varchar(50),@Zip int,@State varchar(50),@City varchar(50)
AS
BEGIN
	INSERT INTO ADDRESS(AddressId,COUNTRY,Zip,State,City)VALUES(@AddressId,@Country,@Zip,@State,@City)
END

EXECUTE ProcAddress 1,'INDIA',1593,'GUJARAT','AHMEDABAD'
EXECUTE ProcAddress 2,'USA',2563,'Tx','Texas'
EXECUTE ProcAddress 3,'Cenada', 5648,'TR','Torento'
GO


CREATE TABLE GUSTES 
(
	
	GustId int PRIMARY KEY NOT NULL ,
	GustName varchar(50) NOT NULL,
	MobileNo varchar(50) NOT NULL,
	NumberOfPerson  int  NOT NULL,
	EmailId varchar(50) NOT NULL,
	AddressId int NOT NULL FOREIGN KEY REFERENCES ADDRESS(AddressId)
)
CREATE TABLE  chkbooking
(
	GustName varchar(50) NOT NULL,
	MobileNo varchar(50) NOT NULL

)

CREATE TRIGGER trgustes ON GUSTES  
AFTER INSERT
AS
BEGIN
DECLARE @GustName varchar(50),@MobileNo varchar(50)
	SET @GustName=(SELECT GustName FROM inserted WHERE GustId=(SELECT TOP 1 GustId FROM inserted ORDER BY GustId DESC))	
	SET @MobileNo=(SELECT MobileNo FROM inserted WHERE GustId=(SELECT TOP 1 GustId FROM inserted ORDER BY GustId DESC))	
	INSERT INTO chkbooking(GustName,MobileNo) VALUES(@GustName,@MobileNo)
	
END

/* PROCEDURE FOR INSERTING THE DATA INTO GUSTES*/
CREATE PROCEDURE procGuest 
@GustId int,@GustName varchar(50),@MobileNo varchar(50),@NumberOfPerson int,@EmailId varchar(50),@AddressId int
AS
BEGIN
		INSERT INTO GUSTES(GustId,GustName,MobileNo,NumberOfPerson,EmailId,AddressId)VALUES(@GustId,@GustName,@MobileNo,@NumberOfPerson,@EmailId,@AddressId) 
END

EXECUTE procGuest 1,'ABC','1234567890',5,'abc@gmail.com',1
EXECUTE procGuest 2,'DEF','0987654321',2,'def@gmail.com',2
EXECUTE procGuest 3,'GHI','1237894560',3,'ghi@gmail.com',3
GO

/* TRIGGER FOR  INSERTING THE DATA INTO THE chkbooking*/



CREATE TABLE HOTELCONTECTINFO
(
 ContectId int PRIMARY KEY NOT NULL,
 HotelMobileNo varchar(50) NOT NULL,
 Email varchar(50) NOT NULL
)
/* PROCEDURE FOR INSERTING THE DATA INTO HOTELCONTECTINFO*/
CREATE PROCEDURE procHotelContectinfo 
@ContectId int,@HotelMobileNo varchar(50),@Email varchar(50) 
AS
BEGIN
	 INSERT INTO HOTELCONTECTINFO(ContectId,HotelMobileNo,Email)VALUES(@ContectId,@HotelMobileNo,@Email)
	 
END
EXECUTE procHotelContectinfo 1,'+91 5984848464','awx@gmail.com'
EXECUTE procHotelContectinfo 2,'+41 468154','sasas@gmail.com'
EXECUTE procHotelContectinfo 3,'+59 588854','sdddccvds@gmail.com'
GO


CREATE TABLE HOTEL
(
HotelId int PRIMARY KEY NOT NULL,
Name varchar(50) NOT NULL,
Address varchar(50) NOT NULL,
HotelRating int NOT NULL,
NumberOfRoom int NOT NULL,
ContectId int NOT NULL FOREIGN KEY REFERENCES HOTELCONTECTINFO(ContectId), 
)
/* CREATE PROCEDURE FOR INSERTING THE DATA INTO HOTEL*/
CREATE PROCEDURE procHotel
@HotelId int , @Name varchar(50),@Address varchar(50),@HotelRating int,@Numberofroom int,@ContectId int
AS
BEGIN
	 INSERT INTO HOTEL(HotelId,Name,Address,HotelRating,NumberOfRoom,ContectId) VALUES(@HotelId,@Name,@Address,@HotelRating,@Numberofroom,@ContectId)
END

EXECUTE procHotel 1,'awx','AHMEDABAD',4,200,1
EXECUTE procHotel 2,'sasas','TEXAS',3,400,2
EXECUTE procHotel 3,'sdddccvds','TORENTO',6,150,3
GO
CREATE TABLE ROOM
(
	RoomId int NOT NULL,
	RoomNo varchar(10) NOT NULL,
	HotelId int NOT NULL FOREIGN KEY REFERENCES HOTEL(HotelId),
	RoomStatus Bit  NOT NULL,
	CheckInDate Date NOT NULL,
	CheckOutDate Date NOT NULL,
)

/* CREATE PROCEDURE FOR INSERTING THE DATA INTO ROOM*/
CREATE PROCEDURE procroom 
@RoomId int,@Roomno int,@HotelId int,@RoomStatus bit, @CheckInDate date,@CheckOutDate date 
AS
BEGIN
	INSERT INTO ROOM(RoomId,RoomNo,HotelId,RoomStatus,CheckInDate,CheckOutDate)VALUES(@RoomId,@Roomno,@HotelId,@RoomStatus,@CheckInDate,@CheckOutDate) 
END
EXECUTE procroom  1,114,1,0,'15-Mar-2020','17-Mar-2020'
EXECUTE procroom 2,222,2,0,'22-Apr-2020','26-Apr-2020'
EXECUTE procroom 3,147,3,0,'09-May-2020','15-May-2020'
GO
CREATE TABLE PAYMENT
(
PaymentId int PRIMARY KEY NOT NULL,
PaymentType varchar(50) NOT NULL,
Paymentdate date NOT NULL,
PaymentStatus bit NOT NULL,
TotelAmount float NOT NULL,
Gst float NOT NULL,
Amount float NOT NULL,
HotelId  int NOT NULL  FOREIGN KEY REFERENCES HOTEL(HotelId),
GustId int NOT NULL FOREIGN KEY REFERENCES GUSTES (GustId)
)

/* CREATE PROCEDURE FOR INSERTING THE DATA INTO PAYMENT*/
CREATE OR ALTER PROCEDURE procpayment
@PamentId int,@PaymentType varchar(50),@PaymentDate varchar(50),@PaymentStatus bit,
@Gst float,@Amount float,@HotelId int,@GustId int
AS
BEGIN
DECLARE @TotelPayment float
SET @TotelPayment= @Amount+@Amount*@Gst
INSERT INTO PAYMENT(PaymentId,PaymentType,Paymentdate,PaymentStatus,TotelAmount,Gst,Amount,HotelId,GustId)VALUES
(@PamentId,@PaymentType,@PaymentDate,@PaymentStatus,@TotelPayment,@Gst,@Amount,@HotelId,@GustId)
END


EXECUTE procpayment 1,'CASH','15-Mar-2020',1,0.25,5000,1,1
EXECUTE procpayment 2,'GOOGLE PAY','22-Apr-2020',1,0.7,7000,2,2
EXECUTE procpayment 3,'PHONE PAY','09-May-2020',1,0.8,10000,3,3





/* CREATE VIEW FOR SHOW THE PARTICULAR DATA OF THE PARTICULAR BOOOKING GUSTES */
CREATE OR ALTER VIEW forViewDetails1
AS 
SELECT gt.GustName,gt.EmailId,gt.MobileNo,gt.NumberOfPerson,pt.PaymentStatus,pt.Paymentdate,pt.TotelAmount,pt.PaymentType,ht.Name,ht.Address
FROM GUSTES gt LEFT OUTER JOIN PAYMENT pt ON gt.GustId=pt.GustId JOIN HOTEL ht ON pt.HotelId=ht.HotelId 
GO


CREATE OR ALTER PROCEDURE ViewDetails @GustName varchar(50) ,@Mobileno varchar(50)
AS
BEGIN
	IF(@GustName IN (SELECT GustName FROM chkbooking) AND  @Mobileno IN(SELECT MobileNo FROM chkbooking))
		BEGIN
			SELECT * FROM forViewDetails1 WHERE MobileNo=@Mobileno AND GustName=@GustName
		END
	ELSE
		PRINT 'PLEASE CHECK YOUR MOBILE NUMBER AND GUSTNAME'
END

EXECUTE ViewDetails 'ABC','1234567890'
/*EXECUTE ViewDetails 'DEF','4575757'*/



/*CENCLE HOTEL BOOKING*/

CREATE PROCEDURE  clhotel 
@GustName varchar(50) ,@Mobileno varchar(50)
AS 
BEGIN
	IF(@GustName IN (SELECT GustName FROM GUSTES) AND @Mobileno IN(SELECT MobileNo FROM GUSTES))
		BEGIN
			DELETE FROM chkbooking WHERE GustName=@GustName AND MobileNo=@Mobileno
		PRINT 'SUCCESSFULLY CANCEL HOTEL'
		END
	ELSE
		BEGIN
			PRINT 'GUSTNAME AND MOBILE NO  IS NOT FOUNTD'
		END
END

EXECUTE clhotel 'ABC','1234567890'