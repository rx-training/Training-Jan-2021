CREATE DATABASE AirIndia

USE AirIndia

--================      Flight table    ================

CREATE TABLE Flight 
	(
		FlightID INT NOT NULL PRIMARY KEY,
		Filght_takeoff_point VARCHAR(100) NOT NULL , 
		Flight_destination VARCHAR(100) NOT NULL ,
		Flight_datetime DATETIME NOT NULL , 
		Take_off_Time DATETIME NOT NULL , 
		Landing_Time DATETIME NOT NULL 
	)

-- =====================      Airport        =========================

CREATE TABLE Airport 
	(
		AirportID INT NOT NULL PRIMARY KEY ,
		AirportName VARCHAR(100) NOT NULL,
		Country VARCHAR(80) NOT NULL , 
		State VARCHAR(80) NOT NULL,
		City VARCHAR(80) NOT NULL
	)


-- ====================      Seat        ===============

CREATE TABLE Seat 
	(
		SeatID INT NOT NULL PRIMARY KEY , 
		Seatnumber VARCHAR(100) NOT NULL
	)


--  ========================     Aircraft          =======================

CREATE TABLE Aircraft 
	(
		AircraftID INT NOT NULL PRIMARY KEY ,
		Aircraft_type VARCHAR(100) NOT NULL ,
		Aircraft_number VARCHAR(100) NOT NULL , 
		SeatID INT NOT NULL FOREIGN KEY (SeatID) REFERENCES Seat(SeatID)
	)


-- =========================       Route               ====================

CREATE TABLE Route
	(
		RouteID INT NOT NULL PRIMARY KEY ,
		AircraftID INT NOT NULL FOREIGN KEY (AircraftID) REFERENCES Aircraft(AircraftID) , 
		RouteCode VARCHAR(50) NOT NULL ,
		Source_point varchar(100) NOT NULL ,
		Destination_pointer VARCHAR(100) NOT NULL
	)

-- ===================      Runway            ========================

CREATE TABLE Runway 
	(
		RunwayID INT NOT NULL PRIMARY KEY , 
		RunwayName VARCHAR(80) NOT NULL ,
		Runway_control_office VARCHAR(150) NOT NULL
	)

-- ===================    Flight_schedule (junction point)        =================

CREATE TABLE Flight_schedule
	(
		Flight_scheduleID INT NOT NULL PRIMARY KEY ,
		FlightID INT NOT NULL FOREIGN KEY (FlightID) REFERENCES Flight(FlightID),
		AircraftID INT NOT NULL FOREIGN KEY (AircraftID) REFERENCES Aircraft(AircraftID),
		RunwayID INT NOT NULL FOREIGN KEY (RunwayID) REFERENCES Runway(RunwayID) ,
		RouteID INT NOT NULL FOREIGN KEY (RouteID) REFERENCES Route(RouteID),
		AirportID INT NOT NULL FOREIGN KEY (AirportID) REFERENCES Airport(AirportID)
		
	)

--============            Air_fare          ==========

CREATE TABLE Air_fare
	(
		AirfareID INT NOT NULL PRIMARY KEY ,
		RouteID INT NOT NULL FOREIGN KEY (RouteID) REFERENCES Route(RouteID) , 
		fare_amount Money NOT NULL 
	)

-- =============    Address                 ====================

CREATE TABLE Address
	(
		AddressID INT NOT NULL PRIMARY KEY , 
		Country VARCHAR(80) NOT NULL ,
		State VARCHAR(80) NOT NULL ,
		City VARCHAR(80) NOT NULL ,
		Street VARCHAR(150) NOT NULL , 
		Pincode VARCHAR(20) NOT NULL , 
	)

-- =====================   Contact            ========================

CREATE TABLE Contact_details
	(
		ContactID INT NOT NULL PRIMARY KEY ,
		Phone_number BIGINT NULL ,
		Country_code VARCHAR(8) NULL , 
		Mo_number BIGINT NULL , 
		Primary_email NVARCHAR(255) NOT NULL , 
		Secondary_email NVARCHAR(255) NULL 
	)

-- =================      Security_questions           ==========================

CREATE TABLE Security_questions
	(
	Security_questionID INT NOT NULL PRIMARY KEY ,
	Question_text NVARCHAR(255) NOT NULL , 
	Answer VARCHAR(80) NOT NULL
	)


--================        Passenger                  ============== 

CREATE TABLE Passenger
	(
		PassengerID INT NOT NULL PRIMARY KEY ,
		Title VARCHAR(8) NOT NULL ,
		Gender VARCHAR(10) NOT NULL ,
		First_name VARCHAR(50) NOT NULL ,
		Last_name VARCHAR(50) NOT NULL , 
		Name_on_card VARCHAR(100) NOT NULL ,
		DOB DATE NOT NULL , 
		Mothers_maiden_name VARCHAR(80) NOT NULL ,
		Nationality VARCHAR(50) NOT NULL ,
		Country VARCHAR(50) NOT NULL , 
		Passport_number VARCHAR(50) NOT NULL , 
		Passport_expiry_date DATE NOT NULL , 
		Id_proof_photo VARCHAR(MAX) NOT NULL ,
		AddressID INT NOT NULL FOREIGN KEY (AddressID) REFERENCES Address(AddressID) , 
		ContactID INT NOT NULL FOREIGN KEY (ContactID) REFERENCEs Contact_details(ContactID) ,
		Password VARCHAR(50) NOT NULL ,
		Update_permission VARCHAR(100) NOT NULL , 
		Security_questionsID INT NOT NULL FOREIGN KEY(Security_questionsID) REFERENCES Security_questions(Security_questionID)
	)

-- ===============    Passenger_paference            ======================= 

CREATE TABLE Passenger_paference
	(
		Passenger_preferenceID INT NOT NULL PRIMARY KEY ,
		PassengerID INT NOT NULL FOREIGN KEY (PassengerID) REFERENCES Passenger(passengerID) , 
		Frequent_flayer_program NVARCHAR(255) NOT NULL , 
		Frequent_flayer_number INT NOT NULL , 
		Meal_selection VARCHAR(100) NULL , 
		Add_gst_info VARCHAR(150) NULL , 
		Special_assistance_request VARCHAR(150) NULL , 
		Adults INT NULL , 
		Childerns INT NULL , 
		Infants INT NULL , 
		Promotion_code INT NULL
	)

-- ======================        Branches                  ======================= 

CREATE TABLE Brances
	(
		BranchID INT NOT NULL PRIMARY KEY ,
		BranchName VARCHAR(100) NULL , 
		AddressID INT NOT NULL FOREIGN KEY (AddressID) REFERENCES Address(AddressID) , 
	)

--=================           Payment_details             ======================= 

CREATE TABLE Payment_details
	(
		PaymentID INT NOT NULL PRIMARY KEY ,
		PassengerID INT NOT NULL FOREIGN KEY (PassengerID) REFERENCES Passenger(PassengerID) , 
		CardNumber BIGINT NOT NULL ,
		Expiration_date DATE NOT NULL , 
		CVV_CSV INT NOT NULL , 
		Card_holder_name VARCHAR(100) NOT NULL ,
		AddressID INT FOREIGN KEY (AddressID) REFERENCES Address(AddressID) , 
		Bank_name VARCHAR(100) NOT NULL , 
		Virtual_payment_address VARCHAR(80) NOT NULL 
	)

--=============      Booking_transaction            ====================== 

CREATE TABLE Booking_transaction 
	(
		Booking_transactionID INT PRIMARY KEY ,
		Booking_datetime DATETIME NOT NULL , 
		PassengerID INT NOT NULL FOREIGN KEY (PassengerID) REFERENCES Passenger(PassengerID) ,
		SeatID INT NOT NULL FOREIGN KEY (SeatID) REFERENCES Seat(SeatID) , 
		FlightID INT NOT NULL FOREIGN KEY (FlightID) REFERENCES Flight(FlightID),
			RouteID INT NOT NULL FOREIGN KEY (RouteID) REFERENCES Route(RouteID) , 
		Booking_type VARCHAR(80) NOT NULL ,
		Ticket_fare MONEY NOT NULL , 
		Special_req_fare MONEY NOT NULL , 
		AirfareID INT NOT NULL FOREIGN KEY (AirfareID) REFERENCES Air_fare(AirfareID) ,  
		Total_amount MONEY NOT NULL  , 
		Discount MONEY NOT NULL  
	)

-- ====================      Employee            =========================

CREATE TABLE Employee
	(
		EmployeeID INT NOT NULL PRIMARY KEY , 
		Employee_type VARCHAR(80) NOT NULL , 
		Designation VARCHAR(80) NOT NULL , 
		Firstname VARCHAR(80) NOT NULL ,
		Lastname VARCHAR(80) NOT NULL , 
		AddressID INT NOT NULL FOREIGN KEY (AddressID) REFERENCES Address(AddressID) , 
		ContactID INT NOT NULL FOREIGN KEY (ContactID) REFERENCEs Contact_details(ContactID) ,
		BranchID INT NOT NULL FOREIGN KEY (BranchID) REFERENCES Brances(BranchID) 

	)

--===============      Cancel_policy_charges                      ====================


CREATE TABLE Cancel_policy_charges
	(
		Cancel_policyID INT NOT NULL PRIMARY KEY ,
		Cancelation_resion VARCHAR(150) NOT NULL ,
		Cancelation_period DATETIME NOT NULL , 
		Returnable_amount INT NOT NULL 

	)

--=============       Ticket           =================


CREATE TABLE Ticket
	(
		TicketID INT NOT NULL PRIMARY KEY ,
		TicketNumber VARCHAR(100) NOT NULL ,
		PassengerID INT NOT NULL FOREIGN KEY (PassengerID) REFERENCES Passenger(passengerID) , 
		Booking_transactionID INT NOT NULL FOREIGN KEY (Booking_transactionID) REFERENCES Booking_transaction(Booking_transactionID) ,
		Cancel_policyID INT NOT NULL FOREIGN KEY (Cancel_policyID) REFERENCES Cancel_policy_charges(Cancel_policyID)
	)


