--=========       total_payable_amount   (PROCEDURE) ==================

CREATE PROCEDURE total_payable_amount_SP 
	@total_payable_amount MONEY OUTPUT ,
	@ticket_charge MONEY ,
	@special_req_charge MONEY ,
	@discount MONEY ,
	@extra_fare MONEY
AS
	SET NOCOUNT ON;
	SELECT @total_payable_amount = @ticket_charge + @special_req_charge + @extra_fare - @discount
GO

EXECUTE total_payable_amount_SP  4000 , 3300 , 2000 , 500 , 533



--==========   total returnable amount       (procedure)          ===============


CREATE PROCEDURE total_returnable_amount_SP
	@cancel_policyID int ,
	@total_payable_amount money , 
	@discount money ,
	@total_returnable_amount money OUTPUT 
AS
	SET NOCOUNT ON;

	DECLARE @RETURN_PRE INT
	SELECT @RETURN_PRE = (SELECT Returnable_amount FROM Cancel_policy_charges WHERE Cancel_policyID = @cancel_policyID)

	SELECT @total_returnable_amount = (@total_payable_amount + @discount)* @RETURN_PRE/100 

GO

--== =======   for invoice (view table)               ===============


CREATE VIEW INVOICE
AS
SELECT P.PassengerID ,P.First_name , p.Last_name, B.Total_amount ,f.Filght_takeoff_point , f.Flight_destination ,t.TicketID , b.Discount , b.Booking_transactionID  FROM Ticket AS T JOIN Passenger AS P 
ON T.PassengerID = P.PassengerID JOIN Booking_transaction AS B 
ON B.PassengerID = P.PassengerID JOIN Flight AS F
ON B.FlightID = F.FlightID

GO


SELECT * FROM Passenger
SELECT * FROM Ticket
SELECT * FROM Booking_transaction
SELECT * FROM Flight


--=========   flight searching (function)           ==========

CREATE FUNCTION Flight_search ( @From VARCHAR(150) , @To VARCHAR(150) , @departing_date DATE ,@returning_date DATE )
RETURNS TABLE 
AS

RETURN(
	SELECT *  FROM Flight WHERE
			Filght_takeoff_point = @From AND Flight_destination = @To AND
			CONVERT(VARCHAR(10), Take_off_Time, 111) = @departing_date AND 
			CONVERT(VARCHAR(10), Landing_Time, 111) = @returning_date
		)


SELECT * FROM Flight_search('ahmedabad' , 'delhi' , '2021/03/29' , '2021/03/29')




