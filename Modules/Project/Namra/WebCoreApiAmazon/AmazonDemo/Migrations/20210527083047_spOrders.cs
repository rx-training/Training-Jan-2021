using Microsoft.EntityFrameworkCore.Migrations;

namespace AmazonDemo.Migrations
{
    public partial class spOrders : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"
						CREATE PROCEDURE spOrder
						(
							@CustomerId int,
							@ProductId int, 
							@Quantity int
						)
						AS
						BEGIN
							BEGIN TRY
								IF(@CustomerId IN (SELECT UserId FROM Users))
								BEGIN
									If(@ProductId IN (SELECT ProductId FROM Products))
										BEGIN 
											IF(@Quantity <= 10)
												BEGIN
													INSERT INTO Orders(UserId, ProductId, Quantity, Bill) VALUES(@CustomerId, @ProductId, @Quantity, (SELECT ProductPrice FROM Products WHERE ProductId = @ProductId) * @Quantity);
												END
											ELSE
												RAISERROR('Product quantity should be less than 10...',16,1);
										END
									ELSE
										RAISERROR('Product is not found...',16,1);
								END
								ELSE
									RAISERROR('User is not found in record...',16,1);
							END TRY
							BEGIN CATCH
								PRINT ERROR_MESSAGE();
							END CATCH
						END";


			migrationBuilder.Sql(sp);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
			var sp = "Drop procedure spOrder";
			migrationBuilder.Sql(sp);

		}
    }
}
