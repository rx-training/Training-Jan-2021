
-------------------FIND DISTANCE BETWEEN CITIES----------------
/*--||ARGUMENTS||
		Distance => FROM CIY, TOCITY

	||TAS DONE BY PROCEDURE||
		RETURN DISTANCE BETWEEN TWO CITIES
*/	

CREATE FUNCTION Distance(@StartCity int,@EndCity int)
RETURNS float
BEGIN

	DECLARE @Location FLOAT,
			@sourceLatitude FLOAT, @sourceLongitude FLOAT, 
			@destinationLatitude FLOAT, @destinationLongitude FLOAT

			SELECT @sourceLatitude = Latitude , @sourceLongitude = Longitude FROM Cities WHERE CityID = @StartCity
			SELECT @destinationLatitude = Latitude , @destinationLongitude = Longitude FROM Cities WHERE CityID = @EndCity

    SET @Location = (SQRT(POWER(69.1 * ( @destinationLatitude - @sourceLatitude),  
					2) + POWER(69.1 * ( @sourceLongitude  
					- @destinationLongitude )  
					* COS(@destinationLatitude / 57.3), 2)))*1.60934
	RETURN @Location

END;
GO

		
GO

-------------------CALCULATE TIME FROM DISTANCE----------------
/*--||ARGUMENTS||
		CalculateTime => START TIME, DISTANCE

	||TAS DONE BY PROCEDURE||
		FROM START TIME AND DISTANCE IT WILL FIND TIME AFTER TIME AFTER DISTANCE IS TRAVEL
*/	


CREATE FUNCTION CalculateTime (@StartTime TIME ,  @Distance FLOAT)
RETURNS TIME
BEGIN
	IF @Distance != 0.0
	BEGIN
		DECLARE @Minute FLOAT,@Hour INT
	
		SET @Minute = ROUND(@Distance * 1.2,0)
		SET @Hour = @Minute/60
		SET @Minute = CONVERT(INT,@Minute)%(60*@Hour)
		SET @StartTime = dateadd(hh,@Hour,@StartTime)
		SET @StartTime = dateadd(mi,@Minute,@StartTime)
	END
	RETURN @StartTime
END
GO

SELECT dbo.CalculateTime('1:23:00',67)
GO
