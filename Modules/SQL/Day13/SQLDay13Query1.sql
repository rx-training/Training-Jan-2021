
/*
Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. 
PF is 12% of the basic salary.
*/

CREATE FUNCTION PF(@basic_salary int)  
RETURNS INT  
AS  
BEGIN  
 DECLARE @ComputePF INT  
 SET  @ComputePF= @basic_salary * 12/100;
 RETURN @ComputePF
END

/*
Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.

Monthly Earnings	Profession Tax Payable
Below Rs. 5999	        Nil
Rs. 6000 to Rs. 8999	Rs. 80/month
Rs. 9000 to Rs. 11999	Rs. 150/month
Rs 12000 and above	Rs. 200/month
*/

CREATE FUNCTION PT(@basic_salary int)
RETURNS INT
AS
BEGIN
	DECLARE @monthly_earning,@tax
	CASE
    WHEN @monthly_earning < 5999 THEN @tax=0
    WHEN @monthly_earning > 6000 AND < 8999 THEN @tax=80
    WHEN @monthly_earning > 9000 AND < 11999 THEN @tax=150
    WHEN @monthly_earning > 12000 THEN @tax=80
    RETURN @monthly_earning,@pf
END

/* Scalar function,table value function,constraint,default ,check and constraint)