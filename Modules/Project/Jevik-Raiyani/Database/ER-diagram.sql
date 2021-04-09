--Assumption:

--A Cinema contains Many Screens
--Each screen contains Many Seats which can Identity With Row and Seat
--One row contains many seats
--Seat also contain Seat type,one seat must be in one type
--One movie can run in many Screens
--one user can buy Many tickets
--one user can log in with one gmail
-- one tickts contains multiple seats
--one movie have multiple cast
-- one movie have multiple director
-- one movie can release in Many languages
-- one ticket contain one movie,one cinema , one screen
--One ticket paid my multiple resources

--STEP: 1___ Identify Entities

--Movies
--Cinemas
--Screens
--Rows
--Seats
--SeatTypes
--Showtime
--Ticket
--User
--Payment method

--Step-2____ Find the relationship

--Cinema-Screen 1-M
--Screen-Row 1-M
--Row-seats 1-M
--Seat-seatType 1-1
--cinema-showtime M-M
--movie-showtime M-M
--Ticket-showtime M-1
--Ticket-seat 1-M
--Ticket- paymentmethod 1-M
--User- Ticket 1-M


--Step-3___ Indentify key Attributes

--Movies > Movieid
--cinema >cinema id
--Screen> screen id
--row> row id
--Seat > seat id
--Seat Type > sea type ID
--Show time> show time id
--Tickets> tickets id
--payment method> payment method id
-- User > Gmail

--Step-4 __ Identify other relavant attributes

--Movies > Movie Name, Release date,Duration,Rating,Language , Cast,
--             Description,Director

--Cinemas> Cinema Name> Address detail, city, Contact no

--Screen> Screen no, capacity

--Rows> Seats in perticular Row

--Seats > seat no

--Seat type > seat type Name(Normal)

--Show time> Start Time of show, Date of show

--Tickets > show detail, Seat detail, price,user detail,payment detail

--User > User name, user_phoneno,Age

--------
--Step5 ER diagram
--ER Diagram ERdiagram.jpg File