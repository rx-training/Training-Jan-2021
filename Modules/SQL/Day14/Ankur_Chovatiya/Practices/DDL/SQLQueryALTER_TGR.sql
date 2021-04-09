ALTER TRIGGER MY_FIRST_TGR
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @MY_VAR DATETIME
		SELECT @MY_VAR = MODIFIEDDATE FROM inserted 
		IF(@MY_VAR != GETDATE())
		BEGIN
			RAISERROR ('MODIFIED DATE SHOUDE BE THE CURRENT DATE HENCE , CANNOT INSERT', 10 ,1)
			ROLLBACK TRANSACTION
		END
		RETURN




		--==========================

-- DROP Trigger

DROP TRIGGER
MY_FIRST_TGR
