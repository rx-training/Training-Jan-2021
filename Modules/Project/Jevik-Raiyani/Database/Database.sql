CREATE DATABASE inoxMovies

USE inoxMovies

--Make all the Tables..
-- I made tables Using database diagram which I give as PDF diagram.pdf
-- I made all the tables WITH PRIMARY and Foreign key
-- Make new table for multi valued data CAST and Director(Normalization)

--Now I am adding UNIQUE keys to remove duplication

ALTER TABLE Screens
ADD CONSTRAINT UkCinemaIDScreenNo UNIQUE(CinemaID,ScreenNo)
-- Row table I added RowNo

ALTER TABLE Rows
ADD CONSTRAINT UkRowIDScreenID UNIQUE(RowNo,ScreenID)

ALTER TABLE Seats
ADD CONSTRAINT UkRowIDSeatNo UNIQUE(RowID,SeatNo)

ALTER TABLE ShowTime
ADD CONSTRAINT UkmIDsIDsTIMEdate UNIQUE(MovieID,ScreenID,StartTime,Date)

ALTER TABLE Tickets
ADD CONSTRAINT UkshowTimeSeatID UNIQUE(ShowtimeId,SeatID)

ALTER TABLE Cinema
ADD CONSTRAINT Ukcinemaall UNIQUE(CinemaName,CinemaAddress,Cinemapincode,Cinemacity,Cinemacontactno)

ALTER TABLE MovieDirectorCast
ADD CONSTRAINT UkMovieIDNameIDRole UNIQUE(MovieID,NameID,Role)

--Made all the table Now insert data Via Ui

ALTER TABLE Showtime
Add  StartTime Time NOT NULL

--MAking Views

CREATE VIEW vTransactionHistory
AS
SELECT TicketID,t.ShowTimeID,t.SeatID,t.Price,t.UserGmail,p.PaymentMethod,
		t.PaymentDetail,s.Date,s.StartTime,t.date 'Payment Date'
FROM Tickets t
JOIN ShowTime s
ON t.ShowTimeID=s.ShowTimeID
JOIN PaymentMethod p
ON t.PaymentID= p.PaymentId
----------------
CREATE VIEW vCastofmovie
AS
SELECT m.MovieName,d.Name,md.Role,d.Gender
FROM Movies m
JOIN MovieDirectorCast  md
ON m.MovieID=md.MovieID
JOIN DirectorCast d
ON md.NameID= d.NameID

--made procedure to get cast name for perticular moive
CREATE PROCEDURE moviecast @movie varchar(30)
AS
SELECT m.MovieName,d.Name,md.Role,d.Gender
FROM Movies m
JOIN MovieDirectorCast  md
ON m.MovieID=md.MovieID
JOIN DirectorCast d
ON md.NameID= d.NameID
WHERE @movie= m.MovieName
GO

EXEC moviecast @movie ='Shaho'
---
CREATE VIEW vCinemaScreen	
AS
SELECT c.CinemaID,c.CinemaName,c.CinemaAddress,c.CinemaPincode,c.CinemaCity,
		s.ScreenID,s.ScreenNo,s.Capacity
FROM Cinema c
JOIN Screens s
ON c.CinemaID =s.CinemaID
--------------
CREATE Procedure citytotalScreen @city varchar(20)
AS
SELECT c.CinemaID,c.CinemaName,c.CinemaAddress,c.CinemaPincode,c.CinemaCity,
		s.ScreenID,s.ScreenNo,s.Capacity
FROM Cinema c
JOIN Screens s
ON c.CinemaID =s.CinemaID
WHERE @city =c.CinemaCity
GO

 EXEC citytotalScreen @city = 'Rajkot'
---------------
CREATE PROCEDURE ScreenCapacity @cinemaID int,@screenno int 
AS
SELECT s.Capacity FROM Screens s
WHERE s.CinemaID= @cinemaID AND s.ScreenNo =@screenno
GO

EXEC ScreenCapacity 1,3
------------------
 CREATE PROCEDURE cityCinema @city varchar(20)
 AS
 SELECT CinemaName,CinemaAddress,CinemaPincode,CinemaContactNo FROM Cinema
 WHERE @city=CinemaCity

 EXEC cityCinema @city = 'Rajkot'
 -------------------
Create PROCEDURE AllSeatsOfScreen @cinemaID int,@screenno int 
AS
SELECT RowNo,SeatNo,Name FROM Screens s
join Rows r
ON s.ScreenID=r.ScreenId
join Seats se
ON r.RowId=se.RowId
Join SeatType st
ON se.SeatTypeID=st.SeatTypeID
WHERE s.CinemaID= @cinemaID AND s.ScreenNo =@screenno
GO

EXEC AllSeatsOfScreen 1,3
--------
CREATE VIEW UserBookingHistory
AS
SELECT u.UserGmail,u.UserName,u.UserPhoneNo,u.age,t.TicketID,t.ShowTimeID,t.SeatID,t.Price
		,t.PaymentID,t.PaymentDetail,t.Date
FROM [User] u
JOIN Tickets t
ON u.UserGmail=t.UserGmail
------------

CREATE PROCEDURE Userfullhistory @gmail varchar(30)
AS
SELECT *
FROM Tickets 
WHERE UserGmail=@gmail
GO

EXEC Userfullhistory 'jeivk@gmail.com'
--------------

---seatid must be from that secreen For that Use Trigger
--------------
CREATE TRIGGER validseat 
ON Tickets
AFTER  INSERT 
as	
	SELECT SeatID FROM inserted WHERE SeatID IN
	(SELECT s.SeatID FROM Seats s
	JOIN Rows r
	ON s.RowId=r.RowId
	JOIN ShowTime st
	ON st.ScreenID=r.ScreenId
	WHERE st.ShowTimeID= (
	SELECT ShowTimeID FROM inserted)
	)
	IF @@ROWCOUNT=0
	Rollback
GO

INSERT INTO Tickets
VALUES (3,1,2,110,'jeivk@gmail.com',1,'done',GETDATE())--faild.. row id is not available


INSERT INTO Tickets
VALUES (3,3,2,110,'jeivk@gmail.com',1,'done',GETDATE())

INSERT INTO Tickets
VALUES (4,2,2,110,'jeivk@gmail.com',1,'done',GETDATE())--faild.. row id is not available
---------

CREATE PROCEDURE seatsPerticularShow @showtimeid int
AS
	SELECT s.SeatID,s.SeatNo FROM Seats s
	JOIN Rows r
	ON s.RowId=r.RowId
	JOIN ShowTime st
	ON st.ScreenID=r.ScreenId
	WHERE ShowTimeID = @showtimeid

EXEC seatsPerticularShow 3
-------------

CREATE INDEX i1
ON Tickets (date desc)--it will use full to see latest tran.
--------------

CREATE INDEX i2
ON Movies(ReleaseDate DESC)--It will help to see latest movies
----------------

CREATE INDEX i3
ON showtime(date , starttime)----to see nearest show id
------------------

CREATE PROCEDURE movieCity @moviename varchar(30) ,@city varchar(30) 
AS
BEGIN
	SET NOCOUNT ON
	SELECT * FROM ShowTime
	WHERE MovieID=(SELECT MovieID FROM Movies WHERE MovieName=@moviename) AND
	ScreenID IN(SELECT ScreenID FROM Screens WHERE CinemaID IN(
	SELECT CinemaID FROM Cinema WHERE CinemaCity=@city))
	SET NOCOUNT OFF
END
GO

EXEC movieCity 'Shaho','Rajkot'--Give total show of perticular movie in perticular city
-----------------------

CREATE PROCEDURE movieCityDate @moviename varchar(30) ,@city varchar(30) ,@date date
AS
BEGIN
	SET NOCOUNT ON
	SELECT * FROM ShowTime
	WHERE MovieID=(SELECT MovieID FROM Movies WHERE MovieName=@moviename) AND
	ScreenID IN(SELECT ScreenID FROM Screens WHERE CinemaID IN(
	SELECT CinemaID FROM Cinema WHERE CinemaCity=@city))
	AND Date=@date
	SET NOCOUNT OFF
END
GO

EXEC movieCityDate 'Shaho','Rajkot','2021-03-27'

EXEC movieCityDate 'Shaho','Rajkot','2021-03-30'

-----------------------
--perticulat cinema, date , movie
--give different showtime in one cinema ,movie , date

CREATE PROCEDURE CinemaMovieDate @cinemaid int, @moviename varchar(30)  ,@date date
AS
BEGIN
	SET NOCOUNT ON
	SELECT * FROM ShowTime
	WHERE MovieID=(SELECT MovieID FROM Movies WHERE MovieName=@moviename) AND
	ScreenID IN(SELECT ScreenID FROM Screens WHERE CinemaID=@cinemaid)
	AND Date=@date
	SET NOCOUNT OFF
END
GO

EXEC CinemaMovieDate 1,'Shaho','2021-03-27'

EXEC CinemaMovieDate 1,'Shaho','2021-03-30'




-- 1 user can book many seats for that I made new table 
CREATE TABLE NoOfTickets
(
	TicketID int fk_tickets FOREIGN KEY REFERENCES Tickets(TicketID) NOT NULL,
	SeatID int not NULL,
	NameOfViewer varchar(30) NOT NULL,
	Age int NOT NULL,
	Price int not null
)

-- now we can alter table of tickets 
-------remove price,seatid
-------add trice as total price of ticket id in NoOfTickets

SELECT SUM(Price) FROM NoOfTickets
GROUP BY TicketID 
-- Set this value to respective TicketId in Ticket Table

-- Also we can create food items and add to ticket bill

SELECT * FROM Movies
SELECT * FROM DirectorCast
SELECT * FROM MovieDirectorCast
SELECT * FROM Cinema
SELECT * FROM Screens
SELECT * FROM Rows
SELECT * FROM Seats
SELECT * FROM SeatType
SELECT * FROm ShowTime
SELECT * FROM Tickets
SELECT * FROM [User]
SELECT * FROM PaymentMethod

