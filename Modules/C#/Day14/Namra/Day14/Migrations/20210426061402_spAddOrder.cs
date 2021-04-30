using Microsoft.EntityFrameworkCore.Migrations;

namespace Day14.Migrations
{
    public partial class spAddOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
			var sp = @"CREATE PROCEDURE dbo.spOrders
					(
							@CustomerId INT,
							@ToyStr VARCHAR(50),
							@Address VARCHAR(MAX)
						)
					AS 
					BEGIN
						SET NOCOUNT ON;
						BEGIN TRY
							DECLARE @bill INT = 0;
							DECLARE @offer INT = 0; 
							IF @CustomerId IN (SELECT CustomerId FROM Customers)
							BEGIN
								DECLARE @flag int = 1;
								While @flag < (SELECT Len(@ToyStr))
								BEGIN
									IF(@flag % 2 = 1)
									BEGIN
										IF CONVERT(int,(SELECT SUBSTRING(@ToyStr, @flag, 1))) IN (SELECT ToyId FROM Toys)
										BEGIN
											SET @bill += (SELECT Price FROM Toys WHERE ToyId = CONVERT(int,(SELECT SUBSTRING(@ToyStr, @flag, 1))))
										END
										ELSE 
											RAISERROR('Toy is not found...',16,1);
									END
									SET @flag +=2;
								END
								IF @bill < 1000
									SET @offer = 7;
								ELSE IF @bill < 2000
									SET @offer = 1;
								ELSE IF @bill < 3500
									SET @offer = 2;
								ELSE IF @bill < 5000
									SET @offer = 3;
								ELSE IF @bill < 6500
									SET @offer = 4;
								ELSE IF @bill < 10000
									SET @offer = 5;
								ELSE
									SET @offer = 6;
								INSERT INTO Orders(CustomerId, Toys, Bill, offerValue, Address)
									VALUES(@CustomerId, @ToyStr, @bill, @offer, @Address);
							END
							ELSE
								RAISERROR('Customer is not found...',16,1);
		
						END TRY
						BEGIN CATCH
							PRINT ERROR_MESSAGE();
						END CATCH
						SET NOCOUNT OFF;
					END
					";
			migrationBuilder.Sql(sp);
		}
		protected override void Down(MigrationBuilder migrationBuilder)
		{

		}
	}
}
